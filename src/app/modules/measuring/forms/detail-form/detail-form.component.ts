import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateMeasuringComponent } from '../create-measuring/create-measuring.component'

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss'],
})
export class DetailFormComponent implements OnInit {


  @Input() data: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    
  }


  closeModal(){
    this.modalController.dismiss();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: CreateMeasuringComponent,
      componentProps: {
        data: this.data
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    return await modal.present();
  }

}
