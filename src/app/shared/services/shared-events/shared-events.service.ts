import {Injectable} from '@angular/core';
import {Events} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {

  constructor(
    private events: Events
  ) {

  }

  /**
   * connectionChanged
   */
  public connectionChanged = () => {
    this.events.publish('connectionChange', true);
  }

  /**
   * companyChanged
   */
  public companyChanged = () => {
    this.events.publish('companyChange', true);
  }

}
