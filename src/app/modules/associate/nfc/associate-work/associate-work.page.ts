import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {StoreService} from '../../../../shared/services/store/store.service';
import * as moment from 'moment';

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
              private navParams: NavParams) {
    this.tag = this.navParams.get('tag');
  }


  ngOnInit() {
    this.workers = this.filterActiveWork();
    this.filtered = this.workers.filter((value: any, index: any) => index < 10);
  }

  /**
   * @description buscar los trabajadores activos por compañía y los que tengas fechas validas
   */
  private filterActiveWork = () => {
    const company = this.storeService.getActiveCompany();
    let workers = this.storeService.getWorkers();

    workers = workers.filter(data => {
      const valid = moment(new Date()).isBetween(moment(data.startDate), moment(data.endDate), null, '[]');
      return valid && data.active && data.company === company.id;
    });

    return workers;
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
  public closeWork = async (data: any) => {
    await this.modalController.dismiss({
      'data': data
    });
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
    let body: any;
    body = this.tag;
    body.id_link = worker.id;
    body.link = worker.names;

    if (body) {
      this.storeService.setPreDevices(body);
    }
    this.closeWork(body);
  }

}
