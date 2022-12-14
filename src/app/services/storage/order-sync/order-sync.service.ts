import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApplicationListInterface } from 'src/app/modules/application-registry/application-list.interface';
import { ApplicationLocationInterface } from 'src/app/modules/application-registry/application-location.interface';
import { StorageKeys } from '../storage-keys';

@Injectable({
  providedIn: 'root'
})
export class OrderSyncService {

  constructor(private storage: Storage) {

  }

  /**
   * getOrderHeader
   */
  public getOrderHeader = (): Promise<any> => {
    return this.storage.get(StorageKeys.OrderHeader);
  }

  /**
   * setOrderHeader
   * @param orderHeader
   */
  public setOrderHeader = (orderHeader: any): Promise<any> => {
    return this.storage.set(StorageKeys.OrderHeader, orderHeader);
  }

  /**
   * getOrderCostCenter
   */
  public getOrderCostCenter = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.OrderCostCenter).then((orderCostCenter: Array<any>) => {
      return orderCostCenter ? orderCostCenter : [];
    });
  }

  /**
   * setOrderCostCenter
   * @param orderCostCenter
   */
  public setOrderCostCenter = (orderCostCenter: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.OrderCostCenter, orderCostCenter);
  }

  /**
   * setOrderMachinery
   * @param orderMachinery
   */
  public setOrderMachinery = (orderMachinery: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.OrderMachinery, orderMachinery);
  }

  /**
   * getOrderMachinery
   */
  public getOrderMachinery = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.OrderMachinery).then((orderMachinery: Array<any>) => {
      return orderMachinery ? orderMachinery : [];
    });
  }

  /**
   * setOrderChemical
   * @param orderChemical
   */
  public setOrderChemical = (orderChemical: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.OrderChemical, orderChemical);
  }

  /**
   * getOrderChemical
   */
  public getOrderChemical = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.OrderChemical).then((orderChemical: Array<any>) => {
      return orderChemical ? orderChemical : [];
    });
  }

  /**
   * setOrderBalanceToApply
   * @param orderBalanceToApply
   */
  public setOrderBalanceToApply = (orderBalanceToApply: Array<ApplicationListInterface>): Promise<Array<ApplicationListInterface>> => {
    return this.storage.set(StorageKeys.OrderBalanceToApply, orderBalanceToApply);
  }

  /**
   * getOrderBalanceToApply
   */
  public getOrderBalanceToApply = (): Promise<Array<ApplicationListInterface>> => {
    return this.storage.get(StorageKeys.OrderBalanceToApply).then((orderBalanceToApply: Array<ApplicationListInterface>) => {
      return orderBalanceToApply ? orderBalanceToApply : [];
    });
  }

  /**
   * getOrderBalanceToApplyById
   * @param id
   */
  public getOrderBalanceToApplyById = (id: number): Promise<ApplicationListInterface> => {
    return this.storage.get(StorageKeys.OrderBalanceToApply).then((orderBalanceToApply: Array<ApplicationListInterface>) => {
      return orderBalanceToApply.find(item => item.id === id);
    });
  }

  /**
   * setOrderBalanceApplied
   * @param orderBalanceApplied
   */
  public setOrderBalanceApplied = (orderBalanceApplied: Array<ApplicationListInterface>): Promise<Array<ApplicationListInterface>> => {
    return this.storage.set(StorageKeys.OrderBalanceApplied, orderBalanceApplied);
  }

  /**
   * getOrderBalanceApplied
   */
  public getOrderBalanceApplied = (): Promise<Array<ApplicationListInterface>> => {
    return this.storage.get(StorageKeys.OrderBalanceApplied).then((orderBalanceApplied: Array<ApplicationListInterface>) => {
      return orderBalanceApplied ? orderBalanceApplied : [];
    });
  }

  /**
   * clearApplicationCache
   */
  public clearApplicationCache = () => {
    return Promise.all([
      this.storage.set(StorageKeys.OrderHeader, null),
      this.storage.set(StorageKeys.OrderCostCenter, []),
      this.storage.set(StorageKeys.OrderMachinery, []),
      this.storage.set(StorageKeys.OrderChemical, []),
      this.storage.set(StorageKeys.OrderBalanceToApply, []),
      this.storage.set(StorageKeys.OrderBalanceApplied, []),
    ]);
  }

  /**
   * ===========================
   * ===========================
   * ===========================
   * TEMP APLICATIONS
   * ===========================
   * ===========================
   * ===========================
   */

  /**
   * getApplicationTempId
   */
  private getApplicationTempId = (): Promise<any> => {
    return this.storage.get(StorageKeys.ApplicationTempId).then((applicationTempId: number) => {
      return applicationTempId ? applicationTempId : 0;
    });
  }

  /**
   * getNextApplicationTempId
   */
  public getNextApplicationTempId = (): Promise<any> => {
    return this.getApplicationTempId().then((applicationTempId: number) => {
      return this.storage.set(StorageKeys.ApplicationTempId, applicationTempId + 1);
    });
  }

  /**
   * getApplicationLocations
   */
  private getApplicationLocations = (): Promise<Array<ApplicationLocationInterface>> => {
    return this.storage.get(StorageKeys.TempApplicationLocation).then((applicationLocations: Array<ApplicationLocationInterface>) => {
      return applicationLocations ? applicationLocations : [];
    });
  }

  /**
   * setApplicationLocations
   * @param applicationLocations
   */
  public setApplicationLocations = (applicationLocations: Array<ApplicationLocationInterface>): Promise<Array<ApplicationLocationInterface>> => {
    return this.storage.set(StorageKeys.TempApplicationLocation, applicationLocations);
  }

  /**
   * addApplicationLocations
   * @param applicationLocation
   */
  public addApplicationLocations = (applicationLocation: ApplicationLocationInterface): Promise<Array<ApplicationLocationInterface>> => {
    return this.getApplicationLocations().then((applicationLocations: Array<ApplicationLocationInterface>) => {
      applicationLocations.push(applicationLocation);
      return this.setApplicationLocations(applicationLocations);
    });
  }

  /**
   * getApplicationLocationsById
   * @param tempId temp id
   */
  public getApplicationLocationsById = (tempId: number): Promise<Array<ApplicationLocationInterface>> => {
    return this.getApplicationLocations().then((applicationLocations: Array<ApplicationLocationInterface>) => {
      return applicationLocations.filter(item => item.tempId === tempId);
    });
  }

  /**
   * clearApplicationLocationsById
   * @param tempId temp id
   */
  public clearApplicationLocationsById = (tempId: number): Promise<Array<ApplicationLocationInterface>> => {
    return this.getApplicationLocations().then((applicationLocations: Array<ApplicationLocationInterface>) => {
      return applicationLocations.filter(item => item.tempId !== tempId);
    });
  }


  /**
   ***************************************************************************
   * NEW TEMP STORAGE
   ***************************************************************************
   ***************************************************************************
   */

  /**
   * setTempApplications
   * @param tempApplications array of temp applications
   */
  private setTempApplications = (tempApplications: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.TempApplications, tempApplications);
  }

  /**
   * getTempApplications
   */
  private getTempApplications = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TempApplications).then((tempApplications: Array<any>) => {
      return tempApplications ? tempApplications : [];
    });
  }

  /**
   * addTempApplication
   * @param tempApplication temp object
   */
  public addTempApplication = (tempApplication: any): Promise<Array<any>> => {
    return this.getTempApplications().then((tempApplications: Array<any>) => {
      tempApplications.push(tempApplication);
      return this.setTempApplications(tempApplications);
    });
  }

  /**
   * getTempApplicationById
   * @param tempId application temp id
   */
  public getTempApplicationById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplications().then((tempApplications: Array<any>) => {
      return tempApplications.find(item => item.tempId === tempId);
    });
  }

  /**
   * removeTempApplicationById
   * @param tempId
   */
  public removeTempApplicationById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplications().then((tempApplications: Array<any>) => {
      const filtered = tempApplications.filter(item => item.tempId !== tempId);
      return this.setTempApplications(filtered);
    });
  }

  /**
   * setTempApplicationReadyById
   * @param tempId
   */
  public setTempApplicationReadyById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplications().then((tempApplications: Array<any>) => {
      const setReady = tempApplications.find(item => item.tempId === tempId);
      setReady.isReady = true;

      const removed = tempApplications.filter(item => item.tempId !== tempId);
      removed.push(setReady);

      return this.setTempApplications(removed);
    });
  }

  /**
   * setTempApplicationChemicals
   * @param tempApplicationChemicals array of temp chemicals
   */
  private setTempApplicationChemicals = (tempApplicationChemicals: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.TempApplicationChemicals, tempApplicationChemicals);
  }

  /**
   * getTempApplicationChemicals
   */
  private getTempApplicationChemicals = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TempApplicationChemicals).then((tempApplicationChemicals: Array<any>) => {
      return tempApplicationChemicals ? tempApplicationChemicals : [];
    });
  }

  /**
   * addTempApplicationChemicals
   * @param newChemicals array of temp chemicals
   */
  public addTempApplicationChemicals = (newChemicals: Array<any>): Promise<Array<any>> => {
    return this.getTempApplicationChemicals().then((tempApplicationChemicals: Array<any>) => {
      const newArray = [...newChemicals, ...tempApplicationChemicals]
      return this.setTempApplicationChemicals(newArray);
    });
  }

  /**
   * getTempApplicationChemicalsById
   * @param tempId id
   */
  public getTempApplicationChemicalsById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplicationChemicals().then((tempApplicationChemicals: Array<any>) => {
      return tempApplicationChemicals.filter(item => item.tempId === tempId);
    });
  }

  /**
   * removeTempApplicationChemicalsById
   * @param tempId number
   */
  public removeTempApplicationChemicalsById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplicationChemicals().then((tempApplicationChemicals: Array<any>) => {
      const filtered = tempApplicationChemicals.filter(item => item.tempId !== tempId);
      return this.setTempApplicationChemicals(filtered);
    });
  }

  /**
   * setTempWeather
   * @param tempWeather temp weathers
   */
  private setTempWeather = (tempWeather: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.TempWeather, tempWeather);
  }

  /**
   * getTempWeather
   */
  private getTempWeather = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TempWeather).then((tempWeathers: Array<any>) => {
      return tempWeathers ? tempWeathers : [];
    });
  }

  /**
   * addTempWeather
   * @param tempWeather weather to add
   */
  public addTempWeather = (tempWeather: any): Promise<Array<any>> => {
    return this.getTempWeather().then((tempWeathers: Array<any>) => {
      tempWeathers.push(tempWeather);
      return this.setTempWeather(tempWeathers);
    });
  }

  /**
   * getTempWeatherById
   * @param tempId id
   */
  public getTempWeatherById = (tempId: number): Promise<Array<any>> => {
    return this.getTempWeather().then((tempWeathers: Array<any>) => {
      return tempWeathers.find(item => item.tempId === tempId);
    });
  }

  /**
   * removeTempWeatherById
   * @param tempId
   */
  public removeTempWeatherById = (tempId: number): Promise<Array<any>> => {
    return this.getTempWeather().then((tempWeathers: Array<any>) => {
      const filtered = tempWeathers.filter(item => item.tempId !== tempId);
      return this.setTempWeather(filtered);
    });
  }

  /**
   * setTempApplicationsTime
   * @param tempApplicationsTime applications array
   */
  private setTempApplicationsTime = (tempApplicationsTime: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.TempApplicationsTime, tempApplicationsTime);
  }

  /**
   * getTempApplicationsTime
   */
  private getTempApplicationsTime = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TempApplicationsTime).then((tempApplicationsTime: Array<any>) => {
      return tempApplicationsTime ? tempApplicationsTime : [];
    });
  }

  /**
   * addTempApplicationsTime
   * @param tempApplicationTime temp obj
   */
  public addTempApplicationsTime = (tempApplicationTime: any): Promise<Array<any>> => {
    return this.getTempApplicationsTime().then((tempApplicationsTime: Array<any>) => {
      tempApplicationsTime.push(tempApplicationTime);
      return this.setTempApplicationsTime(tempApplicationsTime);
    });
  }

  /**
   * getTempApplicationTimeById
   * @param tempId id
   */
  public getTempApplicationTimeById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplicationsTime().then((tempApplicationsTime: Array<any>) => {
      return tempApplicationsTime.find(item => item.tempId === tempId);
    });
  }

  /**
   * removeTempApplicationTimeById
   * @param tempId number
   */
  public removeTempApplicationTimeById = (tempId: number): Promise<Array<any>> => {
    return this.getTempApplicationsTime().then((tempApplicationsTime: Array<any>) => {
      const filtered = tempApplicationsTime.filter(item => item.tempId !== tempId);
      return this.setTempApplicationsTime(filtered);
    });
  }

  /**
   * removeApplicationLocationsById
   * @param tempId number
   */
  public removeApplicationLocationsById = (tempId: number): Promise<Array<ApplicationLocationInterface>> => {
    return this.getApplicationLocations().then((applicationLocations: Array<ApplicationLocationInterface>) => {
      const filtered = applicationLocations.filter(item => item.tempId !== tempId);
      return this.setApplicationLocations(filtered);
    });
  }

  /**
   * getAllTempDataById
   * @param tempId id
   */
  public getAllTempDataById = (tempId: number): Promise<Array<any>> => {
    return Promise.all([
      this.getTempApplicationById(tempId),
      this.getTempApplicationChemicalsById(tempId),
      this.getTempWeatherById(tempId),
      this.getTempApplicationTimeById(tempId),
      this.getApplicationLocationsById(tempId)
    ]);
  }

  /**
   * getApplicationsPendingToSave
   */
  public getApplicationsPendingToSave = (): Promise<Array<any>> => {
    return this.getTempApplications().then((tempApplications: Array<any>) => {
      const promises = [];

      tempApplications.forEach(item => {
        if (item.isReady) {
          promises.push(this.getAllTempDataById(item.tempId));
        }
      });

      return Promise.all(promises);
    });
  }

  /**
   * mapApplicationsPendingToSave
   * @param items array of data
   */
  public mapApplicationsPendingToSave = (items: Array<any>) => {
    return items.map(item => {
      return Object.assign({}, item[0], {
        humidity: item[2]["humidity"],
        wind: item[2]["wind"],
        temperature: item[2]["temperature"],
        totalTime: item[3]["time"],
        startDate: item[3]["startDate"],
        endDate: item[3]["endDate"],
      });
    });
  }

  /**
   * removeTempApplication
   * @param tempId number
   */
  public removeTempApplication = (tempId: number) => {
    return Promise.all([
      this.removeTempApplicationById(tempId),
      this.removeTempApplicationChemicalsById(tempId),
      this.removeTempWeatherById(tempId),
      this.removeTempApplicationTimeById(tempId),
      this.removeApplicationLocationsById(tempId)
    ]);
  }

}
