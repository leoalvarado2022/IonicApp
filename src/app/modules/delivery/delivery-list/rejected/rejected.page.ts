import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.page.html',
  styleUrls: ['./rejected.page.scss'],
})
export class RejectedPage implements OnInit, OnDestroy {

  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService
  ) { }

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
      status: 'rejected'
    };

    this._deliveryService.getNotificationHttp(data).subscribe((success: any) => {
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

}
