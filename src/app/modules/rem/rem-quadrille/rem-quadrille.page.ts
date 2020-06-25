import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StoreService } from 'src/app/shared/services/store/store.service';

@Component({
  selector: 'app-rem-quadrille',
  templateUrl: './rem-quadrille.page.html',
  styleUrls: ['./rem-quadrille.page.scss'],
})
export class RemQuadrillePage implements OnInit {

  private workers: Array<any> = [];
  private quadrilles: Array<any> = [];
  public filteredQuadrilles: Array<any> = [];

  public isLoading = false;

  constructor(
    private router: Router,
    private storageSyncService: StorageSyncService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadQuadrilles();
  }  

  /**
   * loadQuadrilles
   */
  private loadQuadrilles = () => {

    this.isLoading = true;
    const activeCompany = this.storeService.getActiveCompany();
    const access = this.storeService.getAccess();    

    Promise.all([
      this.storageSyncService.getQuadrillesByCurrentUser(activeCompany.user, !!access.find(x => x.functionality === 4)),
      this.storageSyncService.getWorkers()
    ]).then( (data) => {
      this.workers = [...data[1]];

      let orderByName = [...data[0]];
      orderByName = orderByName.map( item => Object.assign({}, item, { cases: this.showBadge(item.id) }));

      this.quadrilles = [...this.orderByTransfersFirst(orderByName)];
      this.filteredQuadrilles = [...this.quadrilles];

      this.isLoading = false;
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

  /**
   * orderByTransfersFirst
   */
  private orderByTransfersFirst = (orderByName: Array<any>): Array<any> => {
    const withTransfers = [];
    const noTransfers = [];

    if (orderByName.length > 0) {
      orderByName.filter( item => {
        if (item['cases'] > 0 ) {
          withTransfers.push(item);
        } else {
          noTransfers.push(item);
        }

        return false;
      });
    }

    return [...withTransfers, ...noTransfers];
  }

}
