import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../shared/services/storage/storage.service';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { environment } from '../../../../../environments/environment';
import { StoreService } from '../../../../shared/services/store/store.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { DeviceService } from 'src/app/services/device/device.service';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public showCordovaFeatures = false;

  constructor(
    private storage: StorageService,
    private storeService: StoreService,
    private alertController: AlertController,
    private toastService: ToastService,
    private platform: Platform,
    private storageSyncService: StorageSyncService,
    public deviceService: DeviceService,
    public appService: AppService,
    public actionSheetController: ActionSheetController
  ) {
    this.platform.ready().then(() => {
      this.showCordovaFeatures = this.platform.is('cordova');
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
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.storageSyncService.clearStorage().then(() => {
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
   * connectionsActionSheet
   */
  public connectionsActionSheet = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione Conexion',
      buttons: [
        {
          text: 'Conexion QA',
          icon: 'cloud',
          handler: () => {
            localStorage.setItem('connectionEnvironment', 'qa');
            this.toastService.successToast("Conexión cambiada a QA");
          }
        },
        {
          text: 'Conexion Producción',
          icon: 'cloud',
          handler: () => {
            localStorage.setItem('connectionEnvironment', 'prod');
            this.toastService.successToast("Conexión cambiada a PROD");
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {

          }
        }]
    });

    await actionSheet.present();
  }

  /**
   * showQa
   * @returns
   */
  public showQa = (): string => {
    return localStorage.getItem("connectionEnvironment") === "qa" ? "QA" : "";
  }

}
