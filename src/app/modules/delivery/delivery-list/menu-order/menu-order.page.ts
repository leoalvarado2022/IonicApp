import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {NavParams} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PosService} from '../../services/pos.service';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './menu-order.page.html',
  styleUrls: ['./menu-order.page.scss'],
})
export class MenuOrderPage implements OnInit, OnDestroy {
  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _posService: PosService,
    private _toastService: ToastService,
    private _storageSyncService: StorageSyncService,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
  }

  addItems() {

  }

  removeItems() {

  }

  showOrder() {
    this.router.navigate(['/home-page/order-detail']);
  }
}
