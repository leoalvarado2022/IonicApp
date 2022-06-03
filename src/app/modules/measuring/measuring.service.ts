import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../shared/services/http/http.service';
import { StoreService } from 'src/app/shared/services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class MeasuringService {

  private readonly recordMeasuringUrl = 'app/measuring/store';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private storeService: StoreService
  ) {

  }

  /**
   * recordMeasuring
   * @param Measuring
   */
  public recordMeasuring = (Measuring: Array<any>) => {
    const url = this.httpService.buildUrl(this.recordMeasuringUrl);
    const user = this.storeService.getActiveCompany();

    const obj = { 
      user: user.user,
      details: Measuring 
    };
    
    return this.httpClient.post(url, this.httpService.buildBody(obj), {headers: this.httpService.getHeaders()});
  }
}