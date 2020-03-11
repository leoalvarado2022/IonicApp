import {Component, Input, OnInit} from '@angular/core';
import {Caliber, CostCenter, Generic, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {StoreService} from '../../../../shared/services/store/store.service';

@Component({
  selector: 'app-quality-estimate-form',
  templateUrl: './quality-estimate-form.component.html',
  styleUrls: ['./quality-estimate-form.component.scss'],
})
export class QualityEstimateFormComponent implements OnInit {

  @Input() costCenter: CostCenter;
  @Input() qualityEstimate: QualityEstimate;
  @Input() qualityEstimateDetail: Array<QualityDetail>;
  @Input() isView: boolean;
  @Input() previous: QualityEstimate;

  public readonly customActionSheetOptions: any = {
    header: 'Calidades',
    keyboardClose: false,
    backdropDismiss: false
  };

  public qualityForm: FormGroup;
  public isSaving = false;
  public qualities: Array<Generic>;
  private userCompany: any;
  private calibers: Array<Caliber>;
  private filteredCalibers: Array<Caliber>;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private contractDetailService: ContractDetailService,
    private syncService: SyncService,
    private toastService: ToastService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.userCompany = this.storeService.getActiveCompany();
    if (this.isView) {
      this.qualityForm = this.formBuilder.group({
        quality: this.formBuilder.group({
          id: [this.qualityEstimate.id, Validators.required],
          costCenter: [this.costCenter.id, Validators.required],
          user: [this.userCompany.user, Validators.required],
          quality: [{value: this.qualityEstimate.quality, disabled: true}, Validators.required],
          exportPercentage: [{value: this.qualityEstimate.exportPercentage, disabled: true}, [
            Validators.required,
            Validators.max(100),
            Validators.min(0)
          ]],
          temp: [1]
        }),
        calibers: this.formBuilder.array([])
      }, {validator: this.validateCalibers});
    } else {
      this.qualityForm = this.formBuilder.group({
        quality: this.formBuilder.group({
          id: [0, Validators.required],
          costCenter: [this.costCenter.id, Validators.required],
          user: [this.userCompany.user, Validators.required],
          quality: [this.previous ? this.previous.quality : '', Validators.required],
          exportPercentage: [this.previous ? this.previous.exportPercentage : '', [
            Validators.required,
            Validators.max(100),
            Validators.min(0)
          ]],
          temp: [1]
        }),
        calibers: this.formBuilder.array([])
      }, {validator: this.validateCalibers});
    }

    this.loadCalibers();
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.qualityForm.reset();
    this.modalController.dismiss(status);
  };

  /**
   * submit
   */
  public submit = () => {
    if (this.qualityForm.valid && !this.isSaving) {
      this.isSaving = true;
      delete this.costCenter.active;

      const data = Object.assign({}, this.qualityForm.value, {
        costCenter: this.costCenter
      });

      data.calibers = data.calibers.map(caliber => Object.assign({}, caliber, {
        percentage: caliber.percentage === '' ? 0 : caliber.percentage
      })).filter(caliber => caliber.percentage > 0);

      this.storeQuality(data);
    } else {
      this.isSaving = false;
    }
  };

  /**
   * getCaliberName
   * @param item
   */
  public getCaliberName = (item: any) => {
    const caliber = this.calibers.find((caliber: Caliber) => caliber.id === item.get('caliber').value);
    return caliber ? caliber.name : 'NOMBRE CALIBRE';
  };

  /**
   * validateCalibers
   * @param form
   */
  public validateCalibers = (form: FormGroup) => {
    const items = form.get('calibers') as FormArray;

    let accum = 0;
    for (const item of items.controls) {
      const percentage = item.get('percentage').value ? item.get('percentage').value : 0;
      if (percentage) {
        accum = accum + percentage;
      }
    }

    return accum < 100 || accum > 100 ? {wrongPercentage: true} : null;
  };

  /**
   * getTotal
   */
  public getTotal = () => {
    const items = this.qualityForm.get('calibers') as FormArray;

    let accum = 0;
    for (const item of items.controls) {
      const percentage = item.get('percentage').value ? item.get('percentage').value : 0;
      if (percentage && percentage > 0) {
        accum = accum + percentage;
      }
    }

    return accum;
  };

  /**
   * getSelectedQuality
   */
  public getSelectedQuality = () => {
    if (this.qualities) {
      const id = this.qualityForm.get('quality.quality').value;
      const find = this.qualities.find(item => item.id === id);
      return find ? find.name : '';
    }

    return '';
  };

  /**
   * loadCalibers
   */
  private loadCalibers = () => {
    this.calibers = this.storeService.getCalibers();
    this.qualities = this.storeService.getQualities();
    this.filteredCalibers = this.calibers.filter((item: any) => item.species === this.costCenter.species);

    const items = this.qualityForm.get('calibers') as FormArray;

    for (const item of this.filteredCalibers) {
      let find = null;
      if (this.qualityEstimateDetail) {
        find = this.qualityEstimateDetail.find(detail => detail.caliber === item.id);
      }

      const newCaliber = this.formBuilder.group({
        id: [find ? find.id : 0, Validators.required],
        quality: [find ? find.qualityEstimate : 0, Validators.required],
        caliber: [item.id, Validators.required],
        percentage: [{value: find ? find.value : '', disabled: this.isView}, [
          Validators.max(100),
          Validators.min(0)
        ]],
        temp: [1]
      });
      items.push(newCaliber);
    }
  };

  /**
   * storeQuality
   * @param data
   */
  private storeQuality(data: any) {
    this.loaderService.startLoader('Guardando estimacion...');
    this.contractDetailService.storeQuality(data).subscribe(success => {
      this.isSaving = false;
      this.loaderService.stopLoader();
      this.closeModal(true);
    }, error => {
      this.isSaving = false;
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

}

