import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-worker-deals',
  templateUrl: './worker-deals.component.html',
  styleUrls: ['./worker-deals.component.scss'],
})
export class WorkerDealsComponent implements OnInit {

  @Input() deals: any;

  constructor(
    public modalController: ModalController,
    private storeService: StoreService,
  ) {}

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
  }

  public getWorkerName = (worker: any) => {
    if (worker.worker) {
      return worker.worker.name;
    } else {
      const findWorker = this.storeService.getWorkers().find(w => w.id === worker.id_par_entidades_trabajador);
      if (findWorker) {
        return findWorker.name;
      }
    }
    return '';
  }

}
