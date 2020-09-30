import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.page.html',
  styleUrls: ['./accepted.page.scss'],
})
export class AcceptedPage implements OnInit, OnDestroy {

  public allOrder: Array<any> = [];


  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService,
    private router: Router
  ) {
  }

  ionViewDidEnter() {
    this.loadNotifications();
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {

  }

  private loadNotifications() {
    this.loaderService.startLoader('Cargando Notificaciones');
    const user = this.storeService.getActiveCompany();

    const data = {
      user: user.user,
      status: 'accepted'
    };

    this._deliveryService.getNotificationHttp(data).subscribe((success: any) => {
      this.allOrder = success.resp;
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
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

  /**
   * order selected
   * @param ticket
   */
  public orderSelected = (order: any) => {
    this.router.navigate(['/home-page/delivery-detail', order.id]);
  }

}
