import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Connection} from '@primetec/primetec-angular';
import {SyncService} from '../../shared/services/sync/sync.service';
import {Router} from '@angular/router';
import {HttpService} from '../../shared/services/http/http.service';
import {LoaderService} from '../../shared/services/loader/loader.service';
import {StoreService} from '../../shared/services/store/store.service';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  public connections: Array<Connection> = [];
  public currentConnection: Connection = null;
  private userData = null;

  constructor(
    private authService: AuthService,
    private syncService: SyncService,
    private router: Router,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private storeService: StoreService,
    private storageSyncService: StorageSyncService
  ) {

  }

  ngOnInit() {
    this.loadConnections();
  }

  /**
   * selectConnection
   * @param connection
   */
  public selectConnection = (connection: Connection): void => {
    if (connection.token !== this.currentConnection.token) {

      const user = this.storeService.getUser();

      this.authService.connectionChange({connection: connection.token, loggedUser: user.id}).subscribe(() => {
        this.storeService.setActiveConnection(connection);
        this.syncMobile();
      });
    }
  }

  /**
   * syncMobile
   */
  private syncMobile = () => {
    this.loaderService.startLoader('Sincronizando...');
    this.syncService.syncData(this.userData.username, this.currentConnection.superuser ? 1 : 0).subscribe((success: any) => {
      const data = success.data;

      this.storeService.setSyncedData(data);
      this.storageSyncService.storeSyncedData(data);

      this.loadConnections();
      this.loaderService.stopLoader();
      this.router.navigate(['home-page']);
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * loadConnections
   */
  private loadConnections = (): void => {
    this.loaderService.startLoader('Cargando conexiones...');
    this.userData = this.storeService.getUser();
    this.currentConnection = this.storeService.getActiveConnection();
    this.connections = this.storeService.getUserConnections();
    this.loaderService.stopLoader();
  }

}
