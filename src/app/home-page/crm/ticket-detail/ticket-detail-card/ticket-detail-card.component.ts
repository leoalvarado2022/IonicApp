import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ticket-detail-card',
  templateUrl: './ticket-detail-card.component.html',
  styleUrls: ['./ticket-detail-card.component.scss'],
})
export class TicketDetailCardComponent implements OnInit {

  @Input() detail: any;

  constructor() {

  }

  ngOnInit() {

  }

}
