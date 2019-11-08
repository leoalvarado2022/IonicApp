import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Device} from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class DetectPlatformService {

  public isIos: boolean = false;
  public hasCordova: boolean = false;

  constructor(private device: Device,
              private platform: Platform) {
    this.isIos = this.detectPlatform();
    this.hasCordova = this.checkCordova();
  }


  /**
   * detectPlatform
   * @return {boolean}
   */
  private detectPlatform = (): boolean => {
    return this.platform.is('ios') === true;
  };

  /**
   * checkCordova
   */
  private checkCordova = () => {
    return this.device.cordova !== null;
  };
}
