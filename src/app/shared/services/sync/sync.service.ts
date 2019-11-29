import {Injectable} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../storage/storage.service';
import {Company, CostCenterList, TabMenu} from '@primetec/primetec-angular';

@Injectable()
export class SyncService {

  private readonly syncUrl = 'sync/mobile';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {

  }

  /**
   * syncData
   * @param username
   */
  public syncData = (username: string) => {
    const url = this.authService.buildUrl(this.syncUrl);
    return this.httpClient.post(url, this.authService.buildBody({username}), {headers: this.authService.getHeaders()});
  }

  /**
   * storeSync
   * @param data
   */
  public storeSync = async (data) => {
    if (data) {
      const {companies, costCenters, menus, units, qualities, calibers} = data;

      if (!this.authService.getCompany() && companies) {
        this.authService.setCompany(companies[0]);
      }

      await this.setCompanies(companies);
      await this.setCostCenters(costCenters);
      await this.setMenus(menus);
      await this.setUnits(units);
      await this.setQualities(qualities);
      await this.setCalibers(calibers);
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
  public setUnits = async (units: Array<any>) => {
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
  public setQualities = async (qualities: Array<any>) => {
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
  public setCalibers = async (calibers: Array<any>) => {
    await this.storageService.setRow('calibers', calibers);
  }

  /**
   * getCalibers
   */
  public getCalibers = async () => {
    return await this.storageService.getRow('calibers');
  }

}
