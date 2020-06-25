import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../../../shared/services/storage/storage.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {AlertController, Platform} from '@ionic/angular';
import {environment} from '../../../../../environments/environment';
import {Device} from '@ionic-native/device/ngx';
import {StoreService} from '../../../../shared/services/store/store.service';
import {iosDeviceNames} from '../../../../../environments/ios-device-names';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public showCordovaFeatures = false;
  private isIos = false;

  constructor(
    private storage: StorageService,
    private storeService: StoreService,
    private alertController: AlertController,
    private toastService: ToastService,
    public device: Device,
    private platform: Platform,
    private storageSyncService: StorageSyncService
  ) {
    this.platform.ready().then(() => {
      this.showCordovaFeatures = this.platform.is('cordova');
      this.isIos = this.platform.is('ios');
    });

  }

  ngOnInit() {

  }

  /**
   * getVersion
   */
  public getVersion = (): string => {
    return environment.appVersion;
  }

  /**
   * confirmClean
   */
  public confirmClean = async () => {
    const alert = await this.alertController.create({
      message: 'Desea borrar la base de datos del telefono ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {                        
            this.storageSyncService.clearStorage().then( () => {
              this.storeService.clearStore();
              this.cleanCache();              
            });                        
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * cleanCache
   */
  public cleanCache = async () => {
    const remember = localStorage.getItem('remember');
    const user = this.storeService.getUserLocaStorage();

    if (remember === 'true') {
      const userRemember = await this.storage.getRow('userRemember');
      localStorage.clear();
      await this.storage.clearAllRow();
      await this.storage.setRow('userRemember', userRemember);
      localStorage.setItem('remember', 'true');
    } else {
      localStorage.clear();
      await this.storage.clearAllRow();
    }

    this.storeService.setUserLocaStorage(user);    
    this.toastService.successToast('Datos eliminados');
  }

  /**
   * getUUIDLast8
   */
  public getUUIDLast8 = () => {
    if (this.device.uuid) {
      return this.device.uuid.substring(this.device.uuid.length - 8);
    }

    return '';
  }

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
  }

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
  }
}
