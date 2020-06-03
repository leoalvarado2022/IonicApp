import {Component, OnInit, OnDestroy} from '@angular/core';
import {TabMenu} from '@primetec/primetec-angular';
import {SyncService} from '../../shared/services/sync/sync.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ManualSyncService } from 'src/app/shared/services/manual-sync/manual-sync.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { NetworkService } from 'src/app/shared/services/network/network.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit, OnDestroy {

  public menus: Array<TabMenu> = [];
  private workers: Array<any> = [];

  private isOnline: boolean;
  private network$: Subscription;
  private storage$: Subscription;

  constructor(
    public syncService: SyncService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private manualSyncService: ManualSyncService,
    private storageSyncService: StorageSyncService,
    private networkService: NetworkService
  ) {

  }

  ngOnInit() {
    this.network$ = this.networkService.getNetworkStatus().subscribe( status => this.isOnline = status);
    this.storage$ = this.storageSyncService.syncChangedSubscribrer().subscribe(status => {
      if (status) {
        this.loadData();
      }
    });

    this.loadData();
  }

  ngOnDestroy() {
    this.network$.unsubscribe();
    this.storage$.unsubscribe();
  }

  /**
   * loadData
   */
  private loadData = () => {
    Promise.all([
      this.storageSyncService.getMenus(),
      this.storageSyncService.getWorkers(),
    ]).then(data => {
      this.menus = [...data[0]];
      this.workers = [...data[1]];
    });
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event) => {
    this.manualSyncService.sync();
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
