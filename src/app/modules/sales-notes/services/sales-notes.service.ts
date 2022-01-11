import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http/http.service';

@Injectable()
export class SalesNotesService {

  private readonly listSalesUrl = 'mobile/sales/notes/list';
  private readonly clientSalesUrl = 'mobile/sales/client';
  private readonly docParamsUrl = 'inventories/document/0';
  private readonly numberUrl = 'inventories/document/number';
  private readonly quantityUrl = 'inventories/document/quantity';
  private readonly balanceUrl = 'inventories/document/balance';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {}

  public listSalesNotes = (data?) => {
    const url = this.httpService.buildUrl(this.listSalesUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public clientSalesNotes = (data?) => {
    const url = this.httpService.buildUrl(this.clientSalesUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public documentParams = (data?) => {
    const url = this.httpService.buildUrl(this.docParamsUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public getNumber = (data?) => {
    const url = this.httpService.buildUrl(this.numberUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public getQuantity = (data?) => {
    const url = this.httpService.buildUrl(this.quantityUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  public getBalance = (data?) => {
    const url = this.httpService.buildUrl(this.balanceUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }
}

