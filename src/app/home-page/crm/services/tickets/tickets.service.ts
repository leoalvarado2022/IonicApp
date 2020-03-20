import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TicketsService {

  private readonly ticketsUrl = 'crm/ticket/list';
  private readonly getTicketUrl = 'crm/ticket';
  private readonly storeTicketUrl = 'crm/ticket/store';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {

  }

  /**
   * getTickets
   * @param data
   */
  public getTickets = (data: any) => {
    const url = this.httpService.buildUrl(this.ticketsUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * getTicket
   * @param id
   * @param data
   */
  public getTicket = (id: string, data: any) => {
    const url = this.httpService.buildUrl(this.getTicketUrl, id);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * storeTicket
   * @param data
   */
  public storeTicket = (data: any) => {
    const url = this.httpService.buildUrl(this.storeTicketUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }
}
