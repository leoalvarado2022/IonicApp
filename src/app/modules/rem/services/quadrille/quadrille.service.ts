import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { Storage } from '@ionic/storage';
import { StorageKeys } from 'src/app/services/storage/storage-keys';

@Injectable()
export class QuadrilleService {

  private readonly joinQuadrille = 'quadrille/join';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient,
    private storage: Storage    
  ) {

  }

  /**
   * transferWorkers
   * @param data 
   */
  public transferWorkers = (data: any) => {
    const url = this.httpService.buildUrl(this.joinQuadrille);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * getTransfers
   */
  public getTransfers = (): Promise< Array<any> > => {
    return this.storage.get(StorageKeys.WorkersTransfers).then( (transfers: Array<any>) => {
      return transfers ? transfers : [];
    });
  }

  /**
   * addTransfers
   * @param data 
   */
  public addTransfers = (data: any) => {
    return this.getTransfers().then((transfers: Array<any>) => {
      console.log('antes', transfers);
      transfers.push(data); 
      console.log('despues', transfers);
      
      return this.storage.set(StorageKeys.WorkersTransfers,  transfers);
    });
  }

}
