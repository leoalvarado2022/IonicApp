import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {SalesNotesService} from '../services/sales-notes.service';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  loadingClient = false;
  loadingStore = false;
  currentStep = 1;
  noteForm: FormGroup;

  clientName: string;
  clientsFiltered: Array<any> = [];
  productName: any = {};
  productsFiltered: any = {};
  whName: any = {};
  whsFiltered: any = {};

  totalExempt = 0;
  totalAffect = 0;
  totalTaxes = 0;

  quantities: any = {};
  balances: any = {};
  taxes: any = {};
  inputTaxes: Array<any> = [];
  sumTaxes: any = {};

  @Input() tab: any;
  @Input() number: number;
  @Input() companyId: number;
  @Input() clients: Array<any> = [];
  @Input() currencies: Array<any> = [];
  @Input() products: Array<any> = [];
  @Input() warehouses: Array<any> = [];
  @Input() units: Array<any> = [];

  datePickerObj: any = {
    fromDate: moment(), // default null
    mondayFirst: true, // default false
    setLabel: 'Ok',  // default 'Set'
    todayLabel: 'Hoy', // default 'Today'
    closeLabel: 'Cancelar', // default 'Close'
    titleLabel: 'Fecha de entrega', // default null
    monthsList: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weeksList: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    dateFormat: 'DD-MM-YYYY', // default DD MMM YYYY
    clearButton : false , // default true
  };

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private salesNotesService: SalesNotesService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    const currentCompany = this.clients.find(c => c.id === this.companyId);

    if (currentCompany) {
      this.clientName = currentCompany.name;
    }

    this.noteForm = this.formBuilder.group({
      basic: this.formBuilder.group({
        document_type: [{value: this.tab.description, disabled: true}, Validators.required],
        number: [{value: this.number, disabled: true}, Validators.required],
        client_id: [currentCompany?.id ?? null , Validators.required],
        currency: [null, Validators.required],
        tasa: [1, Validators.required],
        observation: [''],
        createdAt: [moment().format('DD-MM-YYYY'), Validators.required],
      }),
      detail: this.formBuilder.array([this.getDetailBuilder()]),
    });

    if (this.currencies?.length) {
      if (this.currencies.length === 1) {
        this.noteForm.get('basic').get('currency').patchValue(this.currencies[0].id);
        return;
      }
      if (this.currencies.length > 0) {
        this.noteForm.get('basic').get('currency').patchValue(this.currencies.find(c => c.name.toLowerCase() === 'pesos')?.id ?? null);
        return;
      }
    }


  }

  public getDetailBuilder = () => {
    return this.formBuilder.group({
      product_id: [null, Validators.required],
      unit: [{value: '', disabled: true}, Validators.required],
      lote: ['', Validators.required],
      warehouse: [null, Validators.required],
      quantity: [0, Validators.required],
      price: [0, Validators.required],
      total: [0, Validators.required],
    });
  }

  get detailArray() {
    return this.noteForm.get('detail') as FormArray;
  }

  public addDetail = () => {
    this.detailArray.push(this.getDetailBuilder());
  }

  public removeDetail = (index: any) => {
    console.log('index: ', index);
    console.log('(before) this.detailArray ::: ', this.detailArray);
    // this.detailArray.removeAt(index);
    // console.log('this.detailArray.controls.indexOf(item) ::: ', this.detailArray.controls.indexOf(item));
    // this.detailArray.removeAt(this.detailArray.controls.indexOf(item));
    this.detailArray.removeAt(index);
    this.refreshInputTaxes();
    // this.detailArray.controls.splice(index, 1);
    console.log('(after) this.detailArray ::: ', this.detailArray);
  }

  public closeModal = async () => {
    await this.modalController.dismiss();
  }

  public searchClient = (search: string) => {
    if (search) {
      this.clientsFiltered = this.clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.clientsFiltered = [];
    }
  }

  public cleanClientSearch = () => {
    this.noteForm.get('basic').get('client_id').patchValue(null);
    this.clientsFiltered = [];
    this.clientName = null;
  }

  public selectClient = async (client: any) => {
    this.noteForm.get('basic').get('client_id').patchValue(client.id);
    this.clientName = client.name;
    this.clientsFiltered = [];
  }

  public searchProduct = (search: string, index: number) => {
    if (search) {
      this.productsFiltered[index] = this.products.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.productsFiltered[index] = [];
    }
  }

  public cleanProductSearch = (index: number) => {
    this.detailArray.controls[index].get('product_id').patchValue(null);
    this.productsFiltered[index] = [];
    this.productName[index] = null;
    this.whName[index] = null;
    this.detailArray.controls[index].reset();
    this.refreshInputTaxes();
  }

  public selectProduct = async (product: any, index: number) => {
    this.detailArray.controls[index].get('product_id').patchValue(product.id);
    this.productName[index] = product.name;
    this.productsFiltered[index] = [];

    console.log('taxes :::', product.taxes);
    this.taxes[index] = product.taxes;
    this.refreshInputTaxes();

    const unit = this.units.find(u => u.name.toLowerCase() === product.mainUnitName.toLowerCase());
    if (unit) {
      this.detailArray.controls[index].get('unit').patchValue(unit.code);
    }
  }

  public refreshInputTaxes = () => {
    console.log('this.products ::: ', this.products);
    const inputTaxes = [];
    this.detailArray.controls.forEach((item, index) => {
      console.log('item ::: ', item);
      const productId = item.get('product_id').value;
      console.log('productId ::: ', productId);
      const product = this.products.find(p => p.id === productId);
      console.log('product ::: ', product);

      if (product) {
        product.taxes.forEach(pTax => {
          const check = inputTaxes.findIndex(it => it.tax_id === pTax.tax_id) > -1;
          console.log('check ::: ', check);

          if (!check) {
            inputTaxes.push({
              tax_id: pTax.tax_id,
              tax: pTax.tax,
              rate: pTax.rate,
            });
          }
        });
      }
    });
    this.inputTaxes = inputTaxes;
    console.log('this.inputTaxes ::: ', this.inputTaxes);
  }

  public searchWh = (search: string, index: number) => {
    if (search) {
      this.whsFiltered[index] = this.warehouses.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.whsFiltered[index] = [];
    }
  }

  public cleanWhSearch = (index: number) => {
    this.detailArray.controls[index].get('warehouse').patchValue(null);
    this.whsFiltered[index] = [];
    this.whName[index] = null;
  }

  public selectWh = async (wh: any, index: number) => {
    this.detailArray.controls[index].get('warehouse').patchValue(wh.id);
    this.whName[index] = wh.name;
    this.whsFiltered[index] = [];

    const company = this.storeService.getActiveCompany();
    const data = {
      company: company.id.toString(),
      user: company.user.toString(),
      platform: 'mobile',
      id_item: this.detailArray.controls[index].get('product_id').value,
      lot: this.detailArray.controls[index].get('lote').value,
      id_warehouse: wh.id,
      id_document: 0,
      date: moment().format('YYYY-MM-DD'),
    };

    const [quantityResponse, balanceResponse]: [any, any] = await Promise.all([
      this.salesNotesService.getQuantity(data).toPromise(),
      this.salesNotesService.getBalance(data).toPromise(),
    ]);
    // const quantityResponse: any = await this.salesNotesService.getQuantity(data).toPromise();
    console.log('quantityResponse ::: ', quantityResponse);
    this.quantities[index] = quantityResponse.data;
    // const balanceResponse: any = await this.salesNotesService.getBalance(data).toPromise();
    console.log('balanceResponse ::: ', balanceResponse);
    this.balances[index] = balanceResponse.data;
  }

  public increaseStep = () => {
    // console.log('this.noteForm.value ::: ', this.noteForm.value);
    this.currentStep += 1;
  }

  public checkNexButtonDisabled = (): boolean => {
    return (
        this.currentStep === 1 && this.noteForm.get('basic').invalid) ||
      (this.currentStep === 2 && (this.noteForm.get('detail').invalid)
      );
  }

  public calculate = (type, index) => {
    if (type === 'quantity') {
      const tmpQuantity = this.detailArray.controls[index].get('quantity').value;
      let quantity = this.detailArray.controls[index].get('quantity').value;

      if (tmpQuantity > this.quantities[index]) {
        quantity = this.quantities[index];
        this.detailArray.controls[index].get('quantity').patchValue(quantity);
      }

      const price = this.detailArray.controls[index].get('price').value || this.balances[index];
      this.detailArray.controls[index].get('total').patchValue(Number((quantity * price).toFixed(2)));
    }
    if (type === 'price') {
      const price = this.detailArray.controls[index].get('price').value;
      const quantity = this.detailArray.controls[index].get('quantity').value || this.quantities[index];
      this.detailArray.controls[index].get('total').patchValue(Number((quantity * price).toFixed(2)));
    }
    if (type === 'total') {
      const total = this.detailArray.controls[index].get('total').value;
      const quantity = this.detailArray.controls[index].get('quantity').value || this.quantities[index];
      this.detailArray.controls[index].get('price').patchValue(Number((total / quantity).toFixed(2)));
    }
    this.calculateTaxes();
  }

  public calculateTaxes = () => {
    const sumTaxes = {};
    this.detailArray.controls.forEach((item) => {
      const productId = item.get('product_id').value;
      const total = item.get('total').value;

      const product = this.products.find(p => p.id === productId);

      if (product) {
        product.taxes.forEach(pTax => {
          if (!sumTaxes[pTax.tax_id]) {
            sumTaxes[pTax.tax_id] = 0;
          }
          sumTaxes[pTax.tax_id] += ((total * pTax.rate) / 100);
        });
      }
    });

    this.sumTaxes = sumTaxes;
  }

  public calculateTotal = () => {
    this.totalAffect = 0;
    this.totalExempt = 0;
    this.totalTaxes = 0;

    this.detailArray.controls.forEach((item, index) => {

    });

    for (const item of this.detailArray.controls) {
      console.log('item ::: ', item);
    }
  }

  public submit = async () => {
    try {
      this.loadingStore = true;
      this.noteForm.disable();
      const fields = this.noteForm.getRawValue();

      this.calculateTotal();
      console.log('fields :: ', fields);
      // const workerSelected = this.workers.find(w => w.id === fields.detail.assigned_id);
      //
      // fields.ticket.createdAt = moment(fields.ticket.createdAt, ['DD-MM-YYYY']).format('YYYY-MM-DD');
      // fields.ticket.solution = '';
      // fields.ticket.version = '';
      // fields.detail.assign_client = workerSelected.clientContact;
      // fields.detail.ticket = 0;
      // fields.detail.public = true;
      // fields.detail.temporal_id = moment().unix() + 1;
      // fields.attachments = this.attachments;
      // fields.wsAuthID = workerSelected.wsAuthID;
      //
      // await this.submitTicket(fields);

      this.noteForm.enable();
      this.loadingStore = false;
    } catch (err) {
      this.noteForm.enable();
      this.loadingStore = false;
    }
  }
}
