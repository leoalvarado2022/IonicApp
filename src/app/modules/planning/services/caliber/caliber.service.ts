import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable()
export class CaliberService {

  private readonly caliberEquivalences = 'caliber/equivalences';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {

  }
  
  /**
   * getCaliberEquivalences
   */
  public getCaliberEquivalences = (username: string, specieId: number) => {
    const url = this.httpService.buildUrl(this.caliberEquivalences);
    const body = this.httpService.buildBody({ username, specieId});
    return this.httpClient.post(url, body, {headers: this.httpService.getHeaders()});
  }

}
