import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Connection } from '@primetec/primetec-angular';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { StoreService } from '../../shared/services/store/store.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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
    private stepperService: StepperService,
    private toastService: ToastService
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

      this.authService.connectionChange({ connection: connection.token, loggedUser: user.id })
        .pipe(
          switchMap(() => this.authService.checkToken()),
          map(response => response["data"]),
          catchError(error => {
            console.log('error', error);
            this.toastService.errorToast("No se pudo cambiar de conexión");
            return of(null);
          })
        ).subscribe((connections: Array<Connection>) => {
          this.storeService.setUserConnections(connections);
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
