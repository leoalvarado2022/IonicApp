import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store/store.service';
import * as moment from 'moment';
import { ModalController, IonItemSliding } from '@ionic/angular';
import { MachineryFormComponent } from '../machinery-form/machinery-form.component';
import { Company } from '@primetec/primetec-angular';
import { MachineryService } from '../services/machinery.service';
import { Subscription } from 'rxjs';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.page.html',
  styleUrls: ['./machinery-list.page.scss'],
})
export class MachineryListPage implements OnInit, OnDestroy {

  private machinery: Array<any> = [];
  private machineryToRecord: Array<any> = [];
  public filteredMachinery: Array<any> = [];

  private machineryCostCenters: Array<any> = [];
  private allCostCenters: Array<any> = [];
  private implements: Array<any> = [];
  private labors: Array<any> = [];
  private units: Array<any> = [];
  private workers: Array<any> = [];

  private firstLoad = true;
  private activeCompany: Company;
  private stepper$: Subscription;

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  constructor(
    private storageSyncService: StorageSyncService,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private modalController: ModalController,
    private machineryService: MachineryService,
    private stepperService: StepperService,
    private alertService: AlertService
  ) {

    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe((steps: Array<any>) => {
      if (steps.length === 0  && !this.firstLoad) {
        this.loadData();
      }
    });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.stepper$.unsubscribe();
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.firstLoad = false;

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activeCompany = this.storeService.getActiveCompany();
    const user = this.storeService.getUser();
    const units = this.storeService.getUnits();
    const access = this.storeService.getAccess();
    const date = moment(this.currentDate).format('YYYY-MM-DD');

    Promise.all([
      this.storageSyncService.getMachineryByCompany(this.activeCompany.id, this.activeCompany.user, date, !!access.find(x => x.functionality === 5)),
      this.machineryService.getMachineryToRecordByCompany(this.activeCompany.id, date),
      this.storageSyncService.getLabors(),
      this.machineryService.getWorkers(user).toPromise(),
      this.storageSyncService.getMachineryTypeCostCenters(),
      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getImplementTypeCostCenters()
    ]).then( (data: Array<any>) => {

      this.units = units;

      this.machinery = data[0];
      this.machineryToRecord = data[1];
      this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];

      this.labors = data[2];
      this.workers = data[3]['data']; //  HTTP
      this.machineryCostCenters = data[4];
      this.allCostCenters = data[5];
      this.implements = data[6];
    });
  }

  /**
   * reload
   */
  public reload = (event: any) => {
    this.loadData();
    event.target.complete();
  }

  /**
   * searchMachinery
   * @param search
   */
  public searchMachinery = (search: string): void => {
    if (search) {
      this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery].filter(item => {
        return (
          item.costCenterCode.toLowerCase().includes(search.toLowerCase()) ||
          item.costCenterName.toLowerCase().includes(search.toLowerCase()) ||
          item.laborName.toLowerCase().includes(search.toLowerCase()) ||
          item.unitName.toLowerCase().includes(search.toLowerCase()) ||
          item.workerName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];
  }

  /**
   * openForm
   */
  public openForm = async () => {
    const modal = await this.modalController.create({
      component: MachineryFormComponent,
      componentProps: {
        companyId: this.activeCompany.id,
        userId: this.activeCompany.user,
        allCostCenters: this.allCostCenters,
        machineryCostCenters: this.machineryCostCenters,
        implements: this.implements,
        labors: this.labors,
        units: this.units,
        workers: this.workers,
        date: moment(this.currentDate).format('YYYY-MM-DD')
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then(() => {
      this.loadData();
    });

    return await modal.present();
  }

  /**
   * editMachinery
   * @param machinery
   * @param slide
   */
  public editMachinery = async (machinery: any, slide: IonItemSliding) => {
    const modal = await this.modalController.create({
      component: MachineryFormComponent,
      componentProps: {
        companyId: this.activeCompany.id,
        userId: this.activeCompany.user,
        allCostCenters: this.allCostCenters,
        machineryCostCenters: this.machineryCostCenters,
        implements: this.implements,
        labors: this.labors,
        units: this.units,
        workers: this.workers,
        editMachinery: machinery,
        date: moment(this.currentDate).format('YYYY-MM-DD')
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then(() => {
      slide.close();
      this.loadData();
    });

    return await modal.present();
  }

  /**
   * deleteMachinery
   * @param machineryTempId
   * @param slide
   */
  public deleteMachinery = async (machineryTempId: number, slide: IonItemSliding) => {
    const sayYes = await this.alertService.confirmAlert('Confirmar borrar esta maquinaria?');

    if(sayYes){
      await this.machineryService.deleteMachinery(machineryTempId);
      slide.close();
      this.loadData();
    }
  }

  /**
   * copyMachinery
   */
  public copyMachinery = async (machinery: any, slide: IonItemSliding) => {
    const modal = await this.modalController.create({
      component: MachineryFormComponent,
      componentProps: {
        companyId: this.activeCompany.id,
        userId: this.activeCompany.user,
        allCostCenters: this.allCostCenters,
        machineryCostCenters: this.machineryCostCenters,
        implements: this.implements,
        labors: this.labors,
        units: this.units,
        workers: this.workers,
        editMachinery: machinery,
        date: moment(this.currentDate).format('YYYY-MM-DD'),
        isCopy: true
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then(() => {
      slide.close();
      this.loadData();
    });

    return await modal.present();
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
      this.loadData();
    }
  }

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
      this.loadData();
    }
  }

}
