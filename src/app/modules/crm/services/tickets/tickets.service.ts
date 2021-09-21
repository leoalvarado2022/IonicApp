import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TicketsService {

  private readonly ticketParamsUrl = 'mobile/ticket/0';
  private readonly ticketsUrl = 'mobile/ticket/list';
  private readonly getTicketUrl = 'mobile/ticket';
  private readonly storeTicketUrl = 'mobile/ticket/store';
  private readonly ticketUsersUrl = 'mobile/ticket/client';

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

  /**
   * getTicketUsers
   * @param client
   * @param user
   */
  public getTicketUsers = (client: number, user: number) => {
    const url = this.httpService.buildUrl(this.ticketUsersUrl);
    return this.httpClient.post(url, this.httpService.buildBody({id: client, user}), {headers: this.httpService.getHeaders()});
  }

  /**
   * getTicketParamss
   * @param data
   */
  public getTicketParams = (data: any = null) => {
    const url = this.httpService.buildUrl(this.ticketParamsUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }
}
