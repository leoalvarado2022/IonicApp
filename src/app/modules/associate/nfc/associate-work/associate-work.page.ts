import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {StoreService} from '../../../../shared/services/store/store.service';
import * as moment from 'moment';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';
import {DeviceSyncService} from '../../../../services/storage/device-sync/device-sync.service';

@Component({
  selector: 'app-associate-work',
  templateUrl: './associate-work.page.html',
  styleUrls: ['./associate-work.page.scss'],
})
export class AssociateWorkPage implements OnInit {

  workers: any;
  filtered = [];
  tag = [];

  constructor(public modalController: ModalController,
              private storeService: StoreService,
              public _storageSyncService: StorageSyncService,
              private _deviceSyncService: DeviceSyncService,
              private navParams: NavParams) {
    this.tag = this.navParams.get('tag');
  }


  ngOnInit() {
    this.filterActiveWork();
  }

  /**
   * @description buscar los trabajadores activos por compañía y los que tengas fechas validas
   */
  private filterActiveWork = () => {
    this._storageSyncService.getWorkers().then(data => {
      const company = this.storeService.getActiveCompany();
      this.workers = data.filter(data => {
        const valid = moment(new Date()).isBetween(moment(data.startDate), moment(data.endDate), null, '[]');
        return valid && data.active && data.company === company.id;
      });

      this.filtered = this.workers.filter((value: any, index: any) => index < 10);
    });
  };

  /**
   * cancelWork
   */
  public cancelWork = () => {
    this.filtered = this.workers;
  };

  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this.modalController.dismiss(data);
  };


  /**
   * @description filtrar pero siempre con un maximo de 10 registros
   * @param search
   */
  public searchWork = (search: string) => {
    if (!search || !search.length) {
      this.filtered = this.workers;
      return;
    }

    this.filtered = this.workers
      .filter((worker: any, index: any) => {
        const filter = search.toLowerCase().replace(/\./g, '').replace(/-/g, '');
        const matchIdentified = worker.identifier ? worker.identifier.toLowerCase().indexOf(filter.toLowerCase()) > -1 : true;
        const matchName = worker.names ? worker.names.toLowerCase().indexOf(filter.toLowerCase()) > -1 : true;
        return (matchIdentified || matchName) && index < 5;
      });
  };


  /**
   * @description seleccionar trabajador
   * @param worker
   */
  async onPress(worker) {

    const tempId = await this._deviceSyncService.getDeviceTempId();

    let body: any;
    body = this.tag;
    body.id = 0;
    body.id_link = worker.id;
    body.link = worker.names;
    body.tempId = tempId;
    body.tempId = tempId;
    body.date = moment().format('YYYY-MM-DD HH:mm:ss');

    if (body) {
      await this._deviceSyncService.addDevicesToRecord(body);
    }

    await this.closeWork(body);
  }

}
