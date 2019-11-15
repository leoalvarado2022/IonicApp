import {Component} from '@angular/core';
import * as MenuAction from '../store/menu/menu.action';
import {Store} from '@ngrx/store';
import {StorageService} from '../services/storage/storage.service';
import {UserService} from '../services/user/user.service';
import {SyncService} from '../shared/services/sync/sync.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage {

  public userData = null;
  private syncedData = null;

  public menus = [];

  constructor(
    public store: Store<any>,
    private storage: StorageService,
    private userService: UserService,
    private syncService: SyncService
  ) {

  }

  ionViewWillEnter() {
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

    await this.syncData();
    await this.syncService.storeSync(this.syncedData);
  }

  /**
   * syncData
   */
  private syncData = () => {
    const username = this.userData.user.username;
    this.syncService.syncData(username).subscribe((success: any) => {
      this.syncedData = success.data;
    }, error => {
      console.log(error);
    });
  }

  /**
   * loadMenus
   */
  private loadMenus = async () => {
    this.menus = await this.syncService.getMenus();
  }

}
