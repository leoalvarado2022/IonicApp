import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-machinery-form',
  templateUrl: './machinery-form.component.html',
  styleUrls: ['./machinery-form.component.scss'],
})
export class MachineryFormComponent implements OnInit {

  @Input() costCenters: Array<any> = [];
  @Input() labors: Array<any> = [];
  @Input() units: Array<any> = [];
  @Input() workers: Array<any> = [];

  public machineryForm: FormGroup;

  public costCenterName: string;
  public filteredCostCenters: Array<any> = [];
  public laborName: string;
  public filteredLabors: Array<any> = [];
  public workerName: string;
  public filteredWorkers: Array<any> = [];
  private readonly decimalRegex = /^\d*(.\d{1,3})?$/;
  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
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
        Validators.min(1),
        Validators.pattern(this.decimalRegex)
      ]]
    });

    /**
     *  id_par_entidades_empresa='${machine.companyId}',
            fecha_registro='${currentDate}',
            glosa='Generado desde movil',
            referencia='${machine.reference}',
            id_pro_uso_maquinaria='${machine.useId}',
            id_par_centros_costos_maquinaria='${machine.machineryCostCenterId}',
            id_par_centros_costos_implemento='${machine.implementCostCenterId}',
            id_par_centros_costos='${machine.costCenterId}',
            id_par_labores='${machine.laborId}',
            id_par_unidades='${machine.unitId}',
            id_par_entidades_trabajador='${machine.workerId}',
            cantidad='${machine.quantity}'>
     */
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.machineryForm.reset();
    this.modalController.dismiss(status);
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
  }

  /**
   * selectLabor
   * @param labor
   */
  public selectLabor = (labor: any): void => {
    this.machineryForm.get('laborId').patchValue(labor.id);
    this.laborName = labor.name;
    this.filteredLabors = [];
  }

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string): void => {
    if (search) {
      this.filteredWorkers = this.workers.filter(item => item.id.toString().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
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
    this.workerName = worker.name;
    this.filteredWorkers = [];
  }

}
