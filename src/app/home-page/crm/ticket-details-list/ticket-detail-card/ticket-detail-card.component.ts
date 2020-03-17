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


  /**
   * buildLink
   * @param file
   */
  public buildLink = (file: any): string => {
    if (file.link && file.link !== 'undefined') {
      return `https://drive.google.com/file/d/${file.link}/view?usp=sharing`;
    }

    return '#';
  }
}
