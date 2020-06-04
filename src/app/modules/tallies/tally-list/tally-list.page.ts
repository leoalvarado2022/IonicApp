import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CostCenterList, Quadrille} from '@primetec/primetec-angular';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ModalController, IonItemSliding, IonInfiniteScroll} from '@ionic/angular';
import {TallyFormComponent} from '../tally-form/tally-form.component';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Subscription} from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Tally } from '../tally.interface';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { TallySyncService } from 'src/app/services/storage/tally-sync/tally-sync.service';
import { AlphabeticalOrderPipe } from 'src/app/shared/pipes/alphabetical-order/alphabetical-order.pipe';
import { TallyFormMultipleComponent } from '../tally-form-multiple/tally-form-multiple.component';

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
  public filteredTallies: Array<Tally> = [];

  // Form dates
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public currentDate: any;
  public readonly originalDate: any;
  public canUpdateMultiple = false;
  public multipleTalliesToUpdate = [];

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
    private tallySyncService: TallySyncService,
    private alphabeticalOrderPipe: AlphabeticalOrderPipe
  ) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.firstLoad = true;
    this.store$ = this.storageSyncService.syncChangedSubscribrer().subscribe(state => {
      if (state && !this.firstLoad) {
        this.loadData();
      }
    });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  /**
   * loadData
   */
  private loadData = (): void => {
    this.firstLoad = false;

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

      // Quadrilles
      this.quadrilles = this.alphabeticalOrderPipe.transform(data[0]);
      this.filteredQuadrilles = [...this.quadrilles];

      // Workers
      this.workers = this.alphabeticalOrderPipe.transform(data[1]);
      this.selectedWorkers = [];

      // Tallies
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
        this.filteredQuadrilles = [...this.quadrilles];
      } else {
        this.activeQuadrille = null;
        if (this.quadrilles.length === 1) {
          this.selectQuadrille(this.quadrilles[0]);
        }
      }
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
      this.filteredQuadrilles = [...this.quadrilles];
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
      this.filteredWorkers = [...this.getWorkersFilteredByQuadrille()];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredQuadrilles = [...this.quadrilles];
    this.filteredWorkers = [...this.getWorkersFilteredByQuadrille()];
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
    this.selectedWorkers = [];
    this.filteredWorkers = [...this.getWorkersFilteredByQuadrille()];
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
    this.canUpdateMultiple = false;
    this.multipleTalliesToUpdate = [];

    // If worker is already marked, it gets unmarked
    if (this.selectedWorkers.includes(worker)) {
      const index = this.selectedWorkers.indexOf(worker);
      this.selectedWorkers.splice(index, 1);

      this.checkIfCanUpdateMultiple();
    } else {
      // Not marked, it is added to the selected array
      this.selectedWorkers.push(worker);

      this.checkIfCanUpdateMultiple();
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
   * createTally
   */
  public createTally = async () => {
    const modal = await this.modalController.create({
      component: TallyFormComponent,
      componentProps: {
        worker: this.selectedWorkers[0],
        dateSelected: moment(this.currentDate).format('YYYY-MM-DD'),
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
   * editTally
   */
  public editTally = async (tally: Tally, slide: IonItemSliding): Promise<void> => {
    slide.close();

    const modal = await this.modalController.create({
      component: TallyFormComponent,
      componentProps: {
        worker: this.selectedWorkers[0],
        dateSelected: moment(this.currentDate).format('YYYY-MM-DD'),
        updateTaly: tally,
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
   * createMultipleTally
   */
  public createMultipleTally = async () => {
    const modal = await this.modalController.create({
      component: TallyFormMultipleComponent,
      componentProps: {
        workers: this.selectedWorkers,
        dateSelected: moment(this.currentDate).format('YYYY-MM-DD'),
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
   * editMultipleTally
   */
  public editMultipleTally = async () => {

  }

  /**
   * checkIfCanUpdateMultiple
   */
  private checkIfCanUpdateMultiple = (): void => {
    if (this.selectedWorkers.length > 1 && this.checkEditableTallies()) {

      let allWorkersTallies = [];
      this.selectedWorkers.forEach(worker => {
        allWorkersTallies = [...allWorkersTallies, ...this.getNumberOfWorkerTallies(worker)];
      });

      let compatibles = [];
      let oneWorkerFail = false;
      this.selectedWorkers.forEach(worker => {
        const tallies = this.getNumberOfWorkerTallies(worker);
        const results = tallies.filter(toCheck => this.checkCompatibleTallies(allWorkersTallies[0], toCheck));

        if (results.length > 0) {
          compatibles = [...compatibles, ...results];
        } else {
          oneWorkerFail = true;
        }
      });

      if (!oneWorkerFail) {
        this.canUpdateMultiple = true;
        this.multipleTalliesToUpdate = [...compatibles];
      }
    }
  }


  /**
   * checkEditableTallies
   */
  public checkEditableTallies = (): boolean => {
    if (this.selectedWorkers.length > 0) {
      return this.selectedWorkers.every( worker => this.getNumberOfWorkerTallies(worker).length > 0);
    }

    return false;
  }

  /**
   * checkCompatibleTallies
   */
  public checkCompatibleTallies = (tally: Tally, toCheck: Tally): boolean => {
    return tally.costCenterId === toCheck.costCenterId && tally.laborId === toCheck.laborId &&
      ((!tally.dealValidity && !toCheck.dealValidity) || (tally.dealValidity === toCheck.dealValidity)) &&
      ((!tally.bondValidity && !toCheck.bondValidity) || (tally.bondValidity === toCheck.bondValidity ));
  }

  /**
   * deleteTally
   */
  public deleteTally = (tally: Tally, slide: IonItemSliding) => {
    slide.close();
    this.alertService.confirmAlert('Esta seguro de que desea borrar esta tarja?').then(sayYes => {
      if (sayYes) {
        if (tally.status) {
          if (tally.status === 'new' || tally.status === 'edit')  {
            this.tallySyncService.removeTallyToRecord(tally.tempId).then( () => {
              this.loadData();
            });
          } else if (tally.status === 'delete') {
            console.log('no deberia entrar aqui');
          }
        } else {
          const tempId = this.tallySyncService.getTallyTempId();
          this.tallySyncService.increaseTallyTempId();

          const toDelete = Object.assign({}, tally, {id: tally.id * -1, status: 'delete', tempId});
          this.tallySyncService.addTallyToRecord(toDelete).then( () => {
            this.loadData();
          });
        }
      }
    });
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

  /**
   * talliesTracker
   */
  public talliesTracker = (index: number, tally: Tally): number => {
    return tally.id;
  }

}
