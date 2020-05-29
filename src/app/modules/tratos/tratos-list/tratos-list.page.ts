import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddTratoPage} from '../add-trato/add-trato.page';
import {Route, Router} from '@angular/router';
import {DealsService} from '../services/deals/deals.service';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-tratos-list',
  templateUrl: './tratos-list.page.html',
  styleUrls: ['./tratos-list.page.scss'],
})
export class TratosListPage implements OnInit {

  constructor(public modalController: ModalController,
              private _router: Router,
              private _DealService: DealsService,
              private _storeService: StoreService,
              private _changeDetect: ChangeDetectorRef) {
  }

  deals: any = [];

  ngOnInit() {
    this.loadData();
  }

  /**
   * @description load data , phone db
   */
  loadData() {
    let dealsToRecord = this._storeService.getDealsTemp();
    if (dealsToRecord.length) {
      // buscar el usuario logueado
      const user = this._storeService.getUser();

      /// filtrar por usuario
      dealsToRecord = dealsToRecord.filter(value => value.user.id === user.id);

      // comparar que exista en la lista
      const deals = this._DealService.getDeals();

      let arr = [];

      if (dealsToRecord.length) {
        // recorrer lista filtrada
        for (const d of dealsToRecord) {
          // buscar si existe en la  lista de tratos activos
          const new$ = deals.find(value => value.id === d.id);
          // si existe sigue apareciendo
          if (new$) {
            arr.push(new$);
          } else {
            // lo elimina del temporal si no existe
            this._storeService.removeDealsTemp(d.id);
          }
        }
      }

      this.deals = [...arr];
      this._changeDetect.detectChanges();
    }
  }

  /**
   * reload
   */
  public reload = (event) => {
    event.target.complete();
  };

  goToRegister = (item: any) => {
    console.log(item, 'item');
    this._router.navigate(['home-page/tarja_tratos/add-center-cost']);
  };

  activeTrato = async () => {
    const deals = this._DealService.getDeals();
    const modal = await this.modalController.create({
      component: AddTratoPage,
      componentProps: {deals}
    });

    modal.onDidDismiss().then((data) => {
      console.log(data, 'data.onDidDismiss');
      this.loadData();
    });

    return await modal.present();
  };
}
