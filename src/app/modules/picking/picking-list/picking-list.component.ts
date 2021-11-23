import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PickingService} from '../services/picking.service';
import {StoreService} from '../../../shared/services/store/store.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {AlertController} from '@ionic/angular';
import {DeviceService} from '../../../services/device/device.service';

@Component({
  selector: 'app-picking-list',
  templateUrl: './picking-list.component.html',
  styleUrls: ['./picking-list.component.scss'],
})
export class PickingListComponent implements OnInit {

  public action = 'picking';
  public client = 63;
  public clients: Array<any> = [];
  public filteredClients: Array<any> = [];
  public clientName: string;
  public externalNumber = 'NUMEXT00023';
  public currentOrder: any;
  public orderList: Array<any> = [];
  public errorMessage: string;

  constructor(
    private router: Router,
    private pickingService: PickingService,
    private storeService: StoreService,
    private loaderService: LoaderService,
    private alertController: AlertController,
    private deviceService: DeviceService,
  ) { }

  ngOnInit() {
    const user = this.storeService.getActiveCompany();

    const data = {
      user: user.user,
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
          };
          await this.pickingService.updateOrder(orderData).toPromise();

          this.orderList.push(this.currentOrder);
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
    };
    this.loaderService.startLoader('Eliminando...');
    try {
      await this.pickingService.removeOrder(data).toPromise();
      this.orderList = [];

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
      const data = {
        type: 'updateState',
        action: this.action,
        nc: this.deviceService.getFullUUID(),
      };

      await this.pickingService.updateOrder(data).toPromise();

      this.orderList = [];
      this.currentOrder = null;

      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderService.stopLoader();
    }
  }
}
