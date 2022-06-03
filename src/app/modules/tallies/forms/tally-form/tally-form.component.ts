import * as moment from 'moment';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { TallySyncService } from 'src/app/services/storage/tally-sync/tally-sync.service';
import { Tally } from '../../tally.interface';
import { CleanStringService } from 'src/app/services/clean-string/clean-string.service';

@Component({
  selector: 'app-tally-form',
  templateUrl: './tally-form.component.html',
  styleUrls: ['./tally-form.component.scss'],
})
export class TallyFormComponent implements OnInit {

  @Input() worker: any;
  @Input() dateSelected: string;
  @Input() updateTaly: Tally;
  @Input() syncedTallies: Array<Tally> = [];
  @Input() talliesToRecord: Array<Tally> = [];
  @Input() costCenters: Array<any> = [];
  @Input() labors: Array<any> = [];
  @Input() deals: Array<any> = [];
  @Input() bonds: Array<any> = [];

  private readonly decimalRegex = /^\d*(.\d{1,3})?$/;
  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };

  public tallyForm: FormGroup;
  public currentStep = 1;
  public split = 0;

  public workersOverMax: Array<any> = [];
  public filteredCostCenters: Array<any> = [];
  public costCenterName: string;

  public filteredLabors: Array<any> = [];
  public laborName: string;

  public availableDeals: Array<any> = [];
  public availableBonds: Array<any> = [];

  public readonly workingDays: Array<any> = [
    {text: '1', value: 1},
    {text: '0.75', value: 0.75},
    {text: '0.5', value: 0.5},
    {text: '0.25', value: 0.25},
    {text: '0.1', value: 0.1}
  ];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private actionSheetController: ActionSheetController,
    private tallySyncService: TallySyncService,
    private cleanStringService: CleanStringService
  ) {

  }

  ngOnInit() {
    const activeCompany = this.storeService.getActiveCompany();

    this.filteredCostCenters = [];
    this.filteredLabors = [];
    const workingDayStartValue = this.getWorkerRemainingWorkingDay();

    this.tallyForm = this.formBuilder.group({
      id: [0, Validators.required],
      date: [this.dateSelected, Validators.required],
      costCenterId: ['', Validators.required],
      laborId: ['', Validators.required],
      dealValidity: [''],
      bondValidity: [''],
      workingDay: [0, [
        Validators.required,
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]],
      hoursExtra: ['', [
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]],
      performance: ['', [
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]],
      unit: [{value: '', disabled: true}],
      notes: [''],
      creatorId: [activeCompany.user, Validators.required],
    });

    if (this.updateTaly) {
      this.editingTally(this.updateTaly);
    } else {
      this.checkWorkerDailyMax(workingDayStartValue);
    }
  }

  /**
   * editingTally
   */
  private editingTally = (tally: Tally) => {
    this.tallyForm.patchValue({
      id: tally.id,
      costCenterId: tally.costCenterId,
      laborId: tally.laborId,
      dealValidity: tally.dealValidity,
      bondValidity: tally.bondValidity,
      workingDay: tally.workingDay ? tally.workingDay : '',
      hoursExtra: tally.hoursExtra ? tally.hoursExtra : '',
      performance: tally.performance ? tally.performance : '',
      notes: tally.notes,
      tempId: tally.tempId
    });

    const costCenter = this.costCenters.find(item => item.id === tally.costCenterId);
    this.costCenterName = costCenter.name;

    const labor = this.labors.find(item => item.id === tally.laborId);
    this.laborName = labor.name;

    this.getDeals();
    this.getBonds();

    this.checkWorkerDailyMax(tally.workingDay);
  }

  /**
   * searchCostCenter
   * @param search
   */
  public searchCostCenter = (search: string): void => {
    if (search) {
      this.filteredCostCenters = this.costCenters.filter(item => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredCostCenters = [];
    }
  }

  /**
   * selectCostCenter
   * @param costCenter
   */
  public selectCostCenter = (costCenter: any): void => {
    this.tallyForm.get('costCenterId').patchValue(costCenter.id);
    this.costCenterName = costCenter.name;
    this.tallyForm.get('laborId').patchValue('');
    this.laborName = null;
    this.filteredCostCenters = [];

    this.getDeals();
    this.getBonds();
  }

  /**
   * cleanCostCenterSearch
   */
  public cleanCostCenterSearch = (): void => {
    this.tallyForm.get('costCenterId').patchValue('');
    this.tallyForm.get('laborId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;
    this.laborName = null;

    this.availableDeals = [];
    this.availableBonds = [];
  }

  /**
   * searchLabor
   * @param search
   */
  public searchLabor = (search: string): void => {
    if (search) {
      this.filteredLabors = this.labors.filter(item => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredLabors = [];
    }
  }

  /**
   * selectLabor
   * @param labor
   */
  public selectLabor = (labor: any): void => {
    this.tallyForm.get('laborId').patchValue(labor.id);
    this.tallyForm.get('bondValidity').patchValue('');
    this.tallyForm.get('dealValidity').patchValue('');
    this.laborName = labor.name;
    this.filteredLabors = [];

    this.getDeals();
    this.getBonds();
  }

  /**
   * cleanLaborSearch
   */
  public cleanLaborSearch = (): void => {
    this.tallyForm.get('laborId').patchValue('');
    this.tallyForm.get('unit').patchValue('');
    this.tallyForm.get('bondValidity').patchValue('');
    this.tallyForm.get('dealValidity').patchValue('');
    this.filteredLabors = [];
    this.laborName = null;

    this.availableDeals = [];
    this.availableBonds = [];
  }

  /**
   * selectWorkingDay
   */
  public selectWorkingDay = async (select: number) => {
    const buildButtons = this.workingDays.map(item => {
      return {
        text: item.value,
        handler: () => {
          if (select === 1) {
            this.tallyForm.get('workingDay').patchValue(item.value);
          } else if (select === 2) {
            this.tallyForm.get('hoursExtra').patchValue(item.value);
          }
        }
      };
    });

    const actionSheet = await this.actionSheetController.create({
      cssClass: 'custom-action-sheet',
      header: 'Jornadas',
      backdropDismiss: false,
      keyboardClose: false,
      buttons: [
        ...buildButtons,
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'custom-action-sheet-cancel-button',
        }]
    });

    await actionSheet.present();
  }

  /**
   * submitForm
   */
  public submitForm = () => {
    const formData = Object.assign({}, this.tallyForm.value);
    formData.notes = this.cleanStringService.replaceDoubleQuotes(formData.notes);
    formData.dealValidity = formData.dealValidity === 'null' ? null : formData.dealValidity;
    formData.bondValidity = formData.bondValidity === 'null' ? null : formData.bondValidity;

    if (this.updateTaly) {
      const editTally = this.editSingleTally(this.worker, formData, this.updateTaly);
      console.log("editTally::> ",editTally);
      this.tallySyncService.editTallyToRecord(editTally);
    } else {
      const newTally = this.newSingleTally(this.worker, formData);
      this.tallySyncService.addTallyToRecord(newTally);
    }

    this.closeModal(true);
  }

  /**
   * newSingleTally
   */
  private newSingleTally = (worker: any, formData: any): Tally => {
    const tempId = this.tallySyncService.getTallyTempId();
    this.tallySyncService.increaseTallyTempId();

    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      workingDay: parseFloat(formData.workingDay),
      tempId,
      hoursExtra: formData.hoursExtra ? formData.hoursExtra : 0 ,
      performance: formData.performance ? formData.performance : 0,
      status: 'new',
      contractorId: this.worker.contractorId
    });
  }

  /**
   * editSingleTally
   */
  private editSingleTally = (worker: any, formData: any, edit: Tally): Tally => {
    let tempId = null;
    if (edit.tempId) {
      tempId = edit.tempId;
    } else {
      tempId = this.tallySyncService.getTallyTempId();
      this.tallySyncService.increaseTallyTempId();
    }

    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      workingDay: parseFloat(formData.workingDay),
      tempId,
      hoursExtra: formData.hoursExtra ? formData.hoursExtra : 0 ,
      performance: formData.performance ? formData.performance : 0,
      status: 'edit',
      contractorId: this.worker.contractorId
    });
  }

  /**
   * checkWorkerDailyMax
   * @param workingDay
   */
  public checkWorkerDailyMax = (workingDay: number) => {
    let todayTallies = this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord, this.worker, this.dateSelected, this.updateTaly ? this.updateTaly.tempId : null);

    // REVISAR ESTO
    if (this.updateTaly && !this.updateTaly.tempId) {
      todayTallies = todayTallies.filter(i => i.id !== this.updateTaly.id);
    }

    // tslint:disable-next-line: no-shadowed-variable
    const totalWorked = todayTallies.reduce((total, tally) => total + tally.workingDay, 0);

    const total = (+workingDay + +totalWorked);
    if (total > parseFloat(this.worker.dailyMax)) {

      this.deleteWorkerOnOverMaxArray(this.worker.name);

      this.workersOverMax.push({
        name:  this.worker.name,
        value: total
      });
    } else {
      this.deleteWorkerOnOverMaxArray(this.worker.name);
    }
  }

  /**
   * deleteWorkerOnOverMaxArray
   * @param workerName
   */
  private deleteWorkerOnOverMaxArray = (workerName: string) => {
    const validateDuplicity = this.workersOverMax.findIndex(item => item.name === workerName);

    if (validateDuplicity > -1) {
      this.workersOverMax.splice(validateDuplicity, 1);
    }
  }

  /**
   * workingDayChanged
   * @param value
   */
  public workingDayChanged = (value: number) => {
    if (value) {
      this.tallyForm.get('workingDay').patchValue(value);
      this.checkWorkerDailyMax(value);
    }
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false): void => {
    this.modalController.dismiss(status);
  }

  /**
   * getWorkerRemainingWorkingDay
   */
  private getWorkerRemainingWorkingDay = (): number => {
    const todayTallies = this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord, this.worker, this.dateSelected);

    const totalWorked = todayTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);

    const ammount = this.worker.dailyMax - totalWorked > 0 ? this.worker.dailyMax - totalWorked : 0;

    return parseFloat(ammount.toFixed(2));
  }

  /**
   * getDeals
   */
  public getDeals = (): void => {
    const costCenterId = this.tallyForm.get('costCenterId').value;
    const laborId = this.tallyForm.get('laborId').value;

    this.availableDeals = [];
    if (costCenterId && laborId) {
      this.availableDeals = this.deals.filter(item => {
        const start = moment(item.date_init).toISOString();
        const end = moment(item.date_end).toISOString();

        return (item.allCostCenters || item.id_costCenter === costCenterId) && item.id_labor === laborId && moment(this.dateSelected).isBetween(start, end);
        // return item.id_labor === laborId && moment(this.dateSelected).isBetween(start, end);
      });

      if (this.availableDeals.length > 0) {
        if (this.updateTaly) {
          this.tallyForm.get('dealValidity').patchValue(String(this.updateTaly?.dealValidity) === 'null' ? String(this.updateTaly.dealValidity) : this.updateTaly.dealValidity);
        } else {
          this.tallyForm.get('dealValidity').patchValue(this.availableDeals[0].id_deal_validity);
        }
        this.tallyForm.get('unit').patchValue(this.availableDeals[0].unit_control);
      } else {
        const currentLabor = this.labors.find(l => l.id === laborId);
        this.tallyForm.get('unit').patchValue(currentLabor.unit || '');
      }
    }
  }

  /**
   * selectDeal
   */
  public selectDeal = (deal: any): void => {
    if (deal) {
      const findDeal = this.availableDeals.find(item => item.id_deal_validity === deal);

      if (findDeal) {
        this.tallyForm.get('unit').patchValue(findDeal.unit_control);
      }
    } else {
      const laborId = this.tallyForm.get('laborId').value;
      const currentLabor = this.labors.find(l => l.id === laborId);
      this.tallyForm.get('unit').patchValue(currentLabor.unit || '');
    }
  }

  /**
   * getBonds
   */
  public getBonds = (): void => {
    const costCenterId = this.tallyForm.get('costCenterId').value;
    const laborId = this.tallyForm.get('laborId').value;

    this.availableBonds = [];
    if (costCenterId && laborId) {
      this.availableBonds = this.bonds.filter(item => {
        const start = moment(item.startDate).toISOString();
        const end = moment(item.endDate).toISOString();

        return (item.allCostCenters || item.costCenterId === costCenterId) && item.laborId === laborId && moment(this.dateSelected).isBetween(start, end);
        // return item.laborId === laborId && moment(this.dateSelected).isBetween(start, end);
      });

      if (this.availableBonds.length > 0) {
        if (this.updateTaly) {
          console.log("this.updateTaly.bondValidity::> ",this.updateTaly.bondValidity);
          this.tallyForm.get('bondValidity').patchValue(String(this.updateTaly?.bondValidity) === 'null' ? String(this.updateTaly?.bondValidity) : this.updateTaly.bondValidity);
        } else {
          this.tallyForm.get('bondValidity').patchValue(this.availableBonds[0].bondValidity);
        }
      }
    }
  }

  /**
   * getField
   */
  public getField = (index: number, fieldName: string): FormGroup => {
    return this.tallyForm.get('multiple')['controls'][index].get(fieldName);
  }

}
