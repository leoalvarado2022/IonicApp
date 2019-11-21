import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
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
    private syncService: SyncService
  ) {

  }

  ngOnInit() {
    this.userService.getMenuProfiles().subscribe((menuProfile: any) => {
      if (menuProfile.data && menuProfile.data.user) {
        this.profile = menuProfile.data.user;
      }
    });

    this.loadConnections();
    this.loadCompanies();
  }

  /**
   * loadConnections
   */
  private loadConnections = async () => {
    const user = await this.userService.getUserData();
    this.connections = user.connections;
  }

  /**
   * loadCompanies
   */
  private loadCompanies = async () => {
    this.companies = await this.syncService.getCompanies();
  }

  routerLink = (router: string) => {
    this.menu.close('menu');
    this.router.navigate([router]);
  }

  close = () => {
    this.menu.close('menu');
    this.authService.closeSesion();
  }
}
