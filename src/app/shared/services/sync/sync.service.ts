import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../storage/storage.service';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  private readonly syncUrl = 'sync/mobile';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private storageService: StorageService,
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


