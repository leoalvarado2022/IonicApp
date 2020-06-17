import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { TallySyncService } from 'src/app/services/storage/tally-sync/tally-sync.service';
import { Tally } from '../tally.interface';
import { CostCenterList } from '@primetec/primetec-angular';
import { Subscription } from 'rxjs';
import { StepNames } from 'src/app/services/storage/step-names';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import * as moment from 'moment';
import { ModalController, IonItemSliding } from '@ionic/angular';
import { TallyFormComponent } from '../forms/tally-form/tally-form.component';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

@Component({
  selector: 'app-tallies-list',
  templateUrl: './tallies-list.page.html',
  styleUrls: ['./tallies-list.page.scss']
})
export class TalliesListPage implements OnInit, OnDestroy {

  // Worker
  public activeWorker: any = null;
  public workerTallies: Array<Tally> = [];

  // Date
  private currentDate: any = null;

  // Tallies
  private syncedTallies: Array<Tally> = [];
  private talliesToRecord: Array<Tally> = [];
  private talliesWithErrors: Array<any> = [];

  // FORM
  private costCenters: Array<CostCenterList> = [];
  private labors: Array<any> = [];
  private deals: Array<any> = [];
  private bonds: Array<any> = [];

  private firstLoad = true;
  public isLoading = false;

  private stepper$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private stepperService: StepperService,
    private storageSyncService: StorageSyncService,
    private tallySyncService: TallySyncService,
    private toastService: ToastService,
    private modalController: ModalController,
    private alertService: AlertService
  ) {

  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe(step => {
      if (step === StepNames.EndStoring && !this.firstLoad) {
        this.minimunReload();
      }
    });
  }

  ngOnDestroy() {
    this.stepper$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.firstLoad = false;

    // START LOADING
    this.isLoading = true;

    this.currentDate = this.activatedRoute.snapshot.paramMap.get('date');
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    Promise.all([
      this.tallySyncService.getWorkerById(+id),
      this.tallySyncService.getWorkerSyncedTallies(+id),
      this.tallySyncService.getWorkerTalliesToRecord(+id),
      this.tallySyncService.getTalliesWithErrors(),

      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getLabors(),
      this.storageSyncService.getDeals(),
      this.storageSyncService.getBonds(),
    ]).then( data => {

      // Worker
      this.activeWorker = data[0];

      // Tallies
      this.syncedTallies = [...data[1]];
      this.talliesToRecord = [...data[2]];
      this.talliesWithErrors = [...data[3]];

      // Form
      this.costCenters = [...data[4]];
      this.labors = [...data[5]];
      this.deals = [...data[6]];
      this.bonds = [...data[7]];

      // CALC TALLIES
      const a = this.getNumberOfWorkerTallies();
      this.workerTallies = [...a];

      // END LOADING
      this.isLoading = false;
    });
  }

  /**
   * reload
   * @param event
   */
  public reload = (event: any): void => {
    this.minimunReload();
    event.target.complete();
  }

  /**
   * getTotalWorkerWork
   * @param worker
   */
  public getTotalWorkerWork = (): string => {
    if (this.workerTallies) {
      const workTotal = this.workerTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);
      return parseFloat(workTotal).toFixed(2);
    }

    return '0';
  }

  /**
   * getNumberOfWorkerTallies
   */
  private getNumberOfWorkerTallies = (): Array<Tally> => {
    return this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord, this.activeWorker, this.currentDate);
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
   * editTally
   */
  public editTally = async (tally: Tally, slide: IonItemSliding): Promise<void> => {
    slide.close();

    const modal = await this.modalController.create({
      component: TallyFormComponent,
      componentProps: {
        worker: this.activeWorker,
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
        this.minimunReload();
      }
    });

    return await modal.present();
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
            if (tally.id > 0) {
              const tempId = this.tallySyncService.getTallyTempId();
              this.tallySyncService.increaseTallyTempId();

              const toDelete = Object.assign({}, tally, {id: tally.id * -1, status: 'delete', tempId});

              this.tallySyncService.removeTallyToRecord(tally.tempId).then( () => {
                this.tallySyncService.addTallyToRecord(toDelete).then( () => {
                  this.minimunReload();
                });
              });
            } else {
              this.tallySyncService.removeTallyToRecord(tally.tempId).then( () => {
                this.minimunReload();
              });
            }
          }
        } else {
          const tempId = this.tallySyncService.getTallyTempId();
          this.tallySyncService.increaseTallyTempId();

          const toDelete = Object.assign({}, tally, {id: tally.id * -1, status: 'delete', tempId});
          this.tallySyncService.addTallyToRecord(toDelete).then( () => {
            this.minimunReload();
          });
        }
      }
    });
  }

  /**
   * createTally
   */
  public createTally = async () => {
    const modal = await this.modalController.create({
      component: TallyFormComponent,
      componentProps: {
        worker: this.activeWorker,
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
        this.minimunReload();
      }
    });

    return await modal.present();
  }

  /**
   * checkWorkerLimit
   */
  public checkWorkerLimit = () => {
    if (this.activeWorker) {
      return this.getTotalWorkerWork() >= this.activeWorker.dailyMax;
    }

    return true;
  }

  /**
   * getWorkerName
   */
  public getWorkerName = () => {
    if (this.activeWorker) {
      return this.activeWorker.name;
    }

    return 'Cargando...';
  }

  /**
   * minimunReload
   */
  private minimunReload = () => {
    this.firstLoad = false;

    // START LOADING
    this.isLoading = true;

    this.currentDate = this.activatedRoute.snapshot.paramMap.get('date');
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    Promise.all([
      this.tallySyncService.getWorkerSyncedTallies(+id),
      this.tallySyncService.getWorkerTalliesToRecord(+id),
      this.tallySyncService.getTalliesWithErrors(),
    ]).then( data => {

      // Tallies
      this.syncedTallies = [...data[0]];
      this.talliesToRecord = [...data[1]];
      this.talliesWithErrors = [...data[2]];

      // CALC TALLIES
      const b = this.getNumberOfWorkerTallies();
      this.workerTallies = [...b];

      // END LOADING
      this.isLoading = false;
    });

  }

}
