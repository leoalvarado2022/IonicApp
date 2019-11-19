import {Injectable} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../../../services/storage/storage.service';

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
      const {companies, costCenters, menus} = data;

      await this.setCompanies(companies);
      await this.setCostCenters(costCenters);
      await this.setMenus(menus);
    }
  }

  /**
   * setCompanies
   * @param companies
   */
  public setCompanies = async (companies: any) => {
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
  public setCostCenters = async (costCenters: any) => {
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
  public setMenus = async (menus: any) => {
    await this.storageService.setRow('menus', menus);
  }

  /**
   * getMenus
   */
  public getMenus = async () => {
    return await this.storageService.getRow('menus');
  }

}
