import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../../shared/services/http/http.service';
import {StoreService} from '../../../../shared/services/store/store.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private _storeService: StoreService
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
  public getDeals() {
    const deals = this._storeService.getDeals();

    if (!deals || !deals || !deals.length) {
      return [];
    }
    const list = deals.filter(value => {
      const vigente = moment().isBetween(moment.utc(value.date_init), moment.utc(value.date_end), null, '[]');
      return vigente;
    });

    const groups = this.groupBy(list, (item) => item.id);

    const response = [];

    groups.forEach((valor, clave, map) => {
      if (valor.length) {
        response.push(valor[0]);
      }
    });

    return response;
  }
}
