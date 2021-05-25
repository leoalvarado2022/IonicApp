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
import {Prints} from '../../../../helpers/prints';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.page.html',
  styleUrls: ['./order-payment.page.scss'],
})
export class OrderPaymentPage implements OnInit, OnDestroy {

  public items: Array<any> = [];
  public id_item: any;
  public menuTitle: string;
  public imagesItems: Array<any> = [];
  public id: any;
  public order: any;
  public payments: any = [];
  public transactions: any = [];
  public pay: number = 0;
  public forPay: number = 0;
  public isPaymentOnProcess = false;

  public subscribeIsGenerateDocument: Subscription;

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
    public modalController: ModalController,
    public prints: Prints,
  ) {
  }

  ionViewDidEnter() {
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
    this.transactions = [];
    const user = this.storeService.getActiveCompany();
    const data: any = {
      user: user.user
    };

    // tipos de pagos
    this._storageSyncService.getTypePayment().then((data) => {
      this.payments = data.sort((a, b) => a.order - b.order);
    });
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
        // si tienes pagos ya se agregan de cero
        if (this.order.payments && this.order.payments.length) {
          for (const OrderPayments of this.order.payments) {
            const payment = this.payments.find(value => value.id === +OrderPayments.id_type_payment);
            if (payment) {
              this.setTransaction(OrderPayments.value_mp, payment.name, payment.id, payment.your_change);
            }
          }
        }

        if (this.order.documents && !this.order.documents.length) {
          this._deliveryService.setGenerateDocument(true);
        }
        this.forPay = this.order.value_pay;
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
    this.router.navigate(['/home-page/menu-order-detail']);
  }

  /**
   * @description ir atras
   */
  goBack() {
    // this.location.back();
    this.router.navigate(['/home-page/orders-detail', this.id]);
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
  setTransaction(number: number, type: string, id: number, your_change: boolean) {
    this.transactions.push({value: number, type, id, your_change});
  }

  /**
   * @description abrir calculadora
   * @param type
   */
  async calculator(type: string, id: number, your_change: boolean) {
    this.order.type_payment = type;
    const modal = await this.modalController.create({
      componentProps: {
        data: {...this.order, paymentTotal: this.forPayFunction()},
      },
      component: CalculatorComponent,
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();

    if (data) {
      this.setTransaction(data, type, id, your_change);
    }
  }

  /**
   * @description muestra el valor del descuento a pagar
   */
  forPayFunction() {
    let forPay = this.forPay;
    if (this.transactions && this.transactions.length) {
      const total = this.transactions.reduce((total, value) => total + (+value.value), 0);
      forPay -= total;
      if (forPay < 0) {
        return 0;
      }
    }

    return forPay;
  }

  /**
   * @description si hay vuelto
   */
  get change() {
    // solo si existen transacciones
    if (this.transactions && this.transactions.length) {
      // buscar las transacciones que tienen vuelto
      const rowSearchChange = this.transactions.filter(value => value.your_change);
      // buscar transacciones que no tienen vuelto
      const rowSearchNOChange = this.transactions.filter(value => !value.your_change);
      // el valor inicial es 0
      let change = 0;
      // suma de todos las transacciones para comprar que sean mayor al monto
      const total = this.transactions.reduce((total, value) => total + (+value.value), 0);
      // si existen montos con vuelto activado
      if (rowSearchChange && rowSearchChange.length) {
        // sumar todos las transacciones con vuelto activado
        const change = rowSearchChange.reduce((total, value) => total + (+value.value), 0);
        // sumar los valores sin vuelto activado
        const noChange = rowSearchNOChange.reduce((total, value) => total + (+value.value), 0);
        // si vuelto es mayor a 0 y  la suma de las transacciones es mayor a total a pagar
        if (total > this.order.value_pay) {
          const differenceValue = total - this.order.value_pay;

          // si el vuelto es mayor a 0 y mayor o igual al monto de pago
          if (change > 0 && change >= differenceValue) {
            return differenceValue - noChange;
          }

          // si el vuelto es mayor a 0 pero es menor al pago
          if (change > 0 && change < differenceValue) {
            return change;
          }

          return differenceValue;
        }
      }

      return 0;
    }
  }

  /**
   * @description si hay propina
   */
  get tip() {
    // solo si existen transacciones
    if (this.transactions && this.transactions.length) {
      // buscar transacciones que no tienen vuelto
      const rowSearchNOChange = this.transactions.filter(value => !value.your_change);
      // buscar las transacciones que tienen vuelto
      const rowSearchChange = this.transactions.filter(value => value.your_change);
      // el valor inicial es 0
      let change = 0;
      // suma de todos las transacciones para comprar que sean mayor al monto
      const total = this.transactions.reduce((total, value) => total + (+value.value), 0);
      // si existen montos con vuelto desactivado
      if (rowSearchNOChange && rowSearchNOChange.length) {
        // sumar los valores sin vuelto
        const noChange = rowSearchNOChange.reduce((total, value) => total + (+value.value), 0);
        // sumar todos las transacciones con vuelto activado
        const change = rowSearchChange.reduce((total, value) => total + (+value.value), 0);

        // la suma de las transacciones es mayor a total a pagar
        if (total > this.order.value_pay) {
          // si el valor a pagar es mayor a 0 y mayor o igual al monto de pago
          if (noChange > 0 && noChange >= this.order.value_pay) {
            return noChange - this.order.value_pay;
          }

          // si el cambios es menor a la diferencia del valor
          if (noChange > 0 && noChange < this.order.value_pay && change === 0) {
            return noChange;
          }

          // si el no vuelto es menor al total a pagar y no vuelto es mayor a las transacciones que pueden dar vuelto
          if (noChange > 0 && noChange < this.order.value_pay && change > 0) {
            return total - this.order.value_pay;
          }
        }
      }

      return 0;
    }

    return 0;
  }

  /**
   * @description revisar que los montos sean los correctos
   */
  paymentCorrect() {
    if (this.transactions && this.transactions.length) {
      const total = this.transactions.reduce((total, value) => total + (+value.value), 0);
      this.pay = total;

      return total >= this.order.value_pay;
    }

    return true;
  }

  /**
   * @description darle valor al pago total;
   */
  setPay() {
    const total = this.transactions.reduce((total, value) => total + (+value.value), 0);
    this.pay = total;
  }

  /**
   * @description cambiar status de la orden
   * @param status
   */
  setNotificationStatus(status: string) {
    const user = this.storeService.getActiveCompany();
    const data = {
      user: user.user,
      id_order: this.order.id,
      status
    };

    this._deliveryService.setNotificationHttpStatus(data).subscribe((success: any) => {
      this.subscribeIsGenerateDocument.unsubscribe();
      this.prints.setGenerateDocument(false);
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * @description remover transaccion de la lista
   * @param index
   */
  removeTransaction(index: number) {
    this.transactions.splice(index, 1);
    this.setPay();
  }

  /**
   * @description enviar pago
   */
  paymentSubmit() {
    this.loaderService.startLoader('Enviando pago..');

    this.isPaymentOnProcess = true;
    const tip = this.tip > 0 ? this.tip : 0;
    const change = this.change > 0 ? this.change : 0;

    this.order.value_tip += tip;
    this.order.change = change;

    // obtener el usuario logueado
    const user: any = this.storeService.getUser();
    const data: any = {
      user: +user.id,
      entity: +this.order.id_entities,
      transactions: this.transactions,
      order: this.order
    };

    this._deliveryService.savePayment(data).subscribe((data: any) => {
      if (data.response && data.response.length && data.response[0] && data.response[0].respuesta && data.response[0].respuesta === 'ok') {
        this.isPaymentOnProcess = false;
        this.loaderService.stopLoader();
        this.printOrderCommand(this.order);
        setTimeout(() => {
          if (this.order.type_order === 'Venta Directa') {
            this.subscribeIsGenerateDocument = this.prints.getGenerateDocument().subscribe(data => {
              if (data) {
                this.setNotificationStatus('done');
              }
            });
          }
          this.printOrderDocument(this.order);
        }, 2000);
        this.goBack();
      } else {
        this.loaderService.stopLoader();
      }
    }, error => {
      this.isPaymentOnProcess = false;
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * @description imprimir comanda
   * @param command
   */
  printOrderCommand(command: any) {
    this._storageSyncService.getPrintConfig().then(data => {
      this.prints.printConfigActive(data, 'comanda');
      this.prints.printCommand(command);
    });
  }

  /**
   * @description generar e imprimir documento
   * @param command
   */
  printOrderDocument(command: any) {
    this._storageSyncService.getPrintConfig().then(data => {
      this.prints.printConfigActive(data, 'documento');
      this.prints.printDocumentPdf417(this.order).then();
    });
  }
}
