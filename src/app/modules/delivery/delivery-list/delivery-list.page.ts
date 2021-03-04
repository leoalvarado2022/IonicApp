import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {DeliveryService} from '../services/delivery.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {environment} from '../../../../environments/environment';
import {PosService} from '../services/pos.service';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {ActionSheetController} from '@ionic/angular';
import {Prints} from '../../../helpers/prints';


@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.page.html',
  styleUrls: ['./delivery-list.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DeliveryListPage implements OnInit, OnDestroy {

  public selected = 'pending';
  private service: Subscription;
  private refreshData: Subscription;
  public allOrder: Array<any> = [];
  public orderDetail;
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
    public _posService: PosService,
    public actionSheetController: ActionSheetController,
    public prints: Prints) {
  }

  ionViewDidEnter() {
    // if (this._deliveryService.getAutomatic()) {
    // this.checkedAutomatic = this._deliveryService.getAutomatic();
    // }
    this._storageSyncService.getIntegrationImages().then((data) => {
      this.integrationImages = data;
    });

    this._deliveryService.getItemsImage().subscribe((data: any) => {
      if (data.resp && data.resp.length) {
        this._deliveryService.setItemImageStorage(data.resp);
      }
    }, error => {
      this.httpService.errorHandler(error);
    });
    this.loadNotifications(this.selected);
    this.refreshOrder(true);
  }

  ionViewDidLeave() {
    this.refreshOrder(false);
  }

  ngOnDestroy(): void {
    this.refreshOrder(false);
  }

  refreshOrder(on: boolean) {
    if (on) {
      // this.refreshData.unsubscribe();
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
      status
    };
    this.service = this._deliveryService.getNotificationHttp(data).subscribe((success: any) => {
      this.allOrder = success.resp;
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  changeStatus(status: string) {
    this.selected = status;
    this.allOrder = [];
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
  async openOrder() {
    localStorage.removeItem('orders');
    const typeSale = this._deliveryService.getTypeSaleDirect();

    if (typeSale !== null) {
      if (typeSale) {
        this.router.navigate(['/home-page/menu-order']);
      } else {
        this.router.navigate(['/home-page/menu-detail']);
      }
    } else {
      const actionSheet = await this.actionSheetController.create({
        header: 'Tipo de venta',
        cssClass: 'my-custom-class',
        buttons: [
          {
            text: 'Venta directa',
            icon: 'share',
            handler: () => {
              this._deliveryService.setTypeSaleDirect(true);
              this.router.navigate(['/home-page/menu-order']);
              // console.log('Share clicked');
            }
          }, {
            text: 'Venta delivery',
            icon: 'caret-forward-circle',
            handler: () => {
              this._deliveryService.setTypeSaleDirect(false);
              this.router.navigate(['/home-page/menu-detail']);
            }
          }, {
            text: 'Cancelar',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked');
            }
          }]
      });
      await actionSheet.present();
    }
  }

  /**
   * @description ir atras
   */
  goBack() {
    this.router.navigate(['/home-page']);
  }

  /**
   * @description print command
   * @param command
   */
  printCommand(command: any) {
    this.loaderService.startLoader('Imprimiendo...');
    const user = this.storeService.getActiveCompany();

    const data = {
      user: user.user,
      id: command.id
    };

    this._deliveryService.getNotificationHttpId(data).subscribe((success: any) => {
      this.orderDetail = success.resp;
      this.prints.printCommand(this.orderDetail);
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

}
