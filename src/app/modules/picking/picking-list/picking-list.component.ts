import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PickingService} from '../services/picking.service';
import {StoreService} from '../../../shared/services/store/store.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {DeviceService} from '../../../services/device/device.service';
import {GeolocationService} from '../../../shared/services/geolocation/geolocation.service';
import {ToastService} from '../../../shared/services/toast/toast.service';

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
  public externalNumber = '';
  public currentOrder: any;
  public orderList: Array<any> = [];
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
    private actionSheetController: ActionSheetController
  ) {
    const actions = this.storeService.getTransportActions();
    this.actions = actions.map(a => a.name);
    console.log('actions ::: ', this.actions);
    this.user = this.storeService.getActiveCompany();

    this.geolocationService.getCurrentPosition().toPromise().then(res => {
      this.latitude = res.lat;
      this.longitude = res.lng;
    });
  }

  ngOnInit() {
    this.loadData();
    this.getClients();
  }

  loadData = () => {
    this.loaderService.startLoader('Verificando ordenes');
    const data = {
      user: this.user.user,
      nc: this.deviceService.getFullUUID(),
      type: 'updateReading',
      action: this.action,
    };
    try {
      this.pickingService.pickingOrders(data).toPromise()
        .then((res: any) => {
          this.orderList = res.data.orders.map(o => ({id: o.id, number_external: o.number_external}));
        });
      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }

  getClients = () => {
    const data = {
      user: this.user.user,
      nc: this.deviceService.getFullUUID(),
    };
    this.pickingService.pickingClients(data).toPromise()
      .then((res: any) => {
        this.clients = res.data.clients;
      });
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

  public findOrder = async () => {
    this.loaderService.startLoader('Buscando orden');
    const data = {
      client: this.client,
      number_external: this.externalNumber,
      nc: this.deviceService.getFullUUID(),
      user: this.user.user,
    };

    try {
      this.errorMessage = '';
      const resp: any = await this.pickingService.findOrdenByExternal(data).toPromise();
      this.currentOrder = resp.data.order;

      if (this.currentOrder) {
        const index = this.orderList.findIndex(o => o.id === this.currentOrder.id);
        if (index < 0) {
          this.loaderService.startLoader('Procesando orden');
          const orderData = {
            type: 'updateReading',
            action: this.action,
            orderId: this.currentOrder.id,
            nc: this.deviceService.getFullUUID(),
            user: this.user.user,
          };
          try {
            await this.pickingService.updateOrder(orderData).toPromise();
            this.orderList.push(this.currentOrder);
          } catch (err) {
            await this.toastService.errorToast(err.error?.message ?? 'Ocurrió un error inesperado. Contacte al administrador.');
          }
        }
      }

      this.loaderService.stopLoader();
    } catch (err) {
      this.errorMessage = `Orden ${this.externalNumber} no encontrada.`;
      this.loaderService.stopLoader();
    }
  }

  public checkInList = () => {
    const index = this.orderList.findIndex(o => o.id === this.currentOrder.id);
    return index > -1;
  }

  public processOrder = async () => {
    const exists = this.orderList.findIndex(o => o.id === this.currentOrder.id) > -1;

    if (!exists) {
      this.loaderService.startLoader('Procesando orden');
      try {
        const orderData = {
          type: 'updateReading',
          action: this.action,
          orderId: this.currentOrder.id,
          nc: this.deviceService.getFullUUID(),
          user: this.user.user,
        };
        await this.pickingService.updateOrder(orderData).toPromise();
        this.orderList.push(this.currentOrder);

        this.loaderService.stopLoader();
      } catch (err) {
        this.loaderService.stopLoader();
      }
    }
  }

  public removeCurrentOrder = () => {
    this.currentOrder = null;
  }

  public removeOrder = async (order) => {
    const data = {
      details: [order.id],
      action: this.action,
      nc: this.deviceService.getFullUUID(),
      user: this.user.user,
    };
    this.loaderService.startLoader('Eliminando...');
    try {
      await this.pickingService.removeOrder(data).toPromise();

      const index = this.orderList.findIndex(o => o.id === order.id);
      if (index > -1) {
        this.orderList.splice(index, 1);
      }

      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }

  public removeAllOrders = async () => {
    const data = {
      details: this.orderList.map(o => o.id),
      action: this.action,
      nc: this.deviceService.getFullUUID(),
      user: this.user.user,
    };
    this.loaderService.startLoader('Eliminando...');
    try {
      await this.pickingService.removeOrder(data).toPromise();
      this.orderList = [];
      this.currentOrder = null;
      this.externalNumber = '';
      this.client = null;
      this.clientName = '';

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

  public submitForm = async () => {
    try {
      this.loaderService.startLoader('Guardando...');
      const data = {
        type: 'updateState',
        action: this.action,
        nc: this.deviceService.getFullUUID(),
        user: this.user.user,
        latitude: this.latitude,
        longitude: this.longitude,
      };

      await this.pickingService.updateOrder(data).toPromise();

      this.orderList = [];
      this.currentOrder = null;
      this.externalNumber = '';
      this.client = null;
      this.clientName = '';

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
}
