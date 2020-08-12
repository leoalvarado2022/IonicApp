import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { StorageKeys } from 'src/app/services/storage/storage-keys';
import { Storage } from '@ionic/storage';
import { Consumption } from './../../../shared/services/store/store-interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  private readonly recordConsumptionUrl = 'consumptions/record';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private storage: Storage
  ) {

  }

  /**
   * recordConsumption
   * @param consumption
   * @param user
   */
  public recordConsumption = (consumption: any, user: any) => {
    const url = this.httpService.buildUrl(this.recordConsumptionUrl);
    return this.httpClient.post(url, this.httpService.buildBody({consumption, user}), {headers: this.httpService.getHeaders()});
  }

  /**
   * getTempId
   */
  public getTempId = (): Promise<number> => {
    return this.storage.get(StorageKeys.ConsumptionTempId).then( (tempId: number) => {
      return tempId ? tempId : 1;
    });
  }

  /**
   * increaseTempId
   */
  public increaseTempId = (): Promise<number> => {
    return this.getTempId().then( (tempId: number) => {
      return this.storage.set(StorageKeys.ConsumptionTempId, (tempId + 1));
    });
  }

  /**
   * getConsumptionsToRecord
   */
  public getConsumptionsToRecord = (): Promise<Array<Consumption>> => {
    return this.storage.get(StorageKeys.ConsumptionsToRecord).then((consumptionsToRecord: Array<Consumption>) => {
      return consumptionsToRecord ? consumptionsToRecord : [];
    });
  }

  /**
   * clearConsumptions
   */
  public clearConsumptions = (): Promise<Array<Consumption>> => {
    return this.storage.set(StorageKeys.ConsumptionsToRecord, []);
  }

  /**
   * addConsumption
   * @param consumption
   */
  public addConsumption = (consumption: Consumption): Promise<Array<Consumption>> => {
    return this.getConsumptionsToRecord().then((consumptionsToRecord: Array<Consumption>) => {
      consumptionsToRecord.push(consumption);

      return this.storage.set(StorageKeys.ConsumptionsToRecord, consumptionsToRecord);
    });
  }

  /**
   * updateConsumption
   */
  public updateConsumption = (consumption: Consumption): Promise<Array<Consumption>> => {
    return this.getConsumptionsToRecord().then((consumptionsToRecord: Array<Consumption>) => {
      const findIndex = consumptionsToRecord.findIndex(item => item.tempId === consumption.tempId);
      if (findIndex > -1) {
        consumptionsToRecord[findIndex] = consumption;
      } else {
        consumptionsToRecord.push(consumption);
      }

      return this.storage.set(StorageKeys.ConsumptionsToRecord, consumptionsToRecord);
    });
  }

  /**
   * deleteConsumption
   * @param consumptionTempId
   */
  public deleteConsumption = (consumptionTempId: number): Promise<Array<Consumption>> => {
    return this.getConsumptionsToRecord().then((consumptionsToRecord: Array<Consumption>) => {
      consumptionsToRecord = consumptionsToRecord.filter(item => item.tempId !== consumptionTempId);
      return this.storage.set(StorageKeys.ConsumptionsToRecord, consumptionsToRecord);
    });
  }

}
