import {Component, OnInit} from '@angular/core';
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
export class HomePagePage implements OnInit {

  public userData = null;

  public menus = [];

  constructor(
    public store: Store<any>,
    private storage: StorageService,
    private userService: UserService,
    private syncService: SyncService
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
  };

  /**
   * loadMenus
   */
  private loadMenus = async () => {
    const menus: any = await this.syncService.getMenus();
    this.menus = menus;
  };

}
