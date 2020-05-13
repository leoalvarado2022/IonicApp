import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../../shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TallyService {

  private readonly recordTalliesUrl = 'tallies/record';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {

  }

  /**
   * recordTallies
   * @param tallies
   */
  public recordTallies = (tallies: Array<any>) => {
    const url = this.httpService.buildUrl(this.recordTalliesUrl);
    return this.httpClient.post(url, this.httpService.buildBody({tallies}), {headers: this.httpService.getHeaders()});
  }

}
