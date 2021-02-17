import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PosService} from '../../services/pos.service';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './delivery-detail.page.html',
  styleUrls: ['./delivery-detail.page.scss'],
})
export class DeliveryDetailPage implements OnInit, OnDestroy {

  public order: any;
  public id: any;
  public images: any;
  public id_integration: any;
  public products: any;

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
  ) {
    this.id = this._activatedRoute.snapshot.params.id;
    this.loadNotifications();
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
  }

  loadNotifications() {
    this._storageSyncService.getIntegrationImages().then((data) => {
      this.images = data;
    });


    if (this.id) {
      this.loaderService.startLoader('Cargando Notificaciones');
      const user = this.storeService.getActiveCompany();

      const data = {
        user: user.user,
        id: this.id
      };

      this._deliveryService.getNotificationHttpId(data).subscribe((success: any) => {
        this.order = success.resp;
        this.loaderService.stopLoader();
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
      });
    }
  }

  /**
   * @description cambiar status de notificación
   * @param status
   */
  setNotificationStatus(status: string, id_integration: any) {
    if (this.id) {

      this.id_integration = id_integration;

      const user = this.storeService.getActiveCompany();

      const data = {
        user: user.user,
        id_order: this.id,
        status
      };

      // console.log(data);
      // this._posService.openTableNew(this.order);

      this.setHttpNotificationStatus(status, data);

      // si el origin es una app externa
      if (this.order.origin === 'JUSTO') {
        // this.updateStatusAppOrigin(status, data).then();
      }

      // si la app es interna
      if (this.order.origin === 'FX360') {
        // this.setHttpNotificationStatus(status, data);
      }

    }
  }

  async updateStatusAppOrigin(status: string, dataNotification: any) {

    // obtener la integraciones
    const integration = await this._storageSyncService.getIntegrationDelivery();

    // si hay entra
    if (integration.length) {

      // en el caso se busca con el origen
      const integ = integration.find(value => value.origin === this.order.origin && value.id_entity === this.order.id_entities);

      // si existe
      if (integ) {
        const data = {
          origin: this.order.origin,
          orderId: this.order.id_origin,
          data: {},
          id_integration: this.id_integration
        };

        const token = integ.api_key;

        // cambia estado en la app externa
        this._deliveryService.setHttpChangeDeliveryStatus(data, status, token).subscribe((success: any) => {
          if (success.resp && success.resp.data && success.resp.data.status && success.resp.data.status === 'ok') {
            this.setHttpNotificationStatus(status, dataNotification);
          } else {
            // si hay un error con justo
            if (success.resp && success.resp.error) {
              this._toastService.warningToast(success.resp.data.error);
            }

          }
        });
      }

    }
  }

  /**
   * @description cambiar de estado en la nube y agregar los datos en el pos
   * @param status
   * @param data
   */
  setHttpNotificationStatus(status: string, data: any) {
    this._deliveryService.setNotificationHttpStatus(data).subscribe((success: any) => {
      if (status === 'accepted') {
        // agregar datos en el pos
        this._posService.openTableNew(this.order);
      }
      this._location.back();
    }, error => {
      this.httpService.errorHandler(error);
    });
  }


  /**
   * @description validate if exists product in null
   */
  productSync() {
    if (this.order && this.order.products && this.order.products.length) {
      const validateProduct = this.order.products.filter(value => value.id_item_product === null && value.type !== 'TEXTO');

      return validateProduct.length > 0;
    }
    return false;
  }

  /**
   * @description get product type item
   */
  orderProducts() {
    if (this.order && this.order.products && this.order.products.length) {
      return this.order.products.filter(value => value.id_order_ref === null);
    }

    return [];
  }

  /**
   * @description get modifier of product
   * @param id
   */
  modifierProduct(id: number) {
    if (this.order && this.order.products && this.order.products.length) {
      return this.order.products.filter(value => value.id_order_ref !== null && value.id_order_ref === id);
    }
    return [];
  }

  /**
   * @description obtener las imagenes
   * @param id_integration
   */
  imageIntegration(id_integration) {
    const img = localStorage.getItem(id_integration);
    if (img) {
      return img;
    } else {
      if (this.images.length) {
        const imgData = this.images.find(value => value.id_integration === +id_integration);
        const img = imgData.integration_image;
        localStorage.setItem(id_integration, img);

        return img;
      }
    }

    return '';
  }

  /**
   * @description validacion para mostrar el boton de reprocesar
   * @param id_integration
   * @param products
   */
  reprocess(id_integration, products) {
    let rep = false;

    if (products.length) {

      for (let product of products) {
        if (!product.id_item_product && product.total > 0) {
          return rep = true;
        }
      }

    }

    return rep;
  }

  /**
   * @description actualizacion de los items cuando no tienen codigo
   * @param products
   * @param order
   */
  async httpReprocess(products, order) {
    this.products = products;
    this.loaderService.startLoader(`Obteniendo la orden con ${this.order.origin}`);
    // obtener la integraciones
    const integration = await this._storageSyncService.getIntegrationDelivery();

    // si hay entra
    if (integration.length) {
      // datos para obtener una orden unica
      let orderGet = {
        origin: this.order.origin,
        id_integration: this.order.id_integration,
        id_entity: this.order.id_entities,
        id_order_origin: this.order.id_origin
      };

      // en el caso se busca con el origen
      const integ = integration.find(value => value.origin === this.order.origin && value.id_entity === this.order.id_entities);
      const token = integ.api_key;

      // cambia estado en la app externa
      this._deliveryService.setHttpGetOrderDeliveryStatus(orderGet, token).subscribe((success: any) => {
        // si es correcto actualiza la orden
        if (success.resp && success.resp.data && success.resp.data.data &&
          success.resp.data.status && success.resp.data.status === 'ok') {
          this.loaderService.stopLoader();
          // actualizar la orden en fx360
          this.updateOrder(success.resp.data.data, token).then();
        } else {
          // si hay un error con justo
          if (success.resp && success.resp.error) {
            this.loaderService.stopLoader();
            this._toastService.warningToast(success.resp.data.error);
          }

        }
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
        this._toastService.errorToast(`No hay conexión con ${this.order.origin}`);
      });

    }
  }

  /**
   * @description reprocesar las orden con la base de fx360
   * @param products
   */
  async reprocessWithFX360() {
    this.loaderService.startLoader(`Revisando datos en fx360..`);

    let data = {
      products: this.products
    };

    this._deliveryService.setOrderReprocess(data).subscribe((success: any) => {
      if (success.resp.length) {
        let error = false;
        for (let resp of success.resp) {
          if (resp.respuesta && resp.respuesta !== 'ok') {
            const alert = this.products.find(value => +value.id === +resp.id);
            // this._toastService.warningToast(`${alert.name_item} no existe en la base de datos FX360`);
            error = true;
          }
        }

        this.loaderService.stopLoader();

        if (!error) {
          this.loadNotifications();
        }
      } else {
        this.loaderService.stopLoader();
      }

    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * @description actualizar la orden con api delivery
   * @param data
   * @param token
   */
  async updateOrder(data, token) {
    this.loaderService.startLoader(`Actualizando la orden`);

    data.id = this.order.id;
    const updateOrder = {
      data: {
        order: data
      }
    };

    // actualizar orden
    this._deliveryService.setHttpUpdateOrderDeliveryJusto(updateOrder, this.order.id_integration, token).subscribe((success: any) => {
      if (success.response && success.response.length) {
        if (success.response[0].respuesta) {
          if (success.response[0].respuesta === 'ok') {
            this.loaderService.stopLoader();
            console.log(success, 'updateOrder', success.response[0].respuesta);
            this.loadNotifications();
            this.reprocessWithFX360().then();
          } else {
            this.loaderService.stopLoader();
            this._toastService.warningToast('Esta Orden ya se encuentra en la base de datos');
          }
        }
      }
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
      this._toastService.errorToast('No hay conexion para actualizar la orden');
    });

  }

}
