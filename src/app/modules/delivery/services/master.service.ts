import {Injectable} from '@angular/core';
import {PosService} from './pos.service';
import {DeliveryService} from './delivery.service';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {StoreService} from '../../../shared/services/store/store.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  public orderUrl = 'order';

  constructor(private _posService: PosService,
              private _storageSyncService: StorageSyncService,
              private _storeService: StoreService,
              private _httpService: HttpService,
              private _httpClient: HttpClient
  ) {
  }

  /**
   * @description get notification for by id
   * @param data
   */
  public getNotificationHttpId = (data: any) => {
    const url = this._httpService.buildUrl(this.orderUrl);
    return this._httpClient.post(url, this._httpService.buildBody(data), {
      headers: this._httpService.getHeaders()
    });
  };

  /**
   * @description agregar en fx10 automaticamente
   * @param order
   */
  public insertDataFx10POS(order: any) {
    const configActiveDelivery = this._storageSyncService.getActiveConfigDelivery();
    if (configActiveDelivery) {
      const user = this._storeService.getActiveCompany();
      const data = {
        user: user.user,
        id: order.id
      };
      this.getNotificationHttpId(data).subscribe((success: any) => {
        const order = success.resp;
        this._posService.openTable(order).then();
      }, error => {
        this._httpService.errorHandler(error);
      });
    }

  }
}
