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
import {AlertController, ModalController} from '@ionic/angular';
import {CalculatorComponent} from '../../../../shared/components/calculator/calculator.component';

@Component({
  selector: 'app-delivery-payment',
  templateUrl: './delivery-payment.page.html',
  styleUrls: ['./delivery-payment.page.scss'],
})
export class DeliveryPaymentPage implements OnInit, OnDestroy {
  public items: Array<any> = [];
  public id_item: any;
  public menuTitle: string;
  public imagesItems: Array<any> = [];
  public id: any;
  public order: any;
  public transactions: any = [];

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
    private alertController: AlertController,
    private location: Location,
    public modalController: ModalController
  ) {
    this.id = this._activatedRoute.snapshot.params.id;
    this.loadOrder();
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.menuTitle = 'Pagos';
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
    const data: any = {
      user: user.user
    };

    this.loadImages().then();

    this._deliveryService.httpGetMenuOrderUrl(data).subscribe((success: any) => {
      if (success.resp && success.resp.menuItems && success.resp.menuItems.length) {
        this.items = success.resp.menuItems;

      }
    }, error => {
      this.httpService.errorHandler(error);
    });
    if (this.id) {
      this.loaderService.startLoader('Cargando...');
      data.id = this.id;
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
   * @description mostrar el detalle de la orden
   */
  showOrder() {
    this.router.navigate(['/home-page/order-detail']);
  }

  /**
   * @description ir atras
   */
  goBack() {
    this.location.back();
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
   * lista de transacciones
   * @param number
   * @param type
   */
  setTransaction(number: number, type: string) {
    this.transactions.push({number, type});
  }

  async calculator(type: string) {
    this.order.type_payment = type;
    const modal = await this.modalController.create({
      componentProps: {
        data: this.order,
      },
      component: CalculatorComponent,
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();

    if (data) {
      this.setTransaction(data, type);
    }
  }
}
