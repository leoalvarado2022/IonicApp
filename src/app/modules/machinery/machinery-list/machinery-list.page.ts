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
import { Machinery } from '../machinery.interface';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.page.html',
  styleUrls: ['./machinery-list.page.scss'],
})
export class MachineryListPage implements OnInit, OnDestroy {

  private machinery: Array<Machinery> = [];
  private machineryToRecord: Array<Machinery> = [];
  private originalMachinery: Array<Machinery> = [];
  public filteredMachinery: Array<Machinery> = [];

  private machineryCostCenters: Array<any> = [];
  private allCostCenters: Array<any> = [];
  private implements: Array<any> = [];
  private labors: Array<any> = [];
  private units: Array<any> = [];
  private workers: Array<any> = [];

  public isLoading = false;
  private firstLoad = true;
  private activeCompany: Company;
  private stepper$: Subscription;

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
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
    this.showDate = moment(this.currentDate).format(this.dateFormat);
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
    this.isLoading = true;

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activeCompany = this.storeService.getActiveCompany();
    const user = this.storeService.getUser();
    const units = this.storeService.getUnits();
    const access = this.storeService.getAccess();
    const date = moment(this.currentDate).format('YYYY-MM-DD');

    Promise.all([
      this.machineryService.getMachineryByCompany(this.activeCompany.id, this.activeCompany.user, date, !!access.find(x => x.functionality === 5)),
      this.storageSyncService.getLabors(),
      this.machineryService.getWorkers(this.activeCompany.id, date),
      this.storageSyncService.getMachineryTypeCostCenters(),
      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getImplementTypeCostCenters()
    ]).then( (data: Array<any>) => {

      this.units = units;
      this.originalMachinery = [...data[0]];
      this.filteredMachinery = [...data[0]];
      this.labors = data[1];
      this.workers = data[2];
      this.machineryCostCenters = data[3];
      this.allCostCenters = data[4];
      this.implements = data[5];

      this.isLoading = false;
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
      this.filteredMachinery = this.originalMachinery.filter(item => {
        return (
          item.costCenterCode.toLowerCase().includes(search.toLowerCase()) ||
          item.costCenterName.toLowerCase().includes(search.toLowerCase()) ||
          item.laborName.toLowerCase().includes(search.toLowerCase()) ||
          item.machineryUnitName.toLowerCase().includes(search.toLowerCase()) ||
          item.workerName.toLowerCase().includes(search.toLowerCase()) ||
          (item.implementCostCenterName && item.implementCostCenterName.toLowerCase().includes(search.toLowerCase()))
        );
      });
    } else {
      this.filteredMachinery = [ ...this.originalMachinery];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];
  }

  /**
   * createMachinery
   */
  public createMachinery = async () => {
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

    modal.onDidDismiss().then( (data: any) => {
      if (data['data']) {
        this.minimunReload();
      }
    });

    return await modal.present();
  }

  /**
   * editMachinery
   * @param machinery
   * @param slide
   */
  public editMachinery = async (machinery: Machinery, slide: IonItemSliding) => {
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

    modal.onDidDismiss().then( (data: any) => {
      slide.close();

      if (data['data']) {
        this.minimunReload();
      }
    });

    return await modal.present();
  }

  /**
   * deleteMachinery
   * @param machinery
   * @param slide
   */
  public deleteMachinery = async (machinery: Machinery, slide: IonItemSliding) => {
    const sayYes = await this.alertService.confirmAlert('Confirmar borrar esta maquinaria?');

    if(sayYes){
      if (machinery.tempId) { // Machinery on memory
        await this.machineryService.deleteMachinery(machinery.tempId);
        slide.close();
        this.minimunReload();
      } else { // Machinery syced
        await this.machineryService.markMachineryToDelete(machinery);
        slide.close();
        this.minimunReload();
      }
    }
  }

  /**
   * copyMachinery
   */
  public copyMachinery = async (machinery: Machinery, slide: IonItemSliding) => {
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

    modal.onDidDismiss().then( (data: any) => {
      slide.close();

      if (data['data']) {
        this.minimunReload();
      }
    });

    return await modal.present();
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.minimunReload();
    }
  }

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.minimunReload();
    }
  }

  /**
   * minimunReload
   */
  private minimunReload = () => {
    this.isLoading = true;

    const access = this.storeService.getAccess();
    const date = moment(this.currentDate).format('YYYY-MM-DD');

    Promise.all([
      this.machineryService.getMachineryByCompany(this.activeCompany.id, this.activeCompany.user, date, !!access.find(x => x.functionality === 5)),
      this.machineryService.getWorkers(this.activeCompany.id, date)
    ]).then( (data: any) => {
      this.originalMachinery = [...data[0]];
      this.filteredMachinery = [...data[0]];
      this.workers = [...data[1]];

      this.isLoading = false;
    });
  }

}
