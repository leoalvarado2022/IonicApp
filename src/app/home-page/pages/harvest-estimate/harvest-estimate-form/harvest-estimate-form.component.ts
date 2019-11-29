import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostCenter} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {UserService} from '../../../../shared/services/user/user.service';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import * as moment from 'moment';
import {AuthService} from '../../../../services/auth/auth.service';
import {ToastService} from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-harvest-estimate-form',
  templateUrl: './harvest-estimate-form.component.html',
  styleUrls: ['./harvest-estimate-form.component.scss'],
})
export class HarvestEstimateFormComponent implements OnInit {

  @Input() costCenter: CostCenter;

  public readonly displayFormat = 'YYYY/MM/DD';
  public harvestForm: FormGroup;
  public units: Array<any> = [];
  public loader = false;
  public showErrors = false;
  private userConnection: any;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private syncService: SyncService,
    private userService: UserService,
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private toastService: ToastService
  ) {

  }

  async ngOnInit() {
    this.loader = true;
    this.units = await this.syncService.getUnits();
    this.userConnection = this.authService.getCompany();

    this.harvestForm = this.formBuilder.group({
      id: [0, Validators.required],
      costCenter: [this.costCenter.id],
      user: [this.userConnection.user, Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      dailyAmount: ['', Validators.required],
      workHolidays: [0, Validators.required]
    });
    this.loader = false;
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.harvestForm.reset();
    this.modalController.dismiss(status);
  }

  /**
   * submit
   */
  public submit = () => {
    if (this.harvestForm.valid) {
      this.showErrors = false;
      const estimation = Object.assign({}, this.harvestForm.value);
      estimation.startDate = moment(estimation.startDate).format('YYYY-MM-DD');
      estimation.endDate = moment(estimation.endDate).format('YYYY-MM-DD');

      delete this.costCenter.active;
      const data = {
        costCenter: this.costCenter,
        harvestEstimate: estimation
      };

      this.storeEstimation(data);
    } else {
      this.showErrors = true;
    }
  }

  /**
   * storeEstimation
   * @param data
   */
  private storeEstimation = (data: any) => {
    this.contractDetailService.storeHarvest(data).subscribe(success => {
      this.closeModal(true);
    }, error => {
      const msg = this.authService.errorsHandler(error);
      this.toastService.errorToast(msg);
    });
  }
}
