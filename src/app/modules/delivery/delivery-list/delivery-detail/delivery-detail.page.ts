import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-accepted',
  templateUrl: './delivery-detail.page.html',
  styleUrls: ['./delivery-detail.page.scss'],
})
export class DeliveryDetailPage implements OnInit, OnDestroy {

  public order: any;
  public id: any;


  constructor(
    private storeService: StoreService,
    private httpService: HttpService,
    private _deliveryService: DeliveryService,
    private loaderService: LoaderService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.id = this._activatedRoute.snapshot.params.id;
    this.loadNotifications();
  }

  private loadNotifications() {
    if(this.id){
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
  setNotificationStatus(status: string) {
    if(this.id){
      // this.loaderService.startLoader('Cargando Notificaciones');
      const user = this.storeService.getActiveCompany();

      const data = {
        user: user.user,
        id_order: this.id,
        status: status
      };

      this._deliveryService.setNotificationHttpStatus(data).subscribe((success: any) => {
        // this.order = success.resp;
        // this.loaderService.stopLoader();
        this._location.back();
      }, error => {
        // this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
      });
    }
  }

  /**
   * @description validate if exists product in null
   */
  productSync() {
    if(this.order && this.order.products && this.order.products.length) {
      const validateProduct = this.order.products.filter(value => value.id_item_product === null);

      return validateProduct.length > 0;
    }
    return false;
  }

  /**
   * @description get product type item
   */
  orderProducts() {
    if(this.order && this.order.products && this.order.products.length) {
      return  this.order.products.filter(value => value.id_order_ref === null && value.type === "I");
    }

    return [];
  }

  /**
   * @description get modifier of product
   * @param id
   */
  modifierProduct(id: number) {
    if(this.order && this.order.products && this.order.products.length) {
      return  this.order.products.filter(value => value.id_order_ref !== null && value.type === "M" && value.id_order_ref === id);
    }

    return [];
  }


  ngOnDestroy(): void {
  }

  ngOnInit() {
  }

}
