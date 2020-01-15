import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ActionSheetController} from '@ionic/angular';
import {QuadrilleService} from '../rem-quadrille/services/quadrille/quadrille.service';
import {UserService} from '../../../shared/services/user/user.service';
import {HttpService} from '../../../shared/services/http/http.service';

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
export class RemWorkersPage implements OnInit {

  private workers: Array<any> = [];
  private quadrilles: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public quadrille: any;
  public selectedWorkers: Array<any> = [];
  private buttons: Array<any> = [];
  private userData = null;

  constructor(
    private syncService: SyncService,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private actionSheetController: ActionSheetController,
    private quadrilleService: QuadrilleService,
    private userService: UserService,
    private httpService: HttpService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadWorkers(id);
    this.init();
  }

  /**
   * init
   */
  private init = async () => {
    const userData = await this.userService.getUserData();
    this.userData = userData;
  }

  /**
   * loadWorkers
   */
  private loadWorkers = async (id: string) => {
    this.loaderService.startLoader();
    const quadrilles = await this.syncService.getQuadrilles();
    const allWorkers = await this.syncService.getWorkers();

    console.log({quadrilles, allWorkers});

    if (quadrilles && allWorkers) {
      this.quadrilles = [...quadrilles];
      this.quadrille = quadrilles.find(item => item.id === +id);
      const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id || item.quadrilleToApprove === this.quadrille.id);
      this.workers = [...workers];
      this.filteredWorkers = [...workers];

      this.buildButtons();
    }

    this.loaderService.stopLoader();
  }

  /**
   * reload
   * @param event
   */
  public reload = async (event) => {
    const id = this.route.snapshot.paramMap.get('id');
    await this.loadWorkers(id);
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
        }]
    });

    await actionSheet.present();
  }

  /**
   * buildButtons
   */
  private buildButtons = () => {
    this.buttons = this.quadrilles
      .filter(item => item !== this.quadrille)
      .map(item => ({
        text: item.name,
        icon: 'people',
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
    this.quadrilleService.transferWorkers(data).subscribe(success => {
      this.loaderService.stopLoader();
      this.selectedWorkers = [];
      this.reSync();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * reSync
   */
  private reSync = async () => {
    this.loaderService.startLoader();
    const id = this.route.snapshot.paramMap.get('id');
    const data = await this.syncData();
    await this.syncService.storeSync(data);
    await this.loadWorkers(id);
    this.loaderService.stopLoader();
  }

  /**
   * syncData
   * @param username
   */
  private syncData = (): Promise<any> => {
    return new Promise<any>(resolve => {
      if (this.userData) {
        const {user} = this.userData;
        const username = user.username;

        this.syncService.syncData(username).subscribe((success: any) => {
          resolve(success.data);
        }, async error => {
          this.httpService.errorHandler(error);
          resolve(null);
        });
      }
    });
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
}
