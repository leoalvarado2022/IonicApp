import { Component, Input, OnInit } from '@angular/core';
import { Caliber, CostCenter, Generic, QualityDetail, QualityEstimate } from '@primetec/primetec-angular';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ContractDetailService } from '../../services/contract-detail/contract-detail.service';
import { HttpService } from '../../../../shared/services/http/http.service';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { StoreService } from '../../../../shared/services/store/store.service';

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
  @Input() calibers: Array<any>;

  public qualityForm: FormGroup;
  public isSaving = false;
  public qualities: Array<Generic>;
  private userCompany: any;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private contractDetailService: ContractDetailService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private storeService: StoreService,
    private actionSheetController: ActionSheetController
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
          quality: [{ value: this.qualityEstimate.quality, disabled: true }, Validators.required],
          exportPercentage: [{ value: this.qualityEstimate.exportPercentage, disabled: true }, [
            Validators.required,
            Validators.max(100),
            Validators.min(0)
          ]],
          temp: [1]
        }),
        calibers: this.formBuilder.array([])
      }, { validator: this.validateCalibers });
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
      }, { validator: this.validateCalibers });
    }

    this.loadCalibers();
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.qualityForm.reset();
    this.modalController.dismiss(status);
  }

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
  }

  /**
   * getCaliberName
   * @param item
   */
  public getCaliberName = (item: any) => {
    const caliber = this.calibers.find((caliber: Caliber) => caliber.id === item.get('caliber').value);
    return caliber ? caliber.name : 'NOMBRE CALIBRE';
  }

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

    return accum < 100 || accum > 100 ? { wrongPercentage: true } : null;
  }

  /**
   * getTotal
   */
  public getTotal = () => {
    const items = this.qualityForm.get('calibers') as FormArray;

    let accum = 0;
    for (const item of items.controls) {
      const percentage = item.get('percentage').value ? parseFloat(item.get('percentage').value) : 0;
      if (percentage && percentage > 0) {
        accum = accum + percentage;
      }
    }

    return accum;
  }

  /**
   * getSelectedQuality
   */
  public getSelectedQuality = () => {
    if (this.qualities) {
      const find = this.qualities.find(item => item.id === this.qualityForm.get('quality.quality').value);
      return find ? find.name : '';
    }

    return '';
  }

  /**
   * loadCalibers
   */
  private loadCalibers = () => {
    this.qualities = this.storeService.getQualities();
    const items = this.qualityForm.get('calibers') as FormArray;

    for (const item of this.calibers) {
      let find = null;
      if (this.qualityEstimateDetail) {
        find = this.qualityEstimateDetail.find(detail => detail.caliber === item.id);
      }

      const newCaliber = this.formBuilder.group({
        id: [find ? find.id : 0, Validators.required],
        quality: [find ? find.qualityEstimate : 0, Validators.required],
        caliber: [item.id, Validators.required],
        percentage: [{ value: find ? find.value : '', disabled: this.isView }, [
          Validators.max(100),
          Validators.min(0)
        ]],
        temp: [1]
      });
      items.push(newCaliber);
    }
  }

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

  /**
   * qualityActionSheet
   */
  public qualityActionSheet = async () => {
    const buttons = this.qualities.map(item => {
      return {
        text: item.name,
        handler: () => {
          this.qualityForm.get('quality.quality').setValue(item.id);
        }
      }
    });

    const actionSheet = await this.actionSheetController.create({
      header: 'Calidad',
      keyboardClose: false,
      backdropDismiss: false,
      cssClass: 'custom-action-sheet',
      buttons: [
        ...buttons,
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'custom-action-sheet-cancel-button',
          handler: () => {

          }
        }
      ]
    });

    await actionSheet.present();
  }

}

