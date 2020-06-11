import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Sync} from 'src/app/shared/services/store/store-interface';
import {Quadrille, TabMenu} from '@primetec/primetec-angular';
import {StorageKeys} from '../storage-keys';
import {Tally} from 'src/app/modules/tallies/tally.interface';
import {MainSyncService} from '../main/main-sync.service';

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
      bonds,
      menus,
      preContracts,
      countries,
      contractTypes,
      civilStatus,
      afps,
      isapres,
      devices
    } = data;

    Promise.all([
      this.setQuadrilles(quadrilles),
      this.setWorkers(workers),
      this.setTallies(tallies),
      this.setCostCentersCustom(costCentersCustom),
      this.setLabors(labors),
      this.setDeals(deals),
      this.setBonds(bonds),
      this.setMenus(menus),
      this.setPreContracts(preContracts),
      this.setCountries(countries),
      this.setContractTypes(contractTypes),
      this.setCivilStatus(civilStatus),
      this.setAfps(afps),
      this.setIsapres(isapres),
      this.setDevices(devices)
    ]).then(() => {
      console.log('storeSyncedData OK, event emmited');
      // AVISAR QUE CAMBIO EL SYNC
      this.syncChangedEvent();
    });
  };

  /**
   * setQuadrilles
   */
  private setQuadrilles = (quadrilles: Array<Quadrille>): Promise<Array<Quadrille>> => {
    return this.storage.set(StorageKeys.Quadrilles, quadrilles);
  };

  /**
   * getQuadrilles
   */
  public getQuadrilles = (): Promise<Array<Quadrille>> => {
    return this.storage.get(StorageKeys.Quadrilles).then((quadrilles: Array<Quadrille>) => {
      return quadrilles ? quadrilles : [];
    });
  };

  /**
   * setWorkers
   */
  private setWorkers = (workers: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Workers, workers);
  };

  /**
   * getWorkers
   */
  public getWorkers = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Workers).then((workers: Array<any>) => {
      return workers ? workers : [];
    });
  };

  /**
   * setTallies
   */
  private setTallies = (tallies: Array<Tally>): Promise<Array<Tally>> => {
    return this.storage.set(StorageKeys.Tallies, tallies);
  };

  /**
   * getTallies
   */
  public getTallies = (): Promise<Array<Tally>> => {
    return this.storage.get(StorageKeys.Tallies).then((tallies: Array<Tally>) => {
      return tallies ? tallies : [];
    });
  };

  /**
   * setCostCentersCustom
   */
  private setCostCentersCustom = (costCentersCustom: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.CostCentersCustom, costCentersCustom);
  };

  /**
   * costCentersCustom
   */
  public getCostCentersCustom = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.CostCentersCustom).then((costCentersCustom: Array<any>) => {
      return costCentersCustom ? costCentersCustom : [];
    });
  };

  /**
   * setLabors
   */
  private setLabors = (labors: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Labors, labors);
  };

  /**
   * getLabors
   */
  public getLabors = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Labors).then((labors: Array<any>) => {
      return labors ? labors : [];
    });
  };

  /**
   * setDeals
   */
  private setDeals = (deals: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Deals, deals);
  };

  /**
   * getDeals
   */
  public getDeals = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Deals).then((deals: Array<any>) => {
      return deals ? deals : [];
    });
  };

  /**
   * setBonds
   */
  private setBonds = (bonds: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Bonds, bonds);
  };

  /**
   * getBonds
   */
  public getBonds = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Bonds).then((bonds: Array<any>) => {
      return bonds ? bonds : [];
    });
  };

  /**
   * setMenus
   */
  public setMenus = (menus: Array<TabMenu>): Promise<Array<TabMenu>> => {
    return this.storage.set(StorageKeys.TabMenus, menus);
  };

  /**
   * getMenus
   */
  public getMenus = (): Promise<Array<TabMenu>> => {
    return this.storage.get(StorageKeys.TabMenus).then((menus: Array<TabMenu>) => {
      return menus ? menus : [];
    });
  };

  /**
   * setPreContracts
   */
  public setPreContracts = (preContracts: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.PreContracts, preContracts);
  };

  /**
   * getPreContracts
   */
  public getPreContracts = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.PreContracts).then((preContracts: Array<any>) => {
      return preContracts ? preContracts : [];
    });
  };

  /**
   * setCountries
   * @param countries
   */
  public setCountries = (countries: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Countries, countries);
  };

  /**
   * getCountries
   */
  public getCountries = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Countries).then((countries: Array<any>) => {
      return countries ? countries : [];
    });
  };

  /**
   * setContractTypes
   * @param contractTypes
   */
  public setContractTypes = (contractTypes: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.ContractTypes, contractTypes);
  };

  /**
   * getContractTypes
   */
  public getContractTypes(): Promise<Array<any>> {
    return this.storage.get(StorageKeys.ContractTypes).then((contractTypes: Array<any>) => {
      return contractTypes ? contractTypes : [];
    });
  }

  /**
   * setCivilStatus
   * @param civilStatus
   */
  public setCivilStatus(civilStatus: Array<any>): Promise<Array<any>> {
    return this.storage.set(StorageKeys.CivilStatus, civilStatus);
  }

  /**
   * getCivilStatus
   */
  public getCivilStatus = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.CivilStatus).then((civilStatus: Array<any>) => {
      return civilStatus ? civilStatus : [];
    });
  };

  /**
   * setAfps
   * @param afps
   */
  public setAfps = (afps: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Afp, afps);
  };

  /**
   * getAfps
   */
  public getAfps = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Afp).then((afps: Array<any>) => {
      return afps ? afps : [];
    });
  };

  /**
   * setIsapres
   * @param isapres
   */
  public setIsapres = (isapres: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Isapre, isapres);
  };

  /**
   * getIsapres
   */
  public getIsapres = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Isapre).then((isapres: Array<any>) => {
      return isapres ? isapres : [];
    });
  };

  /**
   * setDevices
   * @param devices
   */
  public setDevices = (devices: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Devices, devices);
  };

  /**
   * getDevices
   */
  public getDevices = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Devices).then((devices: Array<any>) => {
      return devices ? devices : [];
    });
  };

  /**
   * setDevicesToRecord
   * @param devicesToRecord
   */
  public setDevicesToRecord = (devicesToRecord: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.DevicesToRecord, devicesToRecord);
  };

  /**
   * getDevicesToRecord
   */
  public getDevicesToRecord = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.DevicesToRecord).then((devicesToRecord: Array<any>) => {
      return devicesToRecord ? devicesToRecord : [];
    });
  };

  /**
   * setTally Temp
   * @param tallyTemp
   */
  public setTallyTemp = (tallyTemp: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.TallyTemp, tallyTemp);
  };

  /**
   * getTemp
   */
  public getTallyTemp = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TallyTemp).then((tallyTemp: Array<any>) => {
      return tallyTemp ? tallyTemp : [];
    });
  };


  //////////////ASOCIAR NFC


}
