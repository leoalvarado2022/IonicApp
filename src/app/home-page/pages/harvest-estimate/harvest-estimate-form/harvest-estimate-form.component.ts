import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostCenter, HarvestEstimate} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import * as moment from 'moment';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";

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

  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public harvestForm: FormGroup;
  public units: Array<any> = [];
  public showErrors = false;
  private userConnection: any;
  public holidays: Array<any> = [];

  private holidays$: Subscription;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private syncService: SyncService,
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private toastService: ToastService,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {
    this.holidays$ = this.contractDetailService.getHolidays().subscribe(holidays => {
      this.holidays = holidays;
    });
  }

  ngOnInit() {
    this.userConnection = this.authService.getCompany();

    if (this.isView) {
      this.harvestForm = this.formBuilder.group({
        id: [this.harvestEstimate.id],
        costCenter: [this.costCenter.id],
        user: [this.userConnection.user],
        unit: [this.costCenter.controlUnit],
        quantity: [{value: this.harvestEstimate.quantity, disabled: true}],
        dailyAmount: [{value: this.harvestEstimate.dailyAmount, disabled: true}],
        workHolidays: [{value: this.harvestEstimate.workHolidays ? 1 : 0, disabled: true}],
        startDate: [{value: moment.utc(this.harvestEstimate.startDate).format('YYYY-MM-DD'), disabled: true}],
        endDate: [moment.utc(this.harvestEstimate.endDate).format('DD/MM/YYYY')]
      });
    } else {
      this.harvestForm = this.formBuilder.group({
        id: [0, Validators.required],
        costCenter: [this.costCenter.id],
        user: [this.userConnection.user, Validators.required],
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
        endDate: [this.previous ? moment(this.cleanDate(this.previous.endDate), 'YYYY-MM-DD').format('DD/MM/YYYY') : '', Validators.required]
      });

      this.harvestForm.valueChanges.pipe(
        debounceTime(1000),
      ).subscribe((data) => {
        this.calculateEndDate();
      });
    }


    this.loadUnits();
  }

  ngOnDestroy(): void {
    this.holidays$.unsubscribe();
  }

  /**
   * loadUnits
   */
  private loadUnits = async () => {
    this.units = await this.syncService.getUnits();
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
    if (this.harvestForm.valid) {
      this.showErrors = false;
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
      this.showErrors = true;
    }
  }

  /**
   * storeEstimation
   * @param data
   */
  private storeEstimation = (data: any) => {
    this.loaderService.startLoader('Guardando estimacion...');
    this.contractDetailService.storeHarvest(data).subscribe(success => {
      this.loaderService.stopLoader();
      this.closeModal(true);
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
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
    this.harvestForm.patchValue({
      workHolidays: parseInt(value)
    });

    this.harvestForm.updateValueAndValidity();
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

    if (quantity && dailyAmount) {
      const days = Math.ceil((this.cleanParseNumber(quantity) > 0 ? this.cleanParseNumber(quantity) : 1) / (this.cleanParseNumber(dailyAmount) > 0 ? this.cleanParseNumber(dailyAmount) : 1));
      const holidays = [];
      let daysAdded = 1;
      let momentDate = moment.utc(startDate);

      if (workHolidays === 0) {
        this.holidays.forEach(holiday => {
          holidays.push(moment.utc(holiday.fecha).format(this.dateFormat));
        })
      }

      momentDate = this.computeEndDate(days, daysAdded, momentDate, holidays);

      this.harvestForm.patchValue({
        endDate: momentDate.format(this.dateFormat)
      })

      this.harvestForm.updateValueAndValidity();
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
  private computeEndDate = (workingDays: number = 1, daysAdded: number = 1, momentDate: any, holidays: Array<any> = []) => {
    if (workingDays > daysAdded && daysAdded < 60) {
      if (momentDate.weekday() > 0 && !holidays.includes(momentDate.format(this.dateFormat))) {
        daysAdded++;
      }

      momentDate = momentDate.add(1, 'days');
      return this.computeEndDate(workingDays, daysAdded, momentDate, holidays);
    }

    return momentDate;
  }

  /**
   * cleanParseNumber
   * @param number
   */
  private cleanParseNumber = (number: string): number => {
    return parseInt(String(number).replace('.', ''));
  }

}
