import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationService} from '../shared/services/geolocation/geolocation.service';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import {BehaviorSubject, interval, Subscription} from 'rxjs';
import {ContractsService} from '../modules/contracts/services/contracts/contracts.service';
import {ToastService} from '../shared/services/toast/toast.service';
import {SyncService} from '../shared/services/sync/sync.service';
import {HttpService} from '../shared/services/http/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit, OnDestroy {

  private syncInterval = interval(1000 * 60 * 5);
  private syncStepObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private removePreContracts = false;
  private removePreContractsToRecord: Array<number> = [];

  private syncInterval$: Subscription;
  private syncStepObservable$: Subscription;

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private storeService: StoreService,
    private contractsService: ContractsService,
    private toastService: ToastService,
    private syncService: SyncService,
    private httpService: HttpService
  ) {

  }

  ngOnInit(): void {
    this.storePushToken();

    this.syncInterval$ = this.syncInterval.subscribe(data => {
      // agregar status de online
      if (this.storeService.getLoginStatus()) {
        this.sendToRecord();
      }
    });

    this.syncStepObservable$ = this.syncStepObservable.subscribe(step => {
      console.group('syncStepObservable');
      console.log('current step: ', step);

      if (step === 0) {
        console.log('sync step');
        if (this.removePreContracts) {
          this.storeService.removePreContractsToRecord(this.removePreContractsToRecord);
          this.removePreContractsToRecord = [];
          this.removePreContracts = false;
        }
        this.syncData();
      }

      if (step === 1) {
        console.log('storePreContracts step');
        this.storePreContracts();
      }
      console.groupEnd();
    });
  }

  ngOnDestroy(): void {
    this.syncInterval$.unsubscribe();
    this.syncStepObservable$.unsubscribe();
  }

  /**
   * sendToRecord
   */
  private sendToRecord = () => {
    this.syncStepObservable.next(1);
  };

  /**
   * storePreContracts
   */
  private storePreContracts = () => {
    // Pre-Contracts Offline data
    const preContracts = this.storeService.getPreContractsToRecord();

    if (preContracts.length > 0) {
      this.contractsService.storePreContracts(preContracts).subscribe((success: any) => {
        this.checkRecordedPreContracts(success.log);
        this.syncStepObservable.next(0);
      }, error => {
        this.toastService.errorToast('Ocurrio un error al sincronizar');
      });
    } else {
      this.syncStepObservable.next(0);
    }
  };

  /**
   * checkRecordedPreContracts
   * @param logs
   */
  private checkRecordedPreContracts = (logs: Array<any>) => {
    if (logs.length > 0) {
      for (const log of logs) {
        if (log['respuesta'].toLowerCase() === 'ok') {
          this.removePreContractsToRecord.push(+log['id_parametro']);
        }
      }

      this.removePreContracts = true;
    }
  };

  /**
   * syncData
   */
  private syncData = () => {
    const userData = this.storeService.getUser();
    const username = userData.username;
    const activeConnection = this.storeService.getActiveConnection();

    this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe((success: any) => {
      this.storeService.setSyncedData(success.data);
    }, error => {
      this.httpService.errorHandler(error);
    });
  };

  /**
   * storePushToken
   */
  private storePushToken = () => {
    const user = this.storeService.getUser();
    const token = this.storeService.getPushToken();

    this.authService.savePushToken(user.id, token).subscribe(success => {
      // BIEN
    }, error => {
      // MAL
    });
  };


}
