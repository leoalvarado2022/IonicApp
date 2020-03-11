import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TicketsService {

  private readonly ticketsUrl = 'crm/ticket/list';

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
}
