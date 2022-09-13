import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbstractControl,ValidatorFn,ValidationErrors,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CostCenterList } from '@primetec/primetec-angular';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StoreService } from '../../../../shared/services/store/store.service';
import { GeolocationService} from '../../../../shared/services/geolocation/geolocation.service';
import { MeasuringSyncService } from '../../measuring-sync.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

import * as moment from 'moment';

@Component({
  selector: 'app-create-measuring',
  templateUrl: './create-measuring.component.html',
  styleUrls: ['./create-measuring.component.scss'],
})
export class CreateMeasuringComponent implements OnInit {

  @Input() data: any;
  @Input() edit: any;
  @Input() fecha_registro: string;
  @Input() fecha_actual: string;

  private costCenters: Array<CostCenterList> = [];
  private Measuring: Array<any>;

  public measureForm: FormGroup;
  public filteredCostCenters: Array<any> = [];
  public filteredMeasuring: Array<any> = [];
  public costCenterName: string;
  public costCenterCode: string;
  public measuringName: string;
  public decimals: number = 0;
  public readonlyCenter: boolean = false;
  public readonlyMeasuring: boolean = false;
  private latitude;
  private longitude;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storageSyncService: StorageSyncService,
    private alertService: AlertService,
    private measuringSyncService: MeasuringSyncService,
    private storeService: StoreService,
    private geolocationService: GeolocationService
  ) { 

    this.geolocationService.getCurrentPosition().toPromise().then(res => {
      this.latitude = res.lat;
      this.longitude = res.lng;
    });


  }

  ngOnInit() {

    this.loadData().then(data => {
      this.costCenters = [...data[0]];
      this.Measuring = [...data[1]];
      
      if(this.data) {

        if(!!this.edit) {
          this.measureForm.get("id").patchValue(this.data.id);
          this.measureForm.get("quantity").patchValue(this.data.quantity);
        }

        this.measureForm.get("costCenterId").patchValue(this.data.cost_center_id);
        this.measureForm.get("pairMeasureId").patchValue(this.data.pair_measure_id);

        const costCenter = this.costCenters.find( (item) => {
          return (item.id === this.data.cost_center_id)
        });

        const _measuring = this.Measuring.find( (item) => {
          return (item.id === this.data.pair_measure_id)
        })
        
        this.costCenterName = costCenter.name;
        this.costCenterCode = costCenter.code;
        this.measuringName = _measuring.name;

        this.measureForm.get("qtyDecimals").patchValue(_measuring.decimals);
        this.measureForm.get("unitMeasuring").patchValue(_measuring.unit);

        this.readonlyCenter = true;
        this.readonlyMeasuring = true;

        this.decimals = Number.parseInt(_measuring.decimals);
        this.cleanQtyValidators();
        // this.addQtyValidators();

      } 
    });

    this.measureForm = this.formBuilder.group({
      id: [0, Validators.required],
      costCenterId: ['', Validators.required],
      pairMeasureId: ['', Validators.required],
      unitMeasuring: ['',Validators.required],
      qtyDecimals: [0],//'',Validators.required],
      quantity: [0],
    });
  }

  validateDecimal(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null =>  {
      const _text = Number.parseFloat(control.value).toString();
      
      if (!!_text && !!_text.split(".")[1]) {
        if(_text.split(".")[1].length > this.decimals) {
          this.measureForm.get("quantity").setErrors({ quantityInvalid: true });
          return { quantityInvalid: true };
        }
      }
      return null;
    }
  }

  decimalRegex(event: any) {
    const reg = new RegExp("^\\d*(.\\d{0,"+this.decimals+"})?$");
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }

  closeModal(data){
    this.modalController.dismiss(data);
  }

  async submitForm() {
    const company = this.storeService.getActiveCompany();
    const temporal_id = moment().unix() + 1;
    let _databack = {}
    if(!!this.edit){
      await this.editMeasuringData(this.data.id,company,temporal_id);
    } else {
      const data = {
        id: 0,
        registry_date: this.swap_date(this.fecha_registro),
        register_date: this.fecha_registro
      };
      const dataMeasuring = this.prepareMeasuringData(data,company,temporal_id);
      await this.measuringSyncService.addMeasuringToRecord(dataMeasuring);
      _databack = {
        pair_measure_id: this.measureForm.get('pairMeasureId').value,
        cost_center_id:  this.measureForm.get('costCenterId').value
      };
    }
    this.closeModal(_databack);
  }

  async editMeasuringData(id,company,temporal_id) {
    let dataToedit;
    let tmp = await this.searhInSync(temporal_id);
    console.log("tmp::> ",tmp);
    if(tmp.length > 0) {
      dataToedit = tmp;
    }else {
      dataToedit = this.createNewMeasuring(id,company,temporal_id);
      await this.measuringSyncService.addMeasuringToRecord(dataToedit);
    }
  }

  async searhInSync(temporal_id) {
    const localMeasuring = await this.measuringSyncService.getMeasuringToRecord();
    return localMeasuring.filter( item => item.temporal_id == temporal_id);
  }

  swap_date(date) {
    const arrDate = date.split(" ");
    return arrDate[0].split("/").reverse().join("-")+" "+arrDate[1];
  }

  createNewMeasuring(id,company,temporal_id) {
    const _date = this.swap_date(this.data.register_date);

    const data = {
      id: id,
      registry_date: _date,
      register_date: this.data.register_date
    };
    return this.prepareMeasuringData(data,company,temporal_id);
  }

  prepareMeasuringData(data,company: any, temporal_id) {
    return {
      id: null, //data.id,
      measurement_id: this.measureForm.get('pairMeasureId').value,
      pair_measure_id: this.measureForm.get('pairMeasureId').value,
      registry_date: data.registry_date, 
      register_date: data.register_date,
      cost_center_id: this.measureForm.get('costCenterId').value,
      quantity: null, //this.measureForm.get('quantity').value,
      latitude: this.latitude,
      longitude: this.longitude,
      entity_creator_id: company.user,
      measure: this.measuringName,
      cost_center_code: this.costCenterCode,
      cost_center_name: this.costCenterName,
      temporal_id: temporal_id,
    }
  }


  private loadData = () => {
    return Promise.all([
      this.storageSyncService.getCostCentersCustom(),
      this.storageSyncService.getMeasuring()
    ]);
  }

  public searchCostCenter = (search: string): void => {
    if (search) {
      this.filteredCostCenters = this.costCenters.filter(item => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredCostCenters = [];
    }
  }

  public selectCostCenter = (costCenter: any): void => {
    this.measureForm.get('costCenterId').patchValue(costCenter.id);
    this.costCenterName = costCenter.name;
    this.costCenterCode = costCenter.code;
    this.filteredCostCenters = [];
    this.checkSavedMeasuring();
  }

  public cleanCostCenterSearch = (): void => {
    this.measureForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;
    this.costCenterCode = null;
  }

  searchMeasuring(search: string) {
    if (search) {
      this.filteredMeasuring = this.Measuring.filter(item => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredMeasuring = [];
    }
  }

  selectMeasuring(measuring: any) {
    this.measureForm.get('pairMeasureId').patchValue(measuring.id);
    this.measuringName = measuring.name;

    this.measureForm.get("qtyDecimals").patchValue(measuring.decimals);
    this.measureForm.get("unitMeasuring").patchValue(measuring.unit);

    this.decimals = Number.parseInt(measuring.decimals);

    this.cleanQtyValidators();
    // this.addQtyValidators();
    
    this.filteredMeasuring = [];
    this.checkSavedMeasuring();
  }

  addQtyValidators() {
    if(!this.edit) {
      this.measureForm.get("quantity").patchValue("0.1")
    }
    this.measureForm.get("quantity").setValidators([
      Validators.required,
      Validators.min(0.1),
      this.validateDecimal()
    ]);
    this.measureForm.get("quantity").updateValueAndValidity();
  }

  cleanQtyValidators() {
    this.measureForm.get("quantity").clearValidators();
    this.measureForm.get("quantity").updateValueAndValidity();
  }

  cleanMeasureSearch() {
    this.measureForm.get('pairMeasureId').patchValue('');
    this.measureForm.get("qtyDecimals").patchValue(0);
    this.measureForm.get("unitMeasuring").patchValue('');
    this.filteredMeasuring = [];
    this.measuringName = null;
  }

  async checkSavedMeasuring() {
    const listMeasuring = await this.storageSyncService.getListMeasuring();
    const existe = listMeasuring.filter(item => (item.cost_center_id == this.measureForm.get("costCenterId").value && item.pair_measure_id == this.measureForm.get("pairMeasureId").value && item.register_date.split(" ")[0] == this.fecha_actual));
    // if(existe.length > 0) {
    //   await this.alertService.infoMessage("FX360",`Ya existe el centro de costo y medición para la fecha ${this.fecha_actual}`);
    //   this.cleanMeasureSearch();
    // }
  }

}