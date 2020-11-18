import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { ApplicationListInterface } from '../application-list.interface';
import { ApplicationLocationInterface } from '../application-location.interface';
import * as moment from 'moment';
import { ApplicationRegistryService } from '../services/application-registry/application-registry.service';
import { StoreService } from 'src/app/shared/services/store/store.service';

@Component({
  selector: 'app-application-end',
  templateUrl: './application-end.page.html',
  styleUrls: ['./application-end.page.scss'],
})
export class ApplicationEndPage implements OnInit {

  public currentStep: 1 | 2 = 1;
  public readonly step1 = 1;
  public readonly step2 = 2;

  private id: number;
  private tempId: number;
  private orderHeader: any;
  private orderLocations: Array<ApplicationLocationInterface>;
  public currentApplication: ApplicationListInterface;
  public orderChemicals: Array<any>;

  public endForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private formBuilder: FormBuilder,
    private applicationRegistryService: ApplicationRegistryService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");

    this.endForm = this.formBuilder.group({
      hectares: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      temperature: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      humidity: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      wind: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      litersQuantity: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      chemicals: this.formBuilder.array([])
    });

    Promise.all([
      this.orderSyncService.getOrderBalanceToApplyById(this.id),
      this.orderSyncService.getOrderHeader(),
      this.orderSyncService.getOrderChemical(),
      this.orderSyncService.getApplicationLocationsById(this.id)
    ]).then((data: any) => {
      this.currentApplication = data[0];
      this.orderHeader = data[1];
      this.orderChemicals = data[2];
      this.orderLocations = data[3];
      this.tempId = this.orderLocations[0]["tempId"];
      this.orderChemicals.forEach(item => this.addChemical(item));
    });
  }

  /**
   * createChemical
   * @param chemical 
   */
  private createChemical = (chemical: any): FormGroup => {
    return this.formBuilder.group({
      id: 0,
      applicationId: chemical.applicationId,
      applicationOrderId: chemical.applicationOrderId,
      dosis100l: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      hectaresDosis: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      itemId: chemical.itemId,
      itemName: chemical.itemName,
      phytosanitaryProgramId: chemical.phytosanitaryProgramId
    });
  }

  /**
   * addChemical
   */
  private addChemical = (chemical: any): void => {
    const chemicals = this.endForm.get('chemicals') as FormArray;
    chemicals.push(this.createChemical(chemical));
  }

  /**
   * validFirstStep
   */
  public validFirstStep = (): boolean => {
    return this.endForm.get('hectares').invalid ||
      this.endForm.get('temperature').invalid ||
      this.endForm.get('humidity').invalid ||
      this.endForm.get('wind').invalid ||
      this.endForm.get('litersQuantity').invalid;
  }

  /**
   * submit
   */
  public submit = () => {
    const formData = Object.assign({}, this.endForm.value, {
      id: this.currentApplication.id,
      applicationOrderId: this.currentApplication.applicationOrderId,
      costCenterId: this.currentApplication.costCenterId,
      tempId: this.tempId,
      startDate: moment(this.orderLocations[0]["timestamp"]).format('YYYY-MM-DD HH:MM:SS'),
      endDate: moment(this.orderLocations[this.orderLocations.length - 1]["timestamp"]).format('YYYY-MM-DD HH:MM:SS')
    });

    const orderLocations = this.orderLocations.map(item => Object.assign({}, item, { timestamp: moment(item["timestamp"]).format('YYYY-MM-DD HH:MM:SS') }));

    const user = this.storeService.getUser();
    this.applicationRegistryService.storeApplication(user.id, this.orderHeader, formData, orderLocations, formData["chemicals"]).subscribe(success => {
      console.log('success', success);
    }, error => {
      console.log('error', error);
    });
  }

}
