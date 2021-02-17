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
    return this.storage.get(StorageKeys.ApplicationLocation).then((applicationLocations: Array<ApplicationLocationInterface>) => {
      return applicationLocations ? applicationLocations : [];
    });
  }

  /**
   * setApplicationLocations
   * @param applicationLocations
   */
  public setApplicationLocations = (applicationLocations: Array<ApplicationLocationInterface>): Promise<Array<ApplicationLocationInterface>> => {
    return this.storage.set(StorageKeys.ApplicationLocation, applicationLocations);
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
   * @param id
   */
  public getApplicationLocationsById = (id: number): Promise<Array<ApplicationLocationInterface>> => {
    return this.getApplicationLocations().then((applicationLocations: Array<ApplicationLocationInterface>) => {
      return applicationLocations.filter(item => item.id === id);
    });
  }

  /**
   * clearApplicationLocationsById
   * @param id
   */
  public clearApplicationLocationsById = (id: number): Promise<Array<ApplicationLocationInterface>> => {
    return this.getApplicationLocations().then((applicationLocations: Array<ApplicationLocationInterface>) => {
      return applicationLocations.filter(item => item.id !== id);
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
   * getAllTempDataById
   * @param tempId id
   */
  public getAllTempDataById = (tempId: number): Promise<Array<any>> => {
    return Promise.all([
      this.getTempApplicationById(tempId),
      this.getTempApplicationChemicalsById(tempId),
      this.getTempWeatherById(tempId),
      this.getTempApplicationTimeById(tempId)
    ]);
  }

}
