import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-associate-work',
  templateUrl: './add-trato.page.html',
  styleUrls: ['./add-trato.page.scss'],
})
export class AddTratoPage implements OnInit {

  constructor(public modalController: ModalController) {
  }


  ngOnInit() {

  }

  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this.modalController.dismiss({
      data
    });
  }


  /**
   * @description agregar trato
   */
  async onPress() {

    console.log('tratos');

    await this.closeWork();
  }

}
