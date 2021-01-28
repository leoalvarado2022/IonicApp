import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable()
export class ApplicationRegistryService {

  private readonly getOrdersListUrl = 'application-registry/orders';
  private readonly getApplicationsListUrl = 'application-registry/applications';
  private readonly storeApplicationUrl = 'application-registry/store';
  private readonly getApplicationUrl = 'application-registry/get';
  private readonly updateApplicationUrl = 'application-registry/update';
  private readonly deleteApplicationUrl = 'application-registry/delete';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {

  }

  /**
   * getList
   * @param companyId
   * @param user
   */
  public getOrderList = (companyId: number, user: number) => {
    const url = this.httpService.buildUrl(this.getOrdersListUrl);
    const body = this.httpService.buildBody({ companyId, user });
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

  /**
   * getApplicationList
   * @param orderId
   * @param filter
   */
  public getApplicationList = (orderId: number, filter: string = '') => {
    const url = this.httpService.buildUrl(this.getApplicationsListUrl);
    const body = this.httpService.buildBody({ orderId, filter });
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

  /**
   * storeApplication
   * @param user user id
   * @param applicationHeader order header
   * @param application application data
   * @param applicationLocations gps locations
   * @param applicationChemicals chemicals used
   */
  public storeApplication = (user: number, applicationHeader: any, application: any, applicationLocations: Array<any> = [], applicationChemicals: Array<any> = []) => {
    const url = this.httpService.buildUrl(this.storeApplicationUrl);
    const body = this.httpService.buildBody({ user, applicationHeader, application, applicationLocations, applicationChemicals });
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

  /**
  * updateApplication
  * @param user user id
  * @param applicationHeader order header
  * @param application application data
  * @param applicationLocations gps locations
  * @param applicationChemicals chemicals used
  */
  public updateApplication = (user: number, applicationHeader: any, application: any, applicationLocations: Array<any> = [], applicationChemicals: Array<any> = []) => {
    const url = this.httpService.buildUrl(this.updateApplicationUrl);
    const body = this.httpService.buildBody({ user, applicationHeader, application, applicationLocations, applicationChemicals });
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

  /**
   * deleteApplication
   * @param application application data
   * @param user user id
   */
  public deleteApplication = (application: any, user: number) => {
    const url = this.httpService.buildUrl(this.deleteApplicationUrl);
    const body = this.httpService.buildBody({ application, user });
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

  /**
   * getApplication
   * @param id application id
   */
  public getApplication = (id: string) => {
    const url = this.httpService.buildUrl(this.getApplicationUrl, id);
    const body = this.httpService.buildBody();
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

}
