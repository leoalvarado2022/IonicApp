import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageKeys } from 'src/app/services/storage/storage-keys';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MachineryService {

  private readonly recordMachinerysUrl = 'machinery/record';
  private readonly getWorkersUrl = 'machinery/workers';

  constructor(
    private storage: Storage,
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {

  }

  /**
   * syncMachinery
   */
  public syncMachinery = (machinery: Array<any>, user: any) => {
    const url = this.httpService.buildUrl(this.recordMachinerysUrl);
    return this.httpClient.post(url, this.httpService.buildBody({machinery, user}), {headers: this.httpService.getHeaders()});
  }

  /**
   * getWorkers
   */
  public getWorkers = (user: any) => {
    const url = this.httpService.buildUrl(this.getWorkersUrl);
    return this.httpClient.post(url, this.httpService.buildBody({user}), {headers: this.httpService.getHeaders()});
  }

  /**
   * getTempId
   */
  public getTempId = (): Promise<number> => {
    return this.storage.get(StorageKeys.MachineryTempId).then( (tempId: number) => {
      return tempId ? tempId: 1;
    });
  }

  /**
   * increaseTempId
   */
  public increaseTempId = (): Promise<number> => {
    return this.getTempId().then( (tempId: number) => {
      return this.storage.set(StorageKeys.MachineryTempId, (tempId + 1));
    });
  }

  /**
   * getMachineryToRecord
   */
  public getMachineryToRecord = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.MachineryToRecord).then( (machineryToRecord: Array<any>) => {
      return machineryToRecord ? machineryToRecord: [];
    });
  }

  /**
   * getMachineryToRecordByCompany
   * @param companyId
   * @param date
   */
  public getMachineryToRecordByCompany = (companyId: number, date: string): Promise<Array<any>> => {
    return this.getMachineryToRecord().then( (machineryToRecord: Array<any>) => {
      return machineryToRecord.filter(item => {
        const splitDate = item.date.split('T')[0];
        return item.companyId === companyId && date === splitDate;
      });
    });
  }

  /**
   * addMachinery
   * @param machinery
   */
  public addMachinery = (machinery: any): Promise<Array<any>> => {
    return this.getMachineryToRecord().then((machineryToRecord: Array<any>) => {
      machineryToRecord.push(machinery);

      return this.storage.set(StorageKeys.MachineryToRecord, machineryToRecord);
    });
  }

  /**
   * clearMachinery
   */
  public clearMachinery = (): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.MachineryToRecord, []);
  }

  /**
   * deleteMachinery
   * @param machineryTempId
   */
  public deleteMachinery = (machineryTempId: number): Promise<Array<any>> => {
    return this.getMachineryToRecord().then((machineryToRecord: Array<any>) => {
      machineryToRecord = machineryToRecord.filter(item => item.tempId !== machineryTempId);
      return this.storage.set(StorageKeys.MachineryToRecord, machineryToRecord);
    });
  }

  /**
   * updateMachinery
   * @param machinery
   */
  public updateMachinery = (machinery: any): Promise<Array<any>> => {
    return this.getMachineryToRecord().then((machineryToRecord: Array<any>) => {
      const findIndex = machineryToRecord.findIndex(item => item.tempId === machinery.tempId);
      if (findIndex > -1) {
        machineryToRecord[findIndex] = machinery;
      }

      return this.storage.set(StorageKeys.MachineryToRecord, machineryToRecord);
    });
  }

}
