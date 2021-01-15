import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable()
export class ApplicationRegistryService {

  private readonly getOrdersListUrl = 'application-registry/orders';
  private readonly getApplicationsListUrl = 'application-registry/applications';
  private readonly storeApplicationUrl = 'application-registry/store';
  private readonly getApplicationUrl = 'application-registry/get';

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
   * @param header order header
   * @param application application data
   * @param applicationLocations gps locations
   * @param applicationChemicals chemicals used
   */
  public storeApplication = (user: number, header: any, application: any, applicationLocations: any, applicationChemicals: any) => {
    const url = this.httpService.buildUrl(this.storeApplicationUrl);
    const body = this.httpService.buildBody({ user, header, application, applicationLocations, applicationChemicals });        
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

  /**
   * getApplication
   * @param id 
   */
  public getApplication = (id: string) => {
    const url = this.httpService.buildUrl(this.getApplicationUrl, id);
    const body = this.httpService.buildBody();
    return this.httpClient.post(url, body, { headers: this.httpService.getHeaders() });
  }

}
