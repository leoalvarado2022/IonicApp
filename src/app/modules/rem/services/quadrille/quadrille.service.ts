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
   * getQuadrilleTransfers
   * @param quadrilleId 
   */
  public getQuadrilleTransfers = (quadrilleId: number) => {
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
   * getTransfersByQuadrille
   * @param quadrilleId 
   */
  public getTransfersByQuadrille = (quadrilleId: number): Promise<Array<any>> => {
    return this.getTransfers().then((transfers: Array<any>) => {      
      return transfers.filter(x => x.quadrille === quadrilleId);
    });
  }

  /**
   * clearQuadrilleTransfers
   * @param quadrilleId 
   */
  public clearQuadrilleTransfers = (quadrilleId: number): Promise<Array<any>> => {
    return this.getTransfers().then((transfers: Array<any>) => {      
      const filtered = transfers.filter(x => x.quadrille !== quadrilleId);
      return this.storage.set(StorageKeys.WorkersTransfers,  filtered);
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

      // Map ids
      const mapIds = acceptTransfers.map(worker => worker.id);

      // Process    
      for (let index = 0; index < currentTransfers.length; index++) {
        // Check if already exist
        if(mapIds.includes(currentTransfers[index].id)) {
          const deleteIndex = acceptTransfers.findIndex(x => x.id === currentTransfers[index].id);
          acceptTransfers.splice(deleteIndex, 1);
        }
      }
      
      return this.storage.set(StorageKeys.WorkersTransfers, [...acceptTransfers, ...currentTransfers]);
    });
  }

  /**
   * rejectTransfers
   * @param rejectTransfers 
   */
  public rejectTransfers = (rejectTransfers: Array<any>) => {
    return this.getTransfers().then((currentTransfers: Array<any>) => {

      // Map ids
      const mapIds = rejectTransfers.map(worker => worker.id);

      // Process    
      for (let index = 0; index < currentTransfers.length; index++) {
        // Check if already exist
        if(mapIds.includes(currentTransfers[index].id)) {
          const deleteIndex = rejectTransfers.findIndex(x => x.id === currentTransfers[index].id);
          rejectTransfers.splice(deleteIndex, 1);
        }
      }
      
      return this.storage.set(StorageKeys.WorkersTransfers, [...rejectTransfers, ...currentTransfers]);
    });
  }

}
