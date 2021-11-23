import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StoreService } from '../../../../shared/services/store/store.service';
import * as moment from 'moment';
import { StorageSyncService } from '../../../../services/storage/storage-sync/storage-sync.service';
import { DeviceSyncService } from '../../../../services/storage/device-sync/device-sync.service';
import {StepperService} from '../../../../services/storage/stepper/stepper.service';
import {sortArrayByStringKey} from '../../../../helpers/utils';
@Component({
  selector: 'app-associate-work',
  templateUrl: './associate-work.page.html',
  styleUrls: ['./associate-work.page.scss'],
})
export class AssociateWorkPage implements OnInit {
  workers: any;
  quadrilles: any;
  filtered = [];
  tag = [];
  loading = false;

  constructor(
    public modalController: ModalController,
    private storeService: StoreService,
    public _storageSyncService: StorageSyncService,
    private _deviceSyncService: DeviceSyncService,
    private navParams: NavParams,
    public stepperService: StepperService,
  ) {
    this.tag = this.navParams.get('tag');
  }
  ngOnInit() {
    this.filterActiveWork();
  }
  /**
   * @description buscar los trabajadores activos por compañía y los que tengas fechas validas
   */
  private filterActiveWork = () => {
    const company = this.storeService.getActiveCompany();
    const access = this.storeService.getAccess();

    Promise.all([
      this._storageSyncService.getWorkers(),
      this._storageSyncService.getQuadrillesByCurrentUser(company.user, !!access.find(x => x.functionality === 4)),
    ]).then(data => {
      this.quadrilles = [...data[1]];

      this.workers = data[0].filter((work: any) => {
        const quadrille = this.quadrilles.find(q => q.id === work.quadrille);
        const valid = moment(new Date()).isBetween(moment(work.startDate), moment(work.endDate), null, '[]');
        return valid && work.active && quadrille && quadrille.responsible === company.user;
      });
      this.filtered = sortArrayByStringKey(this.workers.filter((value: any, index: any) => index < 10), 'name');
    });
  }
  /**
   * cancelWork
   */
  public cancelWork = () => {
    this.filtered = sortArrayByStringKey(this.workers, 'name');
  }
  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this.modalController.dismiss(data);
  }
  /**
   * @description filtrar pero siempre con un maximo de 10 registros
   * @param search
   */
  public searchWork = (search: string) => {
    if (!search || !search.length) {
      this.filtered = sortArrayByStringKey(this.workers, 'name');
      return;
    }
    const arr = this.workers
      .filter((worker: any, index: any) => {
        const filter = search.toLowerCase().replace(/\./g, '').replace(/-/g, '');
        const matchIdentified = worker.identifier ? worker.identifier.toLowerCase().indexOf(filter.toLowerCase()) > -1 : true;
        const matchName = worker.names ? worker.names.toLowerCase().indexOf(filter.toLowerCase()) > -1 : true;
        return (matchIdentified || matchName) && index < 5;
      });
    this.filtered = sortArrayByStringKey(arr, 'name');
  }
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
    body.link = worker.name;
    body.tempId = tempId;
    // body.tempId = tempId;
    body.date = moment().format('YYYY-MM-DD HH:mm:ss');
    if (body) {
      this.loading = true;
      await this._deviceSyncService.addDevicesToRecord(body);
      // await this.stepperService.syncAll();
      this.loading = false;
    }
    await this.closeWork(body);
  }
}
