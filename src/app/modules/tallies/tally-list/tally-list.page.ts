import {Component, OnDestroy, OnInit} from '@angular/core';
import {CostCenterList, Quadrille} from '@primetec/primetec-angular';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ModalController, IonItemSliding} from '@ionic/angular';
import {TallyFormComponent} from '../tally-form/tally-form.component';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Subscription} from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Tally } from '../tally.interface';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { TallySyncService } from 'src/app/services/storage/tally-sync/tally-sync.service';

@Component({
  selector: 'app-tally-list',
  templateUrl: './tally-list.page.html',
  styleUrls: ['./tally-list.page.scss'],
})
export class TallyListPage implements OnInit, OnDestroy {

  public isLoading: boolean;

  // Quadrille
  public quadrilles: Array<Quadrille> = [];
  public filteredQuadrilles: Array<Quadrille> = [];
  public activeQuadrille: Quadrille = null;

  // Worker
  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  public activeWorker: any = null;

  // Tallies
  public filteredTallies: Array<Tally> = [];

  // Form dates
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public currentDate: any;
  public readonly originalDate: any;

  private costCenters: Array<CostCenterList> = [];
  private syncedTallies: Array<Tally> = [];
  private talliesToRecord: Array<Tally> = [];
  private talliesWithErrors: Array<any> = [];
  private labors: Array<any> = [];
  private deals: Array<any> = [];
  private bonds: Array<any> = [];

