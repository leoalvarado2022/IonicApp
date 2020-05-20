import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import { Tally } from '../tally.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-tally-form',
  templateUrl: './tally-form.component.html',
  styleUrls: ['./tally-form.component.scss'],
})
export class TallyFormComponent implements OnInit {

  @Input() workers: Array<any> = [];
  @Input() dateSelected: string;
  @Input() editTally: Tally;

  public tallyForm: FormGroup;
  public currentStep = 1;
  public split = 0;

  private costCenters: Array<any> = [];
  public filteredCostCenters: Array<any> = [];
  public costCenterName: string;

  private labors: Array<any> = [];
  public filteredLabors: Array<any> = [];
  public laborName: string;

  private deals: Array<any> = [];
  public availableDeals: Array<any> = [];
  public filteredDeals: Array<any> = [];
  public dealName: string;

  private bonds: Array<any> = [];
  public availableBonds: Array<any> = [];
  public filteredBonds: Array<any> = [];
  public bondName: string;

  public readonly workingDays: Array<any> = [
    {text: '1', value: 1},
    {text: '0.75', value: 0.75},
    {text: '0.5', value: 0.5},
    {text: '0.25', value: 0.25},
    {text: '0.1', value: 0.1}
  ];

  public multipleWorkers: Array<any> = [];
  public workersOverMax: Array<any> = [];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private actionSheetController: ActionSheetController
  ) {

  }

  ngOnInit() {
    const activeCompany = this.storeService.getActiveCompany();

    this.costCenters = [...this.storeService.getCostCentersCustom()];
    this.labors = [...this.storeService.getLabors()];
    this.deals = [...this.storeService.getDeals()];
    this.bonds = [...this.storeService.getBonds()];

    this.filteredCostCenters = [];
    this.filteredLabors = [];
    this.filteredDeals = [];
    this.filteredBonds = [];

    let workingDayStartValue = 1;
    if (this.workers.length === 1) {
      workingDayStartValue = this.getWorkerRemainingWorkingDay(this.workers[0]);
    }

    this.tallyForm = this.formBuilder.group({
      id: [0, Validators.required],
      date: [this.dateSelected, Validators.required],
      costCenterId: ['', Validators.required],
      laborId: ['', Validators.required],
      dealId: [''],
      bondValidity: [''],
      workingDay: [workingDayStartValue, [
        Validators.required,
        Validators.min(0.1),
      ]],
      hoursExtra: ['', Validators.min(0.1)],
      performance: ['', Validators.min(0.1)],
      unit: [{value: '', disabled: true}],
      notes: [''],
      creatorId: [activeCompany.user, Validators.required],
      multiple: this.formBuilder.array([])
    });

    if (this.editTally) {
      this.tallyForm.patchValue({
        id: this.editTally.id,
        costCenterId: this.editTally.costCenterId,
        laborId: this.editTally.laborId,
        dealId: this.editTally.dealId,
        workingDay: this.editTally.workingDay ? this.editTally.workingDay : '',
        hoursExtra: this.editTally.hoursExtra ? this.editTally.hoursExtra : '',
        performance: this.editTally.performance ? this.editTally.performance : '',
        notes: this.editTally.notes,
        tempId: this.editTally.tempId
      });

      const costCenter = this.costCenters.find(item => item.id === this.editTally.costCenterId);
      this.costCenterName = costCenter.name;

      const labor = this.labors.find(item => item.id === this.editTally.laborId);
      this.laborName = labor.name;

      const deal = this.deals.find(item => item.id === this.editTally.dealId);
      this.dealName = deal ? deal.name_deal : '';

      const bond = this.bonds.find(item => item.id === this.editTally.bondValidity);
      this.bondName = bond ? bond.bondName : '';

      this.getDeals();
      this.getBonds();

      this.checkWorkersDailyMax(this.editTally.workingDay);
    } else {
      this.checkWorkersDailyMax(workingDayStartValue);
    }

    this.addWorkers();
  }

  /**
   * addWorkers
   */
  private addWorkers = (): void => {
    if (this.workers.length > 1) {
      for (const worker of this.workers) {
        const workers = this.tallyForm.get('multiple') as FormArray;
        workers.push(this.addWokerRow(worker));
      }
    }
  }

  /**
   * addWokerRow
   * @param workerId
   */
  private addWokerRow = (worker: any): FormGroup => {
    return this.formBuilder.group({
      id: [worker.id],
      jr: [this.getWorkerRemainingWorkingDay(worker), [
        Validators.required,
        Validators.min(0.1)
      ]],
      h: ['', Validators.min(0)],
      r: ['', Validators.min(0)]
    });
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
    this.filteredCostCenters = [];

    this.getDeals();
    this.getBonds();
  }

  /**
   * cleanCostCenterSearch
   */
  public cleanCostCenterSearch = (): void => {
    this.tallyForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;

    this.availableDeals = [];
    this.cleanDealSearch();

    this.availableBonds = [];
    this.cleanBondSearch();
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
    this.filteredLabors = [];
    this.laborName = null;

    this.availableDeals = [];
    this.cleanDealSearch();

    this.availableBonds = [];
    this.cleanBondSearch();
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
      header: 'Jornadas',
      backdropDismiss: false,
      keyboardClose: false,
      buttons: [
        ...buildButtons,
        {
          text: 'Cancelar',
          role: 'cancel'
        }]
    });

    await actionSheet.present();
  }

  /**
   * submitForm
   */
  public submitForm = () => {
    const formData = Object.assign({}, this.tallyForm.value);

    const talliesToRecord = [];
    if (this.multipleWorkers.length > 0) {
      for (const worker of this.workers) {
        talliesToRecord.push(this.newMultipleTally(worker, formData));
      }
    } else {
      for (const worker of this.workers) {
        const newTally = this.editTally ? this.editSingleTally(worker, formData) : this.newSingleTally(worker, formData);
        talliesToRecord.push(newTally);
      }
    }

    this.storeService.addTalliesToRecord(talliesToRecord);
    this.closeModal(true);
  }

  /**
   * newSingleTally
   */
  private newSingleTally = (worker: any, formData: any): object => {
    const tempId = this.storeService.getTallyTempId();
    this.storeService.increaseTallyTempId();

    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      tempId,
      hoursExtra: formData.hoursExtra ? formData.hoursExtra : 0 ,
      performance: formData.performance ? formData.performance : 0
    });
  }

  /**
   * editSingleTally
   */
  private editSingleTally = (worker: any, formData: any) => {
    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      tempId: this.editTally.tempId,
      hoursExtra: formData.hoursExtra ? formData.hoursExtra : 0 ,
      performance: formData.performance ? formData.performance : 0,
      edit: true
    });
  }

  /**
   * newMultipleTally
   */
  private newMultipleTally = (worker: any, formData: any): object => {
    const tempId = this.storeService.getTallyTempId();
    this.storeService.increaseTallyTempId();
    const data = formData.multiple.find(i => i.id === worker.id);

    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      tempId,
      workingDay: data['jr'],
      hoursExtra: data['h'] || 0,
      performance: data['r'] || 0
    });
  }

  /**
   * editMultipleTally
   */
  private editMultipleTally = (worker: any, formData: any): object => {
    const data = formData.multiple.find(i => i.id === worker.id);

    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      tempId: formData.tempId,
      workingDay: data['jr'],
      hoursExtra: data['h'],
      performance: data['r']
    });
  }

  /**
   * splitTime
   */
  public splitTime = (option: string) => {
    if (this.split > 0) {
      if (option.toLowerCase() === 'jornada') {

        const time = this.tallyForm.get('multiple').value.reduce((total, tally) => total + tally.jr, 0);
        const workers = this.tallyForm.get('multiple') as FormArray;

        for (let i = 0; i < workers.length; i++) {
          const value = ((this.split / time) * workers.at(i).get('jr').value || 1);
          workers.at(i).patchValue({r: value });
        }
      } else if (option.toLowerCase() === 'asistencia') {
        const divide = this.split / this.workers.length;

        const workers = this.tallyForm.get('multiple') as FormArray;
        for (let i = 0; i < workers.length; i++) {
          workers.at(i).patchValue({r: divide});
        }
      }
    }
  }

  /**
   * setWorkingDay
   */
  private setWorkingDay = (workingDay: number) => {
    const workers = this.tallyForm.get('multiple') as FormArray;
    for (let i = 0; i < workers.length; i++) {
      workers.at(i).patchValue({jr: workingDay});
    }
  }

  /**
   * checkWorkersDailyMax
   * @param workingDay
   */
  public checkWorkersDailyMax = (workingDay: number): void => {
    this.workersOverMax = [];

    for (const worker of this.workers) {
      this.checkWorkerDailyMax(worker, workingDay);
    }
  }

  /**
   * checkWorkerDailyMax
   * @param worker
   * @param workingDay
   */
  public checkWorkerDailyMax = (worker: any, workingDay: number) => {

    let todayTallies = this.storeService.getNumberOfWorkerTallies(worker, this.dateSelected, this.editTally ? this.editTally.tempId : null);

    if (this.editTally && !this.editTally.tempId) {
      todayTallies = todayTallies.filter(i => i.id !== this.editTally.id);
    }

    const totalWorked = todayTallies.reduce((total, tally) => total + tally.workingDay, 0);

    const total = (+workingDay + +totalWorked);
    if (total > parseFloat(worker.dailyMax)) {

      this.deleteWorkerOnOverMaxArray(worker.name);

      this.workersOverMax.push({
        name: worker.name,
        value: total
      });
    } else {
      this.deleteWorkerOnOverMaxArray(worker.name);
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
      this.checkWorkersDailyMax(value);

      if (this.workers.length > 1) {
        this.setWorkingDay(value);
      }
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
  private getWorkerRemainingWorkingDay = (worker: any): number => {
    const todayTallies = this.storeService.getNumberOfWorkerTallies(worker, this.dateSelected);
    const totalWorked = todayTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);

    const total = worker.dailyMax - totalWorked > 0 ? worker.dailyMax - totalWorked : 0;

    return parseFloat(total.toFixed(2));
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

        return item.id_costCenter === costCenterId && item.id_labor === laborId && moment(this.dateSelected).isBetween(start, end);
      });

      console.log('this.availableDeals', this.availableDeals);
    }
  }

  /**
   * searchDealsearchDeal
   */
  public searchDeal = (search: string): void => {
    if (search) {
      this.filteredDeals = this.availableDeals.filter(item => item.name_deal.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredDeals = [];
    }
  }

  /**
   * selectDeal
   */
  public selectDeal = (deal: any): void => {
    this.tallyForm.get('dealId').patchValue(deal.id_deal_validity);
    this.tallyForm.get('unit').patchValue(deal.unit_control);
    this.filteredDeals = [];
    this.dealName = deal.name_deal;
  }

  /**
   * cleanDealSearch
   */
  public cleanDealSearch = (): void => {
    this.tallyForm.get('dealId').patchValue('');
    this.tallyForm.get('unit').patchValue('');
    this.dealName = null;
    this.filteredDeals = [];
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

        return item.costCenterId === costCenterId && item.laborId === laborId && moment(this.dateSelected).isBetween(start, end);
      });
    }
  }

  /**
   * searchBond
   */
  public searchBond = (search: string): void => {
    if (search) {
      this.filteredBonds = this.availableBonds.filter(item => item.bondName.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredBonds = [];
    }
  }

  /**
   * selectBond
   */
  public selectBond = (bond: any): void => {
    this.tallyForm.get('bondValidity').patchValue(bond.id);
    this.filteredBonds = [];
    this.bondName = bond.bondName;
  }

  /**
   * cleanBondSearch
   */
  public cleanBondSearch = (): void => {
    this.tallyForm.get('bondValidity').patchValue('');
    this.bondName = null;
    this.filteredBonds = [];
  }

}
