import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { SyncService } from 'src/app/shared/services/sync/sync.service';
import { StorageSyncService } from '../storage-sync/storage-sync.service';
import { TallySyncService } from '../tally-sync/tally-sync.service';
import { TallyService } from 'src/app/modules/tallies/services/tally/tally.service';
import { NfcService } from 'src/app/shared/services/nfc/nfc.service';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { NetworkService } from 'src/app/shared/services/network/network.service';
import { DeviceSyncService } from '../device-sync/device-sync.service';
import { DealsService } from '../../../modules/tratos/services/deals/deals.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MachineryService } from 'src/app/modules/machinery/services/machinery.service';
import { ConsumptionService } from './../../../modules/consumptions/services/consumption.service';
import { Consumption } from './../../../shared/services/store/store-interface';
import { throttle } from 'rxjs/operators';
import { OrderSyncService } from '../order-sync/order-sync.service';
import { ApplicationRegistryService } from '../../application-registry/application-registry.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  private stepsArray: Array<any> = [];
  private stepsArraySubject = new BehaviorSubject<any>([]);

  private isOnline: boolean;

  // Tallies
  private talliesRecorded: Array<number> = [];
  private talliesWithErrors: Array<any> = [];

  // Devices
  private devicesRecorded: Array<number> = [];
  private devicesWithErrors: Array<any> = [];

  private syncError = null;

  constructor(
    private storeService: StoreService,
    private syncService: SyncService,
    private storageSyncService: StorageSyncService,
    private tallySyncService: TallySyncService,
    private tallyService: TallyService,
    private nfcService: NfcService,
    private dealService: DealsService,
    private networkService: NetworkService,
    private deviceSyncService: DeviceSyncService,
    private httpService: HttpService,
    private machineryService: MachineryService,
    private consumptionService: ConsumptionService,
    private orderSyncService: OrderSyncService,
    private applicationRegistryService: ApplicationRegistryService
  ) {
    this.networkService.getNetworkStatus().subscribe(status => this.isOnline = status);
  }

  /**
   * syncAll
   */
  public syncAll = async () => {
    // Sync if online and logged in
    if (this.isOnline && this.storeService.getLoginStatus()) {
      let data = null;
      this.syncError = null;

      // If tallies sync
      const talliesBuilded = await this.buildTalliesArray();
      if (talliesBuilded.length && this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Tarjas' });
        this.stepsArraySubject.next(this.stepsArray);
        await this.onlySyncTallies(talliesBuilded);
      }

      // If devices sync
      const devicesToRecord = await this.deviceSyncService.getDevicesToRecord();
      if (devicesToRecord.length && this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Dispositivos' });
        this.stepsArraySubject.next(this.stepsArray);
        const toRecord = devicesToRecord.map(d => {
          if (d.id && !d.id_device) {
            d.id = d.id * -1;
          }
          return d;
        });
        await this.onlySyncDevices(toRecord);
      }

      // If deals sync
      const validDeals = await this.getValidDeals();
      if (validDeals.length && this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Tratos y Tarjas' });
        this.stepsArraySubject.next(this.stepsArray);
        this.onlySyncDeals(validDeals);
      }

      // If Machinery
      const validMachinery = await this.machineryService.getMachineryToRecord();
      if (validMachinery.length && this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Maquinaria' });
        this.stepsArraySubject.next(this.stepsArray);
        this.onlySyncMachinery(validMachinery);
      }

      // If Consumptions
      const validConsumptions = await this.consumptionService.getConsumptionsToRecord();
      if (validConsumptions.length && this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Consumos' });
        this.stepsArraySubject.next(this.stepsArray);
        this.onlySyncConsumptions(validConsumptions);
      }

      // If Applications
      const validAplications = await this.orderSyncService.getApplicationsPendingToSave();
      if (validAplications.length && this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Registros de Aplicación' });
        this.stepsArraySubject.next(this.stepsArray);
        this.onlySyncApplications(validAplications);
      }

      // Sync data
      if (this.syncError === null) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Sincronizando' });
        this.stepsArraySubject.next(this.stepsArray);
        data = await this.syncData();

        if (data instanceof HttpErrorResponse) {
          this.httpService.errorHandler(data);
          data = null;
          this.syncError = true;
        }
      }

      if (this.syncError === null) {
        // Store Data
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Almacenando en memoria' });
        this.storeAllSyncData(data);
      }

      // Terminado
      setTimeout(() => {
        this.stepsArray = [];
        this.stepsArraySubject.next([]);
      }, 1000);
    }
  }

  /**
   * syncData
   */
  private syncData = (): Promise<any> => {
    return new Promise((resolve) => {
      const userData = this.storeService.getUser();
      const username = userData.username;
      const activeConnection = this.storeService.getActiveConnection();

      this.syncService.syncData(username, activeConnection.superuser ? 1 : 0)
        .pipe(
          throttle(event => interval(5000))
        ).subscribe((success: any) => {
          resolve(success['data']);
        }, error => {
          resolve(error);
        });
    });
  }

  /**
   * storeAllSyncData
   */
  private storeAllSyncData = (data: any): Promise<any> => {
    // OLD STORAGE
    this.storeService.setSyncedData(data);

    // NEW STORAGE TEST
    return this.storageSyncService.storeAllSyncedData(data);
  }

  /**
   * getStepper
   */
  public getStepper = () => {
    return this.stepsArraySubject.asObservable();
  }

  /**
   * onlySyncTallies
   */
  public onlySyncTallies = async (talliesBuilded: Array<Tally>) => {
    const log = await this.syncTallies(talliesBuilded);

    if (log instanceof HttpErrorResponse) {
      this.httpService.errorHandler(log);
      this.syncError = true;
    } else {
      this.checkRecordedTallies(log);
      await this.tallySyncService.addTalliesToSyncedTallies(this.talliesRecorded);
      await this.cleanTalliesMemory();
      this.talliesRecorded = [];
      this.talliesWithErrors = [];
    }
  }

  /**
   * checkRecordedTallies
   * @param logs
   */
  private checkRecordedTallies = (logs: Array<any>): void => {
    if (logs.length > 0) {
      for (const log of logs) {
        if (log.hasOwnProperty('respuesta')) {
          if (log['respuesta'].toLowerCase() === 'ok') {
            this.talliesRecorded.push(+log['id_parametro']);
          } else {
            const checkDuplicity = this.talliesWithErrors.find(item => item.id === +log['id_parametro']);
            if (!checkDuplicity) {
              this.talliesWithErrors.push({
                id: +log['id_parametro'],
                response: log['respuesta']
              });
            }
          }
        }
      }
    }
  }

  /**
   * buildTalliesArray
   */
  private buildTalliesArray = (): Promise<any> => {
    return this.tallySyncService.getTalliesToRecord().then((talliesToRecord: Array<Tally>) => {
      if (talliesToRecord) {
        const tmpArray = talliesToRecord.map(item => {
          let validity = 0;
          const worker = this.storeService.getWorkers().find(w => w.id === item.workerId);

          if (worker) {
            const start = moment(worker?.startDate).toISOString();
            const end = moment(worker?.endDate).toISOString();

            if (worker.validity > 0 && moment(item.date).isBetween(start, end)) {
              validity = worker.validity;
            }
          }

          if (item.status === 'delete') {
            return Object.assign({}, item, { validity, order: 1 });
          }

          if (item.status === 'edit') {
            return Object.assign({}, item, { validity, order: 2 });
          }

          if (item.status === 'new') {
            return Object.assign({}, item, { validity, order: 3 });
          }

          return Object.assign({}, item, { validity });
        });

        return tmpArray.filter(item => {
          const worker = this.storeService.getWorkers().find(w => w.id === item.workerId);
          return worker?.validity > 0;
        });
      }

      return [];
    });
    // return this.tallySyncService.getTalliesToRecord().then((talliesToRecord: Array<Tally>) => {
    //   if (talliesToRecord) {
    //     return talliesToRecord.map(item => {
    //       if (item.status === 'delete') {
    //         return Object.assign({}, item, { order: 1 });
    //       }
    //
    //       if (item.status === 'edit') {
    //         return Object.assign({}, item, { order: 2 });
    //       }
    //
    //       if (item.status === 'new') {
    //         return Object.assign({}, item, { order: 3 });
    //       }
    //
    //       return item;
    //     });
    //   }
    //
    //   return [];
    // });
  }

  /**
   * syncTallies
   */
  private syncTallies = (tallies: Array<Tally>): Promise<any> => {
    return new Promise((resolve) => {
      this.tallyService.recordTallies(tallies).subscribe((success: any) => {
        resolve(success.log);
      }, error => {
        resolve(error);
      });
    });
  }

  /**
   * cleanTalliesMemory
   */
  private cleanTalliesMemory = (): Promise<any> => {
    return Promise.all([
      this.tallySyncService.addTalliesWithErrors(this.talliesWithErrors),
      this.tallySyncService.removeTalliesToRecord(this.talliesRecorded)
    ]);
  }


  /**
   * onlySyncDevices
   */
  public onlySyncDevices = async (devicesToRecord: Array<any>) => {
    const log = await this.syncDevices(devicesToRecord);

    if (log instanceof HttpErrorResponse) {
      this.httpService.errorHandler(log);
      this.syncError = true;
    } else {
      this.checkRecordedDevices(log);
      await this.storageSyncService.addDevicesToSyncedDevices(devicesToRecord);
      await this.cleanDevicesMemory();
      this.devicesWithErrors = [];
      this.devicesRecorded = [];
    }
  }

  /**
   * syncDevices
   */
  private syncDevices = (devicesToRecord: Array<any>): Promise<any> => {
    return new Promise((resolve, reject) => {
      const user = this.storeService.getUser();
      delete user.avatar;

      this.nfcService.saveDevicesToRecord(devicesToRecord, user).subscribe((success: any) => {
        resolve(success.log);
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * checkRecordedTallies
   * @param logs
   */
  private checkRecordedDevices = (logs: Array<any>) => {
    if (logs.length > 0) {
      for (const log of logs) {
        if (log.hasOwnProperty('respuesta')) {
          if (log['respuesta'].toLowerCase() === 'ok') {
            this.devicesRecorded.push(+log['id_parametro']);
          } else {
            const checkDuplicity = this.devicesWithErrors.find(item => item.id === +log['id_parametro']);
            if (!checkDuplicity) {
              this.devicesWithErrors.push({
                id: +log['id_parametro'],
                response: log['respuesta']
              });
            }
          }
        }
      }
    }
  }

  /**
   * cleanDevicesMemory
   */
  private cleanDevicesMemory = (): Promise<any> => {
    return Promise.all([
      this.deviceSyncService.addDevicesWithErrors(this.devicesWithErrors),
      this.deviceSyncService.removeDevicesToRecord(this.devicesRecorded)
    ]);
  }

  /**
   * getValidDeals
   */
  private getValidDeals = (): Promise<Array<any>> => {
    return this.storageSyncService.getTallyTemp().then((toRecord: Array<any>) => {
      if (toRecord) {
        return toRecord.filter(value => value.id === 0);

      }

      return [];
    });
  }

  /**
   * onlySyncDeals
   */
  public onlySyncDeals = async (dealsToRecord: Array<any>) => {
    const log = await this.syncDeals(dealsToRecord);

    if (log instanceof HttpErrorResponse) {
      this.httpService.errorHandler(log);
      this.syncError = true;
    } else {
      await this.cleanDealsMemory();
    }
  }

  /**
   * onlySyncMachinery
   */
  public onlySyncMachinery = async (machineryToRecord: Array<any>) => {
    const activeCompany = this.storeService.getActiveCompany();
    const user = {
      id: activeCompany.user
    };

    this.machineryService.syncMachinery(machineryToRecord, user).subscribe(success => {
      this.machineryService.clearMachinery();
    }, error => {
      this.httpService.errorHandler(error);
      this.syncError = true;
    });
  }

  /**
   * syncDeals
   */
  private syncDeals = (dealsToRecord: Array<any>) => {
    return new Promise((resolve, reject) => {
      const user = this.storeService.getUser();
      delete user.avatar;

      this.dealService.saveTalliesToRecord(dealsToRecord.filter(d => d.validity > 0), user).subscribe((success: any) => {
        resolve(true);
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * cleanDealsMemory
   */
  private cleanDealsMemory = () => {
    this.storageSyncService.getTallyTemp().then(tallies => {
      if (tallies) {
        return this.storageSyncService.setTallyTemp(tallies.filter(t => t.validity === 0));
      }
      return this.storageSyncService.setTallyTemp([]);
    });
  }

  /**
   * onlySyncREM
   */
  public onlySyncREM = async () => {
    // SYNC
    this.stepsArray.push({ index: this.stepsArray.length, name: 'Sincronizando' });
    this.stepsArraySubject.next(this.stepsArray);
    const data = await this.syncData();

    // STORE
    this.stepsArray.push({ index: this.stepsArray.length, name: 'Almacenando en memoria' });
    await this.storageSyncService.storeRemSyncData(data);

    // Terminado
    setTimeout(() => {
      // LISTO
      this.stepsArray = [];
      this.stepsArraySubject.next([]);
    }, 1000);
  }


  /**
   * onlySyncPreContracts
   */
  public onlySyncPreContracts = async () => {
    // SYNC
    this.stepsArray.push({ index: this.stepsArray.length, name: 'Sincronizando' });
    this.stepsArraySubject.next(this.stepsArray);
    const data = await this.syncData();

    // STORE
    this.stepsArray.push({ index: this.stepsArray.length, name: 'Almacenando en memoria' });
    await this.storageSyncService.storePreContractsSyncData(data);

    // Terminado
    setTimeout(() => {
      // LISTO
      this.stepsArray = [];
      this.stepsArraySubject.next([]);
    }, 1000);
  }

  /**
   * onlySyncConsumptions
   */
  public onlySyncConsumptions = async (consumptionsToRecord: Array<Consumption>) => {
    const activeCompany = this.storeService.getActiveCompany();
    const user = {
      id: activeCompany.user
    };

    this.consumptionService.syncConsumptions(consumptionsToRecord, user).subscribe(success => {
      this.consumptionService.clearConsumptions();
    }, error => {
      this.httpService.errorHandler(error);
      this.syncError = true;
    });
  }

  /**
   * onlySyncApplications
   * @param applications
   */
  public onlySyncApplications = async (applications: Array<any> = []) => {
    const activeCompany = this.storeService.getActiveCompany();

    for (let index = 0; index < applications.length; index++) {
      const element = applications[index];

      const application = Object.assign({}, element[0], {
        humidity: element[2]["humidity"],
        wind: element[2]["wind"],
        temperature: element[2]["temperature"],
        totalTime: element[3]["time"],
        startDate: element[3]["startDate"],
        endDate: element[3]["endDate"],
      });

      this.applicationRegistryService.storeApplication(application, element[4], element[1], activeCompany.user).subscribe(success => {
        this.orderSyncService.removeTempApplication(application.tempId);
      }, error => {
        this.httpService.errorHandler(error);
        this.syncError = true;
      });
    }
  }

}
