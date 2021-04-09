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
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit, OnDestroy {
  public menuHeader: Array<any> = [];
  public items: Array<any> = [];
  public itemsSelect: any;
  public imagesItems: Array<any> = [];

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
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.loadImages().then();
    this.loadOrders();
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

    const data = {
      entity,
      headerData,
      items
    };


    this._deliveryService.createOrderManual(data).subscribe((data) => {
      this._deliveryService.removeInfoTypeDeliveryForm();
      localStorage.removeItem('orders');
      this.router.navigate(['/home-page/delivery']);
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
   * @param id
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
