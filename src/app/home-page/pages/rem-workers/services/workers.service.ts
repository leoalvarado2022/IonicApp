import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WorkersService {

  private readonly transferUrl = 'ejemplodeurl';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {

  }

  /**
   * transferWorkers
   * @param workers
   */
  public transferWorkers = (workers: Array<any>) => {
    const url = this.httpService.buildUrl(this.transferUrl);
    return this.httpClient.post(url, this.httpService.buildBody(workers), {headers: this.httpService.getHeaders()});
  }
}
