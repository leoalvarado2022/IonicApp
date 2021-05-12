import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {NavParams, Platform} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PosService} from '../../services/pos.service';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {Prints} from '../../../../helpers/prints';
import {DeviceService} from '../../../../services/device/device.service';

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
  public isAndroid = false;
  public loadingButton = false;
  public documents = false;
  public payments = false;
  public skeleton = true;
  public loadingActionButton = false;

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
    public deviceService: DeviceService,
    public platform: Platform,
    public prints: Prints,
    private router: Router,
  ) {
    this.id = this._activatedRoute.snapshot.params.id;

    this.platform.ready().then(() => {
      this.isAndroid = this.platform.is('android');
    });
  }

  ionViewWillEnter() {
    this.skeleton = true;
    this.loadNotifications().then();
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.prints.getGenerateDocument().subscribe((data) => {
      if (data) {
        this.loadNotifications().then();
      }
    });

    this.prints.getLoaderBotton().subscribe((data) => {
      this.loadingButton = data;
    });
  }

  /**
   * @description pagar cuenta
   */
  deliveryPayment() {
    this.router.navigate(['/home-page/delivery-payment', this.order.id]);
  }

  async loadNotifications(): Promise<any> {
    return new Promise(resolve => {
      this._storageSyncService.getIntegrationImages().then((data) => {
        this.images = data;
      });

      if (this.id) {
        this.loaderService.startLoader('Cargando...');
        const user = this.storeService.getActiveCompany();

        const data = {
          user: user.user,
          id: this.id
        };

        this._deliveryService.getNotificationHttpId(data).subscribe((success: any) => {
          this.order = success.resp;
          this.skeleton = false;
          if (this.order.documents && this.order.documents.length) {
            this.documents = true;
          }
          if (this.order.payments && this.order.payments > 0) {
            this.payments = true;
          }
          this.prints.setOrder(success.resp);
          resolve(true);
          this.loaderService.stopLoader();
        }, error => {
          resolve(false);
          this.loaderService.stopLoader();
          this.httpService.errorHandler(error);
        });
      }
    });
  }

  /**
   * @description para que no puedan pulsar varias veces a la vez
   */
  loadingButtonFunction() {
    this.loadingActionButton = true;
    setTimeout(() => {
      this.loadingActionButton = false;
    }, 5000);
  }

  /**
   * @description cambiar status de notificación
   * @param status
   */
  setNotificationStatus(status: string, id_integration: any) {
    this.loadingButtonFunction();
    if (this.id) {

      this.id_integration = id_integration;

      const user = this.storeService.getActiveCompany();

      const data = {
        user: user.user,
        id_order: this.id,
        status
      };
      // console.log(data);
      // this._posService.openTableNew(this.order, user.user);
      this.setHttpNotificationStatus(status, data);
      // this.printOrderDocument(this.order);

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

  /**
   * @description actualizar las ordenes de la app externas
   * @param status
   * @param dataNotification
   */
  async updateStatusAppOrigin(status: string, dataNotification: any) {

    // obtener la integraciones
    const integration = await this._storageSyncService.getIntegrationDelivery();

    // si hay entra
    if (integration.length) {

      // en el caso se busca con el origen
      const integ = integration.find(value => value.origin === this.order.origin && value.id_entity === this.order.id_entities && value.type_integration === 'DLV');

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
        const user = this.storeService.getActiveCompany();
        // if (this.platform.is('android') && !this.documents) {
        //   this.printOrderDocument(this.order);
        // }
        // agregar datos en el pos
        this._posService.openTableNew(this.order, user.user);
      }
      this._location.back();
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * @description actualizar estado del pos
   */
  updatePosStatus(order: any) {
    this.loadingButtonFunction();
    const user = this.storeService.getActiveCompany();
    this._posService.openTableNew(order, user.user);
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
  imageIntegration(order) {
    const id_integration = order.id_integration;

    let img = localStorage.getItem(id_integration);

    if (order.origin === 'FX360') {
      const user: any = this.storeService.getActiveCompany();
      img = localStorage.getItem(order.id_entities);
    }

    if (img) {
      return img;
    } else {
      if (this.images.length) {

        if (order.origin === 'FX360') {
          const imgData = this.images.find(value => value.id_entity === +order.id_entities);
          if (imgData) {
            img = imgData.integration_image;
            localStorage.setItem(id_integration, img);
          } else {
            img = '';
          }
        } else {
          const imgData = this.images.find(value => value.id_integration === +id_integration);
          img = imgData.integration_image;
          localStorage.setItem(id_integration, img);
        }


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

    if (products && products.length) {

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
  async httpReprocess() {
    this.loadingButtonFunction();
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
      const integ = integration.find(value => value.origin === this.order.origin && value.id_entity === this.order.id_entities && value.type_integration === 'DLV');
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
      products: this.order.products
    };

    this._deliveryService.setOrderReprocess(data).subscribe((success: any) => {
      if (success.resp.length) {
        let error = false;
        for (let resp of success.resp) {
          if (resp.respuesta && resp.respuesta !== 'ok') {
            const alert = this.order.products.find(value => +value.id === +resp.id);
            // this._toastService.warningToast(`${alert.name_item} no existe en la base de datos FX360`);
            error = true;
          }
        }

        this.loaderService.stopLoader();

        if (!error) {
          this.loadNotifications().then();
        }
      } else {
        this.loaderService.stopLoader();
      }

    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });

    // setTimeout(() => {
    //   this.loaderService.stopLoader();
    // }, 10000)
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
            // console.log(success, 'updateOrder', success.response[0].respuesta);
            this.loadNotifications().then((success) => {
              // console.log(success, 'setHttpUpdateOrderDeliveryJusto');
              if (success) {
                this.reprocessWithFX360().then();
              }
            });
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

  /**
   * @description imprimir comanda
   * @param command
   */
  printOrderCommand(command: any) {
    this.loadingButtonFunction();
    this._storageSyncService.getPrintConfig().then(data => {
      this.prints.printConfigActive(data, 'comanda');
      this.prints.printCommand(command);
    });
  }

  /**
   * @description imprimir documento
   * @param command
   */
  printOrderDocument(command: any) {
    this.loadingButtonFunction();
    if (this.platform.is('android') && !this.documents) {
      this._storageSyncService.getPrintConfig().then(data => {
        this.prints.printConfigActive(data, 'documento');
        this.prints.printDocumentPdf417(command).then();
      });
    }
  }
}
