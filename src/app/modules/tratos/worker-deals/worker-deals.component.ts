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

  public filteredWorkers = [];

  constructor(
    public modalController: ModalController,
    private storeService: StoreService,
  ) {}

  ngOnInit() {
    console.log(this.deals, 'deals');
    this.filteredWorkers = this.deals?.worker || [];
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

  public searchWorker = (search: string) => {
    if (search) {
      this.filteredWorkers = this.deals.worker.filter(item => {
        return (
          item.workerId.toString().includes(search.toLowerCase()) ||
          item.worker?.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredWorkers = [...this.deals.worker];
    }
  }

  public cancelSearch = () => {
    this.filteredWorkers = [...this.deals.worker];
  }

}
