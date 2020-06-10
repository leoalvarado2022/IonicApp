import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { SyncService } from 'src/app/shared/services/sync/sync.service';
import { StorageSyncService } from '../storage-sync/storage-sync.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { TallySyncService } from '../tally-sync/tally-sync.service';
import { TallyService } from 'src/app/modules/tallies/services/tally/tally.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { NfcService } from 'src/app/shared/services/nfc/nfc.service';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { NetworkService } from 'src/app/shared/services/network/network.service';
import { StepNames } from '../step-names';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  private stepper: BehaviorSubject<number> = new BehaviorSubject<number>(99);
  private dataSync = null;
  private isOnline: boolean;

  // Tallies
  private removeTalliesToRecordFlag = false;
  private removeTalliesToRecord: Array<number> = [];
  private talliesWithErrors: Array<any> = [];

  // Devices
  private removeDevices = false;
  private removeDevicesToRecord: Array<number> = [];
  private devicesWithErrors: Array<any> = [];

  constructor(
    private storeService: StoreService,
    private syncService: SyncService,
    private storageSyncService: StorageSyncService,
    private httpService: HttpService,
    private tallySyncService: TallySyncService,
    private tallyService: TallyService,
    private toastService: ToastService,
    private nfcService: NfcService,
    private networkService: NetworkService
  ) {
    this.networkService.getNetworkStatus().subscribe(status => this.isOnline = status);

    this.stepper.subscribe( step => {
      console.log('step', step);

      // Sync if online and logged in
      if (this.isOnline && this.storeService.getLoginStatus() ) {

        // Record Tallies Step
        if (step === StepNames.RecordTallies) {
          this.recordTallies();
        }

        // Record Devices Step
        if (step === StepNames.RecordDevices) {
          this.recordDevices();
        }

        // Clean memory
        if (step === StepNames.CleanMemory) {
          // Remove from "talliesToRecord" the tallies that were recorded successful
          this.checkIfRemoveTalliesToRecord();

          // Remove from "devices" the devices that were recorded successful
          this.checkIfRemoveDevicesToRecord();

          setTimeout(() => {
            this.goToStep(StepNames.GetSyncData);
          }, 2000);
        }

        // Get sync data
        if (step === StepNames.GetSyncData) {
          // Sync data
          this.syncData();
        }

        // Start storing data
        if (step === StepNames.StartStoring) {
          this.storeSyncData();
        }

        // Storing ends
        if (step === StepNames.EndStoring) {
          console.log('AQUI PARA EL CICLO');
        }

        // More steps over here
        // *****

      }
    });
  }

  /**
   * goToStep
   */
  private goToStep = (stepNumber: number) => {
    this.stepper.next(stepNumber);
  }

  /**
   * getStepper
   */
  public getStepper = () => {
    return this.stepper.asObservable();
  }

  /**
   * runAllSteps
   */
  public runAllSteps = () => {
    this.stepper.next(StepNames.RecordTallies);
  }

  /**
   * Gets the data from the sync endpoint
   */
  private syncData = (): void => {
    const userData = this.storeService.getUser();
    const username = userData.username;
    const activeConnection = this.storeService.getActiveConnection();

    this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe(success => {
      this.dataSync = success['data'];

      this.goToStep(StepNames.StartStoring);
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * storeSyncData
   */
  private storeSyncData =  () => {
    // OLD STORAGE
    this.storeService.setSyncedData(this.dataSync);

    // NEW STORAGE TEST
    this.storageSyncService.storeSyncedData(this.dataSync).then( () => {
      this.dataSync = null;
      this.goToStep(StepNames.EndStoring);
    });
  }

  /**
   * recordTallies
   */
  private recordTallies = (): void => {
    this.tallySyncService.getTalliesToRecord().then((talliesToRecord: Array<Tally>) => {
      const mapStatus = talliesToRecord.map(item => {
        if (item.status === 'delete') {
          return Object.assign({}, item, { order: 1});
        }

        if (item.status === 'edit') {
          return Object.assign({}, item, { order: 2});
        }

        if (item.status === 'new') {
          return Object.assign({}, item, { order: 3});
        }

        return item;
      });

      if (mapStatus && mapStatus.length > 0) {
        this.tallyService.recordTallies(mapStatus).subscribe((success: any) => {
          this.checkRecordedTallies(success.log);
          this.goToStep(StepNames.RecordDevices);
        }, () => {
          this.toastService.errorToast('Ocurrio un error al sincronizar tarjas');
        });
      } else {
        this.goToStep(StepNames.RecordDevices);
      }
    });
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
            this.removeTalliesToRecord.push(+log['id_parametro']);
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

      this.removeTalliesToRecordFlag = true;
    }
  }

  /**
   * checkIfRemoveTalliesToRecord
   */
  private checkIfRemoveTalliesToRecord  = (): void => {
    if (this.removeTalliesToRecordFlag) {
      Promise.all([
        this.tallySyncService.addTalliesWithErrors(this.talliesWithErrors),
        this.tallySyncService.removeTalliesToRecord(this.removeTalliesToRecord)
      ]).then( (result) => {
        this.talliesWithErrors = [];

        if (result[1].length === 0) {
          this.removeTalliesToRecord = [];
          this.removeTalliesToRecordFlag = false;
        }
      });
    }
  }


  /**
   * recordDevices
   */
  private recordDevices = () => {
    const toRecord = this.storeService.getDevicesToRecord();

    const user = this.storeService.getUser();
    delete user.avatar;

    if (toRecord && toRecord.length > 0) {
      this.nfcService.saveDevicesToRecord(toRecord, user).subscribe((success: any) => {
        this.checkRecordedDevices(success.log);
        this.goToStep(StepNames.CleanMemory);
      }, () => {
        this.toastService.errorToast('Ocurrio un error al sincronizar tarjas');
      });
    } else {
      this.goToStep(StepNames.CleanMemory);
    }
  }

  /**
   * checkIfRemoveDevicesToRecord
   */
  private checkIfRemoveDevicesToRecord = () => {
    if (this.removeDevices) {
      this.storeService.addDevicesWithErrors(this.devicesWithErrors);
      this.devicesWithErrors = [];

      const removed = this.storeService.removeDevicesToRecord(this.removeDevicesToRecord);
      if (removed === 0) {
        this.removeDevicesToRecord = [];
        this.removeDevices = false;
      }
    }
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
            this.removeDevicesToRecord.push(+log['id_parametro']);
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
      this.removeDevices = true;
    }
  }

}
