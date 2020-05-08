import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {TallyService} from '../services/tally/tally.service';

@Component({
  selector: 'app-tally-form',
  templateUrl: './tally-form.component.html',
  styleUrls: ['./tally-form.component.scss'],
})
export class TallyFormComponent implements OnInit {

  @Input() workers: Array<any> = [];
  @Input() dateSelected: string;

  public tallyForm: FormGroup;
  private costCenters: Array<any> = [];
  private labors: Array<any> = [];
  public currentStep = 1;
  public split = 0;

  public filteredCostCenters: Array<any> = [];
  public costCenterName: string;
  public filteredLabors: Array<any> = [];
  public laborName: string;
  public readonly workingDays: Array<any> = [
    {text: '1', value: 1},
    {text: '0.75', value: 0.75},
    {text: '0.5', value: 0.5},
    {text: '0.25', value: 0.25},
    {text: '0.1', value: 0.1}
  ];

  public multipleWorkers: Array<any> = [];
  public tallies: Array<any> = [];
  public talliesToRecord: Array<any> = [];
  public workersOverMax: Array<any> = [];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private actionSheetController: ActionSheetController,
    private tallyService: TallyService
  ) {

  }

  ngOnInit() {
    const activeCompany = this.storeService.getActiveCompany();

    this.costCenters = this.storeService.getCostCenters();
    this.filteredCostCenters = [];
    this.labors = this.storeService.getLabors();
    this.filteredLabors = [];
    this.tallies = this.storeService.getTallies();
    this.talliesToRecord = this.storeService.getTalliesToRecord();

    this.tallyForm = this.formBuilder.group({
      id: [0, Validators.required],
      date: [this.dateSelected, Validators.required],
      costCenterId: ['', Validators.required],
      laborId: ['', Validators.required],
      workingDay: [1, Validators.min(0.1)],
      hoursExtra: ['', Validators.min(0.1)],
      performance: ['', Validators.min(0.1)],
      unit: [{value: '', disabled: true}],
      notes: [''],
      creatorId: [activeCompany.user, Validators.required],
      multiple: this.formBuilder.array([])
    });

    this.checkWorkersDailyMax(1);
    this.addWorkers();
  }

  /**
   * addWorkers
   */
  private addWorkers = (): void => {
    if (this.workers.length > 1) {
      for (const worker of this.workers) {
        const workers = this.tallyForm.get('multiple') as FormArray;
        workers.push(this.addWokerRow(worker.id));
      }
    }
  };

  /**
   * addWokerRow
   * @param workerId
   */
  private addWokerRow = (workerId: number): FormGroup => {
    return this.formBuilder.group({
      id: [workerId],
      jr: ['', [
        Validators.required,
        Validators.min(0.1)
      ]],
      h: ['', Validators.min(0.1)],
      r: ['', Validators.min(0.1)]
    });
  };

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false): void => {
    this.modalController.dismiss(status);
  };

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
  };

  /**
   * selectCostCenter
   * @param costCenter
   */
  public selectCostCenter = (costCenter: any): void => {
    this.tallyForm.get('costCenterId').patchValue(costCenter.id);
    this.costCenterName = costCenter.name;
    this.filteredCostCenters = [];
  };

  /**
   * cleanCostCenterSearch
   */
  public cleanCostCenterSearch = (): void => {
    this.tallyForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
  };

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
  };

  /**
   * selectLabor
   * @param labor
   */
  public selectLabor = (labor: any): void => {
    this.tallyForm.get('laborId').patchValue(labor.id);
    this.laborName = labor.name;
    this.filteredLabors = [];
  };

  /**
   * cleanLaborSearch
   */
  public cleanLaborSearch = (): void => {
    this.tallyForm.get('laborId').patchValue('');
    this.filteredLabors = [];
  };

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
  };

  /**
   * submitForm
   */
  public submitForm = () => {
    const formData = Object.assign({}, this.tallyForm.value);

    const talliesToRecord = [];
    if (this.multipleWorkers.length > 0) {
      for (const worker of this.workers) {

        const tempId = this.storeService.getTallyTempId();

        const data = formData.multiple.find(i => i.id === worker.id);

        talliesToRecord.push(
          Object.assign({}, formData, {
            workerId: worker.id,
            contractId: worker.validity,
            dealId: 0,
            validityBonus: 0,
            tempId,
            workingDay: data['jr'],
            hoursExtra: data['h'],
            performance: data['r']
          })
        );

        this.storeService.increaseTallyTempId();
      }
    } else {
      for (const worker of this.workers) {
        const tempId = this.storeService.getTallyTempId();

        talliesToRecord.push(
          Object.assign({}, formData, {
            workerId: worker.id,
            contractId: worker.validity,
            dealId: 0,
            validityBonus: 0,
            tempId,
            hoursExtra: formData.hoursExtra ? formData.hoursExtra : 0 ,
            performance: formData.hoursExtra ? formData.performance : 0
          })
        );

        this.storeService.increaseTallyTempId();
      }
    }

    this.storeService.addTalliesToRecord(talliesToRecord);
    this.closeModal(true);
  };

  /**
   * setWorkerParam
   * @param worker
   * @param param
   * @param value
   */
  public setWorkerParam = (worker: any, param: string, value: number) => {
    if (param === 'jr') {
      this.checkWorkerDailyMax(worker, value);
    }
  };

  /**
   * splitTime
   */
  public splitTime = () => {
    if (this.split > 0) {
      const divide = this.split / this.workers.length;

      const workers = this.tallyForm.get('multiple') as FormArray;
      for (let i = 0; i < workers.length; i++) {
        workers.at(i).patchValue({r: divide});
      }
    }
  };

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
   * getNumberOfWorkerTallies
   * @param worker
   */
  private getNumberOfWorkerTallies = (worker: any): Array<any> => {
    const tallies = this.tallies.filter(item => {
      const tallyDate = this.tallyService.removeTimeFromDate(item.date);
      const current = this.tallyService.removeTimeFromDate(this.dateSelected);

      return item.workerId === worker.id && tallyDate === current;
    });

    const toRecord = this.talliesToRecord.filter(item => {
      const tallyDate = this.tallyService.removeTimeFromDate(item.date);
      const current = this.tallyService.removeTimeFromDate(this.dateSelected);

      return item.workerId === worker.id && tallyDate === current;
    });

    return [...toRecord, ...tallies];
  };

  /**
   * checkWorkersDailyMax
   * @param workingDay
   */
  public checkWorkersDailyMax = (workingDay) => {
    this.workersOverMax = [];

    for (let worker of this.workers) {
      this.checkWorkerDailyMax(worker, workingDay);
    }
  };

  /**
   * checkWorkerDailyMax
   * @param worker
   * @param workingDay
   */
  public checkWorkerDailyMax = (worker: any, workingDay) => {
    const todayTallies = this.getNumberOfWorkerTallies(worker);
    const totalWorked = todayTallies.reduce((total: number, tally: any) => total + tally.workingDay, 0);

    const total = parseFloat(workingDay) + parseFloat(totalWorked);
    if (total > parseFloat(worker.dailyMax)) {

      this.deleteWorkerOnOverMaxArray(worker.name);

      this.workersOverMax.push({
        name: worker.name,
        value: total
      });
    } else {
      this.deleteWorkerOnOverMaxArray(worker.name);
    }
  };

  /**
   * deleteWorkerOnOverMaxArray
   * @param workerName
   */
  private deleteWorkerOnOverMaxArray = (workerName: string) => {
    const validateDuplicity = this.workersOverMax.findIndex(item => item.name === workerName);

    if (validateDuplicity > -1) {
      this.workersOverMax.splice(validateDuplicity, 1);
    }
  };

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

}
