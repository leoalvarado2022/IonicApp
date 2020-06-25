import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { Storage } from '@ionic/storage';
import { StorageKeys } from 'src/app/services/storage/storage-keys';
import { TransferActions } from '../../TransferActions';

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
  public transferWorkers = (data: Array<any>) => {
    const url = this.httpService.buildUrl(this.joinQuadrille);
    return this.httpClient.post(url, this.httpService.buildBody({data}), {headers: this.httpService.getHeaders()});
  }

  /**
   * getQuadrilleWorkers
   * @param quadrilleId 
   */
  public getQuadrilleWorkers = (quadrilleId: number) => {
    return this.storage.get(StorageKeys.Workers).then( (workers: Array<any>) => {
      if (workers) {
        return workers.filter(worker => worker.quadrille === quadrilleId || worker.quadrilleToApprove === quadrilleId);
      }

      return [];      
    });
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
   * getQuadrilleTransfers
   * @param quadrilleId 
   */
  public getQuadrilleTransfers = (quadrilleId: number): Promise<Array<any>> => {
    return this.getTransfers().then((transfers: Array<any>) => {      
      return transfers.filter(x => x.quadrille === quadrilleId || 
        (x.quadrilleToApprove === quadrilleId && 
        ( x.quadrilleStatus.toLowerCase() === TransferActions.Aprobado || x.quadrilleStatus.toLowerCase() === TransferActions.Rechazado)));
    });
  }

  /**
   * clearQuadrilleTransfers
   * @param quadrilleId 
   */
  public clearQuadrilleTransfers = (quadrilleId: number): Promise<Array<any>> => {
    return this.getTransfers().then( (transfers: Array<any>) => {

      const toRemove = [];
      transfers.forEach(item => {
        if (item.quadrille === quadrilleId || item.quadrilleToApprove === quadrilleId) {          
          const index = transfers.indexOf(item);
          toRemove.push(index);
        }
      });

      for (let index = 0; index < toRemove.length; index++) {
        transfers = transfers.splice( toRemove[index], 1);
      }      
      
      return this.storage.set(StorageKeys.WorkersTransfers,  transfers);
    });    
  }

  /**
   * addTransfers
   * @param newTransfers 
   */
  public addTransfers = (newTransfers: Array<any>) => {
    return this.getTransfers().then((currentTransfers: Array<any>) => {

      // Map ids
      const mapIds = currentTransfers.map(worker => worker.id);
      
      // Filter
      const filterDuplicates = newTransfers.filter(n => !mapIds.includes(n.id));

      // Merge
      const mergeArray = [...filterDuplicates, ...currentTransfers];      

      // Return 
      return this.storage.set(StorageKeys.WorkersTransfers,  mergeArray);
    });
  }

  /**
   * cancelTransfers
   * @param cancelTransfers 
   */
  public cancelTransfers = (cancelTransfers: Array<any>) => {
    return this.getTransfers().then((currentTransfers: Array<any>) => {

      cancelTransfers = cancelTransfers.filter(cancelItem => {
        const findIndex = currentTransfers.findIndex( currentItem => currentItem.id === cancelItem.id);

        if(findIndex > -1) {
          currentTransfers.splice(findIndex, 1);

          if(cancelItem.quadrilleStatus.toLowerCase() === TransferActions.ApruebaRechazo){
            return false;          
          }
        }

        return true;
      });

      // Merge
      const mergeArray = [...cancelTransfers, ...currentTransfers];      

      // Return 
      return this.storage.set(StorageKeys.WorkersTransfers,  mergeArray);
    });
  }

  /**
   * acceptTransfers
   * @param acceptTransfers 
   */
  public acceptTransfers = (acceptTransfers: Array<any>) => {
    return this.getTransfers().then((currentTransfers: Array<any>) => {

      acceptTransfers = acceptTransfers.filter(acceptItem => {
        const findIndex = currentTransfers.findIndex( currentItem => currentItem.id === acceptItem.id);

        if(findIndex > -1) {
          currentTransfers.splice(findIndex, 1);

          if(acceptItem.quadrilleStatus.toLowerCase() === TransferActions.ApruebaRechazo){
            return false;          
          }
        }

        return true;
      });

      // Merge
      const mergeArray = [...acceptTransfers, ...currentTransfers];      

      // Return 
      return this.storage.set(StorageKeys.WorkersTransfers,  mergeArray);
    });
  }

  /**
   * rejectTransfers
   * @param rejectTransfers 
   */
  public rejectTransfers = (rejectTransfers: Array<any>) => {
    return this.getTransfers().then((currentTransfers: Array<any>) => {

      rejectTransfers = rejectTransfers.filter(rejectItem => {
        const findIndex = currentTransfers.findIndex( currentItem => currentItem.id === rejectItem.id);

        if(findIndex > -1) {
          currentTransfers.splice(findIndex, 1);

          if(rejectItem.quadrilleStatus.toLowerCase() === TransferActions.Rechazado){
            return false;          
          }
        }

        return true;
      });

      // Merge
      const mergeArray = [...rejectTransfers, ...currentTransfers];      

      // Return 
      return this.storage.set(StorageKeys.WorkersTransfers,  mergeArray);
    });
  }

}
