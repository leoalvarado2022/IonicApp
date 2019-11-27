import {Injectable} from '@angular/core';
import {Events} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private isOnline: boolean = navigator.onLine;

  constructor(private events: Events) {

  }

  /**
   * getNetworkStatus
   */
  public getNetworkStatus = (): boolean => {
    return this.isOnline;
  }

  /**
   * setOnline
   */
  public setOnline = (): void => {
    this.events.publish('appOnline', true);
    this.isOnline = true;
  }

  /**
   * setOffline
   */
  public setOffline = (): void => {
    this.events.publish('appOffline', false);
    this.isOnline = false;
  }

}
