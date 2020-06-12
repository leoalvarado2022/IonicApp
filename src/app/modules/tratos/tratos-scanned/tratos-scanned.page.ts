import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertController, ModalController, NavController, Platform} from '@ionic/angular';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {StoreService} from '../../../shared/services/store/store.service';
import {TallyInterface} from '../interfaces/tally.interface';
import * as moment from 'moment';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {Subscription} from 'rxjs';
import {DealsService} from '../services/deals/deals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tratos-scanned',
  templateUrl: './tratos-scanned.page.html',
  styleUrls: ['./tratos-scanned.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TratosScannedPage implements OnInit, OnDestroy {

  centerCost: any;
  workersSuccess = [];
  worker = '';
  devices: any;
  workers: any;
  exist: boolean = true;
  notSupported = false;
  $listener: Subscription;

  //temp
  tallyTemp = [];

  constructor(public _modalController: ModalController,
              private _storageSyncService: StorageSyncService,
              private _dealService: DealsService,
              private _alertController: AlertController,
              public _changeDetectorRef: ChangeDetectorRef,
              private _platform: Platform,
              private _route: Router,
              public _nfc: NFC,
              public _ndef: Ndef,
              public nativeAudio: NativeAudio) {
  }

  ngOnInit() {
    this.centerCost = this._dealService.getDataScanned();

    if (!this.centerCost) {
      this._route.navigate(['home-page']);
      return;
    }

    Promise.all([
      this._storageSyncService.getDevices(),
      this._storageSyncService.getWorkers()
    ]).then(data => {
      this.devices = data[0];
      this.workers = data[1];
    });

    this.nativeAudio.preloadSimple('beep', 'assets/sounds/beep.mp3').then(() => {
    }).catch((ex) => {
      console.log(ex);
    });
    this.nativeAudio.preloadSimple('error', 'assets/sounds/error.mp3').then(() => {
    }).catch((ex) => {
      console.log(ex);
    });

    this._storageSyncService.getTallyTemp().then(data => {
      if (data && data.length) {
        this.tallyTemp = data;
        this.openNFCScanner();
      }
    });
  }

  /**
   * desacativar audios y unsuscribe data de la lista
   */
  ngOnDestroy(): void {
    if (this.$listener) {
      this.$listener.unsubscribe();
    }
    this.nativeAudio.unload('beep').then(() => {
    });
    this.nativeAudio.unload('error').then(() => {
    });
  }

  /**
   * @description abrir el escaner
   */
  openNFCScanner() {
    if (this.$listener) {
      this.$listener.unsubscribe();
    }

    if (this._platform.is('desktop') || this._platform.is('mobileweb')) {
      return;
    }

    if (this._platform.is('ios')) {
      this.notSupported = true;
      return;
    }

    this.$listener =
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
        }, error => {
          console.log(error, 'error');
          this.notSupported = true;
        });
  }

  /**
   * enviar los dispositivos
   * @param id
   */
  async pullDevice(id: any) {

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
            handler: (blah) => {
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
  setInfo(id: any) {
    const device = this.devices.find(value => value.id_device === id);

    if (device) {
      const worker = this.workers.find(value => value.id === device.id_link);
      worker.device = device;
      if (worker) {
        this.worker = worker.names;
        this.exist = true;
        this.setScanned(worker);
      } else {
        this.worker = `Trabajador ${device.link} no activo`;
        this.exist = false;
      }
    } else {
      this.worker = `No existe trabajador con el dispositivo ${id}`;
      this.exist = false;
    }
    this._changeDetectorRef.detectChanges();
  }


  /**
   * @description funcion que se encarga de separar la logica del scanned
   * @param worker
   */
  setScanned(worker: any = null) {
    // console.log(worker, 'worker', this.centerCost, 'centerCost');

    if (worker !== null) {
      if (this.centerCost.deal.count) {
        this.forCount(worker);
      }

      if (this.centerCost.deal.weight) {
        this.forCount(worker);
      }

      if (this.centerCost.deal.performance) {
        this.forPerformance(worker).then();
      }
    }
  }

  /**
   * cuando es por conteo
   * @param worker
   */
  forCount(worker: any) {
    // console.log(this.devices, 'devices');
    // console.log(worker, 'worker');
    // console.log(this.centerCost, 'centerCost');
    // console.log(this.tallyTemp, 'tallyTemp');

    // calcular el rendimiento
    let performance = this.centerCost.unit_control_count;
    // si existe mas lo suma
    if (this.tallyTemp.length) {
      // filtrar por worker
      const tallyTemp = this.tallyTemp.filter(value => value.id_par_entidades_trabajador === worker.id &&
        value.id_par_centros_costos === this.centerCost.center_cost_id &&
        value.id_par_tratos_vigencias === this.centerCost.deal?.id_deal_validity);

      // console.log(tallyTemp, 'tallyTemp.filter')
      // si hay le suma solo a el
      if (tallyTemp.length) {
        performance = tallyTemp
          .map(obj => obj.rendimiento || 0)
          .reduce((sum, current) => sum + current) + this.centerCost.unit_control_count;
      }
    }

    // enviar a la lista
    this.pushPerformance(worker, performance);
    // enviar la tarja
    this.pushTally(worker);
  }

  /**
   * cuando es por rendimiento
   * @param worker
   */
  async forPerformance(worker: any) {
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
            let performance = +value.Rendimiento;

            if (performance === 0) {
              return;
            }
            let performanceTotal = 0;
            // si existe mas lo suma
            if (this.tallyTemp.length) {
              // filtrar por worker
              const tallyTemp = this.tallyTemp.filter(value => value.id_par_entidades_trabajador === worker.id &&
                value.id_par_centros_costos === this.centerCost.center_cost_id &&
                value.id_par_tratos_vigencias === this.centerCost.deal?.id_deal_validity);

              // console.log(tallyTemp, 'tallyTemp');
              // si hay le suma solo a el
              if (tallyTemp.length) {
                performanceTotal = tallyTemp
                  .map(obj => obj.rendimiento || 0)
                  .reduce((sum, current) => sum + current) + performance;
              }
            }

            // console.log('performance', performance);
            // enviar a la lista
            this.pushPerformance(worker, performanceTotal);
            // enviar la tarja
            this.pushTally(worker, performance);
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
  pushTally(worker: any, performance: number = 0) {
    let tally: TallyInterface = {};
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
    tally.id_par_entidades_usuario_creador = this.centerCost.deal?.user?.id;
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
  pushPerformance(worker: any, performance: number) {
    const list = this.workersSuccess.find(value => value.id === worker.id);

    if (list) {
      const index = this.workersSuccess.indexOf(list);
      this.workersSuccess.splice(index, 1);
    }
    this.workersSuccess.unshift({
      name: worker.names,
      count: performance,
      id: worker.id
    });
  }

  /**
   * closeModal
   */
  closeWork = async (data: any = null) => {
    await this._modalController.dismiss();
  };

  escaneoOne() {
    const id = 'ddfc95e4';
    console.log('escaneoOne', id);
    this.pullDevice(id);
  }

  escaneoTwo() {
    const id = 'ddfc50e4';
    console.log('escaneoTwo', id);
    this.pullDevice(id);
  }

  escaneoThree() {
    const id = 'ddf450e4';
    console.log('escaneoThree', id);
    this.pullDevice(id);
  }
}
