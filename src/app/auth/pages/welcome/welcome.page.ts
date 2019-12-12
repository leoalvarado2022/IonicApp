import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../../shared/services/storage/storage.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {AlertController, Platform} from '@ionic/angular';
import {environment} from '../../../../environments/environment';
import {DetectPlatformService} from '../../../shared/services/detect-platform/detect-platform.service';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public uuid: string;

  constructor(
    private storage: StorageService,
    private alertController: AlertController,
    private toastService: ToastService,
    private detectPlatform: DetectPlatformService,
    private platform: Platform,
    private uniqueDeviceID: UniqueDeviceID
  ) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.uniqueDeviceID.get().then((uuid: string) => {
        this.uuid = uuid;
      }).catch((error: any) => this.toastService.errorToast('Cordova requerido'));
    });
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
          handler: async () => {
            await this.cleanCache();
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

    if (remember === 'true') {
      const userRemember = await this.storage.getRow('userRemember');
      localStorage.clear();
      await this.storage.clearAllRow();
      await this.storage.setRow('userRemember', userRemember)
      localStorage.setItem('remember', 'true');
    } else {
      localStorage.clear();
      await this.storage.clearAllRow();
    }

    this.toastService.successToast('Datos eliminados');
  }

}
