import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationService} from '../shared/services/geolocation/geolocation.service';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import {forkJoin, interval, Subscription} from 'rxjs';
import {ContractsService} from '../modules/contracts/services/contracts/contracts.service';
import {ToastService} from '../shared/services/toast/toast.service';
import {SyncService} from '../shared/services/sync/sync.service';
import {HttpService} from '../shared/services/http/http.service';
import {LoaderService} from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit, OnDestroy {

  private syncInterval = interval(1000 * 60 * 5);
  private syncInterval$: Subscription;

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private storeService: StoreService,
    private contractsService: ContractsService,
    private toastService: ToastService,
    private syncService: SyncService,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit(): void {
    this.storePushToken();
    this.syncData();

    this.syncInterval$ = this.syncInterval.subscribe(data => {
      if (this.storeService.getLoginStatus()) {
        this.sendToRecord();
      }
    });
  }

  ngOnDestroy(): void {
    this.syncInterval$.unsubscribe();
  }

  /**
   * sendToRecord
   */
  private sendToRecord = () => {
    // Global Object
    const source = {};

    // Pre-Contracts Offline data
    const preContracts = this.storeService.getPreContractsToRecord();
    if (preContracts.length > 0) {
      source['storeService'] = this.contractsService.storePreContracts(preContracts);
    }

    // Send to save & sync
    if (Object.keys(source).length > 0) {
      this.loaderService.startLoader('Guardando datos offline');
      forkJoin(source).subscribe(success => {
        this.toastService.successToast('Se guardaron los datos correctamente');

        // CLEAR OFFLINE PRECONTRACTS
        this.storeService.clearPreContractsToRecord();

        // SYNC AGAIN
        this.syncData();
        this.loaderService.stopLoader();
      }, error => {
        this.loaderService.stopLoader();
        this.toastService.errorToast('Ocurrio un error al sincronizar');
      });
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
    }, async error => {
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
