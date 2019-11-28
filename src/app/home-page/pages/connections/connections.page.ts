import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user/user.service';
import {AuthService} from '../../../services/auth/auth.service';
import {Connection} from '@primetec/primetec-angular';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ToastService} from '../../../services/toast/toast.service';
import {Router} from '@angular/router';

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
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadConnections();
  }

  /**
   * loadConnections
   */
  private loadConnections = async () => {
    this.userData = await this.userService.getUserData();
    this.currentConnection = await this.authService.getConnection();
    this.connections = this.userData.connections;
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
   * syncMobile
   */
  private syncMobile = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (this.userData) {
        this.syncService.syncData(this.userData.user.username).subscribe(async (success: any) => {
          await this.syncService.storeSync(success.data);
          resolve(true);
        }, error => {
          const msg = this.authService.errorsHandler(error);
          this.toastService.warningToast(msg);
          reject('error');
        });
      } else {
        reject('error');
      }
    });
  }
}
