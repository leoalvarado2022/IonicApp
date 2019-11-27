import {Component, OnInit} from '@angular/core';
import {Events, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../shared/services/user/user.service';
import {SyncService} from '../../shared/services/sync/sync.service';
import {Company, Connection} from '@primetec/primetec-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  name: string;
  profile: any = null;

  public connections: Connection[] = [];
  public companies: Company[] = [];

  constructor(
    private menu: MenuController,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private syncService: SyncService,
    private events: Events
  ) {
    this.events.subscribe('connectionChange', (status) => {
      // console.log('connectionChange');
      this.reloadData();
    });

    this.events.subscribe('companyChange', (status) => {
      // console.log('companyChange');
      this.reloadData();
    });
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
    // console.log('user.connections', user.connections);
    this.connections = [...user.connections];
  }

  /**
   * loadCompanies
   */
  private loadCompanies = async () => {
    const data = await this.syncService.getCompanies();
    // console.log('companies', data);
    this.companies = [...data];
  }

  /**
   * routerLink
   * @param router
   */
  public routerLink = (router: string) => {
    this.menu.close('menu');
    this.router.navigate([router]);
  }

  /**
   * close
   */
  public close = () => {
    this.menu.close('menu');
    this.authService.closeSesion();
  }
}
