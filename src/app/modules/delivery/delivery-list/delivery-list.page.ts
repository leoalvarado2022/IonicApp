import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {DeliveryService} from '../services/delivery.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';
import {interval, Observable, Subscription} from 'rxjs';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';

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

  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService,
    private router: Router,
    private backgroundMode: BackgroundMode
  ) {
  }

  ionViewDidEnter() {
    if(this._deliveryService.getAutomatic()) {
      this.checkedAutomatic = this._deliveryService.getAutomatic();
    }
    this.loadNotifications(this.selected);
    this.refreshOrder(true);
  }

  ngOnDestroy(): void {
    this.refreshOrder(false);
  }

  refreshOrder(on: boolean) {
    if (on) {
      // console.log(on, 'subscription');
      this.refreshData = interval(5000).subscribe(async (x: any) => {
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
    // this.loaderService.startLoader('Cargando Notificaciones');
    const user = this.storeService.getActiveCompany();
    const data = {
      user: user.user,
      status: status
    };
    this.service = this._deliveryService.getNotificationHttp(data).subscribe((success: any) => {
      this.allOrder = success.resp;
      // this.loaderService.stopLoader();
    }, error => {
      // this.loaderService.stopLoader();
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

  public changeAutomatic(event: any) {
    this._deliveryService.setAutomatic(event.detail.checked);
    if(event.detail.checked) {
      this.backgroundMode.enable();
    } else {
      this.backgroundMode.disable();
    }

  }

}
