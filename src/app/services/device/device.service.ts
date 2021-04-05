import {Injectable} from '@angular/core';
import {AlertController, Platform} from '@ionic/angular';
import {iosDeviceNames} from 'src/environments/ios-device-names';
import {Device} from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private isIos = false;

  constructor(
    private device: Device,
    private alertController: AlertController,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios');
    });
  }

  /**
   * getUUIDLast8
   */
  public getUUIDLast8 = () => {
    if (this.device.uuid) {
      return this.device.uuid.substring(this.device.uuid.length - 8);
    }

    return '';
  };

  /**
   * getUUIDAndroid
   */
  public getUUIDAndroid = () => {
    if (this.platform.is('android')) {
      return this.device.uuid;
    } else {
      return '';
    }
  };

  /**
   * showFullUUID
   */
  public showFullUUID = async () => {
    if (this.device.uuid) {
      const alert = await this.alertController.create({
        header: 'NC',
        message: this.device.uuid,
        buttons: ['OK']
      });

      await alert.present();
    }
  };

  /**
   * showDeviceData
   */
  public showDeviceData = async () => {
    const model = this.isIos ? iosDeviceNames[this.device.model] : this.device.model;

    const alert = await this.alertController.create({
      header: 'Device',
      message: `
        <p>Manufacturer: ${this.device.manufacturer}</p>
        <p>Model: ${model}</p>
        <p>Platform: ${this.device.platform}</p>
        <p>Version: ${this.device.version}</p>
        <p>Cordova: ${this.device.cordova}</p>
      `,
      buttons: ['OK']
    });

    await alert.present();
  };

}
