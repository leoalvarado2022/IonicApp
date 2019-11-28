import {Injectable} from '@angular/core';
import {Platform, ToastController} from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private isOnline: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private toastController: ToastController,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.initializeNetworkEvents();
      this.isOnline.next(navigator.onLine);
    });
  }

  /**
   * initializeNetworkEvents
   */
  private initializeNetworkEvents = () => {
    console.log('listen to online');
    window.addEventListener('online', async () => {
      console.log('back online');
      await this.updateNetworkStatus(true);
    });

    console.log('listen to offline');
    window.addEventListener('offline', async () => {
      console.log('went offline');
      await this.updateNetworkStatus(false);
    });
  }

  /**
   * updateNetworkStatus
   * @param status
   */
  private updateNetworkStatus = async (status: boolean) => {
    this.isOnline.next(status);

    const msg = status === true ? 'Online' : 'Offline';
    const toast = await this.toastController.create({
      message: `App ${msg}`,
      duration: 3000,
      position: 'top',
      color: msg === 'Online' ? 'success' : 'danger'
    });

    await toast.present();
  }

  /**
   * getNetworkStatus
   */
  public getNetworkStatus = (): boolean => {
    return this.isOnline.getValue();
  }

  /**
   * onNetworkChange
   */
  public onNetworkChange = (): Observable<boolean> => {
    return this.isOnline.asObservable();
  }

}
