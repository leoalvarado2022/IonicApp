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

      // this._posService.openTable(this.order);

      // this.setHttpNotificationStatus(status, data);

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
      const integ = integration.find(value => value.origin === this.order.origin);

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
        this._posService.openTable(this.order);
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
      const validateProduct = this.order.products.filter(value => value.id_item_product === null);

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

}
