import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent implements OnInit {

  @Input() ticket: any = null;

  @Output() ticketSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteTicketEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {

  }

  /**
   * viewTicket
   * @param ticket
   */
  public viewTicket = (ticket: any) => {
    this.ticketSelected.emit(ticket);
  }

  /**
   * deleteTicket
   * @param ticket
   */
  public deleteTicket = (ticket: any) => {
    this.deleteTicketEvent.emit(ticket);
  }
}
