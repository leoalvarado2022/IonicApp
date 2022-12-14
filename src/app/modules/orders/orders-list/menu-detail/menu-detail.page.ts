import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {IonSearchbar} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-accepted',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss']
})
export class MenuDetailPage implements OnInit, OnDestroy {

  public menuDetailForm: FormGroup;
  public subscribeSearch: Subscription;
  public searchData: Array<any> = [];
  public customerSelect: any;
  public typeDelivery: string = 'delivery';

  @ViewChild('searchCustomer') searchCustomer: IonSearchbar;

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
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _toastService: ToastService,
    private _storageSyncService: StorageSyncService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this._deliveryService.removeInfoTypeDeliveryForm();
    this.menuDetailForm = this.formBuilder.group({
      id: [0],
      firstName: ['', Validators.required],
      store: [this.typeDelivery === 'store'],
      delivery: [this.typeDelivery !== 'store'],
      phone: [''],
      email: [''],
      address: [''],
      dateDelivery: [moment().format('DD-MM-YYYY')],
    });
  }

  ngOnDestroy(): void {
  }

  ionViewDidEnter() {
    this.load();
  }

  load() {
    const editOrder: any = JSON.parse(localStorage.getItem('OrderData'));

    // si van editar una orden
    if (editOrder && editOrder.products && editOrder.products.length) {

      this.subscribeSearch = this._deliveryService.getListCustomer({search: editOrder.email_customer}).subscribe((data: any) => {
        if (data.resp && data.resp.length) {
          editOrder.type_order === 'Entrega domicilio' ? this.typeDelivery = 'delivery' : this.typeDelivery = 'store';

          this.customerSelect = data.resp[0];
          this.menuDetailForm.patchValue({
            id: this.customerSelect.id,
            firstName: editOrder.name_customer,
            phone: editOrder.phone_customer,
            email: editOrder.email_customer,
            address: editOrder.address_customer,
            dateDelivery: moment(editOrder.date_delivery_format).format('DD-MM-YYYY'),
            store: this.typeDelivery === 'store',
            delivery: this.typeDelivery !== 'store',
          });
        }

        this.validationForm();

      }, error => {
        this.httpService.errorHandler(error);
      });
    } else {
      this.typeDelivery = 'delivery';
      this.menuDetailForm.patchValue({
        id: 0,
        firstName: '',
        store: this.typeDelivery === 'store',
        delivery: this.typeDelivery !== 'store',
        phone: '',
        email: '',
        address: '',
        dateDelivery: moment().format('DD-MM-YYYY'),
      });
      this.validationForm();
    }
  }

  ngOnInit() {

  }

  /**
   * @description validar segun seleccion
   */
  validationForm() {
    this.menuDetailForm.controls.phone.setValidators(this.menuDetailForm.controls.store.value ? null : [Validators.required]);
    this.menuDetailForm.controls.email.setValidators(this.menuDetailForm.controls.store.value ? null : [Validators.required]);
    this.menuDetailForm.controls.address.setValidators(this.menuDetailForm.controls.store.value ? null : [Validators.required]);
    this.menuDetailForm.controls.dateDelivery.setValidators(this.menuDetailForm.controls.store.value ? null : [Validators.required]);
    this.menuDetailForm.controls.phone.updateValueAndValidity();
    this.menuDetailForm.controls.email.updateValueAndValidity();
    this.menuDetailForm.controls.address.updateValueAndValidity();
    this.menuDetailForm.controls.dateDelivery.updateValueAndValidity();
  }

  /**
   * @description cambio el tipo de venta
   */
  typeSaleChange() {
    this._deliveryService.setTypeSaleDirect(true);
    this._deliveryService.removeInfoTypeDeliveryForm();
    localStorage.removeItem('orders');

    this.router.navigate(['/home-page/menu-order']);
  }

  /**
   * @description ir atras
   */
  goBack() {
    this.router.navigate(['/home-page/ordenes']);
  }

  /**
   * @description menu order
   */
  menuOrder() {
    const data = Object.assign({}, this.menuDetailForm.value);
    this._deliveryService.setInfoTypeDeliveryForm(data);
    this.router.navigate(['/home-page/menu-order']);
  }

  /**
   * @description borrar busqueda
   */
  clearSearch() {
    this.searchData = [];
    this.subscribeSearch.unsubscribe();
  }

  /**
   * @description buscar cliente
   * @param value
   */
  searchInput(value: any) {
    if (value.length) {
      this.subscribeSearch = this._deliveryService.getListCustomer({search: value}).subscribe((data: any) => {
        if (data.resp && data.resp.length) {
          this.searchData = [...data.resp];
        }
      }, error => {
        this.httpService.errorHandler(error);
      });
    } else {
      this.searchData = [];
    }
  }

  /**\
   * @description selecionar un cliente
   * @param customer
   */
  clickCustomer(customer: any) {
    this.customerSelect = customer;
    this.clearSearch();

    this.menuDetailForm.patchValue({
      id: this.customerSelect.id,
      firstName: this.customerSelect.name,
      phone: this.customerSelect.phone,
      email: this.customerSelect.email,
      address: this.customerSelect.address,
      dateDelivery: moment().format('DD-MM-YYYY'),
      store: this.menuDetailForm.controls.store.value,
      delivery: this.menuDetailForm.controls.delivery.value,
    });

    this.searchCustomer.value = null;

    this.validationForm();
  }

  newCustomer() {
    this.clearSearch();
    this.customerSelect = undefined;
    this.menuDetailForm.patchValue({
      id: 0,
      firstName: '',
      phone: '',
      email: '',
      address: '',
      dateDelivery: '',
    });

    this.searchCustomer.value = null;
  }

  /**
   * @description seleccionar el tipo de despacho
   * @param type
   */
  checkOption(type: string = 'delivery') {
    if (type === 'store') {
      this.menuDetailForm.patchValue({
        delivery: false,
        store: true,
        address: ''
      });
    } else {
      this.menuDetailForm.patchValue({
        store: false,
        delivery: true
      });
    }

    setTimeout(() => {
      this.typeDelivery = type;
    }, 100);

    this.validationForm();
  }

}
