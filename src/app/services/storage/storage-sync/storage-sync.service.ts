import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Sync, Warehouse } from 'src/app/shared/services/store/store-interface';
import { Quadrille, TabMenu } from '@primetec/primetec-angular';
import { StorageKeys } from '../storage-keys';
import { Tally } from 'src/app/modules/tallies/tally.interface';
import { Machinery } from 'src/app/modules/machinery/machinery.interface';
import { Consumption } from './../../../shared/services/store/store-interface';

@Injectable({
  providedIn: 'root'
})
export class StorageSyncService {

  constructor(private storage: Storage) {

  }

  /**
   * storeAllSyncedData
   */
  public storeAllSyncedData = (data: Sync): Promise<any> => {
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
      devices,
      machinery,
      costCenterTypes,
      warehouses,
      consumptions
    } = data;

    return Promise.all([
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
      this.setDevices(devices),
      this.setMachinery(machinery),
      this.setCostCenterTypes(costCenterTypes),
      this.setWarehouses(warehouses),
      this.setConsumption(consumptions)
    ]);
  }

  /**
   * storeRemSyncData
   */
  public storeRemSyncData = (data: Sync): Promise<any> => {
    const { quadrilles, workers } = data;

    return Promise.all([
      this.setQuadrilles(quadrilles),
      this.setWorkers(workers)
    ]);
  }

  /**
   * storePreContractsSyncData
   * @param data
   */
  public storePreContractsSyncData = (data: Sync): Promise<any> => {
    const { preContracts } = data;

    return this.setPreContracts(preContracts);
  }

  /**
   * storeTalliesSyncData
   */
  public storeTalliesSyncData = (data: Sync): Promise<any> => {
    const {
      quadrilles,
      workers,
      labors,
      deals,
      costCentersCustom,
      tallies,
      bonds
    } = data;

    return Promise.all([
      this.setQuadrilles(quadrilles),
      this.setWorkers(workers),
      this.setTallies(tallies),
      this.setCostCentersCustom(costCentersCustom),
      this.setLabors(labors),
      this.setDeals(deals),
      this.setBonds(bonds),
    ]);
  }

  /**
   * setQuadrilles
   */
  private setQuadrilles = (quadrilles: Array<Quadrille>): Promise<Array<Quadrille>> => {
    return this.storage.set(StorageKeys.Quadrilles, quadrilles);
  }

  /**
   * getAllQuadrilles
   */
  public getAllQuadrilles = (): Promise<Array<Quadrille>> => {
    return this.storage.get(StorageKeys.Quadrilles).then( (quadrilles: Array<Quadrille>) => {
      return quadrilles ? quadrilles : [];
    });
  }

  /**
   * getQuadrillesByCurrentUser
   * @param currentUserId
   * @param isSuper
   */
  public getQuadrillesByCurrentUser = (currentUserId: number, isSuper: boolean = false): Promise<Array<Quadrille>> => {
    return this.storage.get(StorageKeys.Quadrilles).then( (quadrilles: Array<Quadrille>) => {
      if (quadrilles) {
        if (isSuper) {
          return quadrilles;
        } else {
          return quadrilles.filter(x => x.responsible === currentUserId);
        }
      }

      return [];
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
   * getCostCentersCustomByDeal
   * @param deal
   */
  public getCostCentersCustomByDeal = (deal: any): Promise<Array<any>> => {
    return Promise.all([
      this.getCostCentersCustom(),
      this.getDeals()
    ]).then( (data: Array<any>) => {
      const costCentersCustom: Array<any> = data[0];
      const deals: Array<any> = data[1];

      if (deal.allCostCenters) {
        return costCentersCustom;
      } else {
        // FILTRAR LOS TRATOS POR ID Y TOMAR LOS IDS DE LOS CENTROS DE COSTO
        const validCostCenters = deals.filter(item => item.id === deal.id).map(item => item.id_costCenter);

        return costCentersCustom.filter(item => {
          return validCostCenters.includes(item.id);
        });
      }
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

  /**
   * setMenus
   */
  private setMenus = (menus: Array<TabMenu>): Promise<Array<TabMenu>> => {
    return this.storage.set(StorageKeys.TabMenus, menus);
  }

  /**
   * getMenus
   */
  public getMenus = (): Promise<Array<TabMenu>> => {
    return this.storage.get(StorageKeys.TabMenus).then( (menus: Array<TabMenu>) => {
      return menus ? menus : [];
    });
  }

  /**
   * setPreContracts
   */
  private setPreContracts = (preContracts: Array<any>): Promise<Array<any>>  => {
    return this.storage.set(StorageKeys.PreContracts, preContracts);
  }

  /**
   * getPreContracts
   */
  public getPreContracts = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.PreContracts).then( (preContracts: Array<any>) => {
      return preContracts ? preContracts : [];
    });
  }

  /**
   * setCountries
   * @param countries
   */
  private setCountries = (countries: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Countries, countries);
  }

  /**
   * getCountries
   */
  public getCountries = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Countries).then( (countries: Array<any>) => {
      return countries ? countries : [];
    });
  }

  /**
   * setContractTypes
   * @param contractTypes
   */
  private setContractTypes = (contractTypes: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.ContractTypes, contractTypes);
  }

  /**
   * getContractTypes
   */
  public getContractTypes(): Promise<Array<any>> {
    return this.storage.get(StorageKeys.ContractTypes).then( (contractTypes: Array<any>) => {
      return contractTypes ? contractTypes : [];
    });
  }

  /**
   * setCivilStatus
   * @param civilStatus
   */
  private setCivilStatus(civilStatus: Array<any>): Promise<Array<any>> {
    return this.storage.set(StorageKeys.CivilStatus, civilStatus);
  }

  /**
   * getCivilStatus
   */
  public getCivilStatus = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.CivilStatus).then( (civilStatus: Array<any>) => {
      return civilStatus ? civilStatus : [];
    });
  }

  /**
   * setAfps
   * @param afps
   */
  private setAfps = (afps: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Afp, afps);
  }

  /**
   * getAfps
   */
  public getAfps = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Afp).then( (afps: Array<any>) => {
      return afps ? afps : [];
    });
  }

  /**
   * setIsapres
   * @param isapres
   */
  private setIsapres = (isapres: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Isapre, isapres);
  }

  /**
   * getIsapres
   */
  public getIsapres = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Isapre).then( (isapres: Array<any>) => {
      return isapres ? isapres : [];
    });
  }

  /**
   * setDevices
   * @param devices
   */
  private setDevices = (devices: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Devices, devices);
  }

  /**
   * getDevices
   */
  public getDevices = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Devices).then((devices: Array<any>) => {
      return devices ? devices : [];
    });
  }

  /**
   * setMachinery
   */
  private setMachinery = (machinery: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Machinery, machinery);
  }

  /**
   * getMachinery
   */
  public getMachinery = (): Promise<Array<Machinery>> => {
    return this.storage.get(StorageKeys.Machinery).then((machinery: Array<Machinery>) => {
      return machinery ? machinery : [];
    });
  }

  /**
   * getMachineryByCompany
   * @param companyId
   * @param userId
   * @param date
   * @param isSuper
   */
  public getMachineryByCompany = (companyId: number, userId: number, date: string, isSuper: boolean = false): Promise<Array<Machinery>> => {
    return this.getMachinery().then( (machinery: Array<Machinery>) => {
      if (isSuper) {
        return machinery.filter(item => {
          const splitDate = item.date.split('T')[0];
          return item.companyId === companyId && date === splitDate;
        });
      } else {
        return machinery.filter(item => {
          const splitDate = item.date.split('T')[0];
          return item.companyId === companyId && item.workerId === userId && date === splitDate;
        });
      }
    });
  }

  /**
   * setCostCenterTypes
   * @param costCenterTypes
   */
  private setCostCenterTypes = (costCenterTypes: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.CostCenterTypes, costCenterTypes);
  }

  /**
   * getCostCenterTypes
   */
  public getCostCenterTypes = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.CostCenterTypes).then((costCenterTypes: Array<any>) => {
      return costCenterTypes ? costCenterTypes : [];
    });
  }

  /**
   * setWarehouses
   * @param warehouses
   */
  private setWarehouses = (warehouses: Array<Warehouse>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Warehouses, warehouses);
  }

  /**
   * getWarehouses
   */
  public getWarehouses = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Warehouses).then((warehouses: Array<Warehouse>) => {
      return warehouses ? warehouses : [];
    });
  }

  /**
   * setConsumption
   * @param consumptions
   */
  private setConsumption = (consumptions: Array<Consumption>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Consumptions, consumptions);
  }

  /**
   * getConsumption
   */
  public getConsumption = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Consumptions).then((consumptions: Array<Consumption>) => {
      return consumptions ? consumptions : [];
    });
  }

  /**
   * getMachineryTypeCostCenters
   */
  public getMachineryTypeCostCenters = (): Promise<Array<any>> => {
    return Promise.all([
      this.getCostCenterTypes(),
      this.getCostCentersCustom(),
    ]).then((data: Array<any>) => {
       /**
        * Primer Filtro
        * - Centros de costo que esten el array de centros de costo tipo = maquinaria
        */
      const machineryTypes = data[0].filter(item => item.costCenterTypeId === 4);
      if (machineryTypes.length ===  0) {
        return [];
      }

      /**
       * Segundo filtro
       * - filtrar tipo de maquinaria Automata o Maquinaria
       */
      const mapped = machineryTypes.map(item => item.costCenterId);
      return data[1].filter(item => mapped.includes(item.id) && (item.machineryType.toLowerCase() === 'automata' || item.machineryType.toLowerCase() === 'maquinaria'));
    });
  }

  /**
   * getImplementTypeCostCenters
   */
  public getImplementTypeCostCenters = (): Promise<Array<any>> => {
    return Promise.all([
      this.getCostCenterTypes(),
      this.getCostCentersCustom(),
    ]).then((data: Array<any>) => {
       /**
        * Primer Filtro
        * - Centros de costo que esten el array de centros de costo tipo = maquinaria
        */
      const machineryTypes = data[0].filter(item => item.costCenterTypeId === 4);
      if (machineryTypes.length ===  0) {
        return [];
      }

      /**
       * Segundo filtro
       * - filtrar tipo de maquinaria Implemento
       */
      const mapped = machineryTypes.map(item => item.costCenterId);
      return data[1].filter(item => mapped.includes(item.id) && item.machineryType.toLowerCase() === 'implemento');
    });
  }

  /**
   * setTally Temp
   * @param tallyTemp
   */
  public setTallyTemp = (tallyTemp: Array<any> = []): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.TallyTemp, tallyTemp);
  }

  /**
   * getTemp
   */
  public getTallyTemp = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.TallyTemp).then( (tallyTemp: Array<any>) => {
      return tallyTemp ? tallyTemp : [];
    });
  }

  /**
   * addTalliesToSyncedTallies
   * @param recorded
   */
  public addDevicesToSyncedDevices = (recorded: Array<number>) => {
    return this.storage.get(StorageKeys.Devices).then((syncedDevices: Array<any>) => {
      if (syncedDevices) {
        // REVISAR AQUI
        // const mergeArrays = syncedDevices.filter(x => recorded.includes(x.tempId) && x.status !== 'delete' );
        const mergeArrays = syncedDevices.filter(x => recorded.includes(x.tempId));
        return this.storage.set(StorageKeys.Devices, mergeArrays);
      }

      return [];
    });
  }

  /**
   * deletePreContractFromStorage
   * @param preContractId
   */
  public deletePreContractFromStorage = (preContractId: number): Promise<Array<any>> => {
    return this.getPreContracts().then( (preContracts: Array<any>) => {

      if (preContracts) {
        const filtered = preContracts.filter(x => x.id !== preContractId);
        return this.setPreContracts(filtered);
      }

      return Promise.resolve([]);
    });
  }

  /**
   * clearStorage
   */
  public clearStorage = (): Promise<any> => {
    return this.storage.clear();
  }

}
