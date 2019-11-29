import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor(private storage: Storage) {

  }

  /**
   * @description Add or Update DB
   * @param nameDB
   * @param data
   */
  public setRow = (nameDB: string, data: any) => {
    this.storage.set(nameDB, data);
  }

  /**
   * @description get row DB
   * @param nameDB
   */
  public getRow = async (nameDB: string) => {
    return await this.storage.get(nameDB);
  }

  /**
   * @description delete row
   * @param nameDB
   */
  public removeRow = async (nameDB: string): Promise<any> => {
    await this.storage.remove(nameDB);
  }

  /**
   * @description clear all DB
   */
  public clearAllRow = async (): Promise<any> => {
    await this.storage.clear();
  }
}
