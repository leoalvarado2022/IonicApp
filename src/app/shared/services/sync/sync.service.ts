import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../http/http.service';
import {DeviceService} from '../../../services/device/device.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  private readonly syncUrl = 'sync/mobile';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private deviceService: DeviceService
  ) {

  }

  /**
   * syncData
   * @param username
   * @param superuser
   */
  public syncData = (username: string, superuser: number) => {
    const url = this.httpService.buildUrl(this.syncUrl);
    return this.httpClient.post(url, this.httpService.buildBody({
      username,
      superuser,
      // nc: this.deviceService.getUUIDAndroid() || '54a62048537a716a'
      nc: this.deviceService.getUUIDAndroid()
    }), {headers: this.httpService.getHeaders()});
  };

}
