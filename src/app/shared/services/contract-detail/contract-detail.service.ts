import {Injectable} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContractDetailService {

  private readonly getCostCenterUrl = 'costcenter';
  private readonly storeHarvestUrl = 'costcenter/store/harvest';
  private readonly storeNoteUrl = 'costcenter/store/note';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {

  }

  /**
   * getCostCenter
   * @param id
   */
  public getCostCenter = (id: string) => {
    const url = this.authService.buildUrl(this.getCostCenterUrl, id);
    return this.httpClient.post(url, this.authService.buildBody(), {headers: this.authService.getHeaders()});
  }

  /**
   * storeHarvest
   * @param data
   */
  public storeHarvest = (data: any) => {
    const url = this.authService.buildUrl(this.storeHarvestUrl);
    return this.httpClient.post(url, this.authService.buildBody(data), {headers: this.authService.getHeaders()});
  }

  /**
   * storeNote
   * @param data
   */
  public storeNote = (data: any) => {
    const url = this.authService.buildUrl(this.storeNoteUrl);
    return this.httpClient.post(url, this.authService.buildBody({note: data}), {headers: this.authService.getHeaders()});
  }

}
