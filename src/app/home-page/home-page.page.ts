import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationService} from '../shared/services/geolocation/geolocation.service';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import {NetworkService} from '../shared/services/network/network.service';
import {forkJoin, Subscription} from 'rxjs';
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

  private network$: Subscription;

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private storeService: StoreService,
    private networkService: NetworkService,
    private contractsService: ContractsService,
    private toastService: ToastService,
    private syncService: SyncService,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit(): void {
    this.networkService.getNetworkStatus().subscribe(status => {
      console.log('HomePagePage getNetworkStatus');
      if (status && this.storeService.getLoginStatus()) {
        console.log('aqui mandamos a sincronizar');
        this.sendToRecord();
      }
    });

    const user = this.storeService.getUser();
    const token = this.storeService.getPushToken();

    this.authService.savePushToken(user.id, token).subscribe(success => {
      // BIEN
    }, error => {
      // MAL
    });
  }

  ngOnDestroy(): void {
    this.network$.unsubscribe();
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

}
