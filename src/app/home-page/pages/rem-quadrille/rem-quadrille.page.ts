import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rem-quadrille',
  templateUrl: './rem-quadrille.page.html',
  styleUrls: ['./rem-quadrille.page.scss'],
})
export class RemQuadrillePage implements OnInit {

  private quadrilles: Array<any> = [];
  public filteredQuadrilles: Array<any> = [];
  public workers: Array<any> = [];

  constructor(
    private syncService: SyncService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadQuadrilles();
  }

  /**
   * loadQuadrilles
   */
  private loadQuadrilles = async () => {
    const quadrilles = await this.syncService.getQuadrilles();
    const workers = await this.syncService.getWorkers();

    console.log({quadrilles, workers});

    this.quadrilles = [...quadrilles];
    this.filteredQuadrilles = [...quadrilles];
    this.workers = [...workers];
  }

  /**
   * reload
   */
  public reload = async (event) => {
    await this.loadQuadrilles();
    event.target.complete();
  }

  /**
   * goToWorkers
   * @param quadrille
   */
  public goToWorkers = (quadrille: any) => {
    this.router.navigate(['/home-page/rem-workers', quadrille.id]);
  }

  /**
   * getQuadrilleWorkers
   * @param id
   */
  public getQuadrilleWorkers = (id: any) => {
    if (this.workers) {
      return this.workers.filter(item => item.quadrille === id).length;
    }

    return 0;
  }
}
