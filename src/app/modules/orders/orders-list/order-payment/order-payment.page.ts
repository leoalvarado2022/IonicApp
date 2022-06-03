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
import {OrderListDiscountPage} from '../order-list-discount/order-list-discount.page';

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
  public discount: any;
  public order: any;
  public payments: any = [];
  public discounts: any = [];
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
    this.order = undefined;
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

    // obtener los descuentos
    this._storageSyncService.getTypeDiscount().then((data) => {
      this.discounts = data;
    });

    // tipos de pagos
    this._storageSyncService.getTypePayment().then((data) => {

      this._storageSyncService.getAgreements().then( (agreements) => {
        let _payment = agreements.filter(item => item.defined > 0);
        _payment = _payment.map(item => {
          return {
            id: item.id,
            name: item.name,
            order: item.defined,
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACSCAYAAABbhRg+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABT5SURBVHhe7Z0HjBRlG8cfsEdRxK7BiFLkEwFFTOQ0WCLmACkaDxQRFQU7GINGxYJiLIgetsjZABUNREWROwWxcmciBlAU5QBRBLvYY0P59vfcvsfcuLu3szu7U/b9kcmVWW52Z/7ztPd532mxOYFYLAHQMvnVYik6VnyWwLDiswSGFZ8lMKz4LIFhxWcJDCs+S2BY8VkCw4rPEhhWfJbAsOKzBIYVnyUwbGOBj3z77bfy6aefytKlS+WXX36RX3/9VX+/8847y4EHHijdunWTfffdV7bddlv9faljxecDtbW18sQTT8hbb70l33//fUpx/fPPP/r1kEMOkYEDB8ppp50me+yxh/6uVLHiy4Nly5bJVVddJe+//77stNNO8tdff0mrVq1kv/32k7Zt2zaK8KuvvpLPPvtMfv75Z/2Z1yHGa665Ri666CL9XSlixZcDuNd77rlH7rvvPtlzzz3l33//lbKyMunbt6907NhRWrdunXxlUz766CN555135KWXXpLvvvtORXjwwQfL1KlT5YADDki+qnSw4vPIrFmz5KabbpI///xTxdOjRw85//zzpXPnzrJp06ZG95qKrbbaSrbeemv58ccf5fnnn5dHH31Utt9+exXv7NmzpXv37slXlgZWfFmycuVKufrqq9Vy7bjjjiqYyy+/XPr06aP7M4kuFdttt51awvHjx2tiwt978cUXpVOnTslXxB8rvmbAut18881NXOyJJ54oo0aNUveKBcwVBIgLR8R8JW7EJZdKImLFl4Gamhq1TCZRoFxCgkDJJB/ROcEVf/3113LuueeqsAcNGiSTJk1K7o03VnwpWL16tUycOFFeeeUVdbFwwQUXaEKBWLy62ObAAs6fP19uueUWFTrf9+zZM7k3vljxOcDF3nvvvXL33XfLDjvsoD8fd9xxcvHFF6sr9MvapQJRX3nllfLhhx9KmzZt5O23307uiS9WfEleffVVueyyy3RkgvocLnbkyJFy5JFHNpvF+gHiW7dunVx44YXy22+/ya233irDhw9P7o0nJS8+hsPuuOMOeeqppxoTClxs//79C+JiM4H7feSRR+Tp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",
            your_change: false,            
          }
        });

        this.payments = [...data,..._payment];

        this.payments = this.payments.sort((a, b) => a.order - b.order);

        console.log("this.payments::> ",this.payments);
      });

      
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
      this._deliveryService.getNotificationHttpId(data).toPromise().then((success: any) => {
        this.order = success.resp;

        if (this.order.discounts && this.order.discounts.length) {
          this.discount = this.order.discounts[0];
        }
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
        this.prints.setOrder(this.order);
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
  // setTransaction(number: number, type: string, id: number, your_change: boolean) {
  setTransaction(form: any, type: string, id: number, your_change: boolean) {
    this.transactions.push({
      type,
      id,
      your_change,
      value: form.number,
      transaction_number: form.transaction_number,
      notes: form.notes,
    });
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
  async paymentSubmit() {
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

    try {
      const respData: any = await this._deliveryService.savePayment(data).toPromise();
      if (respData.response && respData.response.length && respData.response[0] && respData.response[0].respuesta && respData.response[0].respuesta === 'ok') {
        this.isPaymentOnProcess = false;
        // this.loaderService.stopLoader();
        this.loaderService.startLoader('Procesando..');
        await this.printOrderCommand(this.order);
        setTimeout(async () => {
          if (this.order.type_order === 'Venta Directa') {
            this.subscribeIsGenerateDocument = this.prints.getGenerateDocument().subscribe(doc => {
              if (doc) {
                this.setNotificationStatus('done');
              }
            });
          }
          this.loaderService.stopLoader();
          await this.printOrderDocument(this.order);
          this.goBack();
        }, 2000);
      } else {
        this.loaderService.stopLoader();
      }
    } catch (error) {
      this.isPaymentOnProcess = false;
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    }
  }

  /**
   * @description imprimir comanda
   * @param command
   */
  async printOrderCommand(command: any) {
    this._storageSyncService.getPrintConfig().then(async data => {
      this.prints.printConfigActive(data, 'comanda');
      await this.prints.printCommand(command);
    });
  }

  /**
   * @description generar e imprimir documento
   * @param command
   */
  async printOrderDocument(command: any) {
    const data = await this._storageSyncService.getPrintConfig();
    this.prints.printConfigActive(data, 'documento');
    await this.prints.printDocumentPdf417(this.order);
  }

  /**
   * @description abrir modal para descuentos
   */
  async openModalDiscount() {
    if (this.discount) {
      this._toastService.warningToast('Tiene que eliminar el descuento antes de agregar otro');
      return;
    }

    if(this.order.value_discount > 0 && !this.discount) {
      this._toastService.warningToast('Tiene que eliminar el descuento antes de agregar otro');
      return;
    }

    const modal = await this.modalController.create({
      componentProps: {
        data: this.discounts,
      },
      component: OrderListDiscountPage,
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();

    if (data && data.row) {
      this.transactions = [];
      let row: any = {};
      row = {...data.row};

      let obj: any = {};
      if (row.type.toUpperCase() === 'PORCENTUAL') {
        obj.porcentaje = row.value;
        obj.value = this.order.value_total * row.value / 100;
      }

      if (row.type.toUpperCase() === 'MONETARIO') {
        obj.porcentaje = row.value * 100 / this.order.value_total;
        obj.value = row.value;
      }

      if (row.type.toUpperCase() === 'MONETARIO LIBRE') {
        const value: any = await this.getValueDiscount();

        if (value && parseInt(value.value) > 0) {
          obj.porcentaje = parseInt(value.value) * 100 / this.order.value_total;
          obj.value = parseInt(value.value);
        }

        if(value && parseInt(value.value) <= 0) {
          this._toastService.warningToast('El valor del descuento tiene que ser mayor a 0');
          return;
        }

      }

      // el valor total no puede ser mayor al valor del descuento
      if (this.order.value_total < obj.value) {
        this._toastService.warningToast('El descuento no puede ser mayor a total de la orden');
        return;
      }

      // si el valor del descuento es 0
      if (obj.value === 0 || !obj.value) {
        this._toastService.warningToast('El valor del descuento tiene que ser mayor a 0');
        return;
      }

      // asignar el descuento
      this.discount = obj;
      this.order.value_discount = obj.value;

      // setear vareables
      this.discount.id = 0;
      this.discount.discount = row;
      this.order.discounts.push(this.discount);
      this.order.value_total -= this.discount.value;
      this.order.value_pay -= this.discount.value;
      this.forPay = this.order.value_pay;
      // console.log(this.order);
    }
  }

  /**
   * @description nombre del descuento
   */
  nameDiscount() {
    if (this.discounts && this.discounts.length && this.discount) {
      const discount = this.discounts.find(value => value.id === this.discount.discount.id);
      return discount.name;
    }

    return '';
  }

  /**
   * obtener el valor del descuento
   * @param message
   */
  public getValueDiscount = (): Promise<boolean> => {
    return new Promise(resolve => {
      this.alertController.create({
        message: 'Agregar el valor del descuento',
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
        ]
      }).then(alert => {
        alert.present();
      });
    });
  };

  /**
   * @description eliminar descuento
   */
  deleteDiscount() {
    const discounts = this.order.discounts.map(value => {
      if (value.id > 0) {
        value.id = value.id * -1;
      }
      return value;
    }).filter(value => value.id !== 0);

    this.discount = undefined;
    this.order.value_total += this.order.value_discount;
    this.order.value_pay += this.order.value_discount;
    this.forPay = this.order.value_pay;
    this.pay = this.order.value_pay;
    this.order.value_discount = 0;
    this.order.discounts = discounts;
    this.transactions = [];
    // console.log(this.order);
  }
}
