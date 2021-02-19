import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {DeliveryService} from '../../services/delivery.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {CameraService} from '../../../../shared/services/camera/camera.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-accepted',
  templateUrl: './menu-order.page.html',
  styleUrls: ['./menu-order.page.scss'],
})
export class MenuOrderPage implements OnInit, OnDestroy {
  public menuHeader: Array<any> = [];
  public items: Array<any> = [];
  public itemsSelect: any;
  public headerSelect: any;
  public id_item: any;
  public menuTitle: string;
  public imagesItems: Array<any> = [];

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
    private cameraService: CameraService,
    private alertController: AlertController
  ) {
    this.loadOrder();
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    const goBack_ = this._deliveryService.getTypeSaleDirect();

    if (goBack_) {
      this.menuTitle = 'Venta Directa';
    } else {
      this.menuTitle = 'Menu';
    }
  }

  async loadImages() {
    const itemImageStorage = await this._deliveryService.getItemImageStorage();

    if (itemImageStorage) {
      this.imagesItems = itemImageStorage;
    }
  }

  /**
   * @description obtener las ordene de url
   */
  loadOrder() {
    const user = this.storeService.getActiveCompany();
    const data = {
      user: user.user
    };

    this.loadImages().then();

    this._deliveryService.httpGetMenuOrderUrl(data).subscribe((success: any) => {
      if (success.resp && success.resp.menuItems && success.resp.menuItems.length) {
        this.items = success.resp.menuItems;

        for (let header of this.items) {
          const row = this.menuHeader.find(value => value === header.name_section);

          if (!row) {
            this.menuHeader.push(header.name_section);
          }
        }

        if (this.menuHeader.length) {
          this.headerSelect = this.menuHeader[0];
          this.itemsSelect = this.items.filter(value => value.name_section === this.menuHeader[0]);
        }

      }
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * @description filtrar la lista de las ordenes
   * @param headerSelect
   */
  itemsSelectFilter(headerSelect) {
    if (this.items && this.items.length) {
      return this.items.filter(value => value.name_section === headerSelect);
    }

    return [];
  }

  /**
   * @description seleccionar el filtro segun las vistas
   * @param header
   */
  selectFilterItems(header) {
    this.headerSelect = header;
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
      if (orderIndex !== -1) {
        ordersLocal.splice(orderIndex, 1);
        localStorage.setItem('orders', JSON.stringify(ordersLocal));
      }
    }
  }

  /**
   * @description total items de las ordenes
   */
  orderCountTotal() {
    let ordersLocal = JSON.parse(localStorage.getItem('orders'));
    if (ordersLocal) {
      return ordersLocal.length;
    }

    return 0;
  }

  /**
   * @description mostrar el detalle de la orden
   */
  showOrder() {
    this.router.navigate(['/home-page/order-detail']);
  }

  /**
   * @description cambio el tipo de venta
   */
  typeSaleChange() {
    const goBack_ = this._deliveryService.getTypeSaleDirect();
    this._deliveryService.removeInfoTypeDeliveryForm();
    localStorage.removeItem('orders');
    if (goBack_) {
      this._deliveryService.setTypeSaleDirect(false);
      this.router.navigate(['/home-page/menu-detail']);
    } else {
      this._deliveryService.setTypeSaleDirect(true);
      this.menuTitle = 'Venta Directa';
    }
  }

  /**
   * @description ir atras
   */
  goBack() {
    const goBack_ = this._deliveryService.getTypeSaleDirect();

    if (goBack_) {
      this.router.navigate(['/home-page/delivery']);
    } else {
      this.router.navigate(['/home-page/menu-detail']);
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

  /**
   * @description cambiar foto de la lista de menu
   * @param id
   */
  async changePhoto(id_item: number) {
    this.id_item = id_item;
    const alert = await this.alertController.create({
      cssClass: 'alertCamGallery',
      buttons: [
        {
          text: 'Abrir Camara',
          cssClass: 'alertCamGallery__',
          handler: () => {
            this.openCamera().then();
          }
        }, {
          text: 'Abrir Galería',
          cssClass: 'alertCamGallery__',
          handler: () => {
            this.openGallery().then();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alertCamGallery__',
          handler: () => {
            console.log('cancelado');
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * openCamera
   */
  public openCamera = async () => {
    const base64 = await this.cameraService.openCamera();
    this.attachmentProcess(this.id_item, base64);
  };


  /**
   * openGallery
   */
  public openGallery = async () => {
    const base64 = await this.cameraService.openGallery();
    this.attachmentProcess(this.id_item, base64);
  };


  /**
   * @description procesar imagen para transformarlo en base 64
   * @param id
   * @param base64
   */
  attachmentProcess(id_item: number, base64: string) {
    //data:image/jpeg;base64,
    if (base64 && base64.length) {

      const imageIndex = this.imagesItems.findIndex(value => value.id_item === id_item);

      const user = this.storeService.getActiveCompany();

      let data = {};

      data = {
        user: user.user,
        id: imageIndex !== -1 ? this.imagesItems[imageIndex].id : 0,
        id_item: id_item,
        image: base64
      };

      this.loaderService.startLoader();
      this._deliveryService.itemImageSave(data).subscribe((data: any) => {
        this.loaderService.stopLoader();
        this.reloadImages();
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
      });
    }
  }

  /**
   * @description recargar las imagenes
   */
  reloadImages() {
    this.loaderService.startLoader();
    this._deliveryService.getItemsImage().subscribe((data: any) => {
      this.loaderService.stopLoader();
      if (data.resp && data.resp.length) {
        this._deliveryService.setItemImageStorage(data.resp);
        setTimeout(() => {
          this.loadImages();
        }, 1000);
      }
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }
}
