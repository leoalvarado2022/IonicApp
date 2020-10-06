import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../../shared/services/store/store.service';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { cleanRut, formatRut, ValidateRut } from '@primetec/primetec-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as moment from 'moment';
import { ContractsService } from '../services/contracts/contracts.service';
import { HttpService } from '../../../shared/services/http/http.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { Worker } from '../worker.interface';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.page.html',
  styleUrls: ['./contract-form.page.scss'],
})
export class ContractFormPage implements OnInit, OnDestroy {

  public contractForm: FormGroup;
  public currentStep = 1;
  public isSearching = false;
  public customPickerOptions: any;

  public nationalities: Array<any> = [];
  public contractTypes: Array<any> = [];
  public civilStatus: Array<any> = [];
  public afps: Array<any> = [];
  public isapres: Array<any> = [];
  public quadrilles: Array<any> = [];
  public workers: Array<Worker> = [];
  public contractors: Array<Worker> = [];
  public showContractor: boolean = false;

  private editPreContrat: any = null;
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
    private activatedRoute: ActivatedRoute,
    private storageSyncService: StorageSyncService,
    private stepperService: StepperService
  ) {
    this.customPickerOptions = {
      animated: true,
      backdropDismiss: false,
      keyboardClose: false,
      buttons: [{
        text: 'Ok',
        handler: (data) => {
          this.contractForm.get('step2.dob').patchValue(moment(`${data.year.text}-${data.month.text}-${data.day.text}`).format('YYYY-MM-DD'));
        }
      }, {
        role: 'cancel',
        text: 'Cancelar',
        handler: () => {

        }
      }]
    }

    this.contractForm = this.formBuilder.group({
      id: [0],
      companyId: 0,
      workerId: 0,
      creatorId: 0,
      tempId: 0,
      step1: this.formBuilder.group({
        nationality: ['', Validators.required],
        identifier: ['', Validators.required],
        workerType: ['interno', Validators.required],
        contractor: ['']
      }),
      step2: this.formBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        sureName: ['', Validators.required],
        dob: ['', Validators.required],
        civilStatus: ['', Validators.required],
        gender: ['M', Validators.required]
      }),
      step3: this.formBuilder.group({
        contractType: ['', Validators.required],
        afp: ['', Validators.required],
        isapre: ['', Validators.required],
        retired: [false, Validators.required],
        quadrille: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activeCompany = this.storeService.getActiveCompany();

    Promise.all([
      this.storageSyncService.getAllQuadrilles(),
      this.storageSyncService.getWorkers(),
      this.storageSyncService.getPreContracts(),
      this.storageSyncService.getCountries(),
      this.storageSyncService.getContractTypes(),
      this.storageSyncService.getCivilStatus(),
      this.storageSyncService.getAfps(),
      this.storageSyncService.getIsapres()
    ]).then((data) => {
      this.quadrilles = [...data[0]];
      this.workers = [...data[1]];
      this.contractors = this.workers.filter(item => item.workerType === 2);

      this.nationalities = [...data[3]];
      this.contractTypes = [...data[4]];
      this.civilStatus = [...data[5]];
      this.afps = [...data[6]];
      this.isapres = [...data[7]];

      const findDefault = this.nationalities.find(item => item.default);
      const onlyOne = this.nationalities.length === 1 ? this.nationalities[0] : '';

      if (id) {
        const find = data[2].find(item => item.id === +id);

        if (find) {
          this.editPreContrat = find;

          this.contractForm.patchValue({
            id: find.id,
            companyId: find.companyId,
            workerId: find.workerId,
            creatorId: find.creatorId,
            tempId: find.id
          });

          this.contractForm.get('step1').patchValue({
            nationality: find.countryId,
            identifier: find.workerIdentifier,
          });

          this.contractForm.get('step1.identifier').disable();

          this.contractForm.get('step2').patchValue({
            name: find.workerName,
            lastName: find.workerLastName,
            sureName: find.workerSurname,
            dob: moment(moment.utc(find.dob)).format('YYYY-MM-DD'),
            civilStatus: find.workerCivilStatus,
            gender: find.gender,
          });

          this.contractForm.get('step3').patchValue({
            contractType: find.remunerationContractType,
            afp: find.afpId,
            isapre: find.isapreId,
            retired: find.retired,
            quadrille: find.quadrilleId
          });

          this.changeIdentifierValidation(find.countryId);
        }
      } else {
        this.contractForm.patchValue({
          id: 0,
          companyId: this.activeCompany.id,
          workerId: 0,
          creatorId: this.activeCompany.user,
          tempId: this.tempId
        });

        this.contractForm.get('step1').patchValue({
          nationality: findDefault ? findDefault.id : onlyOne,
          identifier: '',
        });

        this.contractForm.get('step3').patchValue({
          contractType: this.contractTypes.length === 1 ? this.contractTypes[0].id : '',
          afp: this.afps.length === 1 ? this.afps[0].id : '',
          isapre: this.isapres.length === 1 ? this.isapres[0].id : '',
          quadrille: this.quadrilles.length === 1 ? this.quadrilles[0].id : ''
        });

        this.changeIdentifierValidation(findDefault ? findDefault.id : onlyOne);
      }
    });
  }

  ngOnDestroy(): void {
    this.currentStep = 1;
  }

  /**
   * openBarcodeScanner
   */
  public openBarcodeScanner = () => {
    this.barcodeScanner.scan().then(barcodeData => {
      const { cancelled, text } = barcodeData;
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
          this.increaseStep();
        } else {
          this.toastService.errorToast('El código escaneado no es válido');
        }
      }
    }).catch(err => {
      this.toastService.errorToast(err);
    });
  }

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
  }

  /**
   * submit
   */
  public submit = () => {
    const data = Object.assign({}, this.contractForm.value);
    const { step1, step2, step3 } = data;
    delete data.step1;
    delete data.step2;
    delete data.step3;

    step1.identifier = this.editPreContrat ? cleanRut(this.editPreContrat.workerIdentifier) : cleanRut(step1.identifier);
    step2.dob = moment.utc(step2.dob).format('YYYY-MM-DD');
    step3.retired = step3.retired ? 1 : 0;

    const preparedData = { ...data, ...step1, ...step2, ...step3 };
    this.storeContract(preparedData);
  }

  /**
   * storeContract
   * @param data
   */
  private storeContract = (data: any) => {
    this.contractsService.storePreContracts([data]).subscribe(() => {

      this.stepperService.syncAll();
      this.goBack();
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * changeGenderEvent
   * @param gender
   */
  public changeGenderEvent = (gender: string) => {
    this.contractForm.get('step2.gender').patchValue(gender);
  }

  /**
   * formatIdentifier
   * @param identifier
   */
  public formatIdentifier = (identifier: string): void => {
    const nationality = this.contractForm.get('step1.nationality').value;
    if (nationality) {
      const identifierType = this.nationalities.find(i => i.id === nationality);

      if (identifierType && identifierType.identifierType.toLowerCase() === 'rut') {
        this.contractForm.get('step1.identifier').patchValue(formatRut(identifier), { emitEvent: false });
      } else {
        const clean = identifier.replace(/[,.-]+/g, '').replace(/\s/g, '');
        this.contractForm.get('step1.identifier').patchValue(clean, { emitEvent: false });
      }
    }
  }

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
            afp: worker.afpId || this.afps.length === 1 ? this.afps[0].id : '',
            isapre: worker.isapreId || this.isapres.length === 1 ? this.isapres[0].id : '',
            quadrille: worker.quadrilleId || this.quadrilles.length === 1 ? this.quadrilles[0].id : ''
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
  }

  /**
   * checkNexButtonDisabled
   */
  public checkNexButtonDisabled = (): boolean => {
    return (this.currentStep === 1 && this.contractForm.get('step1').invalid) ||
      (this.currentStep === 2 && (this.contractForm.get('step2').invalid || this.checkIfIdentifierAlreadyExistsOnWorkers()));
  }

  /**
   * increaseStep
   */
  public increaseStep = () => {
    this.currentStep = this.currentStep + 1;

    if (this.currentStep === 2 && !this.editPreContrat) {
      this.checkWorker(this.contractForm.get('step1.identifier').value);
    }
  }

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

    if (this.editPreContrat) {
      return this.cleanCharactersFromIdentifier(this.editPreContrat.workerIdentifier).toLowerCase() !== this.cleanCharactersFromIdentifier(identifier).toLowerCase();
    } else {
      if (identifier) {
        const workers = this.storeService.getWorkers();
        const alreadyValid = workers.find(item => this.cleanCharactersFromIdentifier(item.identifier).toLowerCase() === this.cleanCharactersFromIdentifier(identifier).toLowerCase());

        return !!alreadyValid;
      }
    }

    return false;
  }

  /**
   * getNationalityName
   */
  public getNationalityName = (): string => {
    const selected = this.contractForm.get('step1.nationality').value;

    if (selected) {
      const find = this.nationalities.find(item => item.id === selected);
      return find ? find.name : '';
    }

    return '';
  }

  /**
   * goBack
   */
  public goBack = () => {
    this.router.navigate(['/home-page/tarja_contrato']);
  }

  /**
   * workerTypeChange
   * @param event
   */
  public workerTypeChange = (workerType: string) => {
    if (workerType) {
      if (workerType.toLowerCase() === 'interno') {
        this.showContractor = false;

        // Disable Contrator
        this.contractForm.get('step1.contractor').patchValue('')
        this.contractForm.get('step1.contractor').setValidators(null);

        // Set Step 3 validators
        this.contractForm.get('step3.contractType').setValidators(Validators.required);
        this.contractForm.get('step3.afp').setValidators(Validators.required);
        this.contractForm.get('step3.isapre').setValidators(Validators.required);
        this.contractForm.get('step3.retired').setValidators(Validators.required);

        // Update FORM
        this.contractForm.updateValueAndValidity();
      } else if (workerType.toLowerCase() === 'externo') {
        this.showContractor = true;
        this.contractForm.get('step1.contractor').setValidators(Validators.required);

        // Set step 3 values
        this.contractForm.get('step3').patchValue({
          contractType: 0,
          afp: 0,
          isapre:0,
          retired: false
        });

        // Remove Step 3 validators
        this.contractForm.get('step3.contractType').setValidators(null);
        this.contractForm.get('step3.afp').setValidators(null);
        this.contractForm.get('step3.isapre').setValidators(null);
        this.contractForm.get('step3.retired').setValidators(null);

        // Update FORM
        this.contractForm.updateValueAndValidity();
      }
    }
  }

}
