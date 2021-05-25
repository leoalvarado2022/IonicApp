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
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-menu-order-detail',
  templateUrl: './menu-order-detail.page.html',
  styleUrls: ['./menu-order-detail.page.scss'],
})
export class MenuOrderDetailPage implements OnInit, OnDestroy {
  public menuHeader: Array<any> = [];
  public items: Array<any> = [];
  public itemsSelect: any;
  public imagesItems: Array<any> = [];
  public form: FormGroup;

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
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.loadImages().then();
    this.loadOrders();

    this.form = this.formBuilder.group({
      comment: ''
    });
  }

  async loadImages() {
    const itemImageStorage = await this._deliveryService.getItemImageStorage();

    if (itemImageStorage) {
      this.imagesItems = itemImageStorage;
    }
  }

  /**
   * @description ver las ordenes escogidas
   */
  loadOrders() {
    let ordersLocal = JSON.parse(localStorage.getItem('orders'));

    if (ordersLocal && ordersLocal.length) {
      const items = [];

      for (let order of ordersLocal) {
        const item = items.find(value => value.id === order.id);

        if (!item) {
          items.push(order);
        }

      }
      this.items = items;
    }
  }

  createOrder() {
    let headerData = this._deliveryService.getInfoTypeDeliveryForm();
    const items = JSON.parse(localStorage.getItem('orders'));
    const entity = this.storeService.getActiveCompany().id;

    if (!headerData) {
      headerData = {
        id: 0,
        dateDelivery: new Date(),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
      };
    }

    const formData = Object.assign({}, this.form.value);

    const data = {
      entity,
      headerData,
      items,
      comment: formData.comment
    };

    this._deliveryService.createOrderManual(data).subscribe((data: any) => {
      if (data.resp && data.resp.length && data.resp[0] && data.resp[0].respuesta === 'ok') {
        this._deliveryService.removeInfoTypeDeliveryForm();
        localStorage.removeItem('orders');
        this.router.navigate(['/home-page/orders-payment', data.resp[0].id_orden]);
      }
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * @description cantidad de ordenes segun lo que agrego
   * @param item
   */
  quantityOrder(item: any) {
    let ordersLocal = JSON.parse(localStorage.getItem('orders'));

    if (ordersLocal && ordersLocal.length) {
      return ordersLocal.filter(value => value.id === item.id).length;
    }

    return 0;
  }

  /**
   * @description agregar ordenes
   * @param item
   */
  addItems(item: any) {
    let orders = [];
    orders.push(item);
    let ordersLocal = JSON.parse(localStorage.getItem('orders'));

    if (ordersLocal) {
      ordersLocal.push(item);
      localStorage.setItem('orders', JSON.stringify(ordersLocal));
    } else {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }

  /**
   * @description eliminar un item
   * @param item
   */
  removeItems(item) {
    let ordersLocal = JSON.parse(localStorage.getItem('orders'));

    if (ordersLocal) {
      const orderIndex = ordersLocal.findIndex(value => value.id === item.id);
      // si existe en la lista
      if (orderIndex !== -1) {
        // se elimina de la lista
        ordersLocal.splice(orderIndex, 1);
        // si todavia hay items en la lista
        if (ordersLocal.length) {
          if (ordersLocal.filter(value => value.id === item.id).length === 0) {
            ordersLocal.filter(value => value.id !== item.id);
            localStorage.setItem('orders', JSON.stringify(ordersLocal));
            this.loadOrders();
          } else {
            localStorage.setItem('orders', JSON.stringify(ordersLocal));
          }
        } else {
          // si no es que ya no existen items en la lista
          this.items = [];
          localStorage.removeItem('orders');
        }
      }
    }
  }

  /**
   * @description obtener la imagen de la carta
   * @param id_item
   */
  attachment(id_item: number) {
    if (this.imagesItems.length) {
      const image = this.imagesItems.find(value => value.id_item === id_item);

      if (image) {
        return image.imagen;
      }
    }

    return 'assets/imgs/no-image.png';
  }
}
