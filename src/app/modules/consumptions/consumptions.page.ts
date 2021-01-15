import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { StorageSyncService } from './../../services/storage/storage-sync/storage-sync.service';
import { Consumption, Warehouse } from './../../shared/services/store/store-interface';
import { ModalController, IonItemSliding } from '@ionic/angular';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { Product } from 'src/app/shared/services/store/store-interface';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { ConsumptionService } from './services/consumption.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { Company } from '@primetec/primetec-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consumptions',
  templateUrl: './consumptions.page.html',
  styleUrls: ['./consumptions.page.scss'],
})
export class ConsumptionsPage implements OnInit, OnDestroy {

  public filteredConsumptions: Array<Consumption> = [];
  private consumptions: Array<Consumption> = [];
  private warehouses: Array<Warehouse> = [];
  private costCenters: Array<any> = [];
  private products: Array<Product> = [];
  private activeCompany: Company;

  public isLoading = false;
  public isSyncing = false;
  private firstLoad = true;
  private stepper$: Subscription;

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  constructor(
    private storageSyncService: StorageSyncService,
    private modalController: ModalController,
    private storeService: StoreService,
    private consumptionService: ConsumptionService,
    private alertService: AlertService,
    private stepperService: StepperService
  ) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.showDate = moment(this.currentDate).format(this.dateFormat);
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe((steps: Array<any>) => {
      if (steps.length === 0  && !this.firstLoad) {
        this.isSyncing = false;
        this.loadData();
      } else {
        this.isSyncing = true;
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

    this.activeCompany = this.storeService.getActiveCompany();
    const date = moment(this.currentDate).format('YYYY-MM-DD');

    Promise.all([
      this.consumptionService.getConsumptionsByCompany(this.activeCompany.id, date),
      this.storageSyncService.getWarehouses(),
      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getProducts()
    ]).then( (data: any) => {

      this.consumptions = data[0];
      this.filteredConsumptions = data[0];
      this.warehouses = data[1];
      this.costCenters = data[2];
      this.products = data[3];

      this.isLoading = false;
    });
  }

  /**
   * reload
   */
  public reload = (event: any) => {
    this.minimunReload();
    event.target.complete();
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

    this.activeCompany = this.storeService.getActiveCompany();
    const date = moment(this.currentDate).format('YYYY-MM-DD');

    setTimeout(() => {
      this.consumptionService.getConsumptionsByCompany(this.activeCompany.id, date).then( (data: Array<Consumption>) => {

        this.consumptions = data;
        this.filteredConsumptions = data;

        this.isLoading = false;
      });
    }, 500);
  }

  /**
   * searchConsumption
   * @param search
   */
  public searchConsumption = (search: string): void => {
    if (search) {
      this.filteredConsumptions = this.consumptions.filter((item: Consumption) => {
        return (
          item.warehouseOriginCode.toLowerCase().includes(search.toLowerCase()) ||
          item.warehouseOriginName.toLowerCase().includes(search.toLowerCase()) ||
          item.costCenterName.toLowerCase().includes(search.toLowerCase()) ||
          item.date.toLowerCase().includes(search.toLowerCase()) ||
          item.itemName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredConsumptions = [ ...this.consumptions];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredConsumptions = [...this.consumptions];
  }

  /**
   * createConsumption
   */
  public createConsumption = async () => {
    const modal = await this.modalController.create({
      component: ConsumptionFormComponent,
      componentProps: {
        warehouses: this.warehouses,
        costCenters: this.costCenters,
        products: this.products,
        date: this.currentDate,
        userId: this.activeCompany.user,
        companyId: this.activeCompany.id
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
   * editConsumption
   * @param consumption
   * @param slide
   */
  public editConsumption = async (consumption: Consumption, slide: IonItemSliding) => {
    const modal = await this.modalController.create({
      component: ConsumptionFormComponent,
      componentProps: {
        warehouses: this.warehouses,
        costCenters: this.costCenters,
        products: this.products,
        date: this.currentDate,
        userId: this.activeCompany.user,
        companyId: this.activeCompany.id,
        editConsumption: consumption
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
   * copyConsumption
   * @param consumption
   * @param slide
   */
  public copyConsumption = async (consumption: Consumption, slide: IonItemSliding) => {
    const modal = await this.modalController.create({
      component: ConsumptionFormComponent,
      componentProps: {
        warehouses: this.warehouses,
        costCenters: this.costCenters,
        products: this.products,
        date: this.currentDate,
        userId: this.activeCompany.user,
        companyId: this.activeCompany.id,
        editConsumption: consumption,
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
   * deleteConsumption
   * @param consumption
   * @param slide
   */
  public deleteConsumption = async (consumption: Consumption, slide: IonItemSliding) => {
    const sayYes = await this.alertService.confirmAlert('Confirmar borrar este consumo?');

    if (sayYes) {
      if (consumption.tempId) { // Consumption on memory
        await this.consumptionService.deleteConsumption(consumption.tempId);
        slide.close();
        this.minimunReload();
      } else { // Consumption syced
        await this.consumptionService.markConsumptionToDelete(consumption);
        slide.close();
        this.minimunReload();
      }
    }
  }

  /**
   * formatDate
   * @param date
   */
  public formatDate = (date: string): string => {
    return moment.utc(this.cleanDate(date), 'YYYY-MM-DD').format('DD/MM/YYYY');
  }

  /**
   * cleanDate
   * @param date
   */
  private cleanDate = (date: string) => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }


  public getStepper(){
    return this.stepperService.getStepper();
  }

}
