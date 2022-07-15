import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { StorageKeys } from 'src/app/services/storage/storage-keys';
import { ModalController } from '@ionic/angular';
import { DetailFormComponent } from '../forms/detail-form/detail-form.component'
import { CreateMeasuringComponent } from '../forms/create-measuring/create-measuring.component'
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { MeasuringSyncService } from '../measuring-sync.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  private stepper$: Subscription;

  public isLoading = false;
  private firstLoad = true;
  listData: Array<any>;
  filteredData: Array<any> = [];
  searchData: Array<any> = [];
  measuringData: Array<any> = [];
  backModalData: any;
  constructor(
    private storageSyncService: StorageSyncService, 
    private stepperService: StepperService,
    private measuringSyncService: MeasuringSyncService,
    private modalController: ModalController,
    private storage: Storage,
    public router: Router) 
  {
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
  }

  ngOnDestroy() {
    this.stepper$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadData();
  }

  public groupArray() {
    const {searchData,measuringData,filteredData} = this.measuringSyncService.groupArray(this.filteredData,["cost_center_id","pair_measure_id"]);

    this.searchData = searchData;
    this.measuringData = measuringData;
    this.filteredData = filteredData;

    if(this.backModalData && this.backModalData.cost_center_id > 0) {  
      const _measureData = this.measuringData.filter( item => {
        return (item.cost_center_id == this.backModalData.cost_center_id && item.pair_measure_id == this.backModalData.pair_measure_id)
      });
      this.openModal(_measureData[0]);
      this.backModalData = {};
    }
  }

  async removeNulledData() {
    const measuringsToRecord = await this.storage.get(StorageKeys.MeasuringsToRecord);
      if (measuringsToRecord) {
        const _toAdd = measuringsToRecord.filter(item => item.id != null);
        console.log("🚀 ~ file: list.component.ts ~ line 85 ~ ListComponent ~ removeNulledData ~ _toAdd", _toAdd)
        this.storage.remove(StorageKeys.MeasuringsToRecord);
        this.storage.set(StorageKeys.MeasuringsToRecord,_toAdd);
      }
  }

  loadData() {
    this.firstLoad = false;

    this.isLoading = true;
    Promise.all([
      this.storageSyncService.getListMeasuring(),
      this.measuringSyncService.getMeasuringToRecord()
    ]).then( data => {

      const locales = data[1].filter(item => item.id == 0 || item.id == null);
      this.listData = data[0].map(mL => ({...mL, ...data[1].find(mT => Math.abs(mT.id) === Math.abs(mL.id))}));
      this.listData = this.listData.concat(locales);

      this.filterByDate(this.showDate);
      this.isLoading = false;
    });
  }

  public filterByDate(_date) {
    this.filteredData = [];
    this.filteredData = this.listData.filter( item => {
      const _d = item.register_date.split(" ")[0];
      return (_d == _date);
    });

    this.groupArray();
  }  

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').format('YYYY-MM-DD');
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.filterByDate(this.showDate);
    }
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').format('YYYY-MM-DD');
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.filterByDate(this.showDate);
    }
  }

  async openModal(measuringData) {
    const modal = await this.modalController.create({
      component: DetailFormComponent,
      componentProps: {
        data: measuringData,
        fecha_registro: this.showDate+" "+moment().format("hh:mm")
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then( async () => {
      console.log("ejecuta borrar la data nula solo cuando hace el onDidDismiss");
      await this.removeNulledData();
      this.loadData();
    });

    return await modal.present();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: CreateMeasuringComponent,
      componentProps: {
        fecha_registro: this.showDate+" "+moment().format("hh:mm"),
        fecha_actual: this.showDate
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then( (data) => {
      this.backModalData = data.data;
      this.loadData();
    });

    return await modal.present();
  }

  cancelSearch() {
    this.measuringData = [...this.searchData];
  }

  searchMeasuring(search: string) {
    if(search && search.length > 0) {
      search = search.toLowerCase();
      this.measuringData = this.searchData.filter( item => {
        return (
          item.medicion.toLowerCase().includes(search) ||
          item.centro_costo.toLowerCase().includes(search)
        );
      })
    }else {
      this.cancelSearch();
    }
  }

}