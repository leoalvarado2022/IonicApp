import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostCenter, EntityList, Generic, HarvestEstimate, Unit} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import * as moment from 'moment';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {debounceTime} from 'rxjs/operators';
import {StoreService} from '../../../../shared/services/store/store.service';

@Component({
  selector: 'app-harvest-estimate-form',
  templateUrl: './harvest-estimate-form.component.html',
  styleUrls: ['./harvest-estimate-form.component.scss']
})
export class HarvestEstimateFormComponent implements OnInit {

  @Input() costCenter: CostCenter;
  @Input() harvestEstimate: HarvestEstimate;
  @Input() isView: boolean;
  @Input() previous: HarvestEstimate;

  public readonly processPlantAction: any = {
    header: 'Plantas de Proceso',
    keyboardClose: false,
    backdropDismiss: false
  };

  public readonly destinationAction: any = {
    header: 'Destinos',
    keyboardClose: false,
    backdropDismiss: false
  };

  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public harvestForm: FormGroup;
  public units: Array<Unit> = [];
  public processPlants: Array<EntityList> = [];
  public destinations: Array<Generic> = [];

  public isSaving = false;
  public holidays: Array<any> = [];
  private userCompany: any;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private syncService: SyncService,
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private toastService: ToastService,
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
        workHolidays: [{value: this.harvestEstimate.workHolidays ? 1 : 0, disabled: true}],
        startDate: [{value: moment.utc(this.harvestEstimate.startDate).format('YYYY-MM-DD'), disabled: true}],
        endDate: [moment.utc(this.harvestEstimate.endDate).format('DD/MM/YYYY')],
        processPlant: [{value: this.harvestEstimate ? this.harvestEstimate.processPlant : '', disabled: true}, Validators.required],
        destination: [{value: this.harvestEstimate ? this.harvestEstimate.destination : '', disabled: true}, Validators.required]
      });
    } else {
      this.harvestForm = this.formBuilder.group({
        id: [0, Validators.required],
        costCenter: [this.costCenter.id],
        user: [this.userCompany.user, Validators.required],
        unit: [this.costCenter.controlUnit, Validators.required],
        quantity: [this.previous ? this.previous.quantity : '', [
          Validators.required,
          Validators.pattern(/^([0-9.])+$/),
          Validators.min(1)
        ]],
        dailyAmount: [this.previous ? this.previous.dailyAmount : '', [
          Validators.required,
          Validators.pattern(/^([0-9.])+$/),
          Validators.min(1)
        ]],
        workHolidays: [this.previous ? this.previous.workHolidays ? 1 : 0 : 0, Validators.required],
        startDate: [this.previous ? moment(this.cleanDate(this.previous.startDate), 'YYYY-MM-DD').format('YYYY-MM-DD') : this.costCenter.harvestDate, Validators.required],
        endDate: [this.previous ? moment(this.cleanDate(this.previous.endDate), 'YYYY-MM-DD').format('DD/MM/YYYY') : '', Validators.required],
        processPlant: [this.previous ? this.previous.processPlant : '', Validators.required],
        destination: [this.previous ? this.previous.destination : '', Validators.required]
      });

      this.harvestForm.valueChanges.pipe(
        debounceTime(1000),
      ).subscribe((data) => {
        this.calculateEndDate();
      });
    }

    this.loadData();
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.modalController.dismiss(status);
  };

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

      delete this.costCenter.active;
      const data = {
        costCenter: this.costCenter,
        harvestEstimate: estimation
      };

      this.storeEstimation(data);
    } else {
      this.isSaving = false;
    }
  };

  /**
   * showUnitName
   */
  public showUnitName = () => {
    const find = this.units.find(item => item.id === this.costCenter.controlUnit);
    return find ? find.code : 'N/A';
  };

  /**
   * workHolidaysEvent
   * @param event
   */
  public workHolidaysEvent = (value: string) => {
    this.harvestForm.patchValue({
      workHolidays: parseInt(value, 10)
    });

    this.harvestForm.updateValueAndValidity();
  };

  /**
   * getSelectedProcessPlant
   */
  public getSelectedProcessPlant = () => {
    if (this.processPlants) {
      const id = this.harvestForm.get('processPlant').value;
      const find = this.processPlants.find(item => item.id === id);
      return find ? find.name : '';
    }

    return '';
  };

  /**
   * getSelectedDestination
   */
  public getSelectedDestination = () => {
    if (this.destinations) {
      const id = this.harvestForm.get('destination').value;
      const find = this.destinations.find(item => item['id'] === id);
      return find ? find['name'] : '';
    }

    return '';
  };

  /**
   * loadData
   */
  private loadData = () => {
    this.units = this.storeService.getUnits();
    this.processPlants = this.storeService.getProcessPlants();
    this.destinations = this.storeService.getDestinations();

    this.preSelectProcessPlant();
    this.preSelectDestination();
  };

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
  };

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

    if (quantity && dailyAmount) {
      const days = Math.ceil((this.cleanParseNumber(quantity) > 0 ? this.cleanParseNumber(quantity) : 1) / (this.cleanParseNumber(dailyAmount) > 0 ? this.cleanParseNumber(dailyAmount) : 1));
      const holidays = [];
      const daysAdded = 1;
      let momentDate = moment.utc(startDate);

      if (workHolidays === 0) {
        this.holidays.forEach(holiday => {
          holidays.push(moment.utc(holiday.fecha).format(this.dateFormat));
        });
      }

      momentDate = this.computeEndDate(days, daysAdded, momentDate, holidays);

      this.harvestForm.patchValue({
        endDate: momentDate.format(this.dateFormat)
      });

      this.harvestForm.updateValueAndValidity();
    }
  };

  /**
   * cleanDate
   * @param date
   */
  private cleanDate = (date: string) => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  };

  /**
   * computeEndDate
   * @param workingDays
   * @param daysAdded
   * @param momentDate
   */
  private computeEndDate = (workingDays: number = 1, daysAdded: number = 1, momentDate: any, holidays: Array<any> = []) => {
    if (workingDays > daysAdded && daysAdded < 60) {
      if (momentDate.weekday() > 0 && !holidays.includes(momentDate.format(this.dateFormat))) {
        daysAdded++;
      }

      momentDate = momentDate.add(1, 'days');
      return this.computeEndDate(workingDays, daysAdded, momentDate, holidays);
    }

    return momentDate;
  };

  /**
   * cleanParseNumber
   * @param value
   */
  private cleanParseNumber = (value: string): number => {
    return parseInt(String(value).replace('.', ''), 10);
  };

  /**
   * preSelectProcessPlant
   */
  private preSelectProcessPlant = () => {
    if (this.processPlants.length === 1) {
      this.harvestForm.patchValue({
        processPlant: this.processPlants[0].id
      });

      this.harvestForm.updateValueAndValidity();
    }
  };

  /**
   * preSelectDestination
   */
  private preSelectDestination = () => {
    if (this.destinations.length === 1) {
      this.harvestForm.patchValue({
        destination: this.destinations[0].id
      });

      this.harvestForm.updateValueAndValidity();
    }
  }

}
