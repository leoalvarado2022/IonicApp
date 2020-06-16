import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { StepNames } from 'src/app/services/storage/step-names';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TallySyncService } from 'src/app/services/storage/tally-sync/tally-sync.service';
import { Tally } from '../tally.interface';
import { ModalController } from '@ionic/angular';
import { CostCenterList } from '@primetec/primetec-angular';
import { TallyFormComponent } from '../forms/tally-form/tally-form.component';
import { TallyFormMultipleComponent } from '../forms/tally-form-multiple/tally-form-multiple.component';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.page.html',
  styleUrls: ['./workers-list.page.scss'],
})
export class WorkersListPage implements OnInit, OnDestroy {

  // Worker
  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  public canUpdateMultiple = false;
  public multipleTalliesToUpdate: Array<any> = [];
  private numberOfCases: Array<any> = [];

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  // Tallies
  private syncedTallies: Array<Tally> = [];
  private talliesToRecord: Array<Tally> = [];

  // FORM
  private costCenters: Array<CostCenterList> = [];
  private labors: Array<any> = [];
  private deals: Array<any> = [];
  private bonds: Array<any> = [];

  private firstLoad = true;

  private stepper$: Subscription;

  constructor(
    private stepperService: StepperService,
    private storageSyncService: StorageSyncService,
    private activatedRoute: ActivatedRoute,
    private tallySyncService: TallySyncService,
    private modalController: ModalController,
    private router: Router
  ) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    console.log('pasa por aqui');
    this.stepper$ = this.stepperService.getStepper().subscribe(step => {
      if (step === StepNames.EndStoring && !this.firstLoad) {
        this.loadAsync();
      }
    });
  }

  ngOnDestroy(): void {
    this.stepper$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadAsync();
  }

  /**
   * loadAsync
   */
  private loadAsync = async () => {
    this.firstLoad = false;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.workers = [];
    this.filteredWorkers = [];
    this.syncedTallies = [];
    this.talliesToRecord = [];
    this.costCenters = [];
    this.labors = [];
    this.deals = [];
    this.bonds = [];

    const data = await Promise.all([
      this.tallySyncService.getWorkersByQuadrille(+id, this.currentDate),
      this.storageSyncService.getTallies(),
      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getLabors(),
      this.storageSyncService.getDeals(),
      this.storageSyncService.getBonds(),
      this.tallySyncService.getTalliesToRecord(),
    ]);

    // Workers
    this.workers = [...data[0]];
    this.filteredWorkers = [...this.workers] ;
    this.selectedWorkers = [];

    // Tallies
    this.syncedTallies = [...data[1]];
    this.talliesToRecord = [...data[6]];

    // Form
    this.costCenters = [...data[2]];
    this.labors = [...data[3]];
    this.deals = [...data[4]];
    this.bonds = [...data[5]];
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
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
      this.selectedWorkers = [];
    }
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
      this.selectedWorkers = [];
    }
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
   * getNumberOfWorkerTallies
   * @param worker
   */
  private getNumberOfWorkerTallies = (worker: any): Array<Tally> => {
    return this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord, worker, this.currentDate);
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
   * getUniqueCases
   */
  private getUniqueCases = (tallies: Array<Tally>): Array<any> => {
    const uniqueCasesArray = [];

    if (tallies.length > 0) {
      tallies.forEach(tally => {
        const searchInUniqueCasesArray = uniqueCasesArray.find(unique => unique.costCenterId === tally.costCenterId && unique.laborId === tally.laborId);

        if (!searchInUniqueCasesArray) {
          uniqueCasesArray.push(tally);
        }
      });
    }

    if (uniqueCasesArray.length > 0) {
      return uniqueCasesArray.map(item => {
        return {
          costCenterId: item.costCenterId,
          laborId: item.laborId
        };
      });
    }

    return uniqueCasesArray;
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

      const allValidTallies = [];
      this.selectedWorkers.forEach(worker => {

        // Filter the current worker tallies
        const thisWorkerTallies = allWorkersTallies.filter(item => item.workerId === worker.id);

        // Filter other workers tallies
        const otherWorkerTallies = allWorkersTallies.filter(item => item.workerId !== worker.id);

        // Tallies in common with other workers
        const commonTallies = [];
        thisWorkerTallies.forEach(tally => {

          // Find similar tallies
          const similarTallies = otherWorkerTallies.filter( map => map.costCenterId === tally.costCenterId && map.laborId === tally.laborId);

          // Add to the array
          similarTallies.forEach(similar => commonTallies.push(similar));
        });

        // At least one in common
        if (commonTallies.length > 0) {
          commonTallies.forEach(common => allValidTallies.push(common));
        }
      });

      if (allValidTallies.length > 0) {
        this.canUpdateMultiple = true;
        this.multipleTalliesToUpdate = [...allValidTallies];
        this.numberOfCases = this.getUniqueCases(allValidTallies);
      }
    }
  }

  /**
   * getTotalWorkerWork
   * @param worker
   */
  public getTotalWorkerWork = (worker: any): string => {
    const todayTallies = this.getNumberOfWorkerTallies(worker);
    const workTotal = todayTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);

    return parseFloat(workTotal).toFixed(2);
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
        this.loadAsync();
      }
    });

    return await modal.present();
  }

  /**
   * goToWorkerTallyList
   * @param id
   */
  public goToWorkerTallyList = (id: number): void => {
    this.router.navigate(['/home-page/tallies-list', id, this.currentDate]);
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
        this.loadAsync();
      }
    });

    return await modal.present();
  }

  /**
   * editMultipleTally
   */
  public editMultipleTally = async () => {
    const modal = await this.modalController.create({
      component: TallyFormMultipleComponent,
      componentProps: {
        workers: this.selectedWorkers,
        dateSelected: moment(this.currentDate).format('YYYY-MM-DD'),
        updateTallies: this.multipleTalliesToUpdate,
        numberOfCases: this.numberOfCases,
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
        this.loadAsync();
      }
    });

    return await modal.present();
  }

  /**
   * reload
   * @param event
   */
  public reload = (event: any): void => {
    this.loadAsync();
    event.target.complete();
  }

}
