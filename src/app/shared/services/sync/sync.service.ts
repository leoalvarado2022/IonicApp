import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../storage/storage.service';
import {Caliber, CfgAccess, Company, CostCenterList, EntityList, Generic, Quadrille, TabMenu, Unit} from '@primetec/primetec-angular';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  private readonly syncUrl = 'sync/mobile';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private storageService: StorageService,
    private httpService: HttpService
  ) {

  }

  /**
   * syncData
   * @param username
   */
  public syncData = (username: string) => {
    const url = this.httpService.buildUrl(this.syncUrl);
    return this.httpClient.post(url, this.httpService.buildBody({username}), {headers: this.httpService.getHeaders()});
  }

  /**
   * storeSync
   * @param data
   */
  public storeSync = async (data) => {
    if (data) {
      const {
        companies,
        costCenters,
        menus,
        units,
        qualities,
        calibers,
        cfgAccess,
        quadrilles,
        workers,
        processPlants,
        destinations
      } = data;

      await this.setCompanies(companies);
      await this.setCostCenters(costCenters);
      await this.setMenus(menus);
      await this.setUnits(units);
      await this.setQualities(qualities);
      await this.setCalibers(calibers);
      await this.setAccess(cfgAccess);
      await this.setQuadrilles(quadrilles);
      await this.setWorkers(workers);
      await this.setProcessPlants(processPlants);
      await this.setDestinations(destinations);
    }
  }

  /**
   * setCompanies
   * @param companies
   */
  public setCompanies = async (companies: Array<Company>) => {
    await this.storageService.setRow('companies', companies);
  }

  /**
   * getCompanies
   */
  public getCompanies = async () => {
    return await this.storageService.getRow('companies');
  }

  /**
   * setCostCenters
   */
  public setCostCenters = async (costCenters: Array<CostCenterList>) => {
    await this.storageService.setRow('costCenters', costCenters);
  }

  /**
   * getCostCenters
   */
  public getCostCenters = async () => {
    return await this.storageService.getRow('costCenters');
  }

  /**
   * setMenus
   */
  public setMenus = async (menus: Array<TabMenu>) => {
    await this.storageService.setRow('menus', menus);
  }

  /**
   * getMenus
   */
  public getMenus = async () => {
    return await this.storageService.getRow('menus');
  }

  /**
   * setUnits
   * @param units
   */
  public setUnits = async (units: Array<Unit>) => {
    await this.storageService.setRow('units', units);
  }

  /**
   * getUnits
   */
  public getUnits = async () => {
    return await this.storageService.getRow('units');
  }

  /**
   * setQualities
   * @param menus
   */
  public setQualities = async (qualities: Array<Generic>) => {
    await this.storageService.setRow('qualities', qualities);
  }

  /**
   * getQualities
   */
  public getQualities = async () => {
    return await this.storageService.getRow('qualities');
  }

  /**
   * setCalibers
   * @param calibers
   */
  public setCalibers = async (calibers: Array<Caliber>) => {
    await this.storageService.setRow('calibers', calibers);
  }

  /**
   * getCalibers
   */
  public getCalibers = async () => {
    return await this.storageService.getRow('calibers');
  }

  /**
   * setAccess
   * @param cfgAccess
   */
  private setAccess = async (cfgAccess: Array<CfgAccess>) => {
    await this.storageService.setRow('cfgAccess', cfgAccess);
  }

  /**
   * getAccess
   */
  public getAccess = async () => {
    return await this.storageService.getRow('cfgAccess');
  }

  /**
   * setQuadrilles
   * @param quadrilles
   */
  private setQuadrilles = async (quadrilles: Array<Quadrille>) => {
    await this.storageService.setRow('quadrilles', quadrilles);
  }

  /**
   * getQuadrilles
   */
  public getQuadrilles = async () => {
    return await this.storageService.getRow('quadrilles');
  }

  /**
   * setWorkers
   * @param workers
   */
  private setWorkers = async (workers: Array<any>) => {
    console.log({workers});
    await this.storageService.setRow('workers', workers);
  }

  /**
   * getWorkers
   */
  public getWorkers = async () => {
    return await this.storageService.getRow('workers');
  }

  /**
   * setProcessPlants
   * @param processPlants
   */
  private setProcessPlants = async (processPlants: Array<EntityList>) => {
    await this.storageService.setRow('processPlants', processPlants);
  }

  /**
   * getProcessPlants
   */
  public getProcessPlants = async () => {
    return await this.storageService.getRow('processPlants');
  }

  /**
   * setDestinations
   * @param destinations
   */
  private setDestinations = async (destinations: Array<Generic>) => {
    await this.storageService.setRow('destinations', destinations);
  }

  /**
   * getDestinations
   */
  public getDestinations = async () => {
    return await this.storageService.getRow('destinations');
  }

}


