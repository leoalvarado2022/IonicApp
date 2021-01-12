import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../../services/storage/storage-keys';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http/http.service';
import {BehaviorSubject, interval, Observable, Subject, Subscription} from 'rxjs';
import {StoreService} from '../../../shared/services/store/store.service';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {debounceTime} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {PosService} from './pos.service';
import {MasterService} from './master.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  public orderListUrl = 'order-list';
  public orderUpdateUrl = 'order-update';
  public changeOrderStatus = 'change-order';
  public orderUrl = 'order';
  public orderReprocessUrl = 'reprocess';
  private service: Subscription;
  private refreshData: Subscription;
  private timeAccepted = environment.searchDeliveryListAcceptedMSec;

  constructor(private storage: Storage,
              private httpClient: HttpClient,
              private httpService: HttpService,
              private storeService: StoreService,
              private backgroundMode: BackgroundMode,
              private _masterService: MasterService,
              private storageSyncService: StorageSyncService) {
  }

  /**
   * @description activar automatizador de status de ordenes
   * @param status
   */
  public setAutomatic(status: boolean) {
    localStorage.setItem('statusBackgroundMode', JSON.stringify(status));
  }

  /**
   * obtener el estado del automatizador
   */
  public getAutomatic() {
    return JSON.parse(localStorage.getItem('statusBackgroundMode'));
  }

  /**
   * @description list notifications
   * @param data
   */
  public getNotificationHttp = (data: any) => {
    const url = this.httpService.buildUrl(this.orderListUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * @description get nofitification for by id
   * @param data
   */
  public getNotificationHttpId = (data: any) => {
    const url = this.httpService.buildUrl(this.orderUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * @description set nofitification for by id
   * @param data
   */
  public setNotificationHttpStatus = (data: any) => {
    const url = this.httpService.buildUrl(this.orderUpdateUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * @description reprocesar una cuenta
   * @param data
   */
  public setOrderReprocess = (data: any) => {
    const url = this.httpService.buildUrl(this.orderReprocessUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * @description cambiar estatus de la api delivery
   * @param data
   */
  public setHttpChangeDeliveryStatus = (data: any, status: string, token: string) => {
    const url = this.httpService.buildUrlApiDelivery(this.changeOrderStatus, status);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeadersApiDynamic(token)
    });
  };

  /**
   * getDeliveryNotification
   */
  public getDeliveryNotification = (): Promise<any> => {
    return this.storage.get(StorageKeys.DeliveryNotifications).then((notifications: any) => {
      return notifications ? notifications : [];
    });
  };


  /**
   * setDeliveryNotification
   */
  public setDeliveryNotification = (data): Promise<any> => {
    return this.storage.set(StorageKeys.DeliveryNotifications, data).then();
  };


  /**
   * @description stop interval
   */
  public stopRefreshData() {
    this.refreshData ? this.refreshData.unsubscribe() : '';
  }

  /**
   * @description off background mode
   */
  public stopBackgroundMode() {
    this.backgroundMode.disable();
    this.setAutomatic(false);
  }

  /**
   * @description active interval
   */
  public intervalRefresh() {
    const isLogged = this.storeService.getLoginStatus();
    if (isLogged && this.getAutomatic()) {
      this.refreshData = interval(this.timeAccepted).subscribe(async (x: any) => {
        this.updateOrderPendingToAccepted();
      });
    } else {
      this.stopRefreshData();
      this.backgroundMode.disable();
      this.setAutomatic(false);
    }
  }

  /**
   * @description get list order
   */
  public updateOrderPendingToAccepted() {
    const user = this.storeService.getActiveCompany();
    const data = {
      user: user.user,
      status: 'pending'
    };

    this.service = this.getNotificationHttp(data).subscribe((success: any) => {
      if (success.resp.length) {
        for (const order of success.resp) {
          this.updateStatusOrder(order.id, user, order);
          if (!order.error) {
            this._masterService.insertDataFx10POS(order);
          }
          debounceTime(2000);
        }
      }
    }, error => {
      this.stopRefreshData();
      this.backgroundMode.disable();
    });
  }

  /**
   * @description set status unique order
   * @param id
   * @param user
   */
  public updateStatusOrder(id: number, user: any, order: any) {
    const data = {
      user: user.user,
      id_order: id,
      status: order.error ? 'rejected' : 'accepted'
    };
    this.setNotificationHttpStatus(data).subscribe((success: any) => {
    }, error => {
      this.stopRefreshData();
      this.backgroundMode.disable();
    });
  }

}
