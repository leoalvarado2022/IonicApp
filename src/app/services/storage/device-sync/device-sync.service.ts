import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../storage-keys';

@Injectable({
  providedIn: 'root'
})
export class DeviceSyncService {

  constructor(private storage: Storage) {
  }

  /**
   * getDevicesToRecord
   */
  public getDevicesToRecord = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.DevicesToRecord).then((devicesToRecord: Array<any>) => {
      return devicesToRecord ? devicesToRecord : [];
    });
  }

  /**
   * addDevicesToRecord
   * @param preDevice
   */
  public addDevicesToRecord = (preDevice: any): Promise<Array<any>> => {
    return this.getDevicesToRecord().then((devicesToRecord: Array<any>) => {
      if (preDevice.delete) {
        const toRemoved = devicesToRecord.filter(item => item.tempId !== preDevice.tempId);
        return this.storage.set(StorageKeys.DevicesToRecord, toRemoved);
      } else {
        devicesToRecord.push(preDevice);
        this.increaseDeviceTempId().then();
        return this.storage.set(StorageKeys.DevicesToRecord, devicesToRecord);
      }

    });
  }

  /**
   * getDevicesToRecord
   */
  public getDeviceTempId = (): Promise<any> => {
    return this.storage.get(StorageKeys.DeviceTempId).then((DeviceTempId: Array<any>) => {
      return DeviceTempId ? DeviceTempId : 0;
    });
  }

  /**
   * increaseDeviceTempId
   */
  public increaseDeviceTempId = (): Promise<any> => {
    return this.getDeviceTempId().then(number => {
      return this.storage.set(StorageKeys.DeviceTempId, number + 1);
    });
  }


  /**
   * getDevicesWithErrors
   */
  public getDevicesWithErrors = (): Promise<any> => {
    return this.storage.get(StorageKeys.DevicesWithErrors).then((devicesWithErrors: Array<any>) => {
      return devicesWithErrors ? devicesWithErrors : [];
    });
  }

  /**
   * addDevicesWithErrors
   * @param devices
   */
  public addDevicesWithErrors = (devices: Array<any>): Promise<any> => {
    return this.getDevicesWithErrors().then((devicesToRecord: Array<any>) => {
      const error: any = [...devicesToRecord, ...devices];
      this.increaseDeviceTempId().then();
      return this.storage.set(StorageKeys.DevicesWithErrors, error);
    });
  }

  /**
   * removeDevicesWithErrors
   * @param indexes
   */
  public removeDevicesWithErrors = (indexes: Array<number>): Promise<any> => {
    return this.getDevicesWithErrors().then((devicesToRecord: Array<any>) => {
      const toRemoved = devicesToRecord.filter(item => !indexes.includes(item.tempId));
      this.storage.set(StorageKeys.DevicesWithErrors, toRemoved).then();
      return toRemoved.length;
    });
  }


  /**
   * removeDevicesToRecord
   * @param indexes
   */
  public removeDevicesToRecord = (indexes: Array<number>): Promise<any> => {
    return this.getDevicesToRecord().then(devices => {
      const toRemoved = devices.filter(item => !indexes.includes(item.tempId));
      this.storage.set(StorageKeys.DevicesToRecord, toRemoved).then();
      return toRemoved.length;
    });

  }

}
