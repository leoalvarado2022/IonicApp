import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageKeys } from 'src/app/services/storage/storage-keys';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { Machinery } from '../machinery.interface';

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
  public getMachineryToRecord = (): Promise<Array<Machinery>> => {
    return this.storage.get(StorageKeys.MachineryToRecord).then( (machineryToRecord: Array<Machinery>) => {
      return machineryToRecord ? machineryToRecord: [];
    });
  }

  /**
   *
   * @param companyId
   * @param userId
   * @param date
   * @param isSuper
   */
  public getMachineryByCompany = (companyId: number, userId: number, date: string, isSuper: boolean = false): Promise<Array<Machinery>> => {
    return Promise.all([
      this.storage.get(StorageKeys.Machinery),
      this.getMachineryToRecord()
    ]).then( (data: Array<any>) => {
      // Marked for delete
      const markedForDelete = data[1].filter((item: Machinery) => item.id < 0).map((item: Machinery) => (item.id * -1));
      // Marked for edit
      const markedForEdit = data[1].filter((item: Machinery) => item.status === 'edit' ).map((item: Machinery) => item.id);

      // BLOQUE MEMORIA
      const onMemory =  data[1].filter( (item: Machinery) => {
        const splitDate = item.date.split('T')[0];
        return item.companyId === companyId && date === splitDate && item.status !== 'delete';
      });

      // BLOQUE SYNC
      const synced = data[0].filter((item: Machinery) => {
        const splitDate = item.date.split('T')[0];

        return isSuper ?
          item.companyId === companyId && date === splitDate && !markedForDelete.includes(item.id) && !markedForEdit.includes(item.id):
          item.companyId === companyId && item.workerId === userId && date === splitDate && !markedForDelete.includes(item.id) && !markedForEdit.includes(item.id);
      });

      return [...onMemory, ...synced];
    });
  }

  /**
   * getMachineryToRecordByCompany
   * @param companyId
   * @param date
   */
  /*
  public getMachineryToRecordByCompany = (companyId: number, date: string): Promise<Array<Machinery>> => {
    return this.getMachineryToRecord().then( (machineryToRecord: Array<Machinery>) => {
      return machineryToRecord.filter(item => {
        const splitDate = item.date.split('T')[0];
        return item.companyId === companyId && date === splitDate;
      });
    });
  }
  */

  /**
   * addMachinery
   * @param machinery
   */
  public addMachinery = (machinery: Machinery): Promise<Array<Machinery>> => {
    return this.getMachineryToRecord().then((machineryToRecord: Array<Machinery>) => {
      machineryToRecord.push(machinery);

      return this.storage.set(StorageKeys.MachineryToRecord, machineryToRecord);
    });
  }

  /**
   * clearMachinery
   */
  public clearMachinery = (): Promise<Array<Machinery>> => {
    return this.storage.set(StorageKeys.MachineryToRecord, []);
  }

  /**
   * updateMachinery
   * @param machinery
   */
  public updateMachinery = (machinery: Machinery): Promise<Array<Machinery>> => {
    return this.getMachineryToRecord().then((machineryToRecord: Array<Machinery>) => {
      const findIndex = machineryToRecord.findIndex(item => item.tempId === machinery.tempId);
      if (findIndex > -1) {
        machineryToRecord[findIndex] = machinery;
      } else {
        machineryToRecord.push(machinery);
      }

      return this.storage.set(StorageKeys.MachineryToRecord, machineryToRecord);
    });
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
   * markMachineryToDelete
   * @param machinery
   */
  public markMachineryToDelete = (machinery: Machinery): Promise<Array<Machinery>> => {
    const toDelete = Object.assign({}, machinery, { id: ( machinery.id * -1), status: 'delete' });
    return this.addMachinery(toDelete);
  }

}
