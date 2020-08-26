import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostCenter, EntityList, Generic, Unit} from '@primetec/primetec-angular';
import {ContractDetailService} from '../../services/contract-detail/contract-detail.service';
import * as moment from 'moment';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {debounceTime} from 'rxjs/operators';
import {StoreService} from '../../../../shared/services/store/store.service';
import {Subscription} from 'rxjs';
import { HarvestEstimate } from '../harvest-estimate.interface';

function validateQuantities(form: FormGroup) {
  return form.get('quantity').value >= form.get('dailyAmount').value
  ? null : {'greather': true};
}

@Component({
  selector: 'app-harvest-estimate-form',
  templateUrl: './harvest-estimate-form.component.html',
  styleUrls: ['./harvest-estimate-form.component.scss']
})
export class HarvestEstimateFormComponent implements OnInit, OnDestroy {

  @Input() costCenter: CostCenter;
  @Input() harvestEstimate: HarvestEstimate;
  @Input() isView: boolean;
  @Input() previous: HarvestEstimate;

  public readonly sheetActions: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };

  public showQuantity: string;
  public showDailyAmount: string;

  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public harvestForm: FormGroup;
  public units: Array<Unit> = [];
  public processPlants: Array<EntityList> = [];
  public destinations: Array<Generic> = [];

  public isSaving = false;
  public holidays: Array<any> = [];
  private userCompany: any;
  private valueChanges$: Subscription;
  private readonly decimalRegex = /^\d*(.\d{1,3})?$/;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private contractDetailService: ContractDetailService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.holidays = this.storeService.getHolidays();
    this.userCompany = this.storeService.getActiveCompany();

    if (this.isView) {
      this.harvestForm = this.formBuilder.group({
        id: [this.harvestEstimate.id],
        costCenter: [this.costCenter.id],
        user: [this.userCompany.user],
        unit: [this.costCenter.controlUnit],
        quantity: [{value: this.harvestEstimate.quantity, disabled: true}],
        dailyAmount: [{value: this.harvestEstimate.dailyAmount, disabled: true}],
        workHolidays: [{value: this.harvestEstimate.workHolidays ? '1' : '0', disabled: true}],
        startDate: [{value: moment.utc(this.harvestEstimate.startDate).format('YYYY-MM-DD'), disabled: true}],
        endDate: [moment.utc(this.harvestEstimate.endDate).format('DD/MM/YYYY')],
        processPlant: [{value: this.harvestEstimate ? this.harvestEstimate.processPlant : '', disabled: true}, Validators.required],
        destination: [{value: this.harvestEstimate ? this.harvestEstimate.destination : '', disabled: true}, Validators.required],
        referenceId: 0
      });

      this.showQuantity = this.harvestEstimate.quantity.toString();
      this.showDailyAmount = this.harvestEstimate.dailyAmount.toString();
    } else {      
      this.harvestForm = this.formBuilder.group({
        id: [0, Validators.required],
        costCenter: [this.costCenter.id],
        user: [this.userCompany.user, Validators.required],
        unit: [this.costCenter.controlUnit, Validators.required],
        quantity: [this.previous ? this.previous.quantity : '', [
          Validators.required,
          Validators.min(1),
          Validators.pattern(this.decimalRegex)          
        ]],
        dailyAmount: [this.previous ? this.previous.dailyAmount : '', [
          Validators.required,
          Validators.min(1),
          Validators.pattern(this.decimalRegex)
        ]],
        workHolidays: [this.previous ? this.previous.workHolidays ? '1' : '0' : '0', Validators.required],
        startDate: [this.previous ? moment(this.cleanDate(this.previous.startDate), 'YYYY-MM-DD').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'), Validators.required],
        endDate: [this.previous ? moment(this.cleanDate(this.previous.endDate), 'YYYY-MM-DD').format('DD/MM/YYYY') : '', Validators.required],
        processPlant: [this.previous ? this.previous.processPlant : '', Validators.required],
        destination: [this.previous ? this.previous.destination : '', Validators.required],
        referenceId: this.previous ? this.previous.id : 0
      }, { validators: validateQuantities });

      this.showQuantity = this.previous ? this.previous.quantity.toString() : '';
      this.showDailyAmount = this.previous ? this.previous.dailyAmount.toString() : '';
    }

    this.valueChanges$ = this.harvestForm.valueChanges.pipe(
      debounceTime(1000),
    ).subscribe((data) => {
      console.log('form', this.harvestForm)

      this.calculateEndDate();
    });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.valueChanges$.unsubscribe();
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.modalController.dismiss(status);
  }

  /**
   * submit
   */
  public submit = () => {
    if (this.harvestForm.valid && !this.isSaving) {

      this.isSaving = true;
      const estimation = Object.assign({}, this.harvestForm.value);
      estimation.endDate = moment(estimation.endDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
      estimation.quantity = this.cleanParseNumber(estimation.quantity);
      estimation.dailyAmount = this.cleanParseNumber(estimation.dailyAmount);
      estimation.workHolidays = estimation.workHolidays === '1' ? 1 : 0;

      delete this.costCenter.active;
      const data = {
        costCenter: this.costCenter,
        harvestEstimate: estimation
      };

      this.storeEstimation(data);
    } else {
      this.isSaving = false;
    }
  }

  /**
   * showUnitName
   */
  public showUnitName = () => {
    const find = this.units.find(item => item.id === this.costCenter.controlUnit);
    return find ? find.code : 'N/A';
  }

  /**
   * workHolidaysEvent
   * @param event
   */
  public workHolidaysEvent = (value: string) => {
    this.harvestForm.get('workHolidays').patchValue(value);
  }

  /**
   * getSelectedProcessPlant
   */
  public getSelectedProcessPlant = () => {
    if (this.processPlants) {
      const find = this.processPlants.find(item => item.id === this.harvestForm.get('processPlant').value);
      return find ? find.name : '';
    }

    return '';
  }

  /**
   * getSelectedDestination
   */
  public getSelectedDestination = () => {
    if (this.destinations) {
      const find = this.destinations.find(item => item['id'] === this.harvestForm.get('destination').value);
      return find ? find['name'] : '';
    }

    return '';
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.units = this.storeService.getUnits();
    this.processPlants = this.storeService.getProcessPlants();
    this.destinations = this.storeService.getDestinations();

    this.preSelectProcessPlant();
    this.preSelectDestination();
  }

  /**
   * storeEstimation
   * @param data
   */
  private storeEstimation = (data: any) => {
    this.loaderService.startLoader('Guardando estimacion...');
    this.contractDetailService.storeHarvest(data).subscribe(success => {
      this.loaderService.stopLoader();
      this.isSaving = false;
      this.closeModal(true);
    }, error => {
      this.loaderService.stopLoader();
      this.isSaving = false;
      this.httpService.errorHandler(error);
    });
  }

  /**
   * calculateEndDate
   */
  private calculateEndDate = () => {
    const {
      quantity,
      dailyAmount,
      workHolidays,
      startDate
    } = this.harvestForm.value;

    const holidays = [];
    const daysAdded = 0;
    if (quantity && dailyAmount) {
      const days = Math.ceil((this.cleanParseNumber(quantity) > 0 ? this.cleanParseNumber(quantity) : 1) / (this.cleanParseNumber(dailyAmount) > 0 ? this.cleanParseNumber(dailyAmount) : 1));
      let momentDate = moment.utc(startDate);

      if (+workHolidays === 0) {
        this.holidays.forEach(holiday => {
          holidays.push(moment.utc(holiday.fecha).format(this.dateFormat));
        });
      }

      momentDate = this.computeEndDate(days, daysAdded, momentDate, holidays);

      this.harvestForm.get('endDate').patchValue(momentDate.format(this.dateFormat), { emitEvent: false });
    }
  }

  /**
   * cleanDate
   * @param date
   */
  private cleanDate = (date: string) => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }

  /**
   * computeEndDate
   * @param workingDays
   * @param daysAdded
   * @param momentDate
   */
  private computeEndDate = (workingDays: number = 1, daysAdded: number = 0, momentDate: any, holidays: Array<any> = []) => {
    if (daysAdded < workingDays && daysAdded < 366) {
      if (momentDate.weekday() > 0 && !holidays.includes(momentDate.format(this.dateFormat))) {
        daysAdded++;
      }

      if(daysAdded === workingDays){
        return momentDate;
      }

      momentDate = momentDate.add(1, 'days');
      return this.computeEndDate(workingDays, daysAdded, momentDate, holidays);
    }

    return momentDate;
  }

  /**
   * cleanParseNumber
   * @param value
   */
  private cleanParseNumber = (value: string): number => {
    return parseInt(String(value).replace('.', ''), 10);
  }

  /**
   * preSelectProcessPlant
   */
  private preSelectProcessPlant = () => {
    if (this.processPlants.length === 1) {
      this.harvestForm.get('processPlant').patchValue(this.processPlants[0].id);
    }
  }

  /**
   * preSelectDestination
   */
  private preSelectDestination = () => {
    if (this.destinations.length === 1) {
      this.harvestForm.get('destination').patchValue(this.destinations[0].id);
    }
  }

  /**
   * inputQuantity
   * @param value 
   */
  public inputQuantity = (value: string) => {    
    const clean = value.replace(/\D/g,'');    
    this.showQuantity = clean;
    this.harvestForm.get('quantity').patchValue(parseFloat(clean));
  }

  /**
   * inputDailyAmount
   * @param value 
   */
  public inputDailyAmount = (value: string) => {
    const clean = value.replace(/\D/g,'');
    this.showDailyAmount = clean;
    this.harvestForm.get('dailyAmount').patchValue(parseFloat(clean));
  }

}
