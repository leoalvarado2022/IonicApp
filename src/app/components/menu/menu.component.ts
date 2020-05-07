import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';
import {UserService} from '../../shared/services/user/user.service';
import {SyncService} from '../../shared/services/sync/sync.service';
import {Company, Connection} from '@primetec/primetec-angular';
import {StoreService} from '../../shared/services/store/store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public name: string;
  public profile: any = null;
  public connections: Array<Connection> = [];
  public companies: Array<Company> = [];

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private userService: UserService,
    private syncService: SyncService,
    private router: Router,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * routerLink
   * @param router
   */
  public routerLink = (router: string) => {
    this.closeMenu();
    this.router.navigate(['home-page/' + router]);
  };

  /**
   * closeMenu
   */
  public closeMenu = () => {
    this.menu.close('menu');
  };

  /**
   * close
   */
  public close = () => {
    this.closeMenu();
    this.storeService.logout();
    this.router.navigate(['auth/login']);
  };

  /**
   * menuReload
   * @param event
   */
  public menuReload = (event: any) => {
    this.loadData();
  };

  /**
   * getAvatar
   */
  public getAvatar = () => {
    if (this.profile && this.profile.avatar) {
      return `data:image/jpeg;base64,${this.profile.avatar}`;
    }

    return null;
  };

  /**
   *
   */
  private loadData = (): void => {
    const user = this.storeService.getUser();
    const connections = this.storeService.getUserConnections();
    const companies = this.storeService.getCompanies();

    this.profile = user;
    this.connections = [...connections];
    this.companies = [...companies];
  };
}
