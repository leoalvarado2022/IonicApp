import {Injectable} from '@angular/core';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {HttpService} from '../../../../shared/services/http/http.service';

@Injectable()
export class ContractDetailService {

  private readonly getCostCenterUrl = 'costcenter';
  private readonly storeHarvestUrl = 'costcenter/store/harvest';
  private readonly storeQualityUrl = 'costcenter/store/quality';
  private readonly storeNoteUrl = 'costcenter/store/note';
  private readonly getNoteImageUrl = 'costcenter/note/image';
  private readonly storeCostCenterGeolocation = 'costcenter/store/geolocation-user';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private loaderService: LoaderService,
    private httpService: HttpService
  ) {

  }

  /**
   * storeHarvest
   * @param data
   */
  public storeHarvest = (data: any) => {
    const url = this.httpService.buildUrl(this.storeHarvestUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * storeQuality
   * @param data
   */
  public storeQuality = (data: any) => {
    const url = this.httpService.buildUrl(this.storeQualityUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * storeNote
   * @param data
   */
  public storeNote = (data: any) => {
    const url = this.httpService.buildUrl(this.storeNoteUrl);
    return this.httpClient.post(url, this.httpService.buildBody({note: data}), {headers: this.httpService.getHeaders()});
  }

  /**
   * updateGeolocationCostCenter
   * @param data
   */
  public updateGeolocationCostCenter = (data: any) => {
    const url = this.httpService.buildUrl(this.storeCostCenterGeolocation);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * getCostCenterDetail
   * @param id
   */
  public getCostCenterDetail = (id: string) => {
    const url = this.httpService.buildUrl(this.getCostCenterUrl, id);
    return this.httpClient.post(url, this.httpService.buildBody(), {headers: this.httpService.getHeaders()});
  }

  /**
   * getNoteImage
   * @param id
   */
  public getNoteImage = (id: string) => {
    const url = this.httpService.buildUrl(this.getNoteImageUrl, id);
    return this.httpClient.post(url, this.httpService.buildBody(), {headers: this.httpService.getHeaders()});
  }

}
