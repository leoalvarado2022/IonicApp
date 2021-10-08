import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PosService} from '../../services/pos.service';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AlertController, IonItemSliding} from '@ionic/angular';
import * as moment from 'moment';

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
    private alertController: AlertController,
    private loaderService: LoaderService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _posService: PosService,
    private _toastService: ToastService,
    private _storageSyncService: StorageSyncService,
    private DRef: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      comment: '',
      id: 0,
      products: []
    });
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

    const editOrder = JSON.parse(localStorage.getItem('OrderData'));

    // si van editar una orden
    if (editOrder && editOrder.products && editOrder.products.length && this.items && this.items.length) {
      this.form.patchValue({
        comment: editOrder.comment,
        id: editOrder.id,
        products: editOrder.products
      });
    }
  }

  createOrder() {
    let headerData = this._deliveryService.getInfoTypeDeliveryForm();
    const items = JSON.parse(localStorage.getItem('orders'));
    const entity = this.storeService.getActiveCompany().id;
    const discount = items.reduce((a, b) => a + b.discount, 0);

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
    } else {
      if (headerData.dateDelivery) {
        headerData.dateDelivery = moment(headerData.dateDelivery, ['DD-MM-YYYY']).format('YYYY-MM-DD');
      }
    }

    const formData = Object.assign({}, this.form.value);

    const data = {
      entity,
      headerData,
      items,
      comment: formData.comment,
      id: formData.id,
      products: formData.products,
      discount
    };

    this._deliveryService.createOrderManual(data).subscribe((data: any) => {
      if (data.resp && data.resp.length && data.resp[0] && data.resp[0].respuesta === 'ok') {
        this._deliveryService.removeInfoTypeDeliveryForm();
        localStorage.removeItem('orders');
        localStorage.removeItem('OrderData');
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

  /**
   * @description valiacion para descuento porcentaje
   */
  async percentage(item: any, itemSlidingDiscount: IonItemSliding) {
    const value: any = await this.getValueDiscount('Porcentaje');
    const validation = this.getValidation(value, item, 'Porcentaje');

    if (validation) {
      // const quantity = this.quantityOrder(item);
      const val: number = parseInt(value.value);

      item.type_discount = 'Porcentaje';
      item.discount = item.price * val / 100;
      itemSlidingDiscount.close();

      this.remappingOrder(item);
    }
    this.DRef.detectChanges();
  }

  /**
   * @description actualizar orden con el descuento
   * @param item
   */
  remappingOrder(item) {
    let ordersLocal = JSON.parse(localStorage.getItem('orders'));
    let orders = [];

    if (ordersLocal.length) {
      for (let order of ordersLocal) {
        if (order.id === item.id) {
          order.type_discount = item.type_discount;
          order.discount = item.discount;
        }
        orders.push(order);
      }

      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }

  /**
   * @description valiacion para descuento monetario
   */
  async money(item: any, itemSlidingDiscount: IonItemSliding) {
    const quantity = this.quantityOrder(item);
    const value: any = await this.getValueDiscount('Monetario');
    const validation = this.getValidation(value, item, 'Monetario', quantity);

    if (validation) {
      const val: number = parseInt(value.value) / quantity;

      item.type_discount = 'Monetario';
      item.discount = val;
      itemSlidingDiscount.close();
      this.remappingOrder(item);
    }
    this.DRef.detectChanges();
  }

  /**
   * @description remover descuento
   */
  removeDiscount(item, itemSlidingDiscount: IonItemSliding) {
    item.type_discount = null;
    item.discount = null;
    itemSlidingDiscount.close();
    this.remappingOrder(item);
  }

  /**
   * @description validacion para cuando es cero en los descuentos
   * @param value
   */
  getValidation(value, item, type: string, quantity = 1) {
    // if (this.items && item && this.items.length) {
    //   const discount = this.items.find(value => value.discount);
    //   if (discount && item.id !== discount.id) {
    //     this._toastService.warningToast('Solo a un item se le puede hacer el descuento');
    //     return false;
    //   }
    // }

    if (type === 'Monetario' && value && parseInt(value.value) > (item.price * quantity)) {
      this._toastService.warningToast('El valor del descuento tiene que ser menor al precio del item');
      return false;
    }

    if (type === 'Porcentaje' && value && parseInt(value.value) > 100) {
      this._toastService.warningToast('El valor del descuento tiene que ser menor al precio del item');
      return false;
    }

    if (value && parseInt(value.value) <= 0) {
      this._toastService.warningToast('El valor del descuento tiene que ser mayor a 0');
      return false;
    }

    // si el valor del descuento es 0
    if (!value || parseInt(value.value) === 0 || !value.value) {
      this._toastService.warningToast('El valor del descuento tiene que ser mayor a 0');
      return false;
    }

    return true;
  }

  /**
   * obtener el valor del descuento
   * @param type
   */
  public getValueDiscount = (type: string): Promise<boolean> => {
    return new Promise(resolve => {
      this.alertController.create({
        message: `Agregar el valor del descuento en ${type === 'Porcentaje' ? type : 'CLP'}`,
        inputs: [
          {
            name: 'value',
            type: 'number',
            placeholder: 'Valor del descuento'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => resolve(null)
          },
          {
            text: 'Aceptar',
            handler: (data) => resolve(data)
          }
        ],
        backdropDismiss: false,
      }).then(alert => {
        alert.present();
      });
    });
  };

  /**
   * @description actualizacion y parseo
   * @param value
   */
  int(value) {
    return parseInt(value);
  }
}
