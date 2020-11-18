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
   *setOrderMachinery
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
      return orderBalanceToApply.find(item => item.applicationOrderId === id);
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
  };

  /**
   * getNextApplicationTempId
   */
  public getNextApplicationTempId = (): Promise<any> => {
    return this.getApplicationTempId().then((applicationTempId: number) => {
      return this.storage.set(StorageKeys.ApplicationTempId, applicationTempId + 1);
    });
  };

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

}
