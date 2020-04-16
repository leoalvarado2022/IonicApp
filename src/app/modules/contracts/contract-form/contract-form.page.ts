import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {ValidateRut} from '@primetec/primetec-angular';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ContractsService} from '../services/contracts/contracts.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {DocumentScanner} from '@ionic-native/document-scanner/ngx';
import {LoaderService} from '../../../shared/services/loader/loader.service';

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

  private activeCompany: any = null;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private toastService: ToastService,
    private router: Router,
    private contractsService: ContractsService,
    private httpService: HttpService,
    private syncService: SyncService,
    private documentScanner: DocumentScanner,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.nationalities = this.storeService.getCountries();
    this.contractTypes = this.storeService.getContractTypes();
    this.civilStatus = this.storeService.getCivilStatus();
    this.afps = this.storeService.getAfps();
    this.isapres = this.storeService.getIsapres();
    this.quadrilles = this.storeService.getQuadrilles();
    this.activeCompany = this.storeService.getActiveCompany();

    this.contractForm = this.formBuilder.group({
      id: [0],
      companyId: [this.activeCompany.id],
      workerId: [0],
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
      quadrille: [this.quadrilles.length === 1 ? this.quadrilles[0].id : '', Validators.required],
      creatorId: [this.activeCompany.user]
    });
  }

  /**
   * openBarcodeScanner
   */
  public openBarcodeScanner = () => {
    // this.toastService.errorToast('NO IMPLEMENTADO');

    /*
    this.documentScanner.scanDoc({sourceType: 1}).then(data => {
      console.log({data});
    }).catch(err => {
      this.toastService.errorToast(err);
    });
    */

    /*
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      this.toastService.errorToast(err);
    });
    */
  };

  /**
   * changeIdentifierValidation
   * @param nationalityId
   */
  public changeIdentifierValidation = (nationalityId: number): void => {
    const find = this.nationalities.find(i => i.id === nationalityId);

    if (find && find.identifierType.toLowerCase() === 'rut') {
      this.contractForm.get('identifier').setValidators([Validators.required, ValidateRut]);
      this.contractForm.get('identifier').updateValueAndValidity();
    } else {
      this.contractForm.get('identifier').setValidators(Validators.required);
      this.contractForm.get('identifier').updateValueAndValidity();
    }
  };

  /**
   * submit
   */
  public submit = () => {
    const data = Object.assign({}, this.contractForm.value);
    data.dob = moment(data.dob).format('YYYY-MM-DD');
    data.retired = data.retired ? 1 : 0;

    this.storeService.addPreContract(data);
    this.router.navigate(['/home-page/tarja_contrato']);
  };

  /**
   * recordPreContract
   * @param data
   */
  private recordPreContract = (data: any) => {
    // PREPARE DATA
    const preContracts = [];
    preContracts.push(data);

    this.loaderService.startLoader();
    this.contractsService.storePreContracts(preContracts).subscribe(success => {
      this.syncData();
      this.loaderService.stopLoader();
      this.router.navigate(['/home-page/tarja_contrato']);
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  };

  /**
   * syncData
   */
  private syncData = () => {
    const userData = this.storeService.getUser();
    const username = userData.username;
    const activeConnection = this.storeService.getActiveConnection();

    this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe((success: any) => {
      this.storeService.setSyncedData(success.data);
    }, async error => {
      this.httpService.errorHandler(error);
    });
  };

  /**
   * changeGenderEvent
   * @param gender
   */
  public changeGenderEvent = (gender: string) => {
    this.contractForm.get('gender').patchValue(gender);
  };

}
