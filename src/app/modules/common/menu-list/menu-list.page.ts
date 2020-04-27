import {Component, OnDestroy, OnInit} from '@angular/core';
import {TabMenu} from '@primetec/primetec-angular';
import {StorageService} from '../../../shared/services/storage/storage.service';
import {UserService} from '../../../shared/services/user/user.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NetworkService} from '../../../shared/services/network/network.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {Subscription} from 'rxjs';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit, OnDestroy {

  public menus: Array<TabMenu> = [];
  private isOnline: boolean;

  private network$: Subscription;
  private store$: Subscription;

  constructor(
    private storage: StorageService,
    private userService: UserService,
    public syncService: SyncService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.network$ = this.networkService.getNetworkStatus().subscribe((status: boolean) => this.isOnline = status);
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      const {sync} = data;
      this.menus = [...sync.menus];
    });
  }

  ngOnDestroy(): void {
    this.network$.unsubscribe();
    this.store$.unsubscribe();
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event) => {
    this.syncData();
    event.target.complete();
  };

  /**
   * navigate
   * @param url
   */
  public navigate = (menu: TabMenu) => {
    if (this.isOnline || (!this.isOnline && menu.offlineMenu)) {
      this.router.navigate([menu.menu_url], {relativeTo: this.activatedRoute});
    }
  };

  /**
   * checkDisabled
   */
  public checkDisabled = (menu: TabMenu) => {
    return !this.isOnline && !menu.offlineMenu;
  };

  /**
   * syncData
   */
  private syncData = () => {
    this.loaderService.startLoader();
    const user = this.storeService.getUser();
    const activeConnection = this.storeService.getActiveConnection();

    this.syncService.syncData(user.username, activeConnection.superuser ? 1 : 0).subscribe((success: any) => {
      const data = success.data;
      this.storeService.setSyncedData(data);
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  };

  /**
   * showBadge
   * @param menu
   */
  public showBadge = (menu: TabMenu): number => {
    if (menu.menu_url.toLowerCase() === 'tarja_cuadrillas') {
      const workers = this.storeService.getWorkers();
      return workers.filter(item => item.quadrilleStatus !== '').length;
    }

    return 0;
  };
}
