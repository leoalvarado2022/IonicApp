import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationService} from '../shared/services/geolocation/geolocation.service';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import {BehaviorSubject, interval, Subscription} from 'rxjs';
import {ToastService} from '../shared/services/toast/toast.service';
import {SyncService} from '../shared/services/sync/sync.service';
import {HttpService} from '../shared/services/http/http.service';
import {TallyService} from '../modules/tallies/services/tally/tally.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit, OnDestroy {

  private syncInterval = interval(1000 * 60 * 5);
  private syncStepObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private removeTallies = false;
  private removeTalliesToRecord: Array<number> = [];

  private syncInterval$: Subscription;
  private syncStepObservable$: Subscription;

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private storeService: StoreService,
    private tallyService: TallyService,
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
        if (this.removeTallies) {
          const removed = this.storeService.removeTalliesToRecord(this.removeTalliesToRecord);
          if (removed === 0) {
            this.removeTalliesToRecord = [];
            this.removeTallies = false;
          }
        }

        this.syncData();
      }

      if (step === 1) {
        this.recordTallies();
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

  /**
   * recordTallies
   */
  private recordTallies = () => {
    const toRecord = this.storeService.getTalliesToRecord();

    if (toRecord && toRecord.length > 0) {
      this.tallyService.recordTallies(toRecord).subscribe((success: any) => {
        this.checkRecordedTallies(success.log);
        this.syncStepObservable.next(0);
      }, error => {
        this.toastService.errorToast('Ocurrio un error al sincronizar tarjas');
      });
    } else {
      this.syncStepObservable.next(0);
    }
  };

  /**
   * checkRecordedTallies
   * @param logs
   */
  private checkRecordedTallies = (logs: Array<any>) => {
    if (logs.length > 0) {
      for (const log of logs) {
        if (log['respuesta'] && log['respuesta'].toLowerCase() === 'ok') {
          this.removeTalliesToRecord.push(+log['id_parametro']);
        }
      }

      this.removeTallies = true;
    }
  };

}
