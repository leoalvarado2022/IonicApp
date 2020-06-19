import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ActionSheetController} from '@ionic/angular';
import {QuadrilleService} from '../rem-quadrille/services/quadrille/quadrille.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';

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
  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  private buttons: Array<any> = [];

  public isLoading = false;
  private firstLoad = false;

  private stepper$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private actionSheetController: ActionSheetController,
    private quadrilleService: QuadrilleService,
    private httpService: HttpService,
    private storageSyncService: StorageSyncService,
    private stepperService: StepperService
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

    Promise.all([
      this.storageSyncService.getQuadrilles(),
      this.storageSyncService.getWorkers()
    ]).then((data) => {
      this.quadrilles = [...data[0]];
      this.quadrille = this.quadrilles.find(item => item.id === +id);

      const allWorkers = data[1];
      const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id || item.quadrilleToApprove === this.quadrille.id);
      const orderByName = [...workers];

      this.workers = [...this.orderByTransfersFirst(orderByName)];
      this.filteredWorkers = [...this.workers];

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
    this.filteredWorkers = [...this.workers];
  }

  /**
   * reload
   * @param event
   */
  public reload = (event) => {
    this.loadWorkers();
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
    this.buttons = this.quadrilles
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
      this.stepperService.syncAll();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
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

}
