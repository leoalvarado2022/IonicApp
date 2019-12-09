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
      this.isOnline.next(navigator.onLine);
    });
  }

  /**
   * initializeNetworkEvents
   */
  public initializeNetworkEvents = () => {
    console.log('listen to online');
    window.addEventListener('online', () => {
      console.log('back online');
      this.updateNetworkStatus(true);
    });

    console.log('listen to offline');
    window.addEventListener('offline', () => {
      console.log('went offline');
      this.updateNetworkStatus(false);
    });
  }

  /**
   * updateNetworkStatus
   * @param status
   */
  private updateNetworkStatus = (status: boolean) => {
    this.isOnline.next(status);
    this.showAlert(status);
  }

  /**
   * getNetWorkStatus
   */
  public getNetworkStatus = (): Observable<boolean> => {
    return this.isOnline.asObservable();
  }

  /**
   * showAlert
   * @param status
   */
  private showAlert = async (status: boolean) => {
    const msg = status === true ? 'Online' : 'Offline';
    const toast = await this.toastController.create({
      message: `App ${msg}`,
      duration: 3000,
      position: 'top',
      color: msg === 'Online' ? 'success' : 'danger'
    });

    await toast.present();
  }

}
