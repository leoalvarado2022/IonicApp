import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http/http.service';

@Injectable()
export class PickingService {

  private readonly pickingClientsUrl = 'mobile/logistic/clients';
  private readonly orderByExternalUrl = 'mobile/logistic/get';
  private readonly updateOrderUrl = 'mobile/logistic/update';
  private readonly removeOrderUrl = 'mobile/logistic/delete';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {}

  public pickingClients = (data) => {
    const url = this.httpService.buildUrl(this.pickingClientsUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public findOrdenByExternal = (data) => {
    const url = this.httpService.buildUrl(this.orderByExternalUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public updateOrder = (data) => {
    const url = this.httpService.buildUrl(this.updateOrderUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public removeOrder = (data) => {
    const url = this.httpService.buildUrl(this.removeOrderUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }
}

