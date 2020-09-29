import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';
import {DeliveryService} from '../../services/delivery.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit, OnDestroy {

  public allOrder: Array<any> = [];


  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService
  ) {
  }

  ionViewDidEnter() {
    this.loadNotifications();
  }

  ngOnDestroy(): void {
  }

  private loadNotifications() {
    this.loaderService.startLoader('Cargando Notificaciones');
    const user = this.storeService.getActiveCompany();

    const data = {
      user: user.user,
      status: 'pending'
    };

    this._deliveryService.getNotificationHttp(data).subscribe((success: any) => {
      this.allOrder = success.resp;
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  ngOnInit() {

  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.allOrder = [];
    this.loadNotifications();
    event.target.complete();
  }

}
