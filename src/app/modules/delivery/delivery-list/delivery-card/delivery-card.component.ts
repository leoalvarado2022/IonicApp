import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-delivery-card',
  templateUrl: './delivery-card.component.html',
  styleUrls: ['./delivery-card.component.scss'],
})
export class DeliveryCardComponent implements OnInit {

  @Input() order: any = null;
  private now = moment();

  @Output() orderSelected: EventEmitter<any> = new EventEmitter<any>();


  constructor() {

  }

  ngOnInit() {
    // console.log(this.order, 'this.order');
  }

  /**
   * viewTicket
   * @param ticket
   */
  public viewOrder = (ticket: any) => {
    this.orderSelected.emit(ticket);
  }

  /**
   * @description tiempo restante
   * @param date
   */
  public dateFormat(date: string): string {
    // @ts-ignore
    // return moment(date, 'DD/MM/YYYY HH:mm:ss');
    return date;
  }
}
