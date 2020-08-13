import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warehouse, Product } from 'src/app/shared/services/store/store-interface';
import { ConsumptionService } from '../services/consumption.service';
import { Consumption } from './../../../shared/services/store/store-interface';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss'],
})
export class ConsumptionFormComponent implements OnInit {

  @Input() warehouses: Array<Warehouse> = [];
  @Input() costCenters: Array<any> = [];
  @Input() products: Array<Product> = [];
  @Input() date: string;
  @Input() userId: number;
  @Input() companyId: number;
  @Input() editConsumption: Consumption;
  @Input() isCopy: boolean = false;

  public consumptionForm: FormGroup;
  private tempId: number;

  // Warehouses
  public filteredWarehouses: Array<Warehouse> = [];
  public warehouseName: string;
  public warehouseCode: string;

  // Products
  public filteredProducts: Array<Product> = [];
  public productName: string;

  // Cost Center
  public filteredCostCenters: Array<any> = [];
  public costCenterName: string;

  private readonly decimalRegex = /^\d*(.\d{1,3})?$/;
  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false,
  };

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private consumptionService: ConsumptionService
  ) {

  }

  ngOnInit() {
    if (this.editConsumption) {
      this.consumptionForm = this.formBuilder.group({
        id: [ this.isCopy ? 0 : this.editConsumption.id, Validators.required],
        companyId: [this.editConsumption.companyId, Validators.required],
        date: [this.editConsumption.date, Validators.required],
        documentId: [this.editConsumption.documentId, Validators.required],
        costCenterId: [this.editConsumption.costCenterId, Validators.required],
        warehouseOriginId: [this.editConsumption.warehouseOriginId, Validators.required],
        itemId: [this.editConsumption.itemId, Validators.required],
        itemName: [this.editConsumption.itemName, Validators.required],
        creatorId: [this.userId, Validators.required],
        quantity: [this.editConsumption.quantity, Validators.required],
        notes: [this.editConsumption.notes],
      });

      // Cost Center
      const findCostCenter = this.costCenters.find(costCenter => costCenter.id === this.editConsumption.costCenterId);
      this.costCenterName = findCostCenter.name;

      // Warehouse
      const findWarehouse = this.warehouses.find(warehouse => warehouse.id === this.editConsumption.warehouseOriginId);
      this.warehouseCode = findWarehouse.code;
      this.warehouseName = findWarehouse.name;

      // Product
      const findProduct = this.products.find(product => product.id === this.editConsumption.itemId);
      this.productName = findProduct.name;
    } else {
      this.consumptionForm = this.formBuilder.group({
        id: [0, Validators.required],
        companyId: [this.companyId, Validators.required],
        date: [this.date, Validators.required],
        documentId: [0, Validators.required],
        costCenterId: [0, Validators.required],
        warehouseOriginId: [0, Validators.required],
        itemId: [0, Validators.required],
        itemName: ['', Validators.required],
        creatorId: [this.userId, Validators.required],
        quantity: ['', Validators.required],
        notes: [''],
      });
    }

    this.getTempId();
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.modalController.dismiss(status);
  }

  /**
   * getTempId
   */
  private getTempId = () => {
    this.consumptionService.getTempId().then( (tempId: number) => {
      this.tempId = tempId;
    });
  }

  /**
   * searchWarehouse
   * @param search
   */
  public searchWarehouse = (search: string): void => {
    if (search) {
      this.filteredWarehouses = this.warehouses.filter((item) => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredWarehouses = [];
    }
  }

  /**
   * cleanWarehouseSearch
   */
  public cleanWarehouseSearch = (): void => {
    this.consumptionForm.get('warehouseOriginId').patchValue('');
    this.filteredWarehouses = [];
    this.warehouseName = null;
    this.warehouseCode = null;
  }

  /**
   * selectWarehouse
   * @param warehouse
   */
  public selectWarehouse = (warehouse: Warehouse): void => {
    this.consumptionForm.get('warehouseOriginId').patchValue(warehouse.id);
    this.warehouseName = warehouse.name;
    this.warehouseCode = warehouse.code;
    this.filteredWarehouses = [];
  }

  /**
   * searchProduct
   * @param search
   */
  public searchProduct = (search: string): void => {
    if (search) {
      this.filteredProducts = this.products.filter((item) => item.code.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredProducts = [];
    }
  }

  /**
   * cleanProductSearch
   */
  public cleanProductSearch = (): void => {
    this.consumptionForm.get('itemId').patchValue('');
    this.consumptionForm.get('itemName').patchValue('');
    this.filteredProducts = [];
    this.productName = null;
  }

  /**
   * selectProduct
   * @param product
   */
  public selectProduct = (product: Product): void => {
    this.consumptionForm.get('itemId').patchValue(product.id);
    this.consumptionForm.get('itemName').patchValue(product.name);
    this.productName = product.name;
    this.filteredProducts = [];
  }

  /**
   * searchCostCenter
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
    this.consumptionForm.get('costCenterId').patchValue('');
    this.filteredCostCenters = [];
    this.costCenterName = null;
  }

  /**
   * selectCostCenter
   */
  public selectCostCenter = (costCenter: any): void => {
    this.consumptionForm.get('costCenterId').patchValue(costCenter.id);
    this.costCenterName = costCenter.name;
    this.filteredCostCenters = [];
  }

  /**
   * submitForm
   */
  public submitForm = () => {
    if (this.editConsumption) {
      if (this.isCopy) {
        const copiedConsumption = this.buildCopyConsumption();
        this.addConsumption(copiedConsumption);
      } else {
        const editConsumption = this.buildEditConsumption();
        this.updateConsumption(editConsumption);
      }
    } else {
      const newConsumption = this.buildNewConsumption();
      this.addConsumption(newConsumption);
    }
  }

  /**
   * buildNewConsumption
   */
  private buildNewConsumption = (): Consumption => {
    return Object.assign({}, this.consumptionForm.value, {
      warehouseOriginCode: this.warehouseCode,
      warehouseOriginName: this.warehouseName,
      tempId: this.tempId,
      status: 'new'
    });
  }

  /**
   * addConsumption
   * @param data
   */
  private addConsumption = (data: Consumption) => {
    this.consumptionService.addConsumption(data).then(() => {
      this.consumptionService.increaseTempId().then(() => {
        this.closeModal(true);
      });
    });
  }

  /**
   * buildEditConsumption
   */
  private buildEditConsumption = (): Consumption => {
    return Object.assign({}, this.consumptionForm.value, {
      warehouseOriginCode: this.warehouseCode,
      warehouseOriginName: this.warehouseName,
      tempId: this.editConsumption.tempId ? this.editConsumption.tempId : this.tempId,
      status: 'edit'
    });
  }

  /**
   * updateConsumption
   * @param data
   */
  private updateConsumption = (data: Consumption) => {
    this.consumptionService.updateConsumption(data).then(() => {
      this.closeModal(true);
    });
  }

  /**
   * buildCopyConsumption
   */
  private buildCopyConsumption = (): Consumption => {
    return Object.assign({}, this.consumptionForm.value, {
      id: 0,
      tempId: this.tempId,
      warehouseOriginCode: this.warehouseCode,
      warehouseOriginName: this.warehouseName,
      status: 'new'
    });
  }

}
