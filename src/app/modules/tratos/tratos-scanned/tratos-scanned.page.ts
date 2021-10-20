import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { StorageSyncService } from '../../../services/storage/storage-sync/storage-sync.service';
import { TallyInterface } from '../interfaces/tally.interface';
import * as moment from 'moment';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Subscription, Subject } from 'rxjs';
import { DealsService } from '../services/deals/deals.service';
import { Router } from '@angular/router';
import { BluetoothService } from 'src/app/services/bluetooth/bluetooth.service';
import { takeUntil } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
@Component({
  selector: 'app-tratos-scanned',
  templateUrl: './tratos-scanned.page.html',
  styleUrls: ['./tratos-scanned.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    BluetoothService
  ],
})
export class TratosScannedPage implements OnInit, OnDestroy {

  public centerCost: any;
  public workersSuccess = [];
  public worker = '';
  private devices: any;
  private workers: any;
  public exist = true;
  public notSupported = false;
  private listener$: Subscription;
  public currentIdx = 0;

  // temp
  public tallyTemp = [];
  private syncedTallies: Array<any> = [];
  public previousPerformance: Array<any> = [];

  public isLoading = false;
  public isCordova = false;
  public isDeviceConnected: boolean;
  public showWeight: any;
  public lastWeight = 0;
  public weightsBuffer: Array<number> = [];
  public validWeight = false;
  private unsubscriber = new Subject();

  constructor(
    public _modalController: ModalController,
    private _storageSyncService: StorageSyncService,
    private _dealService: DealsService,
    private _alertController: AlertController,
    public _changeDetectorRef: ChangeDetectorRef,
    private _platform: Platform,
    private _route: Router,
    public _nfc: NFC,
    public _ndef: Ndef,
    public nativeAudio: NativeAudio,
    private bluetoothService: BluetoothService,
    private toastService: ToastService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.loadData();

    this._platform.ready().then(() => {
      this.isCordova = this._platform.is('cordova');

      if (this.isCordova) {
        Promise.all([
          this.nativeAudio.preloadSimple('beep', 'assets/sounds/beep.mp3'),
          this.nativeAudio.preloadSimple('error', 'assets/sounds/error.mp3')
        ]).then();
      }

      // ios no deja usar NFC
      if (this._platform.is('android')) {

        // NFC Scanner
        this.openNFCScanner();

        if (this.centerCost.deal.weight) {
          // Connect to live weight
          this.getLiveWeight();

          // Connect to live weight
          /*
          this.bluetoothService.getLiveWeight().pipe(
            takeUntil(this.unsubscriber)
          ).subscribe((value: string) => {
            if (this.weightsBuffer.length % 5 === 0) {
              this.weightsBuffer.shift();
            }

            const processWeight = this.bluetoothService.processWeight(value);
            this.weightsBuffer.push(processWeight);
            this.lastWeight = processWeight;
            this.validWeight = this.isValidWeight(processWeight);
          });
          */

          // getConnectionStatus
          this.bluetoothService.getConnectionStatus().pipe(
            takeUntil(this.unsubscriber)
          ).subscribe((status: boolean) => {
            this.isDeviceConnected = status;
          });
        }
      } else {
        this.notSupported = true;
      }
    });

    // this.loadData();
  }

  /**
   * desacativar audios y unsuscribe data de la lista
   */
  ngOnDestroy(): void {
    if (this.isCordova) {
      Promise.all([
        this.nativeAudio.unload('beep'),
        this.nativeAudio.unload('error')
      ]).then();
    }

    if (this.listener$) {
      this.listener$.unsubscribe();
    }
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.isLoading = true;
    this.centerCost = null;

    Promise.all([
      this._dealService.getActiveDeal(),
      this._storageSyncService.getDevices(),
      this._storageSyncService.getWorkers(),
      this._storageSyncService.getTallyTemp(),
      this._storageSyncService.getTallies()
    ]).then(data => {
      this.centerCost = data[0];
      this.devices = data[1];
      this.workers = this.filterWorkersByValidity(this.centerCost.currentDate, data[2]);
      this.tallyTemp = data[3];
      this.syncedTallies = data[4];

      this.workers.forEach(worker => {

        // Process tallies on memory
        const tempTallies = this.getWorkerTempTallies(worker);
        const tempPerformance = this.getTempTalliesPerformance(tempTallies);

        // Process tallies on sync
        const syncedTallies = this.getWorkerSyncedTallies(worker);
        const syncedPerformance = this.getSyncedTalliesPerformance(syncedTallies);

        // Total Performance
        const total = tempPerformance + syncedPerformance;

        // If worker has tallies
        if (tempTallies.length || syncedTallies.length) {
          // Add
          this.addPreviousPerformance(worker, total);
        }
      });

      this.isLoading = false;

      this._changeDetectorRef.detectChanges();
    });
  }

