import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { TallySyncService } from 'src/app/services/storage/tally-sync/tally-sync.service';
import * as moment from 'moment';
import { Tally } from '../../tally.interface';


@Component({
  selector: 'app-tally-form-multiple',
  templateUrl: './tally-form-multiple.component.html',
  styleUrls: ['./tally-form-multiple.component.scss'],
})
export class TallyFormMultipleComponent implements OnInit {

  @Input() workers: Array<any> = [];
  @Input() dateSelected: string;
  @Input() updateTallies: Array<Tally> = [];
  @Input() numberOfCases: Array<any> = [];
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
  public showFooterButtons = false;
  public currentStep = 1;
  public split = 0;

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

  public workersOverMax: Array<any> = [];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private actionSheetController: ActionSheetController,
    private tallySyncService: TallySyncService
  ) {

  }

  ngOnInit() {
    const activeCompany = this.storeService.getActiveCompany();

    this.filteredCostCenters = [];
    this.filteredLabors = [];

    this.tallyForm = this.formBuilder.group({
      id: [0, Validators.required],
      date: [this.dateSelected, Validators.required],
      costCenterId: ['', Validators.required],
      laborId: ['', Validators.required],
      dealValidity: [''],
      bondValidity: [''],
      workingDay: [1, [
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
      multiple: this.formBuilder.array([])
    });

    if (this.numberOfCases.length === 0) {
      // NUEVO
      console.log('NUEVO');
      this.checkWorkersDailyMax(1);
      this.addWorkers();

      this.showFooterButtons = true;
    } else {
      // EDITAR
      if (this.numberOfCases.length === 1) {
        this.editingTally(this.updateTallies[0]);
        this.addWorkers(this.updateTallies);
        this.showFooterButtons = true;
      }
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

    this.costCenterName = this.getCostCenterName(tally.costCenterId);
    this.laborName = this.getLaborName(tally.laborId);

    this.getDeals();
    this.getBonds();
  }

  /**
   * addWorkers
   */
  private addWorkers = (updateTallies: Array<Tally> = null): void => {
    this.workers.forEach(worker => {
      const workers = this.tallyForm.get('multiple') as FormArray;

      if (updateTallies) {
        const workerUpdateTallies = updateTallies.filter( item => item.workerId === worker.id);
        workers.push(this.addWokerRow(worker, workerUpdateTallies[0]));

        if (workerUpdateTallies.length > 1) {
          console.log('Alerta trabajador con mas de una tarja en un mismo centro de costo-labor');
        }
      } else {
        workers.push(this.addWokerRow(worker));
      }
    });
  }

  /**
   * addWokerRow
   * @param workerId
   */
  private addWokerRow = (worker: any, edit: Tally = null): FormGroup => {
    return this.formBuilder.group({
      id: [worker.id],
      jr: [edit ? edit.workingDay : this.getWorkerRemainingWorkingDay(worker), [
        Validators.required,
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]],
      h: [edit ? edit.hoursExtra || '' : '', [
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]],
      r: [edit ? edit.performance || '' : '', [
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]]
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
  public submitForm = async () => {
    const formData = Object.assign({}, this.tallyForm.value);

    for (const worker of this.workers) {
      if (this.numberOfCases.length === 0) {
        const newTally = this.newMultipleTally(worker, formData);
        await this.tallySyncService.addTallyToRecord(newTally);
      } else {
        const editTally = this.editMultipleTally(worker, formData);
        await this.tallySyncService.editTallyToRecord(editTally);
      }
    }

    this.closeModal(true);
  }

  /**
   * newMultipleTally
   */
  private newMultipleTally = (worker: any, formData: any): Tally => {
    const tempId = this.tallySyncService.getTallyTempId();
    this.tallySyncService.increaseTallyTempId();

    const data = formData.multiple.find(i => i.id === worker.id);

    return Object.assign({}, formData, {
      workerId: worker.id,
      validity: worker.validity,
      tempId,
      workingDay: data['jr'],
      hoursExtra: data['h'] || 0,
      performance: data['r'] || 0,
      status: 'new'
    });
  }

  /**
   * editMultipleTally
   */
  private editMultipleTally = (worker: any, formData: any): Tally => {
    const data = formData.multiple.find(i => i.id === worker.id);
    const workerUpdateTallies = this.updateTallies.find( item => item.workerId === worker.id);

    let tempId = null;
    if (workerUpdateTallies.hasOwnProperty('tempId')) {
      tempId = workerUpdateTallies.tempId;
    } else {
      tempId = this.tallySyncService.getTallyTempId();
      this.tallySyncService.increaseTallyTempId();
    }

    return Object.assign({}, formData, {
      id: workerUpdateTallies.id,
      workerId: worker.id,
      validity: worker.validity,
      tempId,
      workingDay: data['jr'],
      hoursExtra: data['h'] || 0,
      performance: data['r'] || 0,
      status: 'edit'
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
        const division = (this.split / time);

        for (let i = 0; i < workers.length; i++) {
          const value = (division * workers.at(i).get('jr').value || 1);
          workers.at(i).patchValue({r: value.toFixed(3) });
        }
      } else if (option.toLowerCase() === 'asistencia') {
        const divide = (this.split / this.workers.length);

        const workers = this.tallyForm.get('multiple') as FormArray;
        for (let i = 0; i < workers.length; i++) {
          workers.at(i).patchValue({r: divide.toFixed(3)});
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
  public checkWorkerDailyMax = (worker: any, workingDay: number, ignoreId: number = null) => {
    let todayTallies = this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord, worker, this.dateSelected, ignoreId);

    if (this.updateTallies.length > 0) {
      todayTallies = todayTallies.filter(i => !this.updateTallies.filter(item => item.workerId === worker.id).map(item => item.id).includes(i.id));
    }

    // tslint:disable-next-line: no-shadowed-variable
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
    const todayTallies = this.tallySyncService.getNumberOfWorkerTallies(this.syncedTallies, this.talliesToRecord, worker, this.dateSelected);
    // tslint:disable-next-line: no-shadowed-variable
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

        return (item.allCostCenters || item.id_costCenter === costCenterId) && item.id_labor === laborId && moment(this.dateSelected).isBetween(start, end);
      });

      if (this.availableDeals.length === 1) {
        this.tallyForm.get('dealValidity').patchValue(this.availableDeals[0].id_deal_validity);
        this.tallyForm.get('unit').patchValue(this.availableDeals[0].unit_control);
      }
    }
  }

  /**
   * selectDeal
   */
  public selectDeal = (deal: any): void => {
    const findDeal = this.availableDeals.find(item => item.id_deal_validity === deal);

    if (findDeal) {
      this.tallyForm.get('unit').patchValue(findDeal.unit_control);
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

        return item.costCenterId === costCenterId && item.laborId === laborId && moment(this.dateSelected).isBetween(start, end);
      });

      if (this.availableBonds.length === 1) {
        this.tallyForm.get('bondValidity').patchValue(this.availableBonds[0].bondValidity);
      }
    }
  }

  /**
   * getField
   */
  public getField = (index: number, fieldName: string): FormGroup => {
    return this.tallyForm.get('multiple')['controls'][index].get(fieldName);
  }

  /**
   * increaseStep
   */
  public increaseStep = () => {
    if (this.currentStep < 2) {
      this.currentStep = this.currentStep + 1;

      this.checkWorkerMultipleTally();
    }
  }

  /**
   * checkWorkerMultipleTally
   */
  private checkWorkerMultipleTally = () => {
    const all = this.tallyForm.get('multiple') as FormArray;

    for (let index = 0; index < all.length; index++) {
      const currentWorker = this.workers.find(item => item.id === all.at(index).get('id').value);
      const workerUpdateTallies = this.updateTallies.filter( item => item.workerId === currentWorker.id);
      const ignore = workerUpdateTallies[0] ? workerUpdateTallies[0].tempId : null;

      this.checkWorkerDailyMax(currentWorker , all.at(index).get('jr').value, ignore);
    }
  }

  /**
   * getCostCenterName
   */
  public getCostCenterName = (costCenterId: number): string => {
    const costCenter = this.costCenters.find(item => item.id === costCenterId);
    return costCenter ? costCenter.name : 'No encontrado';
  }

  /**
   * getLaborName
   */
  public getLaborName = (laborId: number): string => {
    const labor = this.labors.find(item => item.id === laborId);
    return labor ? labor.name : 'No encontrado';
  }

  /**
   * selectCase
   */
  public selectCase = (selectedCase: any) => {
    const filteredTallies = this.updateTallies.filter(tally => tally.costCenterId === selectedCase.costCenterId && tally.laborId === selectedCase.laborId);
    this.updateTallies = [...filteredTallies];

    this.editingTally(filteredTallies[0]);
    this.addWorkers(filteredTallies);
    this.numberOfCases = [selectedCase];
    this.showFooterButtons = true;
  }

}
