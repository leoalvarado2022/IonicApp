import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../../shared/services/storage/storage.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private storage: StorageService,
    private alertController: AlertController,
    private toastService: ToastService
  ) {

  }

  ngOnInit() {

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
            await this.limpiarCache();
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * limpiarCache
   */
  public limpiarCache = async () => {
    localStorage.clear();
    await this.storage.clearAllRow();
    this.toastService.successToast('Datos eliminados');
  }
}
