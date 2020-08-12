import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warehouse, Product } from 'src/app/shared/services/store/store-interface';
import { ConsumptionService } from '../services/consumption.service';

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

  public consumptionForm: FormGroup;

  // Warehouses
  public filteredWarehouses: Array<Warehouse> = [];
  public warehouseName: string;

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

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.modalController.dismiss(status);
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
  }

  /**
   * selectWarehouse
   * @param warehouse
   */
  public selectWarehouse = (warehouse: Warehouse): void => {
    this.consumptionForm.get('warehouseOriginId').patchValue(warehouse.id);
    this.warehouseName = warehouse.name;
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
    const data = Object.assign({}, this.consumptionForm.value);

    this.consumptionService.recordConsumption(data, this.userId).subscribe( success => {
      this.closeModal(true);
    }, error => {
      console.log('error', error);
    });
  }

}
