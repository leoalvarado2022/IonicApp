import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Company, Connection} from '@primetec/primetec-angular';
import {StoreService} from '../../shared/services/store/store.service';
import {DeliveryService} from '../../modules/delivery/services/delivery.service';

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
    private router: Router,
    private storeService: StoreService,
    private _deliveryService: DeliveryService
  ) {

  }

  ngOnInit() {

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
   * closeMenu
   */
  public closeMenu = () => {
    this.menu.close('menu');
  }

  /**
   * close
   */
  public close = () => {
    this.closeMenu();
    this._deliveryService.setAutomatic(false);
    this.storeService.logout();
    this.router.navigate(['auth/login']);
  }

  /**
   * menuReload
   * @param event
   */
  public menuReload = (event: any) => {
    this.loadData();
  }

  /**
   * getAvatar
   */
  public getAvatar = () => {
    if (this.profile && this.profile.avatar) {
      return `data:image/jpeg;base64,${this.profile.avatar}`;
    }

    return null;
  }

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
  }
}
