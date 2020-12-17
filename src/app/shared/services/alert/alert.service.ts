import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable()
export class AlertService {

  /**
   * Este servicio tiene como finalidad convertir las alertas de ionic
   * en promesas y que devuelvan true|false de acuerdo al boton que
   * presionen.
   *
   * Esto se debe a que no se puede usar aync/await dentro de los
   * handlers de la alerta.
   */

  constructor(private alertController: AlertController) {

  }

  /**
   * confirmAlert
   * @param message
   */
  public confirmAlert = (message: string = 'Confirma ?'): Promise<boolean> => {
    return new Promise(resolve => {
      this.alertController.create({
        message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => resolve(false)
          },
          {
            text: 'Si',
            handler: () => resolve(true)
          }
        ]
      }).then(alert => {
        alert.present();
      });
    });
  }

    /**
   * infoMessage
   * @param message
   */
  public infoMessage = (title: string , message: string) => {
    return new Promise(resolve => {
      this.alertController.create({
        header: title,
        message,
        buttons: [
          {
            text: 'OK',
            handler: () => resolve(true)
          }
        ]
      }).then(alert => {
        alert.present();
      });
    });
  }

}