  /**
   * @description abrir el escaner
   */
  public openNFCScanner = () => {
    if (this.listener$) {
      this.listener$.unsubscribe();
    }

    if (this._platform.is('desktop') || this._platform.is('mobileweb')) {
      return;
    }

    if (this._platform.is('ios')) {
      this.notSupported = true;
      return;
    }

    this.listener$ =
      this._nfc
        .addTagDiscoveredListener(success => console.log(success, 'success'), onFailure => {
          if (onFailure === 'NFC_DISABLED') {
            this.notSupported = true;
          }
          console.log(onFailure, 'onFailure');
        })
        .subscribe((event: any) => {
          // conseguir el id del tag
          const id = this._nfc.bytesToHexString(event.tag.id);
          // guardar y transformar data para guardar
          this.pullDevice(id).then();

          if (this.centerCost.deal.weight) {
            // Comprobar si hay blueetooth Conectado
            if (!this.isDeviceConnected) {
              this.toastService.warningToast('No hay dispositivo conectado', 2000, 'bottom');
            }
          }
        }, error => {
          console.log(error, 'error');
          this.notSupported = true;
        });
  }

  /**
   * enviar los dispositivos
   * @param id
   */
  public pullDevice = async (id: any) => {
    if (!this.centerCost) {
      this._route.navigate(['home-page']);
      return;
    }

    if (this.centerCost.automatic) {
      this.setInfo(id);
    } else {
      const alert = await this._alertController.create({
        header: 'Desea continuar con la lectura?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              // console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Sí',
            handler: () => {
              this.setInfo(id);
            }
          }
        ]
      });

