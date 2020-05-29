import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rem-quadrille',
  templateUrl: './rem-quadrille.page.html',
  styleUrls: ['./rem-quadrille.page.scss'],
})
export class RemQuadrillePage implements OnInit, OnDestroy {

  public filteredQuadrilles: Array<any> = [];
  public workers: Array<any> = [];
  private quadrilles: Array<any> = [];

  private sync$: Subscription;

  constructor(
    private router: Router,
    private storageSyncService: StorageSyncService
  ) {

  }

  ngOnInit() {
    this.sync$ = this.storageSyncService.syncChangedSubscribrer().subscribe(status => {
      if (status) {
        this.loadQuadrilles();
      }
    });

    this.loadQuadrilles();
  }

  ngOnDestroy() {
    this.sync$.unsubscribe();
  }

  /**
   * loadQuadrilles
   */
  private loadQuadrilles = () => {
    console.log('loadQuadrilles');

    Promise.all([
      this.storageSyncService.getQuadrilles(),
      this.storageSyncService.getWorkers()
    ]).then( (data) => {
      this.quadrilles = [...data[0]];
      this.filteredQuadrilles = [...data[0]];
      this.workers = [...data[1]];
    });
  }

  /**
   * searchQuadrille
   */
  public searchQuadrille = (search: string): void => {
    if (search) {
      this.filteredQuadrilles = this.quadrilles.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.responsibleName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredQuadrilles = this.quadrilles;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredQuadrilles = [...this.quadrilles];
  }

  /**
   * reload
   */
  public reload = (event) => {
    this.loadQuadrilles();
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
  public getQuadrilleWorkers = (id: number): number => {
    return this.workers.filter(item => item.quadrille === id).length;
  }

  /**
   * showBadge
   * @param quadrille
   */
  public showBadge = (quadrilleId: number): number => {
    return this.workers.filter(item => {
      return item.quadrilleToApprove === quadrilleId && item.quadrilleStatus.toLowerCase() === 'por aprobar' ||
        item.quadrille === quadrilleId && item.quadrilleStatus.toLowerCase() === 'rechazado';
    }).length;
  }
}
