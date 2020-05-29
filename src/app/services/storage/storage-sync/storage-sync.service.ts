import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Sync } from 'src/app/shared/services/store/store-interface';
import { Quadrille } from '@primetec/primetec-angular';
import { StorageKeys } from '../storage-keys';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { MainSyncService } from '../main/main-sync.service';

@Injectable({
  providedIn: 'root'
})
export class StorageSyncService extends MainSyncService {

  constructor(private storage: Storage) {
    super();
  }

  /**
   * storeSyncedData
   */
  public storeSyncedData = (data: Sync) => {
    const {
      quadrilles,
      workers,
      labors,
      deals,
      costCentersCustom,
      tallies,
      bonds
    } = data;

    Promise.all([
      this.setQuadrilles(quadrilles),
      this.setWorkers(workers),
      this.setTallies(tallies),
      this.setCostCentersCustom(costCentersCustom),
      this.setLabors(labors),
      this.setDeals(deals),
      this.setBonds(bonds)
    ]).then( () => {
      console.log('storeSyncedData OK, event emmited');
      // AVISAR QUE CAMBIO EL SYNC
      this.syncChangedEvent();
    });
  }

  /**
   * setQuadrilles
   */
  private setQuadrilles = (quadrilles: Array<Quadrille>): Promise<Array<Quadrille>> => {
    return this.storage.set(StorageKeys.Quadrilles, quadrilles);
  }

  /**
   * getQuadrilles
   */
  public getQuadrilles = (): Promise<Array<Quadrille>> => {
    return this.storage.get(StorageKeys.Quadrilles).then( (quadrilles: Array<Quadrille>) => {
      return quadrilles ? quadrilles : [];
    });
  }

  /**
   * setWorkers
   */
  private setWorkers = (workers: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Workers, workers);
  }

  /**
   * getWorkers
   */
  public getWorkers = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Workers).then( (workers: Array<any>) => {
      return workers ? workers : [];
    });
  }

  /**
   * setTallies
   */
  private setTallies = (tallies: Array<Tally>): Promise<Array<Tally>> => {
    return this.storage.set(StorageKeys.Tallies, tallies);
  }

  /**
   * getTallies
   */
  public getTallies = (): Promise<Array<Tally>> => {
    return this.storage.get(StorageKeys.Tallies).then( (tallies: Array<Tally>) => {
      return tallies ? tallies : [];
    });
  }

  /**
   * setCostCentersCustom
   */
  private setCostCentersCustom = (costCentersCustom: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.CostCentersCustom, costCentersCustom);
  }

  /**
   * costCentersCustom
   */
  public getCostCentersCustom = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.CostCentersCustom).then( (costCentersCustom: Array<any>) => {
      return  costCentersCustom ? costCentersCustom : [];
    });
  }

  /**
   * setLabors
   */
  private setLabors = (labors: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Labors, labors);
  }

  /**
   * getLabors
   */
  public getLabors = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Labors).then( (labors: Array<any>) => {
      return labors ? labors : [];
    });
  }

  /**
   * setDeals
   */
  private setDeals = (deals: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Deals, deals);
  }

  /**
   * getDeals
   */
  public getDeals = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Deals).then( (deals: Array<any>) => {
      return deals ? deals : [];
    });
  }

  /**
   * setBonds
   */
  private setBonds = (bonds: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Bonds, bonds);
  }

  /**
   * getBonds
   */
  public getBonds = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Bonds).then( (bonds: Array<any>) => {
      return bonds ? bonds : [];
    });
  }

}
