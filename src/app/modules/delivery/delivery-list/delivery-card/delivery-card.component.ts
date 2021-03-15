import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-delivery-card',
  templateUrl: './delivery-card.component.html',
  styleUrls: ['./delivery-card.component.scss'],
})
export class DeliveryCardComponent implements OnInit {

  @Input() order: any = null;
  @Input() images: any = null;
  private now = moment();

  access = true;

  @Output() orderSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() orderPrint: EventEmitter<any> = new EventEmitter<any>();
  @Output() orderPrintDocument: EventEmitter<any> = new EventEmitter<any>();


  constructor(private platform: Platform) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.access = false;
      }
    });
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
      if (this.images.length) {
        const imgData = this.images.find(value => value.id_integration === +id_integration);
        const img = imgData.integration_image;
        localStorage.setItem(id_integration, img);
        return img;
      }

    }

    return '';
  }

  /**
   * @description print command
   * @param command
   */
  printCommand(command: any) {
    this.orderPrint.emit(command);
  }

  /**
   * @description print document pdf417
   * @param command
   */
  printDocumentPdf417(command: any) {
    this.orderPrintDocument.emit(command);
  }
}
