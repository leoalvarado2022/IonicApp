import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {cleanRut, formatRut, ValidateRut} from '@primetec/primetec-angular';
import {ActivatedRoute, Router} from '@angular/router';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import * as moment from 'moment';
import {ContractsService} from '../services/contracts/contracts.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {SyncService} from '../../../shared/services/sync/sync.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.page.html',
  styleUrls: ['./contract-form.page.scss'],
})
export class ContractFormPage implements OnInit {

  public contractForm: FormGroup;
  public currentStep = 1;
  public isSearching = false;

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
  private tempId = 0;

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
    private barcodeScanner: BarcodeScanner,
    private contractsService: ContractsService,
    private httpService: HttpService,
    private syncService: SyncService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.loadData();

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const preContracts = this.storeService.getPreContracts();
      const find = preContracts.find(item => item.id === +id);

      if (find) {
        this.contractForm = this.formBuilder.group({
          id: [find.id],
          companyId: [find.companyId],
          workerId: [find.workerId],
          creatorId: [find.creatorId],
          tempId: [0],
          step1: this.formBuilder.group({
            nationality: [find.countryId, Validators.required],
            identifier: [find.workerIdentifier, Validators.required]
          }),
          step2: this.formBuilder.group({
            name: [find.workerName, Validators.required],
            lastName: [find.workerLastName, Validators.required],
            sureName: [find.workerSurname, Validators.required],
            dob: [moment.utc(find.dob, 'YYYY-MM-DD').format('DD/MM/YYYY') , Validators.required],
            civilStatus: [find.workerCivilStatus, Validators.required],
            gender: [find.gender, Validators.required]
          }),
          step3: this.formBuilder.group({
            contractType: [find.remunerationContractType, Validators.required],
            afp: [find.afpId, Validators.required],
            isapre: [find.isapreId, Validators.required],
            retired: [find.retired, Validators.required],
            quadrille: [find.quadrilleId, Validators.required]
          })
        });

        this.changeIdentifierValidation(find.countryId);
      }
    } else {
      const findDefault = this.nationalities.find(item => item.default);
      const onlyOne = this.nationalities.length === 1 ? this.nationalities[0] : '';

      this.contractForm = this.formBuilder.group({
        id: [0],
        companyId: [this.activeCompany.id],
        workerId: [0],
        creatorId: [this.activeCompany.user],
        tempId: [this.tempId],
        step1: this.formBuilder.group({
          nationality: [findDefault ? findDefault.id : onlyOne, Validators.required],
          identifier: ['', Validators.required]
        }),
        step2: this.formBuilder.group({
          name: ['', Validators.required],
          lastName: ['', Validators.required],
          sureName: ['', Validators.required],
          dob: ['', Validators.required],
          civilStatus: [this.civilStatus.length === 1 ? this.civilStatus[0].name : '', Validators.required],
          gender: ['H', Validators.required]
        }),
        step3: this.formBuilder.group({
          contractType: [this.contractTypes.length === 1 ? this.contractTypes[0].id : '', Validators.required],
          afp: [this.afps.length === 1 ? this.afps[0].id : '', Validators.required],
          isapre: [this.isapres.length === 1 ? this.isapres[0].id : '', Validators.required],
          retired: [false, Validators.required],
          quadrille: [this.quadrilles.length === 1 ? this.quadrilles[0].id : '', Validators.required]
        })
      });

      this.changeIdentifierValidation(findDefault ? findDefault.id : onlyOne);
    }
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
    this.workers = this.storeService.getWorkers();
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
          this.formatIdentifier(operativeText);
        } else {
          this.toastService.errorToast('El código escaneado no es válido');
        }
      }
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
        this.contractForm.get('step1.identifier').setValidators([Validators.required, ValidateRut]);
        this.contractForm.get('step1.identifier').updateValueAndValidity();
      } else {
        this.contractForm.get('step1.identifier').setValidators(Validators.required);
        this.contractForm.get('step1.identifier').updateValueAndValidity();
      }

      this.formatIdentifier(this.contractForm.get('step1.identifier').value);
    }
  };

  /**
   * submit
   */
  public submit = () => {
    const data = Object.assign({}, this.contractForm.value);
    const {step1, step2, step3} = data;
    delete data.step1;
    delete data.step2;
    delete data.step3;

    step1.identifier = cleanRut(step1.identifier);
    step2.dob = moment.utc(step2.dob).format('YYYY-MM-DD');
    step3.retired = step3.retired ? 1 : 0;

    const preparedData = {...data, ...step1, ...step2, ...step3};
    this.storeContract(preparedData);
  };

  /**
   * storeContract
   * @param data
   */
  private storeContract = (data: any) => {
    const preContracts = [];
    preContracts.push(data);

    this.contractsService.storePreContracts(preContracts).subscribe(success => {
      this.syncData();
    }, error => {
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
      this.router.navigate(['/home-page/tarja_contrato']);
    }, error => {
      this.httpService.errorHandler(error);
    });
  };

  /**
   * changeGenderEvent
   * @param gender
   */
  public changeGenderEvent = (gender: string) => {
    this.contractForm.get('step2.gender').patchValue(gender);
  };

  /**
   * formatIdentifier
   * @param identifier
   */
  public formatIdentifier = (identifier: string): void => {
    const nationality = this.contractForm.get('step1.nationality').value;
    if (nationality) {
      const identifierType = this.nationalities.find(i => i.id === nationality);

      if (identifierType && identifierType.identifierType.toLowerCase() === 'rut') {
        this.contractForm.get('step1.identifier').patchValue(formatRut(identifier), {emitEvent: false});
      } else {
        const clean = identifier.replace(/[,.-]+/g, '').replace(/\s/g, '');
        this.contractForm.get('step1.identifier').patchValue(clean, {emitEvent: false});
      }
    }
  };

  /**
   * checkWorker
   * @param identifier
   */
  public checkWorker = (identifier: string) => {
    this.isSearching = true;

    const clean = this.cleanCharactersFromIdentifier(identifier);

    this.contractsService.checkWorker(clean).subscribe((success: any) => {
      const worker = success.data;

      if (worker) {
        this.contractForm.patchValue({
          workerId: worker.id,
          step1: {
            nationality: worker.countryId,
            identifier: worker.identifier
          },
          step2: {
            name: worker.names,
            lastName: worker.lastName,
            sureName: worker.surName,
            dob: worker.dob ? moment.utc(worker.dob).format('DD/MM/YYYY') : '',
            gender: worker.gender,
            civilStatus: worker.civilStatus
          },
          step3: {
            afp: worker.afpId,
            isapre: worker.isapreId,
            quadrille: worker.quadrilleId
          }
        });

        this.formatIdentifier(worker.identifier);
        this.isSearching = false;
      } else {
        this.formatIdentifier(clean);
        this.isSearching = false;
      }
    }, error => {
      this.formatIdentifier(clean);
      this.isSearching = false;
      this.httpService.errorHandler(error);
    });
  };

  /**
   * checkNexButtonDisabled
   */
  public checkNexButtonDisabled = (): boolean => {
    return (this.currentStep === 1 && this.contractForm.get('step1').invalid) ||
      (this.currentStep === 2 && (this.contractForm.get('step2').invalid || this.checkIfIdentifierAlreadyExistsOnWorkers()));
  };

  /**
   * increaseStep
   */
  public increaseStep = () => {
    this.currentStep = this.currentStep + 1;

    if (this.currentStep === 2) {
      this.checkWorker(this.contractForm.get('step1.identifier').value);
    }
  };

  /**
   * cleanCharactersFromIdentifier
   */
  private cleanCharactersFromIdentifier = (toClean: string): string => {
    return toClean.replace(/[,.-]+/g, '').replace(/\s/g, '');
  }

  /**
   * checkIfIdentifierAlreadyExistsOnWorkers
   */
  public checkIfIdentifierAlreadyExistsOnWorkers = (): boolean => {
    const identifier = this.contractForm.get('step1.identifier').value;

    if (identifier) {
      const workers = this.storeService.getWorkers();
      const alreadyValid = workers.find(item => this.cleanCharactersFromIdentifier(item.identifier).toLowerCase() === this.cleanCharactersFromIdentifier(identifier).toLowerCase());

      return !!alreadyValid;
    }

    return false;
  }

}
