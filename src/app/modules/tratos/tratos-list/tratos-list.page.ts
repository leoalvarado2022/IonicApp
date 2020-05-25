import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddTratoPage} from '../add-trato/add-trato.page';
import {Route, Router} from '@angular/router';
import {DealsService} from '../services/deals/deals.service';

@Component({
  selector: 'app-tratos-list',
  templateUrl: './tratos-list.page.html',
  styleUrls: ['./tratos-list.page.scss'],
})
export class TratosListPage implements OnInit {

  constructor(public modalController: ModalController,
              private _router: Router,
              private _DealService: DealsService) { }
  deals: any;

  ngOnInit() {
    const deals = this._DealService.getDeals();

    this.deals = deals.filter(data => data.nfc);
  }

  /**
   * reload
   */
  public reload = (event) => {
    event.target.complete();
  }

  goToRegister = (item: any) => {
    console.log(item, 'item');
    this._router.navigate(['home-page/tarja_tratos/add-center-cost']);
  }

  activeTrato = async () => {
    const deals = this._DealService.getDeals();
    const modal = await this.modalController.create({
      component: AddTratoPage,
      componentProps: {deals}
    });

    modal.onDidDismiss().then((data) => {
      console.log(data, 'data.onDidDismiss');
    });

    return await modal.present();
  }
}