  private store$: Subscription;
  private firstLoad: boolean;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private toastService: ToastService,
    private alertService: AlertService,
    private storageSyncService: StorageSyncService,
    private tallySyncService: TallySyncService
  ) {
    // COMENTADO PARA PROBAR LA VERSION DEL STORAGE
    /*
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.reloadQuadrilles();
      this.reloadWorkers();
      this.reloadTallies();
    });
    */

    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.firstLoad = true;
    this.store$ = this.storageSyncService.syncChangedSubscribrer().subscribe(state => {
      console.log('syncChangedSubscribrer');
      if (state && !this.firstLoad) {
        this.loadData();
      }
    });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.quadrilles = [];
    this.filteredQuadrilles = [];
    this.activeQuadrille = null;
    this.workers = [];
    this.filteredWorkers = [];
    this.selectedWorkers = [];
    this.activeWorker = [];
    this.filteredTallies = [];
    this.currentDate = null;

    this.store$.unsubscribe();
  }

  /**
   * loadData
   */
  private loadData = (): void => {
    this.firstLoad = false;
    this.isLoading = true;

    Promise.all([
      this.storageSyncService.getQuadrilles(),
      this.storageSyncService.getWorkers(),
      this.storageSyncService.getTallies(),
      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getLabors(),
      this.storageSyncService.getDeals(),
      this.storageSyncService.getBonds(),
      this.tallySyncService.getTalliesToRecord(),
      this.tallySyncService.getTalliesWithErrors()
    ]).then(data => {

      console.log('data loaded');

      this.quadrilles = data[0] || [];
      this.filteredQuadrilles = data[0] || [];
      this.workers = data[1];
      this.selectedWorkers = [];
      this.syncedTallies = data[2];
      this.filteredTallies = [];
      this.costCenters = data[3];
      this.labors = data[4];
      this.deals = data[5];
      this.bonds = data[6];
      this.talliesToRecord = data[7];
      this.talliesWithErrors = data[8];

      if (this.activeWorker) {
        this.selectedWorkers.push(this.activeWorker);
        this.goToWorkerTallyList(this.activeWorker);
      } else if (this.activeQuadrille) {
        this.filteredWorkers = this.getWorkersFilteredByQuadrille();
      } else {
        this.activeQuadrille = null;
        if (this.quadrilles.length === 1) {
          this.selectQuadrille(this.quadrilles[0]);
        }
      }

      this.isLoading = false;
    }).catch(() => {
      this.isLoading = false;
    });
  }

  /**
   * getQuadrilleWorkers
   * @param id
   */
  public getQuadrilleWorkers = (id: number): number => {
    if (this.workers) {
      return this.workers.filter(item => item.quadrille === id).length;
    }

    return 0;
  }

  /**
   * searchQuadrille
   * @param search
   */
  public searchQuadrille = (search: string): void => {
    if (search) {
      this.filteredQuadrilles = this.quadrilles.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.responsibleName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredQuadrilles = this.quadrilles;
    }
  }

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string): void => {
    if (search) {
      this.filteredWorkers = this.getWorkersFilteredByQuadrille().filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.identifier.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredWorkers = this.getWorkersFilteredByQuadrille();
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredQuadrilles = this.quadrilles;
  }

  /**
   * reload
   * @param event
   */
  public reload = (event: any): void => {
    this.loadData();
    event.target.complete();
  }

  /**
   * selectQuadrille
   * @param quadrille
   */
  public selectQuadrille = (quadrille: Quadrille): void => {
    this.activeQuadrille = quadrille;
    this.filteredQuadrilles = [...this.quadrilles];
    this.selectedWorkers = [];
    this.filteredWorkers = this.getWorkersFilteredByQuadrille();
  }

  /**
   * getWorkersFilteredByQuadrille
   */
  public getWorkersFilteredByQuadrille = (): Array<any> => {
    if (this.activeQuadrille) {
      return this.workers.filter(item => item.quadrille === this.activeQuadrille.id && this.validContractDate(item));
    }

    return [];
  }

  /**
   * markWorker
   * @param worker
   */
  public markWorker = (worker: any): void => {
    if (this.selectedWorkers.includes(worker)) {
      const index = this.selectedWorkers.indexOf(worker);
      this.selectedWorkers.splice(index, 1);
    } else {
      this.selectedWorkers.push(worker);
    }
  }

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
    }
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
    }
  }

  /**
   * validContractDate
   * @param worker
   */
  public validContractDate = (worker: any): boolean => {
    if (this.currentDate) {
      const start = moment(worker.startDate).toISOString();
      const end = moment(worker.endDate).toISOString();

      return moment(this.currentDate).isBetween(start, end);
    }

    return false;
  }

  /**
   * goToWorkerTallyList
   * @param worker
   */
  public goToWorkerTallyList = (worker: any): void => {
    this.activeWorker = worker;
    this.filteredTallies = [...this.getNumberOfWorkerTallies(worker)];
  }

  /**
   * getNumberOfWorkerTallies
   * @param worker
   */
  private getNumberOfWorkerTallies = (worker: any): Array<Tally> => {
    return this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord,  worker, this.currentDate);
  }

  /**
   * getTotalWorkerWork
   * @param worker
   */
  public getTotalWorkerWork = (worker: any): number => {
    const todayTallies = this.getNumberOfWorkerTallies(worker);
    return todayTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);
  }

  /**
   * createTally
   */
  public createTally = async (tally: Tally = null) => {
    const modal = await this.modalController.create({
      component: TallyFormComponent,
      componentProps: {
        workers: this.selectedWorkers,
        dateSelected: moment(this.currentDate).format('YYYY-MM-DD'),
        editTally: tally,
        syncedTallies: this.syncedTallies,
        talliesToRecord: this.talliesToRecord,
        costCenters: this.costCenters,
        labors: this.labors,
        deals: this.deals,
        bonds: this.bonds
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.loadData();
      }
    });

    return await modal.present();
  }

  /**
   * getCostCenterName
   * @param costCenterId
   */
  public getCostCenterName = (costCenterId: number): string => {
    const find = this.costCenters.find(item => item.id === costCenterId);
    return find ? find.name : '';
  }

  /**
   * getLaborName
   * @param laborId
   */
  public getLaborName = (laborId: number): string => {
    const find = this.labors.find(item => item.id === laborId);
    return find ? find.name : '';
  }

  /**
   * goBack
   */
  public goBack = (): void => {
    if (this.quadrilles.length > 1) {
      if (this.activeQuadrille && !this.activeWorker) {
        this.activeQuadrille = null;
        this.selectedWorkers = [];
      } else if (this.activeQuadrille && this.activeWorker) {
        this.activeWorker = null;
        this.selectedWorkers = [];
      } else {
        this.router.navigate(['home-page']);
      }
    } else {
      if (this.activeQuadrille && this.activeWorker) {
        this.activeWorker = null;
        this.selectedWorkers = [];
      } else {
        this.router.navigate(['home-page']);
      }
    }
  }

  /**
   * showTallyError
   * @param tally
   */
  public showTallyError = (tally: any): void => {
    if (tally.id <= 0) {
      const error = this.talliesWithErrors.find(item => item.id === tally.tempId);

      if (error) {
        this.toastService.errorToast(error.response);
      } else {
        this.toastService.errorToast('No sincronizado');
      }
    }
  }

  /**
   * checkNotEditableTallies
   */
  public checkNotEditableTallies = (): boolean => {
    for (const worker of this.selectedWorkers) {
      if (this.getNumberOfWorkerTallies(worker).length === 0) {
        return true;
      }
    }

    return false;
  }

  /**
   * createMultipleTally
   */
  public createMultipleTally = () => {
    console.log('pendiente por implementar');
  }

  /**
   * editTally
   */
  public editTally = (tally: Tally, slide: IonItemSliding): void => {
    slide.close();

    this.createTally(tally);
  }

  /**
   * deleteTally
   */
  public deleteTally = async (tally: Tally, slide: IonItemSliding) => {
    slide.close();
    const sayYes = await this.alertService.confirmAlert('Esta seguro de que desea borrar esta tarja?');

    if (sayYes) {
      if (tally.status) {
        if (tally.status === 'new' || tally.status === 'edit')  {
          this.tallySyncService.removeTallyToRecord(tally.tempId);
          await this.loadData();
        } else if (tally.status === 'delete') {
          console.log('no deberia entrar aqui');
        }
      } else {
        const tempId = this.tallySyncService.getTallyTempId();
        this.tallySyncService.increaseTallyTempId();

        const toDelete = Object.assign({}, tally, {id: tally.id * -1, status: 'delete', tempId});
        await this.tallySyncService.addTallyToRecord(toDelete);
        await this.loadData();
      }
    }
  }

  /**
   * getDealName
   */
  public getDealName = (dealValidity: number): string => {
    const find = this.deals.find(item => item.id_deal_validity === dealValidity);
    return find ? find.name_deal : '';
  }

  /**
   * getBondName
   */
  public getBondName = (bondValidity: number): string => {
    const find = this.bonds.find(item => item.bondValidity === bondValidity);
    return find ? find.bondName : '';
  }

}
