import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Connection} from '@primetec/primetec-angular';
import {Router} from '@angular/router';
import {LoaderService} from '../../shared/services/loader/loader.service';
import {StoreService} from '../../shared/services/store/store.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {

  public connections: Array<Connection> = [];
  public currentConnection: Connection = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService,
    private storeService: StoreService,
    private stepperService: StepperService
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

        this.stepperService.syncAll();
        this.router.navigate(['home-page']);
      });
    }
  }

  /**
   * loadConnections
   */
  private loadConnections = (): void => {
    this.loaderService.startLoader('Cargando conexiones...');
    this.currentConnection = this.storeService.getActiveConnection();
    this.connections = this.storeService.getUserConnections();
    this.loaderService.stopLoader();
  }

}
