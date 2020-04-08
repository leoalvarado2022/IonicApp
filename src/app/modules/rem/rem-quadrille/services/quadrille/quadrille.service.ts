import {Injectable} from '@angular/core';
import {HttpService} from '../../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuadrilleService {

  private readonly joinQuadrille = 'quadrille/join';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {

  }

  public transferWorkers = (data: any) => {
    const url = this.httpService.buildUrl(this.joinQuadrille);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

}
