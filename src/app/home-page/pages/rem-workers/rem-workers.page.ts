import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rem-workers',
  templateUrl: './rem-workers.page.html',
  styleUrls: ['./rem-workers.page.scss'],
})
export class RemWorkersPage implements OnInit {

  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public quadrille: any;
  public isLoading = false;

  constructor(
    private syncService: SyncService,
    private route: ActivatedRoute
  ) {

  }

  ionViewWillEnter() {
    this.isLoading = true;
  }

  ionViewDidEnter() {
    this.isLoading = false;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadWorkers(id);
  }

  /**
   * loadWorkers
   */
  private loadWorkers = async (id: string) => {
    const quadrilles = await this.syncService.getQuadrilles();
    const allWorkers = await this.syncService.getWorkers();

    if (quadrilles && allWorkers) {
      this.quadrille = quadrilles.find(item => item.id === +id);
      const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id);
      this.workers = [...workers];
      this.filteredWorkers = [...workers];
    }
  }

}
