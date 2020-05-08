import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  private readonly associateUrl = 'nfc/asssocite';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) { }

  /**
   * @description save PreDevices
   * @param preDevices
   * @param user
   */
  public saveDevicesToRecord = (preDevices: any, user: any) => {
    const url = this.httpService.buildUrl(this.associateUrl);
    return this.httpClient.post(url, this.httpService.buildBody({preDevices, user}), {
      headers: this.httpService.getHeaders()
    });
  };
}