      await alert.present();
    }
  }

  /**
   * @description agregar informacion para el escaneo
   */
  public setInfo = (id: number) => {
    const device = this.devices.find(value => value.id_device === id);

    console.log('device', device);

    if (device) {
      const worker = this.workers.find(value => value.id === device.id_link);

      console.log('worker', worker);

      if (worker) {
        worker.device = device;
        this.worker = worker.name;
        this.exist = true;
        this.setScanned(worker);
      } else {
        this.worker = `Trabajador ${device.link} no activo`;
        this.exist = false;
      }
    } else {
      // this.worker = `No existe trabajador con el dispositivo ${id}`;
      this.worker = `El trabajador no pertenece a su cuadrilla`;
      this.exist = false;
    }

    this._changeDetectorRef.detectChanges();
  }


  /**
   * @description funcion que se encarga de separar la logica del scanned
   * @param worker
   */
  public setScanned = (worker: any = null) => {
    if (worker !== null) {
      if (this.centerCost.deal.count) {
        this.forCount(worker);
      }

      if (this.centerCost.deal.performance) {
        this.forPerformance(worker).then();
      }

      if (this.centerCost.deal.weight) {
        this.forWeight(worker);
      }
    }
  }

  /**
   * cuando es por conteo
   * @param worker
   */
  private forCount = (worker: any) => {
    // Process tallies on memory
    const tempTallies = this.getWorkerTempTallies(worker);
    const tempPerformance = this.getTempTalliesPerformance(tempTallies) + this.centerCost.unit_control_count;

    // Process tallies on sync
    const syncedTallies = this.getWorkerSyncedTallies(worker);
    const syncedPerformance = this.getSyncedTalliesPerformance(syncedTallies);

    // Total Performance
    const performance = tempPerformance + syncedPerformance;

    // enviar a la lista
    this.pushPerformance(worker, performance);

    // enviar la tarja
    this.pushTally(worker);

    this._changeDetectorRef.detectChanges();
  }

  /**
   * forWeight
   * @param worker
   */
  private forWeight = (worker: any) => {
    // Comprobar si hay blueetooth Conectado
    if (this.isDeviceConnected) {
      const tempTallies = this.getWorkerTempTallies(worker);
      const tempPerformance = this.getTempTalliesPerformance(tempTallies);

      // Process tallies on sync
      const syncedTallies = this.getWorkerSyncedTallies(worker);
      const syncedPerformance = this.getSyncedTalliesPerformance(syncedTallies);

      if (this.validWeight && this.lastWeight !== null) {
        // Total Performance
        const performance = tempPerformance + syncedPerformance + this.lastWeight;

        // enviar a la lista
        this.pushWeight(worker, performance, this.lastWeight);

        // enviar la tarja
        this.pushTally(worker, this.lastWeight);

        this._changeDetectorRef.detectChanges();
      }
    }
  }

  /**
   * pushWeight
   * @param worker
   * @param performance
   */
  public pushWeight = (worker: any, performance: number, lastWeight: number) => {
    const findIndex = this.workersSuccess.findIndex(value => value.id === worker.id);

    if (findIndex > -1) {
      this.workersSuccess[findIndex] = Object.assign({}, this.workersSuccess[findIndex], {
        count: performance,
        lastWeight
      });
    } else {
      this.workersSuccess.unshift({
        name: worker.name,
        count: performance,
        id: worker.id,
        lastWeight
      });
    }

    this._changeDetectorRef.detectChanges();
  }

  /**
   * cuando es por rendimiento
   * @param worker
   */
  public forPerformance = async (worker: any) => {
    const alert = await this._alertController.create({
      header: 'Ingrese Rendimiento',
      backdropDismiss: false,
      inputs: [
        {
          name: 'Rendimiento',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (value) => {
            // calcular el rendimiento
            const performance = +value['Rendimiento'];

            if (performance === 0) {
              return;
            }

            // Process tallies on memory
            const tempTallies = this.getWorkerTempTallies(worker);
            const tempPerformance = this.getTempTalliesPerformance(tempTallies) + performance;

            // Process tallies on sync
            const syncedTallies = this.getWorkerSyncedTallies(worker);
            const syncedPerformance = this.getSyncedTalliesPerformance(syncedTallies);

            // Total Performance
            const performanceTotal = tempPerformance + syncedPerformance;

            // enviar a la lista
            this.pushPerformance(worker, performanceTotal);

            // enviar la tarja
            this.pushTally(worker, performance);

            this._changeDetectorRef.detectChanges();
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * @description guardar registro de las pulcereadas
   * @param worker
   */
  public pushTally = (worker: any, performance: number = 0) => {
    const activeCompany = this.storeService.getActiveCompany();

    const tally: TallyInterface = {};
    tally.id = 0;
    tally.fecha = moment().utc().format('YYYY-MM-DD');
    tally.id_par_entidades_trabajador = worker.id;
    tally.id_par_centros_costos = this.centerCost.center_cost_id;
    tally.id_par_labores = this.centerCost.deal?.id_labor;
    tally.jornada_trabajo = 1;
    tally.hora_extra = 0;
    tally.rendimiento = performance === 0 ? this.centerCost.unit_control_count : performance;
    tally.id_rem_contratos_det = worker.validity;
    tally.id_par_bonos_vigencias = 0;
    tally.id_par_tratos_vigencias = this.centerCost.deal?.id_deal_validity;
    tally.notas = '';
    tally.id_par_entidades_usuario_creador = activeCompany.user;
    tally.id_dispositivo = worker.device?.id_device;
    tally.fecha_lectura_dispositivo = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    tally.latitud = 0;
    tally.longitud = 0;
    this.tallyTemp.push(tally);

    this._storageSyncService.setTallyTemp(this.tallyTemp).then();
  }

  /**
   * @description se encarga de mostrar los resultados de la suma por trabajadores
   * @param worker
   * @param performance
   */
  public pushPerformance = (worker: any, performance: number) => {
    const findIndex = this.workersSuccess.findIndex(value => value.id === worker.id);

    if (findIndex > -1) {
      this.currentIdx = findIndex;
      this.workersSuccess[findIndex] = Object.assign({}, this.workersSuccess[findIndex], {
        count: performance
      });
    } else {
      this.currentIdx = 0;
      this.workersSuccess.unshift({
        name: worker.name,
        count: performance,
        id: worker.id
      });
    }

    this._changeDetectorRef.detectChanges();
  }

  /**
   * closeModal
   */
  public closeWork = async () => {
    await this._modalController.dismiss();
  }

  public escaneoOne = () => {
    const id = 'ddfc95e4';
    console.log('escaneoOne', id);
    this.pullDevice(id);
  }

  public escaneoTwo = () => {
    const id = 'ddfc50e4';
    console.log('escaneoTwo', id);
    this.pullDevice(id);
  }

  public escaneoThree = () => {
    const id = 'ddf450e4';
    console.log('escaneoThree', id);
    this.pullDevice(id);
  }

  /**
   * filterWorkersByValidity
   * @param date
   * @param workers
   */
  private filterWorkersByValidity = (date: string, workers: Array<any>): Array<any> => {
    return workers.filter(worker => {

      const startDate = moment.utc(worker.startDate);
      const endDate = moment.utc(worker.endDate);

      return moment(date).isBetween(startDate, endDate);
    });
  }

  /**
   * addPreviousPerformance
   * @param worker
   * @param performance
   */
  private addPreviousPerformance = (worker: any, performance: number) => {
    const findIndex = this.workersSuccess.findIndex(item => item.id === worker.id);

    if (findIndex > -1) {
      const currentPerformance = this.workersSuccess[findIndex].count;
      this.workersSuccess[findIndex] = Object.assign({}, this.workersSuccess[findIndex], {
        count: currentPerformance + performance
      });
    } else {
      this.workersSuccess.unshift({
        name: worker.name,
        count: performance,
        id: worker.id
      });
    }
  }

  /**
   * getWorkerTempTallies
   * @param worker
   */
  private getWorkerTempTallies = (worker: any): Array<any> => {
    return this.tallyTemp.filter(item => {
      return item.id_par_entidades_trabajador === worker.id &&
        item.id_par_centros_costos === this.centerCost.center_cost_id &&
        item.id_par_tratos_vigencias === this.centerCost.deal?.id_deal_validity &&
        item.fecha === this.centerCost.currentDate;
    });
  }

  /**
   * getWorkerSyncedTallies
   * @param worker
   */
  private getWorkerSyncedTallies = (worker: any) => {
    return this.syncedTallies.filter(item => {
      const splitDate = item.date.split('T')[0];

      return item.workerId === worker.id &&
        item.costCenterId === this.centerCost.center_cost_id &&
        item.dealValidity === this.centerCost.deal?.id_deal_validity &&
        splitDate === this.centerCost.currentDate;
    });
  }

  /**
   * getTempTalliesPerformance
   * @param tempTallies
   */
  private getTempTalliesPerformance = (tempTallies: Array<any>): number => {
    if (tempTallies.length > 0) {
      return tempTallies.map(obj => obj.rendimiento || 0).reduce((sum, current) => sum + current);
    }

    return 0;
  }

  /**
   * getSyncedTalliesPerformance
   * @param syncedTallies
   */
  private getSyncedTalliesPerformance = (syncedTallies: Array<any>): number => {
    if (syncedTallies.length > 0) {
      return syncedTallies.map(obj => obj.performance || 0).reduce((sum, current) => sum + current);
    }

    return 0;
  }

  /**
   * showFormattedWeight
   * @param value
   */
  public showFormattedWeight = (value: string): string => {
    if (value) {
      return this.bluetoothService.showFormattedWeight(value);
    }

    return '';
  }

  /**
   * getLiveWeight
   */
  public getLiveWeight = () => {
    // this.showWeight = this.bluetoothService.getLiveWeight();
  }

  /**
   * isValidWeight
   */
  private isValidWeight = (value: number): boolean => {
    if (this.weightsBuffer.length === 5) {
      return this.weightsBuffer.every(val => val === value);
    }

    return false;
  }

  /**
   * showAlert
   */
  public showAlert = (): void => {
    this.toastService.errorToast("Dispositivo no es compatible con NFC", 2000, 'bottom');
  }

}
