import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../../services/storage/storage-keys';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  public orderUrl = 'order-list';

  constructor(private storage: Storage,
              private httpClient: HttpClient,
              private httpService: HttpService) {
  }

  public getNotificationHttp = (data: any) => {
    const url = this.httpService.buildUrl(this.orderUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
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

}
