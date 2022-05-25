import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbstractControl,ValidatorFn,ValidationErrors,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CostCenterList } from '@primetec/primetec-angular';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StoreService } from '../../../../shared/services/store/store.service';
import { GeolocationService} from '../../../../shared/services/geolocation/geolocation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-measuring',
  templateUrl: './create-measuring.component.html',
  styleUrls: ['./create-measuring.component.scss'],
})
export class CreateMeasuringComponent implements OnInit {

  @Input() data: any;

  private costCenters: Array<CostCenterList> = [];
  private Measuring: Array<any>;

  public measureForm: FormGroup;
  public filteredCostCenters: Array<any> = [];
  public filteredMeasuring: Array<any> = [];
  public costCenterName: string;
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
        this.measureForm.get("costCenterId").patchValue(this.data.id_centro_costo);
        this.measureForm.get("pairMeasureId").patchValue(this.data.id_par_medicion);

        const costCenter = this.costCenters.find( (item) => {
          return (item.id === this.data.id_centro_costo)
        });

        const _measuring = this.Measuring.find( (item) => {
          return (item.id === this.data.id_par_medicion)
        } )

        this.costCenterName = costCenter.name;
        this.measuringName = _measuring.name;

        this.measureForm.get("qtyDecimals").patchValue(_measuring.decimals);
        this.measureForm.get("unitMeasuring").patchValue(_measuring.unit);

        this.readonlyCenter = true;
        this.readonlyMeasuring = true;

        this.decimals = Number.parseInt(_measuring.decimals);
        this.cleanQtyValidators();
        this.addQtyValidators();

      } 
    });;

    this.measureForm = this.formBuilder.group({
      id: [0, Validators.required],
      costCenterId: ['', Validators.required],
      pairMeasureId: ['', Validators.required],
      unitMeasuring: ['',Validators.required],
      qtyDecimals: ['',Validators.required],
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

  closeModal(){
    this.modalController.dismiss();
  }

  submitForm() {

    const company = this.storeService.getActiveCompany();

    console.log("company::> ",company);
    console.log("company.user::> ",company.user);

    const dataMeasuring = {
      id: 0,
      id_par_medicion: this.measureForm.get('pairMeasureId').value,
      fecha_registro: moment().format("DD-MM-YYYY hh:mm"),
      id_par_centros_costos: this.measureForm.get('costCenterId').value,
      cantidad: this.measureForm.get('quantity').value,
      latitud: this.latitude,
      longitud: this.longitude,
      user: company.user,
      id_temporal: 0,
    };
    console.log("dataMeasuring::> ",dataMeasuring);

    this.storageSyncService.addMeasuringToRecord(dataMeasuring);

    this.closeModal();
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
    this.filteredCostCenters = [];
  }

  public cleanCostCenterSearch = (): void => {
    this.measureForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;
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
    this.addQtyValidators();
    
    this.filteredMeasuring = [];
  }

  addQtyValidators() {
    console.log("this.decimals::> ",this.decimals);
    this.measureForm.get("quantity").patchValue("0.1");
    this.measureForm.get("quantity").setValidators([
      Validators.required,
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
    this.filteredMeasuring = [];
    this.measuringName = null;
  }

}