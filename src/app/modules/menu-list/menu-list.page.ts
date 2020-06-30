import {Component, OnInit, OnDestroy} from '@angular/core';
import {TabMenu, Quadrille} from '@primetec/primetec-angular';
import {SyncService} from '../../shared/services/sync/sync.service';
import {ActivatedRoute, Router} from '@angular/router';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { NetworkService } from 'src/app/shared/services/network/network.service';
import { Subscription } from 'rxjs';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StoreService } from 'src/app/shared/services/store/store.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit, OnDestroy {

  public menus: Array<TabMenu> = [];
  private workers: Array<any> = [];
  private firstLoad = true;

  private isOnline: boolean;
  private network$: Subscription;
  private step$: Subscription;

  constructor(
    public syncService: SyncService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storageSyncService: StorageSyncService,
    private networkService: NetworkService,
    public stepperService: StepperService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.network$ = this.networkService.getNetworkStatus().subscribe( status => this.isOnline = status);
    this.step$ = this.stepperService.getStepper().subscribe( (steps: Array<any>) => {
      if (steps.length === 0 && !this.firstLoad) {        
        this.loadData();
      }
    });
  }

  ngOnDestroy() {
    this.step$.unsubscribe();
    this.network$.unsubscribe();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.firstLoad = false;

    const activeCompany = this.storeService.getActiveCompany();
    const access = this.storeService.getAccess();

    if (activeCompany) {
      Promise.all([
        this.storageSyncService.getMenus(),
        this.storageSyncService.getQuadrillesByCurrentUser(activeCompany.user, !!access.find(x => x.functionality === 4)),
        this.storageSyncService.getWorkers(),
      ]).then(data => {
        this.menus = [...data[0]];
        const quadrilles = data[1].map(q => q.id);
        this.workers = data[2].filter(x => quadrilles.includes(x.quadrille))  || [];      
      });
    }
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.stepperService.syncAll();
    event.target.complete();
  }

  /**
   * navigate
   * @param url
   */
  public navigate = (menu: TabMenu) => {
    if (this.isOnline || (!this.isOnline && menu.offlineMenu)) {
      this.router.navigate([menu.menu_url], {relativeTo: this.activatedRoute});
    }
  }

  /**
   * checkDisabled
   */
  public checkDisabled = (menu: TabMenu) => {
    return !this.isOnline && !menu.offlineMenu;
  }

  /**
   * showBadge
   * @param menu
   */
  public showBadge = (menu: TabMenu): number => {
    if (menu.menu_url.toLowerCase() === 'tarja_cuadrillas') {
      return this.workers.filter(item => item.quadrilleStatus !== '').length;
    }

    return 0;
  }

}
