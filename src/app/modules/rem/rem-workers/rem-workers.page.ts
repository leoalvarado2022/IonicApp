import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ActionSheetController} from '@ionic/angular';
import {QuadrilleService} from '../rem-quadrille/services/quadrille/quadrille.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import { AlphabeticalOrderPipe } from 'src/app/shared/pipes/alphabetical-order/alphabetical-order.pipe';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { ManualSyncService } from 'src/app/shared/services/manual-sync/manual-sync.service';

enum WorkerStatus {
  'POR APROBAR' = 'por aprobar',
  'APROBADO' = 'aprobado',
  'RECHAZADO' = 'rechazado',
  'APRUEBA RECHAZO' = 'apruebarechazo'
}

@Component({
  selector: 'app-rem-workers',
  templateUrl: './rem-workers.page.html',
  styleUrls: ['./rem-workers.page.scss'],
})
export class RemWorkersPage implements OnInit, OnDestroy {

  public quadrille: any;
  private quadrilles: Array<any> = [];
  public workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  private buttons: Array<any> = [];

  private store$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private actionSheetController: ActionSheetController,
    private quadrilleService: QuadrilleService,
    private httpService: HttpService,
    private alphabeticalOrderPipe: AlphabeticalOrderPipe,
    private storageSyncService: StorageSyncService,
    private manualSyncService: ManualSyncService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.store$ = this.storageSyncService.syncChangedSubscribrer().subscribe( status => {
      if (status) {
        this.loadWorkers(id);
      }
    });

    this.loadWorkers(id);
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  /**
   * loadWorkers
   */
  private loadWorkers = (id: string) => {
    Promise.all([
      this.storageSyncService.getQuadrilles(),
      this.storageSyncService.getWorkers()
    ]).then((data) => {
      if (data[0] && data[1]) {
        this.quadrilles = [...data[0]];
        const allWorkers = data[1];

        this.quadrille = this.quadrilles.find(item => item.id === +id);
        const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id || item.quadrilleToApprove === this.quadrille.id);
        this.workers =  [...workers];
        this.filteredWorkers = [...workers];

        this.buildButtons();
      }
    });
  }

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string): void => {
    if (search) {
      this.filteredWorkers = this.workers.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.identifier.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredWorkers = [...this.workers];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredWorkers = this.workers;
  }

  /**
   * reload
   * @param event
   */
  public reload = (event) => {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadWorkers(id);
    event.target.complete();
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
        this.selectedWorkers = this.selectedWorkers.filter(item => item.quadrilleStatus === worker.quadrilleStatus);
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
   * acceptWorkers
   */
  public acceptWorkers = () => {
    this.transferWorkers(this.quadrille.id, WorkerStatus.APROBADO);
  }

  /**
   * rejectWorkers
   */
  public rejectWorkers = () => {
    this.transferWorkers(this.quadrille.id, WorkerStatus.RECHAZADO);
  }

  /**
   * acceptRejectWorkers
   */
  public acceptRejectWorkers = () => {
    this.transferWorkers(this.quadrille.id, WorkerStatus['APRUEBA RECHAZO']);
  }

  /**
   * buildButtons
   */
  private buildButtons = () => {
    const orderedQuadrilles = this.alphabeticalOrderPipe.transform(this.quadrilles);

    this.buttons = orderedQuadrilles
      .filter(item => item !== this.quadrille)
      .map(item => ({
        text: item.name,
        handler: () => {
          this.transferWorkers(item.id, WorkerStatus['POR APROBAR']);
        }
      }));
  }

  /**
   * transferWorkers
   */
  private transferWorkers = (quadrille: number, status: string) => {
    const data = {
      quadrille,
      workers: this.selectedWorkers,
      status
    };

    this.loaderService.startLoader();

    this.quadrilleService.transferWorkers(data).subscribe(() => {
      this.selectedWorkers = [];
      this.loaderService.stopLoader();

      // BANDERA DE SINCRONIZACION
      this.manualSyncService.sync();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }
}
