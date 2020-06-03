import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-tratos-scanned',
  templateUrl: './tratos-scanned.page.html',
  styleUrls: ['./tratos-scanned.page.scss'],
})
export class TratosScannedPage implements OnInit {

  @Input() centerCost: any;
  workersSuccess = [];
  worker = '';
  devices: any;
  workers: any;
  exist: boolean = true;

  constructor(public _modalController: ModalController,
              private _storageSyncService: StorageSyncService,
              private _storeService: StoreService) {
  }


  // automatic: true
  // center_cost: 14
  // currentDate: "2020-06-03"
  // deal:
  //   active: true
  //   allCostCenters: false
  //    automatic: true
  //    count: true
  //    date_end: "2020-07-31T00:00:00.000Z"
  //    date_init: "2020-05-14T00:00:00.000Z"
  //     gps: false
  //    id: 4
  //    id_costCenter: 14
  //     id_deal_validity: 5
  //    id_labor: 1
  //    method: "nfc"
  //    name_deal: "Trato Arandaro g2"
  //     name_labor: "Gerente"
  //    nfc: true
  //     option: "1"
  //    performance: false
  //    qr: false
  //    unit_control: "Litros"
  //     user: {id: 314, username: "26618736K", token: "5B7E4BC5", name: "Leonard", lastName: "Olivares", …}
  //     weight: false
  //unit_control_count: 1
  ngOnInit() {
    console.log(this.centerCost, 'modal.centerCost');

    this.devices = this._storeService.getDevices();
    this.workers = this._storeService.getWorkers();
  }

  /**
   * escaneo
   * @param id
   */
  pullDevice(id: any) {
    const device = this.devices.find(value => value.id_device === id);

    console.log(device, 'device');

    if (device) {
      const info = this.workers.find(value => value.id === device.id_link);

      console.log(info, 'info');
      if (info) {
        this.worker = info.names;
        this.exist = true;
      } else {
        this.worker = `Trabajador ${device.link} no activo`;
        this.exist = false;
      }
    } else {
      this.worker = `No existe trabajador con el dispositivo  ${id}`;
      this.exist = false;
    }
    console.log(device, 'devices');
  }

  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this._modalController.dismiss();
  };

  escaneoOne() {
    const id = 'ddfc95e4';
    console.log('escaneoOne', id);
    this.pullDevice(id);
  }

  escaneoTwo() {
    const id = 'ddfc50e4';
    console.log('escaneoTwo', id);
    this.pullDevice(id);
  }

  escaneoThree() {
    const id = 'ddf450e4';
    console.log('escaneoThree', id);
    this.pullDevice(id);
  }

}
