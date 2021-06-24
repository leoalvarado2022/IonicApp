import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {Platform} from '@ionic/angular';
import {StoreService} from '../../../../shared/services/store/store.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {

  @Input() order: any = null;
  @Input() images: any = null;
  @Input() skeleton: any = true;
  private now = moment();

  access = true;

  @Output() orderSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() orderPrint: EventEmitter<any> = new EventEmitter<any>();
  @Output() orderPrintDocument: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteOrderSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateOrderSelected: EventEmitter<any> = new EventEmitter<any>();


  constructor(private platform: Platform,
              private storeService: StoreService) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('android') || this.platform.is('electron') || this.platform.is('desktop')) {
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
  imageIntegration(order) {
    const id_integration = order.id_integration;

    let img = localStorage.getItem(id_integration);

    if (order.origin === 'FX360') {
      const user: any = this.storeService.getActiveCompany();
      img = localStorage.getItem(order.id_entities);
    }

    if (img) {
      return img;
    } else {
      if (this.images.length) {
        if (order.origin === 'FX360') {
          const imgData = this.images.find(value => value.id_entity === +order.id_entities);
          if (imgData) {
            img = imgData.integration_image;
            localStorage.setItem(order.id_entities, img);
          } else {
            img = '';
          }
        } else {
          const imgData = this.images.find(value => value.id_integration === +id_integration);
          if (imgData) {
            img = imgData.integration_image;
            localStorage.setItem(id_integration, img);
          }
        }


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

  /**
   * @description eliminar orden
   * @param command
   */
  deleteOrder(command: any) {
    this.deleteOrderSelected.emit(command);
  }

  /**
   * @description actualizar orden
   * @param command
   */
  updateOrder(command: any) {
    this.updateOrderSelected.emit(command);
  }
}
