import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  private readonly syncUrl = 'sync/mobile';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {

  }

  /**
   * syncData
   * @param username
   * @param superuser
   */
  public syncData = (username: string, superuser: number) => {
    const url = this.httpService.buildUrl(this.syncUrl);
    return this.httpClient.post(url, this.httpService.buildBody({username, superuser}), {headers: this.httpService.getHeaders()});
  }

}
