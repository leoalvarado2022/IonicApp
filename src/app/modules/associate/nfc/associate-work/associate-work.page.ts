import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StoreService } from '../../../../shared/services/store/store.service';
import * as moment from 'moment';
import { StorageSyncService } from '../../../../services/storage/storage-sync/storage-sync.service';
import { DeviceSyncService } from '../../../../services/storage/device-sync/device-sync.service';
import {StepperService} from '../../../../services/storage/stepper/stepper.service';
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
      // this.workers = [...data[0]];
      this.quadrilles = [...data[1]];
      // console.log('this.quadrilles ::: ', this.quadrilles);

      this.workers = data[0].filter((work: any) => {
        // console.log('work ::: ', work);
        const quadrille = this.quadrilles.find(q => q.id === work.quadrille);
        // console.log('quadrille ::: ', quadrille);
        const valid = moment(new Date()).isBetween(moment(work.startDate), moment(work.endDate), null, '[]');
        // return valid && work.active && work.company === company.id && quadrille && quadrille.responsible === company.user;
        return valid && work.active && quadrille && quadrille.responsible === company.user;
      });
      this.filtered = this.workers.filter((value: any, index: any) => index < 10);
    });
    /*this._storageSyncService.getWorkers().then(data => {
      const company = this.storeService.getActiveCompany();
      const quadrilles = this.storeService.getQuadrilles();
      console.log('quadrilles ::: ', quadrilles);
      this.workers = data.filter(work => {
        console.log('work ::: ', work);
        const valid = moment(new Date()).isBetween(moment(work.startDate), moment(work.endDate), null, '[]');
        return valid && work.active && work.company === company.id;
      });
      this.filtered = this.workers.filter((value: any, index: any) => index < 10);
    });*/
  }
  /**
   * cancelWork
   */
  public cancelWork = () => {
    this.filtered = this.workers;
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
