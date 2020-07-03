import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MachineryService } from '../services/machinery.service';

@Component({
  selector: 'app-machinery-form',
  templateUrl: './machinery-form.component.html',
  styleUrls: ['./machinery-form.component.scss'],
})
export class MachineryFormComponent implements OnInit {

  @Input() companyId: number;
  @Input() costCenters: Array<any> = [];
  @Input() labors: Array<any> = [];
  @Input() units: Array<any> = [];
  @Input() workers: Array<any> = [];

  public machineryForm: FormGroup;

  public filteredCostCenters: Array<any> = [];
  public costCenterName: string;
  public costCenterCode: string;
  public laborName: string;
  public laborCode: string;
  public unitName: string;
  public unitCode: string;
  public filteredLabors: Array<any> = [];
  public workerName: string;
  public filteredWorkers: Array<any> = [];
  private tempId: number;

  private readonly decimalRegex = /^\d*(.\d{1,3})?$/;
  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private machineryService: MachineryService
  ) {

  }

  ngOnInit() {
    this.machineryForm = this.formBuilder.group({
      costCenterId: ['', Validators.required],
      laborId: ['', Validators.required],
      unitId: ['', Validators.required],
      workerId: ['', Validators.required],
      quantity: ['', [
        Validators.required,
        Validators.min(0.1),
        Validators.pattern(this.decimalRegex)
      ]]
    });

    this.getTempId();
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
   * cleanCostCenterSearch
   */
  public cleanCostCenterSearch = (): void => {
    this.machineryForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;
  }

  /**
   * selectCostCenter
   */
  public selectCostCenter = (costCenter: any): void => {
    this.machineryForm.get('costCenterId').patchValue(costCenter.id);
    this.costCenterName = costCenter.name;
    this.costCenterName = costCenter.code;

    console.log('costCenter', costCenter);

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
   * @param event
   */
  public selectUnit = (unitId: number) => {
    const find = this.units.find(item => item.id === unitId);

    if (find) {
      this.unitCode = find.code;
      this.unitName = find.name;
    }
  }

  /**
   * submitForm
   */
  public submitForm = () => {
    const data = Object.assign({}, this.machineryForm.value, {
      tempId: this.tempId,
      companyId: this.companyId,
      reference: '',
      useId: 0,
      implementCostCenterId: 0,
      costCenterCode: this.costCenterName,
      costCenterName: this.costCenterCode,
      laborCode: this.laborCode,
      laborName: this.laborName,
      unitCode: this.unitCode,
      unitName: this.unitName,
      workerName: this.workerName
    });

    this.machineryService.addMachinery(data).then(() => {
      this.modalController.dismiss();
    });
  }

}

