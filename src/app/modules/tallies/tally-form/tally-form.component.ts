import {Component, Input, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';

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

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private actionSheetController: ActionSheetController
  ) {

  }

  ngOnInit() {
    this.costCenters = this.storeService.getCostCenters();
    this.filteredCostCenters = [];
    this.labors = this.storeService.getLabors();
    this.filteredLabors = [];
    const activeCompany = this.storeService.getActiveCompany();

    this.tallyForm = this.formBuilder.group({
      id: [0, Validators.required],
      date: [this.dateSelected, Validators.required],
      costCenterId: ['', Validators.required],
      laborId: ['', Validators.required],
      workingDay: [1, Validators.required],
      hoursExtra: [''],
      performance: [''],
      unit: [{value: '', disabled: true}],
      notes: [''],
      creatorId: [activeCompany.user, Validators.required]
    });

    if (this.workers.length > 1) {
      for (const worker of this.workers) {
        this.multipleWorkers[worker.id] = Object.assign({}, {jr: 0, h: 0, r: 0});
      }
    }
  }

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
    for (const worker of this.workers) {
      const tempId = this.storeService.getTallyTempId();

      talliesToRecord.push(
        Object.assign({}, formData, {
          workerId: worker.id,
          contractId: worker.validity,
          dealId: 0,
          validityBonus: 0,
          tempId
        })
      );

      this.storeService.increaseTallyTempId();
    }

    this.storeService.addTalliesToRecord(talliesToRecord);
    this.closeModal(true);
  };

  /**
   * setWorkerParam
   * @param workerId
   * @param param
   * @param value
   */
  public setWorkerParam = (workerId: number, param: string, value: number) => {
    this.multipleWorkers[workerId][param] = value;
  };

  /**
   * splitTime
   */
  public splitTime = () => {
    if (this.split > 0) {
      const divide = this.split / this.workers.length;

      for (const worker of this.workers) {
        this.multipleWorkers[worker.id]['r'] = divide;
      }
    }
  };
}
