import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { StorageSyncService } from './../../services/storage/storage-sync/storage-sync.service';
import { Consumption, Warehouse } from './../../shared/services/store/store-interface';
import { ModalController } from '@ionic/angular';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { Product } from 'src/app/shared/services/store/store-interface';
import { StoreService } from 'src/app/shared/services/store/store.service';

@Component({
  selector: 'app-consumptions',
  templateUrl: './consumptions.page.html',
  styleUrls: ['./consumptions.page.scss'],
})
export class ConsumptionsPage implements OnInit {

  public filteredConsumptions: Array<Consumption> = [];
  private consumptions: Array<Consumption> = [];
  private warehouses: Array<Warehouse> = [];
  private costCenters: Array<any> = [];
  private products: Array<Product> = [];
  private activeCompany: any;

  public isLoading = false;
  private firstLoad = true;

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  constructor(
    private storageSyncService: StorageSyncService,
    private modalController: ModalController,
    private storeService: StoreService
  ) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.showDate = moment(this.currentDate).format(this.dateFormat);
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.firstLoad = false;
    this.isLoading = true;

    this.activeCompany = this.storeService.getActiveCompany();

    Promise.all([
      this.storageSyncService.getConsumptions(),
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
    event.target.complete();
  }

  /**
   * openConsumptionForm
   */
  public openConsumptionForm = async () => {
    const modal = await this.modalController.create({
      component: ConsumptionFormComponent,
      componentProps: {
        warehouses: this.warehouses,
        costCenters: this.costCenters,
        products: this.products,
        date: this.currentDate,
        userId: this.activeCompany.user,
        companyId: this.activeCompany.id
      }
    });

    modal.onDidDismiss().then( (data: any) => {
      if (data['data']) {

      }
    });

    return await modal.present();
  }

}
