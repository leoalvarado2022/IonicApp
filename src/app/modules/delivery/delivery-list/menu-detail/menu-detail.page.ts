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

@Component({
  selector: 'app-accepted',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit, OnDestroy {

  public menuDetailForm: FormGroup;

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
}
