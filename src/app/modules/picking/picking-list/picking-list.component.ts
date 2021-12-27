import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ActionSheetController, AlertController, ModalController} from '@ionic/angular';
import {PickingService} from '../services/picking.service';
import {StoreService} from '../../../shared/services/store/store.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {DeviceService} from '../../../services/device/device.service';
import {GeolocationService} from '../../../shared/services/geolocation/geolocation.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {OrderDetailComponent} from '../order-detail/order-detail.component';
import {sortArrayByNumberKey} from '../../../helpers/utils';

@Component({
  selector: 'app-picking-list',
  templateUrl: './picking-list.component.html',
  styleUrls: ['./picking-list.component.scss'],
})
export class PickingListComponent implements OnInit {

  public user = null;
  public actions = [];
  public action = 'picking';
  public client = null;
  public clients: Array<any> = [];
  public filteredClients: Array<any> = [];
  public clientName: string;
  public clientDisabled = false;
  public externalNumber = '';
  // public externalNumber = 'NUMEXT9901';
  public currentOrder: any;
  public orderList: Array<any> = [];
  public orderGroup: Array<any> = [];
  public errorMessage: string;
  public latitude: number;
  public longitude: number;

  public dataBase: any;

  constructor(
    private router: Router,
    private pickingService: PickingService,
    private storeService: StoreService,
    private loaderService: LoaderService,
    private alertController: AlertController,
    private deviceService: DeviceService,
    private geolocationService: GeolocationService,
    private toastService: ToastService,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
  ) {
    const actions = this.storeService.getTransportActions();
    this.actions = actions.map(a => a.name);
    this.user = this.storeService.getActiveCompany();

    this.geolocationService.getCurrentPosition().toPromise().then(res => {
      this.latitude = res.lat;
      this.longitude = res.lng;
    });
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.orderList = [];
    this.orderGroup = [];
    this.currentOrder = null;
    this.externalNumber = '';
    this.client = null;
    this.clientName = '';
    this.clientDisabled = false;
  }

  ionViewDidEnter() {
    this.loaderService.startLoader('Verificando ordenes');
    this.getClients().then((res: any) => {
      this.clients = res.data.clients;
      this.loadData().then(() => {
        this.loaderService.stopLoader();
      });
    }).catch(err => {
      this.loaderService.stopLoader();
    });
  }

  loadData = async () => {
    const data = {
      user: this.user.user,
      // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
      nc: this.deviceService.getFullUUID(),
      type: 'updateReading',
      action: this.action,
    };
    const res: any = await this.pickingService.pickingOrders(data).toPromise();
    this.orderList = res.data.orders;
    this.orderGroup = this.groupByNumExternal(res.data.orders, true);

    if (res.data.orders.length > 0) {
      const client = this.clients.find(c => c.id === this.orderList[0].client_id);
      this.client = client.id;
      this.clientName = client.name;
      this.clientDisabled = true;
    }

    // this.pickingService.pickingOrders(data).toPromise()
    //   .then((res: any) => {
    //     this.orderList = res.data.orders;
    //     this.orderGroup = this.groupByNumExternal(res.data.orders, true);
    //
    //     if (res.data.orders.length > 0) {
    //       const client = this.clients.find(c => c.id === this.orderList[0].client_id);
    //       this.client = client.id;
    //       this.clientName = client.name;
    //       this.clientDisabled = true;
    //     }
    //   });
  }

  getClients = () => {
    const data = {
      user: this.user.user,
      // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
      nc: this.deviceService.getFullUUID(),
    };
    return this.pickingService.pickingClients(data).toPromise();
  }

  goBack() {
    this.router.navigate(['/home-page']);
  }

  public searchClient = (search: string): void => {
    if (search) {
      this.filteredClients = this.clients.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredClients = [];
    }
  }

  public cleanClientSearch = (): void => {
    this.client = null;
    this.filteredClients = [];
    this.clientName = null;
  }

  public selectClient = (client: any): void => {
    this.client = client.id;
    this.clientName = client.name;
    this.filteredClients = [];
  }

  public getOrderByNumberExternal = async () => {
    if (this.externalNumber.trim()) {
      const orders = await this.findOrder(this.externalNumber.trim());

      const alreadyRead = orders.filter(o => o.state === 'generada' && o.response === 'Orden ya leida').length;
      if (alreadyRead === orders.length) {
        this.errorMessage = 'Esta orden esta completa';
      } else {
        // this.orderList = orders;
        const sortedOrders = sortArrayByNumberKey(orders, 'number_package');
        for (const order of sortedOrders) {
          if (order.state === 'generada' && order.response === 'OK') {
            this.currentOrder = order;
            break;
          }
        }

        if (this.currentOrder) {
          await this.processOrder(this.currentOrder);
          const ordersAfter = await this.findOrder(this.externalNumber.trim(), true);
          // this.orderList = ordersAfter;
          this.orderList = this.customConcat(ordersAfter);
          this.orderGroup = this.groupByNumExternal(this.orderList);
        }
      }
      this.externalNumber = '';
    }
  }

  public customConcat = (arr) => {
    const returnArr = this.orderList || [];
    for (const item of arr) {
      const index = returnArr.findIndex(o => o.id === item.id);

      if (index > -1) {
        this.orderList[index] = item;
      } else {
        this.orderList.push(item);
      }
    }
    return returnArr;
  }

  public findOrder = async (externalNumber, simple = false) => {
    this.loaderService.startLoader(!simple ? 'Buscando orden' : 'Procesando orden');

    const data = {
      client: this.client,
      number_external: externalNumber,
      // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
      nc: this.deviceService.getFullUUID(),
      user: this.user.user,
    };

    try {
      if (!simple) {
        this.currentOrder = null;
        this.errorMessage = '';
      }
      const resp: any = await this.pickingService.findOrdenByExternal(data).toPromise();
      this.loaderService.stopLoader();

      return resp.data?.order || [];
    } catch (err) {
      this.errorMessage = err.error?.message ?? `Orden ${this.externalNumber} no encontrada.`;
      this.loaderService.stopLoader();
    }
  }

