import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-rem-workers',
  templateUrl: './rem-workers.page.html',
  styleUrls: ['./rem-workers.page.scss'],
})
export class RemWorkersPage implements OnInit {

  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public quadrille: any;

  constructor(
    private syncService: SyncService,
    private route: ActivatedRoute,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadWorkers(id);
  }

  /**
   * loadWorkers
   */
  private loadWorkers = async (id: string) => {
    this.loaderService.startLoader();
    const quadrilles = await this.syncService.getQuadrilles();
    const allWorkers = await this.syncService.getWorkers();

    if (quadrilles && allWorkers) {
      this.quadrille = quadrilles.find(item => item.id === +id);
      const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id);
      this.workers = [...workers];
      this.filteredWorkers = [...workers];
    }

    this.loaderService.stopLoader();
  }

  /**
   * reload
   * @param event
   */
  public reload = async (event) => {
    const id = this.route.snapshot.paramMap.get('id');
    await this.loadWorkers(id);
    event.target.complete();
  }
}
