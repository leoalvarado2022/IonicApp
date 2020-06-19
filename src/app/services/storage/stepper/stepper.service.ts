import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {StoreService} from 'src/app/shared/services/store/store.service';
import {SyncService} from 'src/app/shared/services/sync/sync.service';
import {StorageSyncService} from '../storage-sync/storage-sync.service';
import {TallySyncService} from '../tally-sync/tally-sync.service';
import {TallyService} from 'src/app/modules/tallies/services/tally/tally.service';
import {ToastService} from 'src/app/shared/services/toast/toast.service';
import {NfcService} from 'src/app/shared/services/nfc/nfc.service';
import {Tally} from 'src/app/modules/tallies/tally.interface';
import {NetworkService} from 'src/app/shared/services/network/network.service';
import {DeviceSyncService} from '../device-sync/device-sync.service';
import {DealsService} from '../../../modules/tratos/services/deals/deals.service';

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

  constructor(
    private storeService: StoreService,
    private syncService: SyncService,
    private storageSyncService: StorageSyncService,
    private tallySyncService: TallySyncService,
    private tallyService: TallyService,
    private toastService: ToastService,
    private nfcService: NfcService,
    private _dealService: DealsService,
    private networkService: NetworkService,
    private _deviceSyncService: DeviceSyncService
  ) {
    this.networkService.getNetworkStatus().subscribe(status => this.isOnline = status);
  }

  /**
   * syncAll
   */
  public syncAll = async () => {
    // Sync if online and logged in
    if (this.isOnline && this.storeService.getLoginStatus()) {

      // If tallies sync
      const talliesBuilded = await this.buildTalliesArray();
      if (talliesBuilded.length) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Tarjas' });
        this.stepsArraySubject.next(this.stepsArray);
        await this.onlySyncTallies(talliesBuilded);
      }

      // If devices sync
      const devicesToRecord = await this._deviceSyncService.getDevicesToRecord();
      if (devicesToRecord.length) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Dispositivos' });
        this.stepsArraySubject.next(this.stepsArray);
        await this.onlySyncDevices(devicesToRecord);
      }

      // If deals sync
      const validDeals = await this.getValidDeals();
      if (validDeals.length) {
        this.stepsArray.push({ index: this.stepsArray.length, name: 'Grabar Tratos y Tarjas' });
        this.stepsArraySubject.next(this.stepsArray);
      }

      // Sync data
      this.stepsArray.push({index: this.stepsArray.length, name: 'Sincronizando' });
      this.stepsArraySubject.next(this.stepsArray);
      const data = await this.syncData();

      // Store Data
      this.stepsArray.push({index: this.stepsArray.length, name: 'Almacenando en memoria' });
      this.storeAllSyncData(data);

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
    return new Promise( (resolve, reject) => {
      const userData = this.storeService.getUser();
      const username = userData.username;
      const activeConnection = this.storeService.getActiveConnection();

      this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe(success => {
        resolve(success['data']);
      }, error => {
        reject(error);
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
   * recordDealsTallies
   */
  private recordDealsTallies = () => {
    this.storageSyncService.getTallyTemp().then((toRecord: any) => {
      toRecord = toRecord.filter(value => value.id === 0);

      const user = this.storeService.getUser();
      delete user.avatar;

      if (toRecord && toRecord.length > 0) {
        this._dealService.saveTalliesToRecord(toRecord, user).subscribe((success: any) => {
          this.storageSyncService.setTallyTemp([]).then( () => {
            // this.goToStep(StepNames.CleanMemory);
          });
        }, () => {
          this.toastService.errorToast('Ocurrio un error al sincronizar tratos');
          // this.goToStep(StepNames.EndStoring);
        });
      } else {
        // this.goToStep(StepNames.CleanMemory);
      }
    });
  }

  /**
   * onlySyncTallies
   */
  public onlySyncTallies = async (talliesBuilded: Array<Tally>) => {
    console.log('onlySyncTallies');
    const log = await this.syncTallies(talliesBuilded);
    this.checkRecordedTallies(log);
    await this.tallySyncService.addTalliesToSyncedTallies(this.talliesRecorded);
    await this.cleanTalliesMemory();
    this.talliesRecorded = [];
    this.talliesWithErrors = [];
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
        return talliesToRecord.map(item => {
          if (item.status === 'delete') {
            return Object.assign({}, item, {order: 1});
          }

          if (item.status === 'edit') {
            return Object.assign({}, item, {order: 2});
          }

          if (item.status === 'new') {
            return Object.assign({}, item, {order: 3});
          }

          return item;
        });
      }

      return [];
    });
  }

  /**
   * syncTallies
   */
  private syncTallies = (tallies: Array<Tally>): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.tallyService.recordTallies(tallies).subscribe((success: any) => {
        resolve(success.log);
      }, error => {
        reject(error);
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
    console.log('onlySyncDevices');
    const log = await this.syncDevices(devicesToRecord);
    this.checkRecordedDevices(log);
    await this.storageSyncService.addDevicesToSyncedDevices(devicesToRecord);
    await this.cleanDevicesMemory();
    this.devicesWithErrors = [];
    this.devicesRecorded = [];
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
      this._deviceSyncService.addDevicesWithErrors(this.devicesWithErrors),
      this._deviceSyncService.removeDevicesToRecord(this.devicesRecorded)
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
    console.log('onlySyncDevices');
    const log = await this.syncDeals(dealsToRecord);
    await this.cleanDealsMemory();
  }

  /**
   * syncDeals
   */
  private syncDeals = (dealsToRecord: Array<any>) => {
    return new Promise( (resolve, reject) => {
      const user = this.storeService.getUser();
      delete user.avatar;

      this._dealService.saveTalliesToRecord(dealsToRecord, user).subscribe((success: any) => {
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
    return this.storageSyncService.setTallyTemp([]);
  }

}
