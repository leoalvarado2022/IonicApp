import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import {BehaviorSubject, interval, Subject} from 'rxjs';
import {ToastService} from '../shared/services/toast/toast.service';
import {SyncService} from '../shared/services/sync/sync.service';
import {HttpService} from '../shared/services/http/http.service';
import {TallyService} from '../modules/tallies/services/tally/tally.service';
import {NfcService} from '../shared/services/nfc/nfc.service';
import {environment} from 'src/environments/environment';
import { ManualSyncService } from '../shared/services/manual-sync/manual-sync.service';
import { StorageSyncService } from '../services/storage/storage-sync/storage-sync.service';
import { TallySyncService } from '../services/storage/tally-sync/tally-sync.service';
import { Tally } from '../modules/tallies/tally.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit, OnDestroy {

  public isLoading = false;

  // Interval & Stepper
  private syncInterval = interval(1000 * 60 * environment.syncTimerMinutes);
  private syncStepObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Tallies
  private removeTalliesToRecordFlag = false;
  private removeTalliesToRecord: Array<number> = [];
  private talliesWithErrors: Array<any> = [];

  // Devices
  private removeDevices = false;
  private removeDevicesToRecord: Array<number> = [];
  private devicesWithErrors: Array<any> = [];

  // Unsubscribers
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private tallyService: TallyService,
    private toastService: ToastService,
    private syncService: SyncService,
    private httpService: HttpService,
    private nfcService: NfcService,
    private manualSyncService: ManualSyncService,
    private storageSyncService: StorageSyncService,
    private tallySyncService: TallySyncService,
  ) {

  }

  ngOnInit(): void {
    console.log('home-page');

    // Store push token
    this.storePushToken();

    // Manual sync observable
    this.startManualSyncObservable();

    // Sync timer observable
    this.startSyncIntervalObservable();

    // Sync Stepper Observable
    this.startSyncStepperObservable();

    // Storage Sync Observable
    this.storageChangeObservable();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  /**
   * storePushToken
   */
  private storePushToken = (): void => {
    const user = this.storeService.getUser();
    const token = this.storeService.getPushToken();

    this.authService.savePushToken(user.id, token).subscribe(() => {
      // BIEN
    }, () => {
      // MAL
    });
  }

  /**
   * startManualSyncObservable
   */
  private startManualSyncObservable = () => {
    console.log('startManualSyncObservable');
    this.manualSyncService.eventSubscription()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(status => {
      console.log('startManualSyncObservable status', status);
      if (status && this.storeService.getLoginStatus()) {
        this.sendToRecord();
      }
    });
  }

  /**
   * startSyncIntervalObservable
   */
  private startSyncIntervalObservable = () => {
    console.log('startSyncIntervalObservable');
    this.syncInterval
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(() => {
      if (this.storeService.getLoginStatus()) {
        this.sendToRecord();
      }
    });
  }

  /**
   * startSyncStepperObservable
   */
  private startSyncStepperObservable = () => {
    console.log('startSyncStepperObservable');
    this.syncStepObservable.subscribe(step => {
      console.log('current step: ', step);

      if (step === 0) {
        // Remove from "talliesToRecord" the tallies that were recorded successful
        this.checkIfRemoveTalliesToRecord();

        // Remove from "devices" the devices that were recorded successful
        this.checkIfRemoveDevicesToRecord();

        // Sync data
        this.syncData();
      }

      // Sync step 1
      if (step === 1) {
        this.recordTallies();
      }

      // Sync step 2
      if (step === 2) {
        this.recordDevices();
      }
    });
  }

  /**
   * storageChangeObservable
   */
  private storageChangeObservable = () => {
    console.log('storageChangeObservable');
    this.storageSyncService.syncChangedSubscribrer()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(status => {
      console.log('storageChangeObservable status', status);
      if (status) {
        this.isLoading = false;
      }
    });
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
   * syncData
   */
  private syncData = (): void => {
    const userData = this.storeService.getUser();
    const username = userData.username;
    const activeConnection = this.storeService.getActiveConnection();

    this.isLoading = true;
    this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe((success: any) => {
      this.storeService.setSyncedData(success.data);

      // NEW STORAGE TEST
      this.storageSyncService.storeSyncedData(success.data);
    }, error => {
      this.isLoading = false;
      this.httpService.errorHandler(error);
    });
  }

  /**
   * sendToRecord
   */
  private sendToRecord = (): void => {
    this.syncStepObservable.next(1);
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
          this.syncStepObservable.next(2);
        }, () => {
          this.toastService.errorToast('Ocurrio un error al sincronizar tarjas');
        });
      } else {
        this.syncStepObservable.next(2);
      }
    });
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
        this.syncStepObservable.next(0);
      }, () => {
        this.toastService.errorToast('Ocurrio un error al sincronizar tarjas');
      });
    } else {
      this.syncStepObservable.next(0);
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
