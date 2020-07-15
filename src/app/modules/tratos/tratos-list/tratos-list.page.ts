import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddTratoPage} from '../add-trato/add-trato.page';
import {Router} from '@angular/router';
import {DealsService} from '../services/deals/deals.service';
import {StoreService} from '../../../shared/services/store/store.service';
import * as moment from 'moment';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {WorkerDealsComponent} from '../worker-deals/worker-deals.component';

@Component({
  selector: 'app-tratos-list',
  templateUrl: './tratos-list.page.html',
  styleUrls: ['./tratos-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TratosListPage {

  deals: any = [];
  tallyTemp = [];

  constructor(public modalController: ModalController,
              private _router: Router,
              private _DealService: DealsService,
              private _storeService: StoreService,
              private _storageSyncService: StorageSyncService,
              private _changeDetect: ChangeDetectorRef) {
  }

  ionViewWillEnter() {
    console.log('tratos-list.ionViewWillEnter',);
    this.loadData();
  }


  /**
   * @description remove deal
   * @param id
   * @param event
   */
  removeDeal(id: number, event: any) {
    event.close();
    this.deals = this.deals.filter(value => value.id !== id);
    this._DealService.removeDealsTemp(id).then();
  }

  /**
   * @description load data , phone db
   */
  loadData() {
    Promise.all([
      this._DealService.getDealsTemp(),
      this._DealService.getDeals()
    ]).then(data => {
      // console.log(data, 'data');
      let dealsToRecord = data[0];
      if (dealsToRecord.length) {
        // buscar el usuario logueado
        const user = this._storeService.getUser();

        /// filtrar por usuario
        dealsToRecord = dealsToRecord.filter(value => value.user.id === user.id);

        // comparar que exista en la lista
        const deals = data[0];

        let arr = [];

        if (dealsToRecord.length) {
          // recorrer lista filtrada
          for (const d of dealsToRecord) {
            // buscar si existe en la  lista de tratos activos
            const new$ = deals.find(value => value.id === d.id);
            // si existe sigue apareciendo
            if (new$) {
              arr.push(d);
            } else {
              // lo elimina del temporal si no existe
              this._DealService.removeDealsTemp(d.id).then();
            }
          }
        }

        this.deals = [...arr];
        // mapear deals
        this.mapDeals();
        this._changeDetect.detectChanges();
      }
    });
  }

  /**
   * mapear tratos
   */
  mapDeals() {
    Promise.all([
      this._storageSyncService.getTallies(),
      this._storageSyncService.getTallyTemp()
    ]).then(data => {
      // console.log(data[0], 'getTallies', data[1], 'getTallyTemp');
      let tallies: any = [];
      // si las tarjas existen
      if (data[0] && data[0].length) {
        tallies = data[0].filter(value => moment(value.date).utc().format('YYYY-MM-DD') === moment().utc().format('YYYY-MM-DD') && value.dispositivo === 1);

        if (tallies.length) {
          // mapear tarjas pra el conteo y para clasificarlos en escaneo
          tallies = tallies.map(value => {
            value.rendimiento = value.performance;
            value.id_par_entidades_trabajador = value.workerId;
            value.id_par_tratos_vigencias = value.dealValidity;
            value.id_par_centros_costos = value.costCenterId;
            return value;
          });

          this.tallyTemp = [...tallies];
        }
      }

      // si hay temporales tambien se agregan
      if (data[1] && data[1].length) {
        this.tallyTemp = [...data[1]];
      }

      // se agrega a los temporales
      this._storageSyncService.setTallyTemp(this.tallyTemp).then();
      // console.log(this.tallyTemp);
      this._changeDetect.detectChanges();
    });
  }

  /**
   * conteo de trabajadores por tratos
   * @param deal
   */
  workersCount(deal) {
    const tallies = this.tallyTemp.filter(value => value.id_par_tratos_vigencias === deal.id_deal_validity);
    const worker = this._DealService.groupBy(tallies, (item) => item.id_par_entidades_trabajador);
    let count = [];
    worker.forEach((valor, clave, map) => {
      if (valor.length) {
        count.push(valor[0]);
      }
    });

    return count.length;
  }

  /**
   * conteo de trabajadores por tratos
   * @param deal
   */
  performanceCount(deal) {
    const tallies = this.tallyTemp.filter(value => value.id_par_tratos_vigencias === deal.id_deal_validity);
    let performance = 0;
    if (tallies.length) {
      performance = tallies
        .map(obj => obj.rendimiento || 0)
        .reduce((sum, current) => sum + current) + performance;
    }

    return performance;
  }

  /**
   * reload
   */
  public reload = (event) => {
    event.target.complete();
  };

  goToRegister = (item: any) => {
    this._DealService.setDealLocal(item);
    this._router.navigate(['home-page/tarja_tratos/add-center-cost']);
  };

  /**
   * activar trato
   */
  activeTrato = async () => {
    const deals = await this._DealService.getDeals();

    const modal = await this.modalController.create({
      component: AddTratoPage,
      componentProps: {deals}
    });

    modal.onDidDismiss().then((data) => {
      this.loadData();
    });

    return await modal.present();
  };

  /**
   * @description
   * @param deals
   * @param event
   */
  async showWorkers(deals: any, event: any) {
    event.close();
    const tallies = this.tallyTemp.filter(value => value.id_par_tratos_vigencias === deals.id_deal_validity);
    const worker = this._DealService.groupBy(tallies, (item) => item.id_par_entidades_trabajador);
    let work = [];
    worker.forEach((valor, clave, map) => {
      if (valor.length) {
        work.push(valor[0]);
      }
    });
    const nameWorker = await this._storageSyncService.getWorkers();
    work = work.map((data: any) => {
      data.worker = nameWorker.find(value => value.id === data.workerId);
      return data;
    });

    deals.worker = work;
    const modal = await this.modalController.create({
      component: WorkerDealsComponent,
      componentProps: {deals}
    });

    modal.onDidDismiss().then((data) => {
      console.log(data, 'data.onDidDismiss');
    });

    return await modal.present();
  }
}
