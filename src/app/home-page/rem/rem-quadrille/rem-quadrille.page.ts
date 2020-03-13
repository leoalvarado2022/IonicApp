import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-rem-quadrille',
  templateUrl: './rem-quadrille.page.html',
  styleUrls: ['./rem-quadrille.page.scss'],
})
export class RemQuadrillePage implements OnInit {

  public filteredQuadrilles: Array<any> = [];
  public workers: Array<any> = [];
  private quadrilles: Array<any> = [];

  constructor(
    private router: Router,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.storeService.stateChanged.subscribe(data => {
      this.loadQuadrilles();
    });
  }

  /**
   * reload
   */
  public reload = (event) => {
    this.loadQuadrilles();
    event.target.complete();
  };

  /**
   * goToWorkers
   * @param quadrille
   */
  public goToWorkers = (quadrille: any) => {
    this.router.navigate(['/home-page/rem-workers', quadrille.id]);
  };

  /**
   * getQuadrilleWorkers
   * @param id
   */
  public getQuadrilleWorkers = (id: any) => {
    if (this.workers) {
      return this.workers.filter(item => item.quadrille === id).length;
    }

    return 0;
  };

  /**
   * loadQuadrilles
   */
  private loadQuadrilles = () => {
    const quadrilles = this.storeService.getQuadrilles();
    const workers = this.storeService.getWorkers();

    this.quadrilles = [...quadrilles];
    this.filteredQuadrilles = [...quadrilles];
    this.workers = [...workers];
  }
}
