import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private isOnline = true;

  constructor() {
    console.log('listen to online');
    window.addEventListener('online', () => {
      console.log('back online');
      this.setOnline();
    });

    console.log('listen to offline');
    window.addEventListener('offline', () => {
      console.log('went offline');
      this.setOffline();
    });
  }

  /**
   * getNetworkStatus
   */
  public getNetworkStatus = (): boolean => {
    return this.isOnline;
  }

  /**
   *
   */
  public setOnline = (): void => {
    this.isOnline = true;
  }

  /**
   * setOffline
   */
  public setOffline = (): void => {
    this.isOnline = false;
  }

}
