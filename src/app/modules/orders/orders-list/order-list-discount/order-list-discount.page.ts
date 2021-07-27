import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-search-truck',
  templateUrl: './order-list-discount.page.html',
  styleUrls: ['./order-list-discount.page.scss'],
})
export class OrderListDiscountPage implements OnInit {

  @Input() data;
  // dataTemp;

  constructor(public modalController: ModalController) {

  }


  ngOnInit() {
    // this.load();
  }

  load() {
    // this.dataTemp = this.data;
  }

  /**
   * @description cerrar modal
   * @param data
   */
  back(data = null) {
    this.modalController.dismiss(
        {
          row: data
        }
    )
  }

  // /**
  //  * @description cancelar busqueda
  //  */
  // searchCancel() {
  //   this.dataTemp = this.data;
  // }
}
