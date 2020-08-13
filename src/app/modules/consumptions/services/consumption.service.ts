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
   * syncConsumptions
   * @param consumptions
   * @param user
   */
  public syncConsumptions = (consumptions: Array<Consumption>, user: any) => {
    const url = this.httpService.buildUrl(this.recordConsumptionUrl);
    return this.httpClient.post(url, this.httpService.buildBody({consumptions, user}), {headers: this.httpService.getHeaders()});
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

  /**
   * markConsumptionToDelete
   * @param consumption
   */
  public markConsumptionToDelete = (consumption: Consumption): Promise<Array<Consumption>> => {
    const toDelete = Object.assign({}, consumption, { id: ( consumption.id * -1), status: 'delete' });
    return this.addConsumption(toDelete);
  }

  /**
   * getConsumptionsByCompany
   * @param companyId
   * @param date
   */
  public getConsumptionsByCompany = (companyId: number, date: string): Promise<Array<Consumption>> => {
    return Promise.all([
      this.getConsumptionsToRecord(),
      this.storage.get(StorageKeys.Consumptions)
    ]).then( (data: any) => {
      // Marked for delete
      const markedForDelete = data[0].filter((item: Consumption) => item.id < 0).map((item: Consumption) => (item.id * -1));
      // Marked for edit
      const markedForEdit = data[0].filter((item: Consumption) => item.status === 'edit' ).map((item: Consumption) => item.id);

      // Memory
      const onMemory = data[0].filter( (item: Consumption) => {
        const splitDate = item.date.split('T')[0];
        return item.companyId === companyId && date === splitDate && item.status !== 'delete';
      });

      // Synced
      const onSync = data[1].filter((item: Consumption) => {
        const splitDate = item.date.split('T')[0];
        return item.companyId === companyId && date === splitDate && !markedForDelete.includes(item.id) && !markedForEdit.includes(item.id);
      });

      return [...onMemory, ...onSync];
    });
  }

}
