import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {cleanRut, formatRut, ValidateRut} from '@primetec/primetec-angular';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

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
  public workers: Array<any> = [];

  private activeCompany: any = null;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  private tempId: number;

  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private toastService: ToastService,
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) {

  }

  ngOnInit() {
    this.loadData();

    const findDefault = this.nationalities.find(item => item.default);
    const onlyOne = this.nationalities.length === 1 ? this.nationalities[0] : '';

    this.contractForm = this.formBuilder.group({
      id: [0],
      companyId: [this.activeCompany.id],
      workerId: [0],
      nationality: [findDefault ? findDefault.id : onlyOne, Validators.required],
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
      quadrille: [this.quadrilles.length === 1 ? this.quadrilles[0].id : '', Validators.required],
      creatorId: [this.activeCompany.user],
      tempId: [this.tempId]
    });

    this.changeIdentifierValidation(findDefault ? findDefault.id : onlyOne);
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.nationalities = this.storeService.getCountries();
    this.contractTypes = this.storeService.getContractTypes();
    this.civilStatus = this.storeService.getCivilStatus();
    this.afps = this.storeService.getAfps();
    this.isapres = this.storeService.getIsapres();
    this.quadrilles = this.storeService.getQuadrilles();
    this.activeCompany = this.storeService.getActiveCompany();
    this.tempId = this.storeService.getPrecontractTempId();
    this.workers = this.storeService.getWorkers();

    console.log('this.workers', this.workers);
  };

  /**
   * openBarcodeScanner
   */
  public openBarcodeScanner = () => {
    this.barcodeScanner.scan().then(barcodeData => {
      const {cancelled, format, text} = barcodeData;
      if (!cancelled) {
        let operativeText = text;
        if (operativeText.indexOf('registrocivil.cl') && operativeText.match(/RUN=(([0-9])+\-?([kK0-9])+)/)) {
          operativeText = operativeText.match(/RUN=(([0-9])+\-?([kK0-9])+)/)[1];
        }

        if (operativeText.match(/^(\d|K|\s)+(\s\w+)$/)) {
          operativeText = operativeText.trim().substr(0, 9);
        }

        if (operativeText) {
          operativeText = operativeText.replace(/\./g, '').replace(/-/g, '');
        }

        if (operativeText.length > 0) {
          // CHECK IF THE WORKER WAS PREVIOUSLY REGISTERED
          const alreadyRegistered = this.workers.find(item => item.identifier.toLowerCase() === operativeText.toLowerCase());

          // ACTUALIZAR DATOS
          console.log('rut obtenido', operativeText);

          if (alreadyRegistered) {
            // INJECTAR DATOS EN FORM

            this.contractForm.patchValue({
              workerId: alreadyRegistered.id,
              nationality: 'PENDIENTE',
              contractType: 'PENDIENTE',
              identifier: alreadyRegistered.identifier,
              name: alreadyRegistered.names,
              lastName: 'PENDIENTE',
              sureName: 'PENDIENTE',
              dob: 'PENDIENTE',
              gender: 'PENDIENTE',
              civilStatus: 'PENDIENTE',
              afp: 'PENDIENTE',
              isapre: 'PENDIENTE',
              retired: 'PENDIENTE',
              quadrille: alreadyRegistered.quadrille
            });
          } else {
            this.contractForm.get('identifier').patchValue(operativeText);
          }

          /*
          active: true
          company: 1
          dailyMax: 1
          endDate: "2021-01-10T00:00:00.000Z"
          firstSurname: "Troncoso"
          id: 15
          identifier: "16750292K"
          name: "Troncoso Robles Jorge Andres"
          names: "Jorge Andres"
          quadrille: 2
          quadrilleStatus: ""
          quadrilleToApprove: 0
          secondSurname: "Robles"
          startDate: "2020-01-10T00:00:00.000Z"
          validity: 12
          */

        } else {
          this.toastService.errorToast('El código escaneado no es válido');
        }
      }
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
    if (nationalityId) {
      const find = this.nationalities.find(i => i.id === nationalityId);

      if (find && find.identifierType.toLowerCase() === 'rut') {
        this.contractForm.get('identifier').setValidators([Validators.required, ValidateRut]);
        this.contractForm.get('identifier').updateValueAndValidity();
      } else {
        this.contractForm.get('identifier').setValidators(Validators.required);
        this.contractForm.get('identifier').updateValueAndValidity();
      }

      this.formatIdentifier(this.contractForm.get('identifier').value);
    }
  };

  /**
   * submit
   */
  public submit = () => {
    const data = Object.assign({}, this.contractForm.value);
    data.dob = moment(data.dob).format('YYYY-MM-DD');
    data.retired = data.retired ? 1 : 0;
    data.identifier = cleanRut(data.identifier);

    this.storeService.addPreContract(data);
    this.router.navigate(['/home-page/tarja_contrato']);
  };

  /**
   * changeGenderEvent
   * @param gender
   */
  public changeGenderEvent = (gender: string) => {
    this.contractForm.get('gender').patchValue(gender);
  };

  /**
   * formatIdentifier
   * @param identifier
   */
  public formatIdentifier = (identifier: string): void => {
    const nationality = this.contractForm.get('nationality').value;
    if (nationality) {
      const identifierType = this.nationalities.find(i => i.id === nationality);

      if (identifierType && identifierType.identifierType.toLowerCase() === 'rut') {
        this.contractForm.get('identifier').patchValue(formatRut(identifier));
      } else {
        this.contractForm.get('identifier').patchValue(cleanRut(identifier));
      }
    }
  };
}
