import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {ViewChild} from '@angular/core';
import {IonSearchbar} from '@ionic/angular';

@Component({
  selector: 'app-accepted',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit, OnDestroy {

  public menuDetailForm: FormGroup;
  public subscribeSearch: Subscription;
  public searchData: Array<any> = [];
  public customerSelect: any;

  @ViewChild('searchCustomer') searchCustomer: IonSearchbar;

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
    private formBuilder: FormBuilder
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this._deliveryService.removeInfoTypeDeliveryForm();
    this.menuDetailForm = this.formBuilder.group({
      id: [0],
      firstName: ['', Validators.required],
      lastName: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      dateDelivery: ['', Validators.required],
    });

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
    this.router.navigate(['/home-page/delivery']);
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
   * @param event
   */
  searchInput(event: any) {
    if (event.target.value.length) {
      this.subscribeSearch = this._deliveryService.getListCustomer({search: event.target.value}).subscribe((data: any) => {
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
      dateDelivery: '',
      lastName: '',
    });

    this.searchCustomer.value = null;
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
      lastName: '',
      dateDelivery: '',
    });

    this.searchCustomer.value = null;
  }
}
