import {Component, Input, OnInit} from '@angular/core';
import {CostCenter, CostCenterList} from '@primetec/primetec-angular';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../../../services/auth/auth.service';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {ToastService} from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-quality-estimate-form',
  templateUrl: './quality-estimate-form.component.html',
  styleUrls: ['./quality-estimate-form.component.scss'],
})
export class QualityEstimateFormComponent implements OnInit {

  @Input() costCenter: CostCenter;

  private costCenterListItem: CostCenterList;
  private qualityForm: FormGroup;
  private loader = false;
  private showErrors = false;
  private userConnection: any;
  private calibers: Array<any>;
  private qualities: Array<any>;
  private filteredCalibers: Array<any>;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private contractDetailService: ContractDetailService,
    private syncService: SyncService,
    private toastService: ToastService
  ) {
    this.contractDetailService.getCostCenterListItem().subscribe(value => {
      this.costCenterListItem = value;
    });
  }

  async ngOnInit() {
    this.loader = true;
    this.userConnection = this.authService.getCompany();
    this.calibers = await this.syncService.getCalibers();

    this.qualityForm = this.formBuilder.group({
      quality: this.formBuilder.group({
        id: [0, Validators.required],
        costCenter: [this.costCenter.id, Validators.required],
        user: [this.userConnection.user, Validators.required],
        quality: ['', Validators.required],
        exportPercentage: ['', Validators.required],
        temp: [1]
      }),
      calibers: this.formBuilder.array([])
    }, {validator: this.validateCalibers});

    this.qualities = await this.syncService.getQualities();
    this.filteredCalibers = this.calibers.filter((item: any) => item.species === this.costCenter.species);

    this.loadCalibers();
    this.loader = false;
  }

  /**
   * loadCalibers
   */
  private loadCalibers = () => {
    const items = this.qualityForm.get('calibers') as FormArray;

    for (const item of this.filteredCalibers) {
      const newCaliber = this.formBuilder.group({
        id: [0, Validators.required],
        quality: [0, Validators.required],
        caliber: [item.id, Validators.required],
        percentage: ['', Validators.required],
        temp: [1]
      });
      items.push(newCaliber);
    }
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
    if (this.qualityForm.valid) {
      this.showErrors = false;
      delete this.costCenter.active;

      const data = Object.assign({}, this.qualityForm.value, {
        costCenter: this.costCenter
      });

      this.storeQuality(data);
    } else {
      this.showErrors = true;
    }
  }

  /**
   * storeQuality
   * @param data
   */
  private storeQuality(data: any) {
    this.contractDetailService.storeQuality(data).subscribe(success => {
      this.closeModal(true);
    }, error => {
      const msg = this.authService.errorsHandler(error);
      this.toastService.errorToast(msg);
    });
  }

  /**
   * getCaliberName
   * @param item
   */
  public getCaliberName = (item: any) => {
    const caliber = this.calibers.find((caliber: any) => caliber.id === item.get('caliber').value);
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
      const percentage = item.get('percentage').value;
      if (percentage) {
        accum = accum + percentage;
      }
    }

    return accum < 100 || accum > 100 ? {wrongPercentage: true} : null;
  }
}
