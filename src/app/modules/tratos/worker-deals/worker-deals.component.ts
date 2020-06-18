import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-worker-deals',
  templateUrl: './worker-deals.component.html',
  styleUrls: ['./worker-deals.component.scss'],
})
export class WorkerDealsComponent implements OnInit {

  @Input() deals: any;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
    console.log(this.deals, 'deals');
  }

  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this.modalController.dismiss({
      data
    });
  };

}
