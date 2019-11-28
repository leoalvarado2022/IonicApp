import {Injectable} from '@angular/core';
import {AuthService} from '../../../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContractDetailService {

  private readonly getCostCenterUrl = 'costcenter';

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

}
