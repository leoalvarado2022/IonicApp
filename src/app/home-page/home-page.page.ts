import {Component, OnInit} from '@angular/core';
import * as MenuAction from '../store/menu/menu.action';
import {Store} from '@ngrx/store';
import {StorageService} from '../shared/services/storage/storage.service';
import {UserService} from '../shared/services/user/user.service';
import {SyncService} from '../shared/services/sync/sync.service';
import {TabMenu} from '@primetec/primetec-angular';
import {AuthService} from '../services/auth/auth.service';
import {ToastService} from '../services/toast/toast.service';
import {Router} from '@angular/router';
import {NetworkService} from '../shared/services/network/network.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  public userData = null;

  public menus: TabMenu[] = [];

  constructor(
    public store: Store<any>,
    private storage: StorageService,
    private userService: UserService,
    private syncService: SyncService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    public networkService: NetworkService
  ) {

  }

  ngOnInit() {
    this.getUserData();
    this.loadMenus();
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
   * loadMenus
   */
  private loadMenus = async () => {
    const menus = await this.syncService.getMenus();
    this.menus = menus;
  }

  /**
   * reSync
   * @param event
   */
  public reSync = async (event: any) => {
    const {user} = this.userData;
    await this.syncData(user.username);
    event.target.complete();
  }

  /**
   * syncData
   * @param username
   */
  private syncData = (username: string) => {
    return new Promise((resolve, reject) => {
      this.syncService.syncData(username).subscribe(async (success: any) => {
        await this.syncService.storeSync(success.data);
        await this.loadMenus();
        await this.getUserData();

        resolve(true);
      }, error => {
        const msg = this.authService.errorsHandler(error);
        this.toastService.warningToast(msg);
        resolve(true);
      });
    });
  }

  /**
   * navigate
   * @param url
   */
  public navigate = (menu: TabMenu) => {
    if (this.networkService.getNetworkStatus() || (!this.networkService.getNetworkStatus() && menu.offlineMenu)) {
      this.router.navigate(['/' + menu.menu_url]);
    }
  }

  /**
   * checkDisabled
   */
  public checkDisabled = (menu: TabMenu) => {
    return !this.networkService.getNetworkStatus() && !menu.offlineMenu;
  }

}
