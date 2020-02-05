import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {TabMenu} from '@primetec/primetec-angular';
import {Store} from '@ngrx/store';
import {StorageService} from '../../../shared/services/storage/storage.service';
import {UserService} from '../../../shared/services/user/user.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NetworkService} from '../../../shared/services/network/network.service';
import * as MenuAction from '../../../store/menu/menu.action';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit, AfterViewInit, OnDestroy {

  public userData = null;
  public menus: Array<TabMenu> = [];
  private isOnline: boolean;

  private network$: Subscription;

  constructor(
    public store: Store<any>,
    private storage: StorageService,
    private userService: UserService,
    public syncService: SyncService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private networkService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.menus = [];
    this.network$ = this.networkService.getNetworkStatus().subscribe((status: boolean) => this.isOnline = status);
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.network$.unsubscribe();
  }

  /**
   * init
   */
  private init = async () => {
    const menus = await this.syncService.getMenus();

    if (menus) {
      this.menus = [...menus]
      const userData = await this.userService.getUserData()
      this.store.dispatch(new MenuAction.AddProfile(userData));
      this.userData = userData;
    } else {
      this.menus = [];
    }
  }


  /**
   * reSync
   * @param event
   */
  public reSync = async (event) => {
    const data = await this.syncData();
    await this.syncService.storeSync(data);
    await this.getUserData();
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
   * getUserData
   */
  private getUserData = async () => {
    const data = await this.userService.getUserData();
    this.store.dispatch(new MenuAction.AddProfile(data));
    this.userData = data;
  }

  /**
   * syncData
   * @param username
   */
  private syncData = (): Promise<any> => {
    return new Promise<any>(resolve => {
      if (this.userData) {
        const {user} = this.userData;
        const username = user.username;

        this.syncService.syncData(username).subscribe((success: any) => {
          resolve(success.data);
        }, async error => {
          this.httpService.errorHandler(error);
          resolve(null);
        });
      }
    });
  }

}
