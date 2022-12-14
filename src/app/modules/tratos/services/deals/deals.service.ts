import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../../shared/services/http/http.service';
import * as moment from 'moment';
import {Storage} from '@ionic/storage';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {StorageKeys} from '../../../../services/storage/storage-keys';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  private readonly tallyScanneds = 'deal/scanneds';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private storageSyncService: StorageSyncService,
    private storage: Storage,
  ) {
  }


  /**
   * @description group
   * @param list
   * @param keyGetter
   */
  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  /**
   * @description get deals
   */
  public getDeals = (): Promise<any> => {
    return this.storageSyncService.getDeals().then(deals => {

      const list = deals.filter(value => {
        const startDate = moment.utc(value.date_init);
        const endDate =  moment.utc(value.date_end);

        return moment().isBetween(startDate, endDate);
      });

      const groups = this.groupBy(list, item => item.id);
      const response = [];

      groups.forEach((valor, clave, map) => {
        if (valor.length) {
          response.push(valor[0]);
        }
      });

      return response;
    });
  }

  /**
   * @description save saveTalliesToRecord
   * @param tallyScanneds
   * @param user
   */
  public saveTalliesToRecord = (tallyScanneds: any, user: any) => {
    const url = this.httpService.buildUrl(this.tallyScanneds);
    return this.httpClient.post(url, this.httpService.buildBody({tallyScanneds, user}), {
      headers: this.httpService.getHeaders()
    });
  }

  /**
   * setDealsTemp
   * @param dealsToRecordRow
   */
  public setDealsTemp = (dealsToRecordRow: any): Promise<any> => {
    return this.getDealsTemp().then(row => {
      const filter = row.filter(value => value.id !== dealsToRecordRow.id);
      filter.push(dealsToRecordRow);
      return this.storage.set(StorageKeys.DealsTemp, filter);
    });
  }

  /**
   * getDealsTemp
   */
  public getDealsTemp = (): Promise<any> => {
    return this.storage.get(StorageKeys.DealsTemp).then((dealsTemp: Array<any>) => {
      return dealsTemp ? dealsTemp : [];
    });
  }

  /**
   * removeDealsTemp
   */
  public removeDealsTemp = (id): Promise<any> => {
    return this.getDealsTemp().then(row => {
      const filter = row.filter(value => value.id !== id);
      return this.storage.set(StorageKeys.DealsTemp, filter);
    });
  }

  /**
   * setActiveDeal
   * @param deal
   */
  public setActiveDeal = (deal: any): Promise<any> => {
    return this.storage.set(StorageKeys.ActiveDeal, deal);
  }

  /**
   * getActiveDeal
   */
  public getActiveDeal = (): Promise<any> => {
    return this.storage.get(StorageKeys.ActiveDeal);
  }

  /**
   * getTempDealsByUser
   * @param userId
   */
  public getTempDealsByUser =  (userId: number): Promise<Array<any>> => {
    return this.getDealsTemp().then( (tempDeals: Array<any>) => {
      return tempDeals.filter(item => item.user.id === userId);
    });
  }

  /**
   * getTempDealsById
   * @param dealId
   */
  public getTempDealsById = (dealId: number): Promise<any> => {
    return this.getDealsTemp().then( (tempDeals: Array<any>) => {
      return tempDeals.find(item => item.id === dealId);
    });
  }

}
