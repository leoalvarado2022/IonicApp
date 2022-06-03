import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { CreateMeasuringComponent } from '../create-measuring/create-measuring.component'
import { MeasuringSyncService } from '../../measuring-sync.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss'],
})
export class DetailFormComponent implements OnInit {


  @Input() data: any;
  @Input() fecha_registro: string;

  private latitude: any;
  private longitude: any;
  listData: Array<any>;
  filteredData: Array<any> = [];
  searchData: Array<any> = [];
  measuringData: Array<any> = [];
  public showDate: any;
  public isLoading = false;
  constructor(
    private modalController: ModalController,
    private alertService: AlertService,
    private measuringSyncService: MeasuringSyncService,
    private geolocationService: GeolocationService,
    private storageSyncService: StorageSyncService
  ) { 
    this.geolocationService.getCurrentPosition().toPromise().then(res => {
      this.latitude = res.lat;
      this.longitude = res.lng;
    });
    ;
  }

  ngOnInit() {
    this.showDate = this.data.register_date.split(" ")[0];
  }

  loadData() {

    this.isLoading = true;
    Promise.all([
      this.storageSyncService.getListMeasuring(),
      this.measuringSyncService.getMeasuringToRecord()
    ]).then( data => {

      console.log("data[1]::> ",data[1]);

      const locales = data[1].filter(item => item.id == 0);
      this.listData = data[0].map(mL => ({...mL, ...data[1].find(mT => Math.abs(mL.id) === Math.abs(mT.id))}));
      this.listData = this.listData.concat(locales);

      console.log("this.listData::> ",this.listData);

      this.filterByDate(this.showDate);

      const _tmpData = this.measuringData.filter(item => {
        return item.own_id === this.data.own_id
      });

      this.data = _tmpData[0];

      console.log("this.data::> ",this.data);

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

  public groupArray() {
    const {searchData,measuringData,filteredData} = this.measuringSyncService.groupArray(this.filteredData,["cost_center_id","pair_measure_id"]);

    this.searchData = searchData;
    this.measuringData = measuringData;
    this.filteredData = filteredData;
  }

  closeModal(){
    this.modalController.dismiss();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: CreateMeasuringComponent,
      componentProps: {
        data: this.data,
        fecha_registro: this.fecha_registro,
        edit: false
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then( (data) => {
      this.loadData();
    });

    return await modal.present();
  }

  async editMeasuring(measuring, slide) {
    slide.close();

    const modal = await this.modalController.create({
      component: CreateMeasuringComponent,
      componentProps: {
        data: measuring,
        edit: true
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then( (data) => {
      this.loadData();
    });

    return await modal.present();

  }

  deleteMeasuring(measuring : any,slide) {
    this.alertService.confirmAlert('Esta seguro de que desea borrar esta Medición?').then(sayYes => {
      slide.close();

      if (sayYes) {
        this.deleteMeasuringData(measuring.id);
      }
    })
  }

  async deleteMeasuringData(id) {
    let dataToDelete: any;
    let tmp = await this.searhInLocal(id);

    if(tmp.length > 0){
      dataToDelete = tmp;
    }else {
      dataToDelete = await this.searhInSync(id);
    }

    dataToDelete[0].id *= -1;
    dataToDelete[0].measurement_id = dataToDelete[0].pair_measure_id;
    dataToDelete[0].latitude = this.latitude;
    dataToDelete[0].longitude = this.longitude;
    dataToDelete[0].temporal_id = moment().unix() + 1;
    dataToDelete[0].status = "delete";

    await this.measuringSyncService.addMeasuringToRecord(dataToDelete[0]);

    this.loadData();
  }

  async searhInLocal(id) {
    const localMeasuring = await this.measuringSyncService.getMeasuringToRecord();
    return localMeasuring.filter( (item) => {
      return item.id == id
    });
  }

  async searhInSync(id) {
    const listMeasuring = await this.storageSyncService.getListMeasuring();
    return listMeasuring.filter( (item) => {
      return item.id == id
    });
  }

}