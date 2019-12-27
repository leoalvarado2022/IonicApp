import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user/user.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Company, Connection} from '@primetec/primetec-angular';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  public connections: Connection[] = [];
  public currentConnection: Connection = null;
  private userData = null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private syncService: SyncService,
    private toastService: ToastService,
    private router: Router,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.loadConnections();
  }

  /**
   * selectConnection
   * @param connection
   */
  public selectConnection = async (connection: Connection) => {
    if (connection.token !== this.currentConnection.token) {
      this.authService.setConnection(connection);
      const data = await this.syncMobile();

      if (data) {
        this.setDefaultCompany(data.companies);
        this.syncService.storeSync(data);
        await this.loadConnections();
        this.router.navigate(['home-page']);
      }
    }
  }

  /**
   * syncMobile
   */
  private syncMobile = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (this.userData) {
        this.loaderService.startLoader('Sincronizando...');
        this.syncService.syncData(this.userData.user.username).subscribe((success: any) => {
          this.loaderService.stopLoader();
          resolve(success.data);
        }, error => {
          this.loaderService.stopLoader();
          this.httpService.errorHandler(error);
          resolve(null);
        });
      } else {
        resolve(null);
      }
    });
  }

  /**
   * loadConnections
   */
  private loadConnections = async () => {
    this.loaderService.startLoader('Cargando conexiones...');
    this.userData = await this.userService.getUserData();
    this.currentConnection = await this.authService.getConnection();
    this.connections = this.userData.connections;
    this.loaderService.stopLoader();
  }

  /**
   * setDefaultCompany
   * @param companies
   */
  private setDefaultCompany = (companies: Array<Company> = []) => {
    if (companies.length > 0) {
      this.authService.setCompany(companies[0]);
    }
  }

}
