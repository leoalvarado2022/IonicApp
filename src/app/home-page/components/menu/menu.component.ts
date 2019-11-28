import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {UserService} from '../../../shared/services/user/user.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {Company, Connection} from '@primetec/primetec-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public name: string;
  public profile: any = null;
  public connections: Connection[] = [];
  public companies: Company[] = [];

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private userService: UserService,
    private syncService: SyncService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.userService.getMenuProfiles().subscribe((menuProfile: any) => {
      if (menuProfile.data && menuProfile.data.user) {
        this.profile = menuProfile.data.user;
      }
    });

    this.reloadData();
  }

  /**
   * reloadData
   */
  private reloadData = async () => {
    await this.loadConnections();
    await this.loadCompanies();
  }

  /**
   * loadConnections
   */
  private loadConnections = async () => {
    const user = await this.userService.getUserData();
    if (user && user.connections) {
      this.connections = [...user.connections];
    } else {
      this.connections = [];
    }
  }

  /**
   * loadCompanies
   */
  private loadCompanies = async () => {
    const data = await this.syncService.getCompanies();
    if (data) {
      this.companies = [...data];
    } else {
      this.companies = [];
    }
  }

  /**
   * routerLink
   * @param router
   */
  public routerLink = (router: string) => {
    this.closeMenu();
    this.router.navigate(['home-page/' + router]);
  }

  /**
   *closeMenu
   */
  public closeMenu = () => {
    this.menu.close('menu');
  }

  /**
   * close
   */
  public close = () => {
    this.closeMenu();
    this.authService.closeSesion();
  }

  /**
   * menuReload
   * @param event
   */
  public menuReload = async (event: any) => {
    await this.reloadData();
  }
}
