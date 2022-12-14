import { Component, OnInit } from '@angular/core';
import { MachineryService } from 'src/app/modules/machinery/services/machinery.service';
import * as moment from "moment";
import { StoreService } from 'src/app/shared/services/store/store.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { ApplicationListInterface } from '../../application-list.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation-step',
  templateUrl: './confirmation-step.page.html',
  styleUrls: ['./confirmation-step.page.scss'],
})
export class ConfirmationStepPage implements OnInit {

  public workers: Array<any> = [];
  public machinery: Array<any> = [];
  public currentApplication: ApplicationListInterface;
  public implementTypeCostCenters: Array<any> = [];

  private tempId: number;
  private id: number;
  private allCostCenters: Array<any> = [];
  private orderMachinery: any = null;
  public applicationForm: FormGroup;

  constructor(
    private storeService: StoreService,
    private machineryService: MachineryService,
    private storageSyncService: StorageSyncService,
    private activatedRoute: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.applicationForm = this.formBuilder.group({
      operator: ['', Validators.required],
      operatorName: ['', Validators.required],
      machinery: ['', Validators.required],
      machineryName: ['', Validators.required],
      implement: ['', Validators.required],
      implementName: ['', Validators.required],
      litersQuantity: ['', [
        Validators.required,
        Validators.min(1),
      ]],
      hectares: ['', [
        Validators.required,
        Validators.min(1),
      ]]
    });
  }

  ionViewWillEnter() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = (): void => {
    const activeCompany = this.storeService.getActiveCompany();
    const date = moment().format('YYYY-MM-DD');

    Promise.all([
      this.machineryService.getWorkers(activeCompany.id, date),
      this.storageSyncService.getMachineryTypeCostCenters(),
      this.orderSyncService.getOrderBalanceToApplyById(this.id),
      this.orderSyncService.getNextApplicationTempId(),
      this.storageSyncService.getCostCentersCustom(),
      this.orderSyncService.getOrderMachinery(),
      this.storageSyncService.getImplementTypeCostCenters(),
    ]).then((data: Array<any>) => {

      this.workers = data[0];
      this.machinery = data[1];
      this.currentApplication = data[2];
      this.tempId = data[3];
      this.allCostCenters = data[4];
      this.orderMachinery = data[5][0];
      this.implementTypeCostCenters = data[6];

      this.patchForm();
    });
  }

  /**
   * patchForm
   */
  private patchForm = () => {
    this.applicationForm.get('hectares').patchValue(this.currentApplication ? this.currentApplication.applicationBalance : '');
    this.applicationForm.updateValueAndValidity();

    if (!this.orderMachinery) {
      return;
    }

    this.applicationForm.patchValue({
      operator: this.workers.find(item => item.id === this.orderMachinery.operatorId) ? this.orderMachinery.operatorId : '',
      machinery: this.allCostCenters.find(item => item.id === this.orderMachinery.costCenterMachineryId) ? this.orderMachinery.costCenterMachineryId : '',
      implement: this.implementTypeCostCenters.find(item => item.id === this.orderMachinery.costCenterImplementId) ? this.orderMachinery.costCenterImplementId : ''
    });

    this.applicationForm.updateValueAndValidity();
  }

  /**
   * getMachineryCapacity
   */
  public getMachineryCapacity = (): number => {
    if (!this.orderMachinery) {
      return 0;
    }

    const find = this.allCostCenters.find(item => item.id === this.orderMachinery.costCenterMachineryId);
    return find ? find.machineryCapacity : 0;
  }

  /**
   * getOperatorName
   */
  public getOperatorName = (): string => {
    const id = this.applicationForm.get('operator').value;
    const find = this.workers.find(item => item.id === id);
    return find ? find.name : '';
  }

  /**
   * getMachineryName
   */
  public getMachineryName = (): string => {
    const id = this.applicationForm.get('machinery').value;
    const find = this.machinery.find(item => item.id === id);
    return find ? find.name : '';
  }

  /**
   * getImplementName
   */
  public getImplementName = (): string => {
    const id = this.applicationForm.get('implement').value;
    const find = this.implementTypeCostCenters.find(item => item.id === id);
    return find ? find.name : '';
  }

  /**
   * nextStep
   */
  public nextStep = () => {
    const activeCompany = this.storeService.getActiveCompany();

    const data = Object.assign(this.currentApplication, this.applicationForm.value, {
      tempId: this.tempId,
      companyId: activeCompany.id,
      orderId: this.currentApplication.applicationOrderId,
      isReady: false
    });

    this.orderSyncService.addTempApplication(data).then(() => {
      this.router.navigate(["/home-page/registro_aplicacion/information-step", this.tempId]);
    });
  }

  /**
   * changeOperator
   * @param operatorId id
   */
  public changeOperator = (operatorId: number): void => {
    if (operatorId) {
      const name = this.getOperatorName();
      this.applicationForm.get('operatorName').patchValue(name);
      this.applicationForm.get('operatorName').updateValueAndValidity();
    }
  }

  /**
   * changeMachinery
   * @param machineryId id
   */
  public changeMachinery = (machineryId: number): void => {
    if (machineryId) {
      const name = this.getMachineryName();
      this.applicationForm.get('machineryName').patchValue(name);
      this.applicationForm.get('machineryName').updateValueAndValidity();
    }
  }

  /**
   * changeImplement
   * @param implementId id
   */
  public changeImplement = (implementId: number): void => {
    if (implementId) {
      const name = this.getImplementName();
      this.applicationForm.get('implementName').patchValue(name);
      this.applicationForm.get('implementName').updateValueAndValidity();
    }
  }

}
