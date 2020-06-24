import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActionSheetController} from '@ionic/angular';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { Quadrille } from '@primetec/primetec-angular';
import { QuadrilleService } from '../services/quadrille/quadrille.service';
import { TransferActions } from '../TransferActions';

@Component({
  selector: 'app-rem-workers',
  templateUrl: './rem-workers.page.html',
  styleUrls: ['./rem-workers.page.scss'],
})
export class RemWorkersPage implements OnInit, OnDestroy {

  private quadrilles: Array<Quadrille> = [];
  private allQuadrilles: Array<Quadrille> = [];
  public quadrille: Quadrille;  

  private workers: Array<any> = [];
  private filteredWorkers: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  public printableWorkers: Array<any> = [];

  private onMemoryTransfers: Array<any> = [];  

  private firstLoad = false;
  public isLoading = false;
  private buttons: Array<any> = [];    

  private stepper$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private quadrilleService: QuadrilleService,
    private httpService: HttpService,
    private storageSyncService: StorageSyncService,
    private stepperService: StepperService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe((steps: Array<any>) => {
      if (steps.length === 0 && !this.firstLoad ) {
        this.loadWorkers();
      }
    });
  }

  ngOnDestroy(): void {
    this.stepper$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadWorkers();
  }

  /**
   * loadWorkers
   */
  private loadWorkers = () => {
    const id = this.route.snapshot.paramMap.get('id');

    this.firstLoad = false;
    this.isLoading = true;

    const activeCompany = this.storeService.getActiveCompany();
    const access = this.storeService.getAccess();

    Promise.all([
      this.storageSyncService.getQuadrillesByCurrentUser(activeCompany.user, !!access.find(x => x.functionality === 4)),
      this.quadrilleService.getQuadrilleTransfers(+id),
      this.storageSyncService.getAllQuadrilles(),
      this.quadrilleService.getTransfersByQuadrille(+id)
    ]).then((data) => {
      this.selectedWorkers = [];

      this.quadrilles = data[0];
      this.quadrille = this.quadrilles.find(item => item.id === +id);
      this.allQuadrilles = data[2];

      this.onMemoryTransfers = this.filterTransfers(data[3], +id);
      this.workers = this.orderByTransfersFirst(data[1]);
      this.filteredWorkers = this.removeDuplicatedWorkers(data[3], this.workers);
      
      this.printableWorkers = this.mergeArrays();

      this.buildButtons();

      this.isLoading = false;
    });
  }

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string): void => {
    if (search) {            
      this.printableWorkers = this.mergeArrays().filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.identifier.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.printableWorkers = [...this.mergeArrays()];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.printableWorkers = [...this.mergeArrays()];
  }

    /**
   * markWorker
   * @param worker
   */
  public markWorker = (worker: any) => {
    if (this.selectedWorkers.includes(worker)) {
      const index = this.selectedWorkers.indexOf(worker);
      this.selectedWorkers.splice(index, 1);
    } else {
      if (this.selectedWorkers.length > 0) {
        this.selectedWorkers = this.selectedWorkers.filter(item => {
          return (worker.quadrille === item.quadrille && item.quadrilleStatus.toLowerCase() === worker.quadrilleStatus.toLowerCase());
        });
      }

      this.selectedWorkers.push(worker);
    }
  }

  /**
   * selectQuadrille
   */
  public selectQuadrille = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cuadrillas',
      buttons: [
        ...this.buttons,
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.selectedWorkers = [];
          }
        }
      ]
    });

    await actionSheet.present();
  }

  /**
   * buildButtons
   */
  private buildButtons = () => {
    this.buttons = this.allQuadrilles
      .filter(item => item !== this.quadrille)
      .map(item => ({
          text: item.name,
          handler: () => {
            this.addTransfer(item.id, TransferActions.PorAprobar);
          }
        })
      );
  }

  /**
   * addTransfer
   * @param quadrille 
   * @param status 
   */
  private addTransfer = (quadrille: number, status: string) => {
  
    // Map data to store
    const mapData = this.mapDataToMemory(quadrille, status);    

    // Store data
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');    
    this.quadrilleService.addTransfers(mapData).then( (transfers: Array<any>) => {
      this.selectedWorkers = [];

      // Transfers
      this.onMemoryTransfers = this.filterTransfers(transfers, +id);
      
      // Remove workers both in filtered and memory arrays
      this.filteredWorkers = this.removeDuplicatedWorkers(this.onMemoryTransfers, this.workers);

      // Make printable array
      this.printableWorkers = this.mergeArrays();
      
      this.isLoading = false;
    });
  }

  /**
   * cancelTransfer
   */
  public cancelTransfer = () => {    
    // Map data to store
        
    const mapData = this.mapDataToMemory(this.quadrille.id, TransferActions.ApruebaRechazo);

    // Store data
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');    
    this.quadrilleService.cancelTransfers(mapData).then( (transfers: Array<any>) => {
      this.selectedWorkers = [];      

      // Transfers
      this.onMemoryTransfers = this.filterTransfers(transfers, +id);
      
      // Remove workers both in filtered and memory arrays
      this.filteredWorkers = this.removeDuplicatedWorkers(this.onMemoryTransfers, this.workers);

      // Make printable array
      this.printableWorkers = this.mergeArrays();

      this.isLoading = false;
    });
  }

   /**
   * acceptWorkers
   */
  public acceptWorkers = () => {
    // Map data to store
    const mapData = this.mapDataToMemory(this.selectedWorkers[0].quadrilleToApprove, TransferActions.Aprobado);

    // Store data
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');    
    this.quadrilleService.acceptTransfers(mapData).then( (transfers: Array<any>) => {
      this.selectedWorkers = [];            

      // Transfers
      this.onMemoryTransfers = this.filterTransfers(transfers, +id);
      
      // Remove workers both in filtered and memory arrays
      this.filteredWorkers = this.removeDuplicatedWorkers(this.onMemoryTransfers, this.workers);

      // Make printable array
      this.printableWorkers = this.mergeArrays();

      this.isLoading = false;
    });
  }

  /**
   * rejectWorkers
   */
  public rejectWorkers = () => {    
    // Map data to store
    const mapData = this.mapDataToMemory(this.selectedWorkers[0].id, TransferActions.Rechazado);

    // Store data
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');    
    this.quadrilleService.rejectTransfers(mapData).then( (transfers: Array<any>) => {
      this.selectedWorkers = [];            

      // Transfers
      this.onMemoryTransfers = this.filterTransfers(transfers, +id);
      
      // Remove workers both in filtered and memory arrays
      this.filteredWorkers = this.removeDuplicatedWorkers(this.onMemoryTransfers, this.workers);

      // Make printable array
      this.printableWorkers = this.mergeArrays();

      this.isLoading = false;
    });
  }

  /**
   * reload
   * @param event
   */
  public reload = (event: any) => {
    this.isLoading = true;

    this.quadrilleService.transferWorkers(this.onMemoryTransfers).subscribe(() => {
      this.selectedWorkers = [];      

      const id = this.route.snapshot.paramMap.get('id');
      this.quadrilleService.clearQuadrilleTransfers(+id).then( () => {
        this.onMemoryTransfers = [];

        // BANDERA DE SINCRONIZACION
        this.stepperService.onlySyncREM();
      });      
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.httpService.errorHandler(error);
    });

    event.target.complete();
  }

  /**
   * orderByTransfersFirst
   */
  private orderByTransfersFirst = (orderByName: Array<any>): Array<any> => {
    const withTransfers = [];
    const noTransfers = [];

    if (orderByName.length > 0) {
      orderByName.filter( item => {
        if (item['quadrilleStatus'] !== '' ) {
          withTransfers.push(item);
        } else {
          noTransfers.push(item);
        }

        return false;
      });
    }

    return [...withTransfers, ...noTransfers];
  }

  /**
   * mergeArrays
   */
  private mergeArrays = (): Array<any> => {
    return [...this.onMemoryTransfers, ...this.filteredWorkers];
  }

  /**
   * removeDuplicatedWorkers
   * @param onMemoryTransfers 
   * @param filteredWorkers 
   */
  private removeDuplicatedWorkers = (onMemoryTransfers: Array<any>, filteredWorkers: Array<any>): Array<any> => {
    const mapped = onMemoryTransfers.map(x => x.id);
    return filteredWorkers.filter(w => !mapped.includes(w.id));
  }

  /**
   * mapDataToMemory
   * @param quadrilleId 
   * @param action 
   */
  private mapDataToMemory = (quadrilleId: number, action: string): Array<any> => {
    return this.selectedWorkers.map( worker => {
      return Object.assign({}, worker, {
        quadrilleStatus: action,
        quadrilleToApprove: quadrilleId,
        memory: true
      });
    });
  }

  /**
   * getTransferNames
   */
  public getTransferNames = () => {
    return TransferActions;
  }

  /**
   * filterTransfers
   */
  private filterTransfers = (transfers: Array<any>, quadrilleId: number): Array<any> => {
    return transfers ? transfers.filter(x => x.quadrille === quadrilleId) : [];
  }

}
