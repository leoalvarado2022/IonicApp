import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { StorageSyncService } from './../../services/storage/storage-sync/storage-sync.service';
import { Consumption } from './../../shared/services/store/store-interface';
import { ModalController } from '@ionic/angular';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';

@Component({
  selector: 'app-consumptions',
  templateUrl: './consumptions.page.html',
  styleUrls: ['./consumptions.page.scss'],
})
export class ConsumptionsPage implements OnInit {

  public filteredConsumptions: Array<Consumption> = [];
  private consumptions: Array<Consumption> = [];

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

    Promise.all([
      this.storageSyncService.getConsumptions()
    ]).then( (data: any) => {

      console.log('data', data);

      this.consumptions = data[0];
      this.filteredConsumptions = data[0];

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
      component: ConsumptionFormComponent
    });

    modal.onDidDismiss().then( (data: any) => {
      if (data['data']) {

      }
    });

    return await modal.present();
  }

}
