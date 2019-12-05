import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostCenter, HarvestEstimate} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import * as moment from 'moment';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {HttpService} from '../../../../shared/services/http/http.service';

@Component({
  selector: 'app-harvest-estimate-form',
  templateUrl: './harvest-estimate-form.component.html',
  styleUrls: ['./harvest-estimate-form.component.scss'],
})
export class HarvestEstimateFormComponent implements OnInit {

  @Input() costCenter: CostCenter;
  @Input() harvestEstimate: HarvestEstimate;

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
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private toastService: ToastService,
    private httpService: HttpService
  ) {

  }

  async ngOnInit() {
    this.loader = true;

    this.userConnection = this.authService.getCompany();
    this.units = await this.syncService.getUnits();

    this.harvestForm = this.formBuilder.group({
      id: [this.harvestEstimate ? this.harvestEstimate.id : 0, Validators.required],
      costCenter: [this.costCenter.id],
      user: [this.userConnection.user, Validators.required],
      unit: [this.costCenter.controlUnit, Validators.required],
      quantity: [this.harvestEstimate ? this.harvestEstimate.quantity : '', Validators.required],
      dailyAmount: [this.harvestEstimate ? this.harvestEstimate.dailyAmount : '', Validators.required],
      workHolidays: [this.harvestEstimate ? this.harvestEstimate.workHolidays ? 1 : 0 : 0, Validators.required],
      startDate: [this.harvestEstimate ? moment(this.harvestEstimate.startDate).format('YYYY/MM/DD') : '', Validators.required],
      endDate: [this.harvestEstimate ? moment(this.harvestEstimate.endDate).format('YYYY/MM/DD') : '', Validators.required]
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
      this.httpService.errorHandler(error);
    });
  }

  /**
   * showUnitName
   */
  public showUnitName = () => {
    const find = this.units.find(item => item.id === this.costCenter.id);
    return find ? find.code : 'N/A';
  }
}
