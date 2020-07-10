import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MachineryService } from '../services/machinery.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { Machinery } from '../machinery.interface';
import { MachineryModule } from '../machinery.module';

@Component({
  selector: 'app-machinery-form',
  templateUrl: './machinery-form.component.html',
  styleUrls: ['./machinery-form.component.scss'],
})
export class MachineryFormComponent implements OnInit {

  @Input() companyId: number;
  @Input() userId: number;
  @Input() allCostCenters: Array<any> = [];
  @Input() machineryCostCenters: Array<any> = [];
  @Input() labors: Array<any> = [];
  @Input() units: Array<any> = [];
  @Input() workers: Array<any> = [];
  @Input() implements: Array<any> = [];
  @Input() date: string;
  @Input() editMachinery: Machinery;
  @Input() isCopy: boolean = false;

  // FORM
  public machineryForm: FormGroup;
  private tempId: number;
  private readonly decimalRegex = /^\d*(.\d{1,3})?$/;
  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };
  // Machinery
  public filteredMachinery: Array<any> = [];
  public machineryName: string;
  // Cost Center
  public filteredCostCenters: Array<any> = [];
  public costCenterName: string;
  public costCenterCode: string;
  // Labor
  public filteredLabors: Array<any> = [];
  public laborName: string;
  public laborCode: string;
  // Unit
  public unitName: string;
  public unitCode: string;
  // Worker
  public workerName: string;
  public filteredWorkers: Array<any> = [];
  // Implements
  public filteredImplements: Array<any> = [];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private machineryService: MachineryService
  ) {

  }

  ngOnInit() {
    if (this.editMachinery) {

      this.machineryForm = this.formBuilder.group({
        costCenterId: [ this.isCopy ? '' : this.editMachinery.costCenterId, Validators.required],
        laborId: [ this.isCopy ? '' : this.editMachinery.laborId, Validators.required],
        unitId: [this.editMachinery.unitId, Validators.required],
        workerId: [this.editMachinery.workerId, Validators.required],
        machineryCostCenterId: [this.editMachinery.machineryCostCenterId, Validators.required],
        implementCostCenterId: [this.editMachinery.implementCostCenterId, Validators.required],
        quantity: [ this.isCopy ? '' : this.editMachinery.quantity, [
          Validators.required,
          Validators.min(0.1),
          Validators.pattern(this.decimalRegex)
        ]]
      });

      // Machinery
      const findMachineryCostCenter = this.machineryCostCenters.find(item => item.id === this.editMachinery.machineryCostCenterId);
      this.machineryName = findMachineryCostCenter.name;

      // Load Implements
      this.selectUnit(this.editMachinery.unitId);
      this.showImplements(findMachineryCostCenter.machineryType);

      // Trabajador
      const findWorker = this.workers.find(item => +item.id === this.editMachinery.workerId)
      this.workerName = findWorker.nombre;

      if (!this.isCopy) {
        // Centros de costo
        const findCostCenter = this.allCostCenters.find(item => item.id === this.editMachinery.costCenterId)
        this.costCenterName = findCostCenter.name;
        this.costCenterCode = findCostCenter.code;

        // Labor
        const findLabor = this.labors.find(item => item.id === this.editMachinery.laborId)
        this.laborName = findLabor.name;
        this.laborCode = findLabor.code;
      }else {
        this.getTempId();
      }
    } else {
      this.machineryForm = this.formBuilder.group({
        costCenterId: ['', Validators.required],
        laborId: ['', Validators.required],
        unitId: [''],
        workerId: [this.userId, Validators.required],
        machineryCostCenterId: ['', Validators.required],
        implementCostCenterId: [0, Validators.required],
        quantity: ['', [
          Validators.required,
          Validators.min(0.1),
          Validators.pattern(this.decimalRegex)
        ]]
      });

      // Trabajador
      const findWorker = this.workers.find(item => +item.id === this.userId);
      this.workerName = findWorker.nombre;

      this.getTempId();
    }
  }

  /**
   * closeModal
   */
  public closeModal = () => {
    this.machineryForm.reset();
    this.modalController.dismiss();
  }

  /**
   * getTempId
   */
  private getTempId = () => {
    this.machineryService.getTempId().then( (tempId: number) => {
      this.tempId = tempId;
    });
  }

  /**
   * searchMachinery
   * @param search
   */
  public searchMachinery = (search: string): void => {
    if (search) {
      this.filteredMachinery = this.machineryCostCenters.filter(item => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredMachinery = [];
    }
  }

  /**
   * cleanMachinerySearch
   */
  public cleanMachinerySearch = (): void => {
    this.machineryForm.get('machineryCostCenterId').patchValue('');
    this.filteredMachinery = [];
    this.machineryName = null;
  }

  /**
   * selectMachinery
   * @param machinery
   */
  public selectMachinery = (machinery: any): void => {
    this.machineryForm.get('machineryCostCenterId').patchValue(machinery.id);
    this.machineryName = machinery.name;
    this.filteredMachinery = [];

    this.selectUnit(machinery.unitId);
    this.showImplements(machinery.machineryType);
  }

  /**
   * searchCostCenter
   * @param search
   */
  public searchCostCenter = (search: string): void => {
    if (search) {
      this.filteredCostCenters = this.allCostCenters.filter(item => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredCostCenters = [];
    }
  }

  /**
   * cleanCostCenterSearch
   */
  public cleanCostCenterSearch = (): void => {
    this.machineryForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;
    this.costCenterCode = null;
  }

  /**
   * selectCostCenter
   */
  public selectCostCenter = (costCenter: any): void => {
    this.machineryForm.get('costCenterId').patchValue(costCenter.id);
    this.costCenterName = costCenter.name;
    this.costCenterCode = costCenter.code;
    this.filteredCostCenters = [];
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
   * cleanLaborSearch
   */
  public cleanLaborSearch = (): void => {
    this.machineryForm.get('laborId').patchValue('');
    this.filteredLabors = [];
    this.laborName = null;
    this.laborCode = null;
  }

  /**
   * selectLabor
   * @param labor
   */
  public selectLabor = (labor: any): void => {
    this.machineryForm.get('laborId').patchValue(labor.id);
    this.laborName = labor.name;
    this.laborCode = labor.code;
    this.filteredLabors = [];
  }

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string): void => {
    if (search) {
      this.filteredWorkers = this.workers.filter(item => item.id.toString().includes(search.toLowerCase()) || item.nombre.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredWorkers = [];
    }
  }

  /**
   * cleanCostCenterSearch
   */
  public cleanWorkerSearch = (): void => {
    this.machineryForm.get('workerId').patchValue('');
    this.filteredWorkers = [];
    this.workerName = null;
  }

  /**
   * selectWorker
   */
  public selectWorker = (worker: any): void => {
    this.machineryForm.get('workerId').patchValue(worker.id);
    this.workerName = worker.nombre;
    this.filteredWorkers = [];
  }

  /**
   * selectUnit
   * @param unitId
   */
  private selectUnit = (unitId: number) => {
    const find = this.units.find(item => item.id === unitId);

    if (find) {
      this.machineryForm.get('unitId').patchValue(unitId);

      this.unitCode = find.code;
      this.unitName = find.name;
    }
  }

  /**
   * showImplements
   * @param machineryType
   */
  private showImplements =  (machineryType: string) => {
    if ( machineryType.toLowerCase() === 'automata') { // machinery.machineryType === automata 'Ocultar implemento'
      this.filteredImplements = [];
    } else if ( machineryType.toLowerCase() === 'maquinaria') { // machinery.machineryType === maquinaria 'Mostrart implemento'
      this.filteredImplements = this.implements;
    }
  }

  /**
   * submitForm
   */
  public submitForm = () => {
    if (this.editMachinery) {
      if(this.isCopy) {
        const newMachineryCopied = this.buildCopyMachinery();
        this.addMachinery(newMachineryCopied);
      }else {
        const editMachinery = this.buildEditMachinery();
        this.updateMachinery(editMachinery);
      }
    } else {
      const newMachinery = this.buildNewMachinery();
      this.addMachinery(newMachinery);
    }
  }

  /**
   * buildNewMachinery
   */
  private buildNewMachinery = (): Machinery => {
    return Object.assign({}, this.machineryForm.value, {
      id: 0,
      tempId: this.tempId,
      companyId: this.companyId,
      reference: '',
      useId: 0,
      costCenterCode: this.costCenterName,
      costCenterName: this.costCenterCode,
      laborCode: this.laborCode,
      laborName: this.laborName,
      unitCode: this.unitCode,
      unitName: this.unitName,
      workerName: this.workerName,
      date: this.date,
      status: 'new'
    });
  }

  /**
   * buildEditMachinery
   */
  private buildEditMachinery = (): Machinery => {
    return Object.assign({}, this.machineryForm.value, {
      id:  this.editMachinery.id,
      tempId: this.editMachinery.tempId  ? this.editMachinery.tempId : this.tempId,
      companyId: this.editMachinery.companyId,
      reference: '',
      useId: 0,
      costCenterCode: this.costCenterName,
      costCenterName: this.costCenterCode,
      laborCode: this.laborCode,
      laborName: this.laborName,
      unitCode: this.unitCode,
      unitName: this.unitName,
      workerName: this.workerName,
      date: this.date,
      status: 'edit'
    });

  }

  /**
   * buildCopyMachinery
   */
  private buildCopyMachinery =  (): Machinery => {
    return  Object.assign({}, this.machineryForm.value, {
      id: 0,
      tempId: this.tempId,
      companyId: this.editMachinery.companyId,
      reference: '',
      useId: 0,
      costCenterCode: this.costCenterName,
      costCenterName: this.costCenterCode,
      laborCode: this.laborCode,
      laborName: this.laborName,
      unitCode: this.unitCode,
      unitName: this.unitName,
      workerName: this.workerName,
      date: this.date,
      status: 'new'
    });
  }

  /**
   * addMachinery
   */
  private addMachinery = (data: Machinery) => {
    this.machineryService.addMachinery(data).then(() => {
      this.machineryService.increaseTempId().then(() => {
        this.modalController.dismiss();
      });
    });
  }

  /**
   * updateMachinery
   * @param data
   */
  private updateMachinery = (data: Machinery) => {
    this.machineryService.updateMachinery(data).then(() => {
      this.modalController.dismiss();
    });
  }

}

