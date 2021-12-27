import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {

  order = null;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
  ) {
    this.order = this.navParams.get('order');
  }

  ngOnInit() {
  }

  public closeWork = async () => {
    await this.modalController.dismiss();
  }
}
