import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ticket-detail-card',
  templateUrl: './ticket-detail-card.component.html',
  styleUrls: ['./ticket-detail-card.component.scss'],
})
export class TicketDetailCardComponent implements OnInit {

  @Input() detail: any;

  constructor(
    private inAppBrowser: InAppBrowser,
    private platform: Platform
  ) {

  }

  ngOnInit() {

  }

  /**
   * buildLink
   * @param file to build link
   */
  private buildLink = (file: any): string => {
    if (file.link && file.link !== 'undefined') {
      return `https://drive.google.com/file/d/${file.link}/view?usp=sharing`;
    }

    return '#';
  }

  /**
   * openLink
   * @param file to open 
   */
  public openLink = (file: any): void => {
    const url = this.buildLink(file);

    if (this.platform.is('mobile')) {
      this.inAppBrowser.create(url, '_blank');
    } else {
      window.open(url, "_blank");
    }
  }

}