  public checkInList = () => {
    const index = this.orderList.findIndex(o => o.id === this.currentOrder.id);
    return index > -1;
  }

  public processOrder = async (order) => {
    this.loaderService.startLoader('Procesando orden');
    try {
      const orderData = {
        type: 'updateReading',
        action: this.action,
        orderId: order.id,
        // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
        nc: this.deviceService.getFullUUID(),
        user: this.user.user,
      };
      try {
        await this.pickingService.updateOrder(orderData).toPromise();
        this.clientDisabled = true;
      } catch (err) {
        await this.toastService.errorToast(err.error?.message ?? 'Ocurrió un error inesperado. Contacte al administrador.');
      }

      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }

  public removeCurrentOrder = () => {
    this.currentOrder = null;
  }

  public removeOrder = async (order) => {
    // console.log('group id :: ', order.group_id);
    // return;
    const data = {
      details: order.group_id,
      action: this.action,
      // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
      nc: this.deviceService.getFullUUID(),
      user: this.user.user,
    };
    this.loaderService.startLoader('Eliminando...');
    try {
      this.currentOrder = null;
      this.errorMessage = '';
      await this.pickingService.removeOrder(data).toPromise();

      for (const orderId of order.group_id) {
        const index = this.orderList.findIndex(o => o.id === orderId);
        if (index > -1) {
          this.orderList.splice(index, 1);
          this.orderGroup = this.groupByNumExternal(this.orderList);
        }
      }

      if (this.orderList.length === 0) {
        this.clientDisabled = false;
      }

      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }

  public removeAllOrders = async () => {
    // console.log('all group id ::: ', this.orderGroup.reduce((next, prev) => next.concat(prev.group_id), []));
    // return;
    const data = {
      details: this.orderGroup.reduce((next, prev) => next.concat(prev.group_id), []),
      action: this.action,
      // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
      nc: this.deviceService.getFullUUID(),
      user: this.user.user,
    };
    this.loaderService.startLoader('Eliminando...');
    try {
      await this.pickingService.removeOrder(data).toPromise();
      this.orderList = [];
      this.orderGroup = [];
      this.currentOrder = null;
      this.externalNumber = '';
      this.client = null;
      this.clientName = '';
      this.clientDisabled = false;

      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }

  public cancelPicking = async () => {
    const alert = await this.alertController.create({
      message: '¿Estás seguro de cancelar picking?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('cancelado');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.removeAllOrders();
          }
        },
      ]
    });

    await alert.present();
  }

  public checkBeforeSubmit = async () => {
    const incomplete = this.orderGroup.some(o => o.number_package !== o.total_package);

    if (incomplete) {
      const alert = await this.alertController.create({
        header: '¿Estás seguro de continuar?',
        message: 'Hay algunas ordenes que no tienen los bultos completos.',
        backdropDismiss: false,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('cancelado');
            }
          },
          {
            text: 'Si',
            handler: () => {
              this.submitForm();
            }
          },
        ]
      });

      await alert.present();
    } else {
      await this.submitForm();
    }
  }

  public submitForm = async () => {
    try {
      this.loaderService.startLoader('Guardando...');
      const data = {
        type: 'updateState',
        action: this.action,
        // nc: this.deviceService.getFullUUID() || '54a62048537a716a',
        nc: this.deviceService.getFullUUID(),
        user: this.user.user,
        latitude: this.latitude,
        longitude: this.longitude,
      };

      await this.pickingService.updateOrder(data).toPromise();

      this.orderList = [];
      this.orderGroup = [];
      this.currentOrder = null;
      this.externalNumber = '';
      this.clientDisabled = false;
      // this.client = null;
      // this.clientName = '';

      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }

  public selectAction = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione la acción',
      buttons: [
        ...this.actions.map(a => ({
          text: a.toUpperCase(),
          handler: () => {
            this.action = a;
          }
        })),
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        }],
    });

    await actionSheet.present();
  }

  public orderDetail = async (order = null) => {
    // let orderDetail;
    //
    // if (!order) {
    //   orderDetail = {
    //     ...this.currentOrder,
    //     client_name: this.clientName,
    //   };
    // } else {
    //   const client = this.clients.find(c => c.id === order.client_id);
    //   orderDetail = {
    //     ...order,
    //     client_name: client.name,
    //   };
    // }
    const modal = await this.modalController.create({
      component: OrderDetailComponent,
      componentProps: {
        // order: orderDetail,
        order: {
          ...this.currentOrder,
          client_name: this.clientName,
        },
      }
    });

    return await modal.present();
  }

  public groupByNumExternal = (arr, fromPending = false) => {
    if (!arr) {
      return [];
    }

    const rArray = [];

    for (const item of arr) {
      const index = rArray.findIndex(r => r.number_external === item.number_external);

      if (index > -1) {
        rArray[index] = {
          ...rArray[index],
          group_id: rArray[index].group_id.concat(item.id),
        };
      } else {
        rArray.push({
          ...item,
          group_id: [item.id],
        });
      }
    }

    for (const item of rArray) {
      const group = arr.filter(a => a.number_external === item.number_external);
      item.number_package = !fromPending
        ? group.filter(r => (r.state === 'generada' && r.response === 'Orden ya leida') || (r.state === 'picking' && r.response === 'Orden en estado picking')).length
        : group.length;
    }

    return sortArrayByNumberKey(rArray, 'number_package', 'desc');
  }
}
