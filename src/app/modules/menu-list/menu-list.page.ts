import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TabMenu } from '@primetec/primetec-angular';
import { SyncService } from '../../shared/services/sync/sync.service';
import { Router } from '@angular/router';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { NetworkService } from 'src/app/shared/services/network/network.service';
import { Subject } from 'rxjs';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit, OnDestroy {

  public menus: Array<TabMenu> = [];
  public readonly defaultIcon = '/assets/svg_icons/default.svg';

  private workers: Array<any> = [];
  private firstLoad = true;
  private isOnline: boolean;
  private unsubscriber = new Subject();

  constructor(
    public syncService: SyncService,
    private router: Router,
    private storageSyncService: StorageSyncService,
    private networkService: NetworkService,
    public stepperService: StepperService,
    private storeService: StoreService,
    private httpClient: HttpClient
  ) {

  }

  ngOnInit() {
    this.networkService.getNetworkStatus()
      .pipe(
        takeUntil(this.unsubscriber)
      ).subscribe((status) => (this.isOnline = status));

    this.stepperService.getStepper()
      .pipe(
        takeUntil(this.unsubscriber)
      ).subscribe((steps: Array<any>) => {
        if (steps.length === 0 && !this.firstLoad) {
          this.loadData();
        }
      });
  }

  ngOnDestroy() {
    this.unsubscriber.complete();
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
        this.storageSyncService.getQuadrillesByCurrentUser(activeCompany.user, !!access.find((x) => x.functionality === 4)),
        this.storageSyncService.getWorkers()
      ]).then((data) => {
        const filterMenuByAccess = data[0].filter(item => item.access && item.access.includes('V'));
        this.processMenu(filterMenuByAccess);

        const quadrilles = data[1].map((q) => q.id);
        this.workers = data[2].filter((x) => quadrilles.includes(x.quadrille)) || [];
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
      this.router.navigate([`/home-page/${menu.menu_url}`]);
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
      return this.workers.filter((item) => item.quadrilleStatus !== '').length;
    }

    return 0;
  }

  /**
   * processMenu
   * @param menus
   */
  private processMenu = async (menus: Array<TabMenu>) => {
    for (let index = 0; index < menus.length; index++) {
      const itemIcon = `/assets/svg_icons/${menus[index].icon_url}.svg`;
      menus[index].icon_url = await this.checkIcon(itemIcon);
      menus[index].caption = menus[index].caption.replace(/_/g, ' ');
    }

    this.menus = [...menus];
  }

  /**
   * checkIcon
   * @param path
   */
  private checkIcon = (path: string): Promise<string> => {
    return new Promise((resolve) => {
      this.httpClient.get(path).subscribe(
        () => {
          console.log('success');
          resolve(path);
        },
        (error) => {
          if (error.status === 200) {
            resolve(path);
          }

          resolve(this.defaultIcon);
        }
      );
    });
  }

  public getMaxHeight(col: ElementRef) {
    console.log('col', col);

    return 0;
  }

}
