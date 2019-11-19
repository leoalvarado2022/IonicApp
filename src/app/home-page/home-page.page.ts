import {Component, OnInit} from '@angular/core';
import * as MenuAction from '../store/menu/menu.action';
import {Store} from '@ngrx/store';
import {StorageService} from '../services/storage/storage.service';
import {UserService} from '../services/user/user.service';
import {SyncService} from '../shared/services/sync/sync.service';
import {TabMenu} from '@primetec/primetec-angular';
import {AuthService} from '../services/auth/auth.service';
import {ToastService} from '../services/toast/toast.service';

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
    private toastService: ToastService
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
        reject(error);
        const msg = this.authService.errorsHandler(error);
        this.toastService.warningToast(error.error.message);
      });
    });
  }
}
