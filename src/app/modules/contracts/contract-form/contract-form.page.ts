import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {ValidateRut} from '@primetec/primetec-angular';
import * as moment from 'moment';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.page.html',
  styleUrls: ['./contract-form.page.scss'],
})
export class ContractFormPage implements OnInit {

  public currentStep = 1;
  public contractForm: FormGroup;

  public nationalities: Array<any> = [];
  public contractTypes: Array<any> = [];
  public civilStatus: Array<any> = [];
  public afps: Array<any> = [];
  public isapres: Array<any> = [];
  public quadrilles: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private barcodeScanner: BarcodeScanner,
    private toastService: ToastService
  ) {

  }

  ngOnInit() {
    this.nationalities = this.storeService.getCountries();
    this.contractTypes = this.storeService.getContractTypes();
    this.civilStatus = this.storeService.getCivilStatus();
    this.afps = this.storeService.getAfps();
    this.isapres = this.storeService.getIsapres();
    this.quadrilles = this.storeService.getQuadrilles();

    this.contractForm = this.formBuilder.group({
      nationality: [this.nationalities.length === 1 ? this.nationalities[0].id : '', Validators.required],
      contractType: [this.contractTypes.length === 1 ? this.contractTypes[0].id : '', Validators.required],
      identifier: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      sureName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['hombre', Validators.required],
      civilStatus: [this.civilStatus.length === 1 ? this.civilStatus[0].name : '', Validators.required],
      afp: [this.afps.length === 1 ? this.afps[0].id : '', Validators.required],
      isapre: [this.isapres.length === 1 ? this.isapres[0].id : '', Validators.required],
      retired: [false, Validators.required],
      quadrille: [this.quadrilles.length === 1 ? this.quadrilles[0].id : '', Validators.required]
    });
  }

  /**
   * openBarcodeScanner
   */
  public openBarcodeScanner = () => {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      this.toastService.errorToast(err);
    });
  };

  /**
   * changeIdentifierValidation
   * @param nationalityId
   */
  public changeIdentifierValidation = (nationalityId: number): void => {
    console.log('se dispara este evento ?');
    const find = this.nationalities.find(i => i.id === nationalityId);

    if (find && find.identifierType.toLowerCase() === 'rut') {
      this.contractForm.get('identifier').setValidators([Validators.required, ValidateRut]);
      this.contractForm.get('identifier').updateValueAndValidity();
    } else {
      this.contractForm.get('identifier').setValidators([Validators.required]);
      this.contractForm.get('identifier').updateValueAndValidity();
    }
  };

  /**
   * submit
   */
  public submit = () => {
    const data = Object.assign({}, this.contractForm.value);
    data.dob = moment(data.dob).format('YYYY-MM-DD');
    console.log({data});
  };

  /**
   * changeGenderEvent
   * @param gender
   */
  public changeGenderEvent = (gender: string) => {
    this.contractForm.get('gender').patchValue(gender);
  };
  
}
