import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {CostCenterList, Quadrille} from '@primetec/primetec-angular';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {TallyFormComponent} from '../tally-form/tally-form.component';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Subscription} from 'rxjs';
import {TallyService} from '../services/tally/tally.service';

@Component({
  selector: 'app-tally-list',
  templateUrl: './tally-list.page.html',
  styleUrls: ['./tally-list.page.scss'],
})
export class TallyListPage implements OnInit, OnDestroy {

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
  private tallies: Array<any> = [];
  private talliesToRecord: Array<any> = [];
  public filteredTallies: Array<any> = [];

  // Form dates
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public currentDate: any;
  public readonly originalDate: any;

  private costCenters: Array<CostCenterList> = [];
  private labors: Array<any> = [];

  private store$: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router,
    private modalController: ModalController,
    private toastService: ToastService,
    private tallyService: TallyService
  ) {
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      console.log('asdasd', data);
      // Load quadrilles
      this.quadrilles = this.storeService.getQuadrilles();
      this.filteredQuadrilles = this.quadrilles;

      // Workers
      this.workers = this.storeService.getWorkers();
      this.reloadTallies();

      // Form data
      this.costCenters = this.storeService.getCostCenters();
      this.labors = this.storeService.getLabors();
    });

    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
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

    this.tallies = [];
    this.filteredTallies = [];

    this.currentDate = null;

    this.store$.unsubscribe();
  }

  /**
   * loadData
   */
  private loadData = () => {
    // Load quadrilles
    this.quadrilles = this.storeService.getQuadrilles();
    this.filteredQuadrilles = this.quadrilles;
    this.activeQuadrille = null;

    // Workers
    this.workers = this.storeService.getWorkers();
    this.filteredWorkers = [];
    this.selectedWorkers = [];
    this.activeWorker = null;

    this.reloadTallies();

    // Form data
    this.costCenters = this.storeService.getCostCenters();
    this.labors = this.storeService.getLabors();

    if (this.quadrilles.length === 1) {
      this.selectQuadrille(this.quadrilles[0]);
    }
  };

  /**
   * getQuadrilleWorkers
   * @param id
   */
  public getQuadrilleWorkers = (id: any) => {
    if (this.workers) {
      return this.workers.filter(item => item.quadrille === id).length;
    }

    return 0;
  };

  /**
   * searchQuadrille
   * @param search
   */
  public searchQuadrille = (search: string) => {
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
  };

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string) => {
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
  };

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredQuadrilles = this.quadrilles;
  };

  /**
   * reload
   * @param event
   */
  public reload = (event: any) => {
    if (this.activeWorker) {
      this.reloadTallies();
    } else if (this.activeQuadrille) {
      this.workers = this.storeService.getWorkers();
      this.filteredWorkers = this.getWorkersFilteredByQuadrille();
      this.selectedWorkers = [];
    } else {
      this.quadrilles = this.storeService.getQuadrilles();
      this.filteredQuadrilles = this.quadrilles;
      this.activeQuadrille = null;
    }

    event.target.complete();
  };

  /**
   * selectQuadrille
   * @param quadrille
   */
  public selectQuadrille = (quadrille: Quadrille) => {
    this.activeQuadrille = quadrille;
    this.filteredQuadrilles = this.quadrilles;
    this.selectedWorkers = [];
    this.filteredWorkers = this.getWorkersFilteredByQuadrille();
  };

  /**
   * getWorkersFilteredByQuadrille
   */
  public getWorkersFilteredByQuadrille = (): Array<any> => {
    if (this.activeQuadrille) {
      return this.workers.filter(item => item.quadrille === this.activeQuadrille.id && this.validContractDate(item));
    }

    return [];
  };

  /**
   * markWorker
   * @param worker
   */
  public markWorker = (worker: any) => {
    if (this.selectedWorkers.includes(worker)) {
      const index = this.selectedWorkers.indexOf(worker);
      this.selectedWorkers.splice(index, 1);
    } else {
      this.selectedWorkers.push(worker);
    }
  };

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
    }
  };

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
    }
  };

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
  };

  /**
   * goToWorkerTallyList
   * @param worker
   */
  public goToWorkerTallyList = (worker: any): void => {
    this.activeWorker = worker;
    const tallies = this.getNumberOfWorkerTallies(worker);

    this.filteredTallies = [...tallies];
  };

  /**
   * getNumberOfWorkerTallies
   * @param worker
   */
  private getNumberOfWorkerTallies = (worker: any): Array<any> => {
    const tallies = this.tallies.filter(item => {
      const tallyDate = this.tallyService.removeTimeFromDate(item.date);
      const current = this.tallyService.removeTimeFromDate(this.currentDate);

      return item.workerId === worker.id && tallyDate === current;
    });

    const toRecord = this.talliesToRecord.filter(item => {
      const tallyDate = this.tallyService.removeTimeFromDate(item.date);
      const current = this.tallyService.removeTimeFromDate(this.currentDate);

      return item.workerId === worker.id && tallyDate === current;
    });

    return [...toRecord, ...tallies];
  };

  /**
   * getTotalWorkerWork
   * @param worker
   */
  public getTotalWorkerWork = (worker: any): number => {
    const todayTallies = this.getNumberOfWorkerTallies(worker);
    return todayTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);
  };

  /**
   * createTally
   */
  public createTally = async () => {
    const modal = await this.modalController.create({
      component: TallyFormComponent,
      componentProps: {
        workers: this.selectedWorkers,
        dateSelected: moment(this.currentDate).format('YYYY-MM-DD')
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.reloadTallies();
      }
    });

    return await modal.present();
  };

  /**
   * getCostCenterName
   * @param costCenterId
   */
  public getCostCenterName = (costCenterId: number) => {
    const find = this.costCenters.find(item => item.id === costCenterId);
    return find ? find.name : '';
  };

  /**
   * getLaborName
   * @param laborId
   */
  public getLaborName = (laborId: number) => {
    const find = this.labors.find(item => item.id === laborId);
    return find ? find.name : '';
  };

  /**
   * goBack
   */
  public goBack = () => {
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
  };

  /**
   * reloadTallies
   */
  private reloadTallies = () => {
    this.tallies = this.storeService.getTallies();
    this.talliesToRecord = this.storeService.getTalliesToRecord();

    if (this.activeWorker) {
      this.goToWorkerTallyList(this.activeWorker);
    }
  };

  /**
   * showTallyError
   * @param tally
   */
  public showTallyError = (tally: any): void => {
    if (tally.id <= 0) {
      const talliesWithErrors = this.storeService.getTalliesWithErrors();
      const error = talliesWithErrors.find(item => item.id === tally.tempId);

      if (error) {
        this.toastService.errorToast(error.response);
      } else {
        this.toastService.errorToast('No sincronizado');
      }
    }
  };

  /**
   * checkNotEditableTallies
   */
  public checkNotEditableTallies = (): boolean => {
    for (let worker of this.selectedWorkers) {
      if (this.getNumberOfWorkerTallies(worker).length === 0) {
        return true;
      }
    }

    return false;
  };

  /**
   * createMultipleTally
   */
  public createMultipleTally = () => {
    console.log('pendiente por implementar');
  };
}
