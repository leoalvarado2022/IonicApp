import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-delivery-card',
  templateUrl: './delivery-card.component.html',
  styleUrls: ['./delivery-card.component.scss'],
})
export class DeliveryCardComponent implements OnInit {

  @Input() order: any = null;
  @Input() images: any = null;
  private now = moment();

  @Output() orderSelected: EventEmitter<any> = new EventEmitter<any>();


  constructor() {

  }

  ngOnInit() {
    // console.log(this.images, 'this.images');
  }

  /**
   * viewTicket
   * @param ticket
   */
  public viewOrder = (order: any) => {
    this.orderSelected.emit(order);
  };

  /**
   * @description obtener las imagenes
   * @param id_integration
   */
  imageIntegration(id_integration) {
    const img = localStorage.getItem(id_integration);
    if (img) {
      return img;
    } else {
      if(this.images.length) {
        const imgData = this.images.find(value => value.id_integration === +id_integration);
        const img = imgData.integration_image;
        localStorage.setItem(id_integration, img);
        return img;
      }

    }

    return '';
  }
}
