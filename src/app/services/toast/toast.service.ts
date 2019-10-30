import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) {

  }

  /**
   * successToast
   * @param msg
   * @param time
   * @param position
   */
  async successToast(msg: string = 'Loading...', time: number = 2000, position: any = 'bottom') {
    const toast = await this.toastController.create({
      message: msg,
      duration: time,
      animated: true,
      color: 'success',
      keyboardClose: true,
      position: position,
      cssClass: 'customToast'
    });

    toast.present();
  }

  /**
   * errorToast
   * @param msg
   * @param time
   * @param position
   */
  async errorToast(msg: string = 'Loading...', time: number = 2000, position: any = 'bottom') {
    const toast = await this.toastController.create({
      message: msg,
      duration: time,
      animated: true,
      color: 'danger',
      keyboardClose: true,
      position: position,
      cssClass: 'customToast'
    });

    toast.present();
  }

  /**
   * warningToast
   * @param msg
   * @param time
   * @param position
   */
  async warningToast(msg: string = 'Loading...', time: number = 3500, position: any = 'bottom') {
    const toast = await this.toastController.create({
      message: msg,
      duration: time,
      animated: true,
      color: 'warning',
      keyboardClose: true,
      position: position,
      cssClass: 'customToast'
    });

    toast.present();
  }

}
