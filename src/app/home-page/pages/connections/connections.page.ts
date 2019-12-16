import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user/user.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Connection} from '@primetec/primetec-angular';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from "../../../shared/services/loader/loader.service";

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
      await this.syncMobile();
      this.loadConnections();
      this.router.navigate(['home-page']);
    }
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
   * syncMobile
   */
  private syncMobile = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (this.userData) {
        this.loaderService.startLoader('Sincronizando...');
        this.syncService.syncData(this.userData.user.username).subscribe(async (success: any) => {
          await this.syncService.storeSync(success.data);
          this.loaderService.stopLoader();
          resolve(true);
        }, error => {
          this.loaderService.stopLoader();
          this.httpService.errorHandler(error);
          reject('error');
        });
      } else {
        reject('error');
      }
    });
  }
}
