import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { ModalController,IonInput } from '@ionic/angular';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { CreateMeasuringComponent } from '../create-measuring/create-measuring.component'
import { StoreService } from '../../../../shared/services/store/store.service';
import { MeasuringSyncService } from '../../measuring-sync.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import * as moment from 'moment';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss'],
})
export class DetailFormComponent implements OnInit {


  @Input() data: any;
  @Input() fecha_registro: string;
  @ViewChild('autofocus', { static: false }) quantity_input: IonInput;

  private latitude: any;
  private longitude: any;
  listData: Array<any>;
  filteredData: Array<any> = [];
  searchData: Array<any> = [];
  measuringData: Array<any> = [];
  newQty: number = 0;
  public showDate: any;
  public isLoading = false;

  private Measuring: Array<any>;
  public decimals: number = 0;

  public decimalError: boolean = false;

  constructor(
    private modalController: ModalController,
    private alertService: AlertService,
    private measuringSyncService: MeasuringSyncService,
    private geolocationService: GeolocationService,
    private storeService: StoreService,
    private storageSyncService: StorageSyncService,
    private loaderService: LoaderService
  ) { 
    this.geolocationService.getCurrentPosition().toPromise().then(res => {
      this.latitude = res.lat;
      this.longitude = res.lng;
    });

    this.storageSyncService.getMeasuring().then( _data => {
      this.Measuring = _data;

      const _measuring = this.Measuring.find( (item) => {
        return (item.id === this.data.pair_measure_id)
      });

      this.decimals = Number.parseInt(_measuring.decimals);
    })
  }

  ngOnInit() {
    this.showDate = this.data.register_date.split(" ")[0];
  }

  validateDecimal() {
    if(this.newQty > 0.0){
      const _text = this.newQty.toString();

      if (!!_text && !!_text.split(".")[1]) {
        if(_text.split(".")[1].length > this.decimals) {
          this.decimalError = true;
          return false
        }
      }
      this.decimalError = false;
      return true;
    }
  }

  decimalRegex(event: any) {
    const reg = new RegExp("^\\d*(.\\d{0,"+this.decimals+"})?$");
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }

  ionViewWillEnter() {
    this.quantity_input.setFocus();
  }

  loadData() {
    this.loaderService.startLoader();
    this.isLoading = true;
    Promise.all([
      this.storageSyncService.getListMeasuring(),
      this.measuringSyncService.getMeasuringToRecord()
    ]).then( data => {      

      const locales = data[1].filter(item => item.id == 0);
      this.listData = data[0].map(mL => ({...mL, ...data[1].find(mT => Math.abs(mL.id) === Math.abs(mT.id))}));
      this.listData = this.listData.concat(locales);      

      this.filterByDate(this.showDate);

      const _tmpData = this.measuringData.filter(item => {
        return item.own_id === this.data.own_id
      });

      this.data = _tmpData[0];

      this.isLoading = false;
      this.loaderService.stopLoader();
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
    this.newQty = 0;
    this.quantity_input.setFocus();
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

  async submitForm() {


    if ( this.newQty <= 0) {
      this.alertService.infoMessage("FX360","La cantidad debe ser mayor a 0");
      return;
    }

    if(this.decimalError) {
      this.alertService.infoMessage("FX360",`Error la cantidad no puede contener mas de ${this.decimals} decimal(es)`);
      return;
    }

    const company = this.storeService.getActiveCompany();
    const temporal_id = moment().unix() + 1;

    const _date = this.fecha_registro.split(" ")[0];
    const _hour = moment().format("hh:mm");
    const data = {
      id: 0,
      registry_date: this.swap_date(_date)+" "+_hour,
      register_date: _date+" "+_hour
    };
    const dataMeasuring = this.prepareMeasuringData(data,company,temporal_id);
    await this.measuringSyncService.addMeasuringToRecord(dataMeasuring);

    this.loadData();

    this.newQty = 0;
    this.quantity_input.setFocus();
  }

  swap_date(date) {
    return date.split("/").reverse().join("-");
  }

  prepareMeasuringData(data,company: any, temporal_id) {
    return {
      id: data.id,
      measurement_id: this.data.pair_measure_id,
      pair_measure_id: this.data.pair_measure_id,
      registry_date: data.registry_date, 
      register_date: data.register_date,
      cost_center_id: this.data.cost_center_id,
      quantity: this.newQty,
      latitude: this.latitude,
      longitude: this.longitude,
      entity_creator_id: company.user,
      measure: this.data.measure,
      cost_center_code: this.data.cost_center_code,
      cost_center_name: this.data.cost_center_name,
      temporal_id: temporal_id,
    }
  }

}