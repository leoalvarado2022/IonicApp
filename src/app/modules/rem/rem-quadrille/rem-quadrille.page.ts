import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { Subscription } from 'rxjs';
import { AlphabeticalOrderPipe } from 'src/app/shared/pipes/alphabetical-order/alphabetical-order.pipe';

@Component({
  selector: 'app-rem-quadrille',
  templateUrl: './rem-quadrille.page.html',
  styleUrls: ['./rem-quadrille.page.scss'],
})
export class RemQuadrillePage implements OnInit, OnDestroy {

  public quadrilles: Array<any> = [];
  public filteredQuadrilles: Array<any> = [];
  public workers: Array<any> = [];
  public firstLoad = false;

  private storage$: Subscription;

  constructor(
    private router: Router,
    private storageSyncService: StorageSyncService,
    private alphabeticalOrderPipe: AlphabeticalOrderPipe
  ) {

  }

  ngOnInit() {
    this.firstLoad = true;
    this.storage$ = this.storageSyncService.syncChangedSubscribrer().subscribe(status => {
      if (status && !this.firstLoad) {
        this.loadQuadrilles();
      }
    });

    this.loadQuadrilles();
  }

  ngOnDestroy() {
    this.storage$.unsubscribe();
  }

  /**
   * loadQuadrilles
   */
  private loadQuadrilles = () => {
    this.firstLoad = false;

    Promise.all([
      this.storageSyncService.getQuadrilles(),
      this.storageSyncService.getWorkers()
    ]).then( (data) => {
      this.quadrilles = this.alphabeticalOrderPipe.transform(data[0]);
      this.filteredQuadrilles = [...this.quadrilles];
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
      this.filteredQuadrilles = [...this.quadrilles];
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
