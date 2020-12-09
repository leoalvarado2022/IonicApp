import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {DeliveryService} from '../services/delivery.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {environment} from '../../../../environments/environment';
import {PosService} from '../services/pos.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
})
export class DeliveryListPage implements OnInit, OnDestroy {

  public selected: string = 'pending';
  private service: Subscription;
  private refreshData: Subscription;
  public allOrder: Array<any> = [];
  public checkedAutomatic = false;
  public searchDeliveryListMSec = environment.searchDeliveryListMSec;
  public integrationImages: Array<any> = [];

  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private _storageSyncService: StorageSyncService,
    private loaderService: LoaderService,
    private router: Router,
    private backgroundMode: BackgroundMode,
    public _posService: PosService
  ) {
  }

  ionViewDidEnter() {
    if (this._deliveryService.getAutomatic()) {
      this.checkedAutomatic = this._deliveryService.getAutomatic();
    }
    this._storageSyncService.getIntegrationImages().then((data) => {
      this.integrationImages = data;
    });
    this.loadNotifications(this.selected);
    this.refreshOrder(true);
  }

  ngOnDestroy(): void {
    this.refreshOrder(false);
  }

  refreshOrder(on: boolean) {
    if (on) {
      // console.log(on, 'subscription');
      this.refreshData = interval(this.searchDeliveryListMSec).subscribe(async (x: any) => {
        // console.log('subscription');
        this.loadNotifications(this.selected);
      });
    } else if (!on && this.refreshData) {
      this.refreshData.unsubscribe();
    }
  }

  ngOnInit() {

  }

  /**
   * @description change status, default = pending
   * @param status
   */
  private loadNotifications(status: string) {

    const user = this.storeService.getActiveCompany();
    const data = {
      user: user.user,
      status: status
    };
    this.service = this._deliveryService.getNotificationHttp(data).subscribe((success: any) => {
      this.allOrder = success.resp;
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  changeStatus(status: string) {
    this.selected = status;
    this.loadNotifications(status);
  }

  /**
   * order selected
   * @param order
   */
  public orderSelected = (order: any) => {
    this.router.navigate(['/home-page/delivery-detail', order.id]);
  };

  /**
   * @description activar el automatico
   * @param event
   */
  public changeAutomatic(event: any) {
    this._deliveryService.setAutomatic(event.detail.checked);
    if (event.detail.checked) {
      this.backgroundMode.enable();
    } else {
      this.backgroundMode.disable();
    }
  }

  /**
   * @description syncroniza el pos
   */
  connectionSync() {
    this._posService.loginToSync();
  }

  /**
   * @description abrir menu de ordenes
   */
  openOrder() {
    this.router.navigate(['/home-page/menu-order']);
  }

}
