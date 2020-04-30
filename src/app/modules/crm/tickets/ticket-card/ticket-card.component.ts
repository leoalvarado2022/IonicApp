import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent implements OnInit {

  @Input() ticket: any = null;
  private now = moment();

  @Output() ticketSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteTicketEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
    // console.log(this.ticket, 'this.ticket');
  }

  /**
   * viewTicket
   * @param ticket
   */
  public viewTicket = (ticket: any) => {
    this.ticketSelected.emit(ticket);
  };

  /**
   * @description tiempo restante
   * @param date
   */
  public remainingTime(date: string): string {
    const _date = moment(date, 'DD/MM/YYYY HH:mm:ss');
    const difference = _date.diff(this.now, 'hours');

    if (difference < 0) {
      return;
    }

    return difference + ' h';
  }

  /**
   * @description fecha critica
   * @param element
   */
  public remainingTimeStatus(element: any): string {
    let response = '';
    const maxResolution = element.maxResolution;
    const criticResolution = element.criticResolution;
    // Critic
    if (criticResolution != '01/01/1900 00:00:00') {
      const _dateCritic = moment(criticResolution, 'DD/MM/YYYY HH:mm:ss');
      const differenceCritic = _dateCritic.diff(this.now, 'hours');
      if (differenceCritic <= 0) {
        response = 'orange-500-fg';
      }
    }
    // Passed
    if (maxResolution != '01/01/1900 00:00:00') {
      const _dateMax = moment(maxResolution, 'DD/MM/YYYY HH:mm:ss');
      const differenceMax = _dateMax.diff(this.now, 'hours');
      if (differenceMax < 0) {
        response = 'warn-500-fg';
      }
    }
    return response;
  }

}
