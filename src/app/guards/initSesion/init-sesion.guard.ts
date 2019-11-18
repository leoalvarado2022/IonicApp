import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {ToastService} from '../../services/toast/toast.service';
import {LoaderService} from '../../services/loader/loader.service';
import {StorageService} from '../../services/storage/storage.service';
import {Store} from '@ngrx/store';
import * as MenuAction from '../../store/menu/menu.action';
import {UserService} from '../../services/user/user.service';
import {SyncService} from '../../shared/services/sync/sync.service';

@Injectable({
  providedIn: 'root'
})
export class InitSesionGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private loaderService: LoaderService,
    private storageService: StorageService,
    private syncService: SyncService,
    private userService: UserService
  ) {

  }

  /**
   * canActivate
   */
  public canActivate = (): boolean => {

    // comprobar si inicio sesión cerro la aplicacion y la volvio abrir
    if (this.authService.getRemember() !== null && this.authService.getRemember() === '1') {
      this.userService.getUserRemember().then(async (data: any) => {

        // iniciar login
        const login = await this.login(data);

        console.log(login);

        // si no tiene codigo
        if (login && login.code === 1) {

          this.toastService.warningToast(login.message);
          await this.userService.removeUserRemember();
          await this.userService.removeUserData();
          this.authService.setRemember('0');
          this.authService.removeToken();
          this.authService.removeConnection();
          this.router.navigate(['auth/login']);

        } else {
          // si ya hizo login inicia en home
          if (login !== null) {
            this.authService.setToken(login.token);
            await this.userService.removeUserData();
            this.userService.setUserData(login);
            if (login.connections) {
              this.authService.setConnection(login.connections[0]);
            }
            this.syncService.syncData(login.user.username).subscribe(async (success: any) => {
              await this.syncService.storeSync(success.data);
            }, error => {
              console.log(error);
            });
            this.router.navigate(['home-page']);
          } else {

            // si no tiene login o es error lo envia al login de nuevo
            this.authService.setRemember('0');
            await this.userService.removeUserRemember();
            await this.userService.removeUserData();
            this.authService.removeToken();
            this.authService.removeConnection();
            this.router.navigate(['auth/login']);

          }

        }

      });
    }


    const loadInit = localStorage.getItem('initLoad');

    // si ya cargo el principal y es recordar es 0
    if (loadInit !== null && this.authService.getRemember() === '0') {
      return true;
    }


    // si es null y el recordar es null
    if (loadInit === null || this.authService.getRemember() === null) {
      return true;
    }

    return false;
  };

  /**
   * inicia sesion automaticamente cuando inicia la aplicacion para compronar que esta correcto
   * @param data LoginEndpoint
   */
  private login = (data: any): Promise<any> => {

    this.loaderService.showLoader();

    return new Promise((resolve) => {

      this.authService.login(data).subscribe((success: any) => {

        this.loaderService.hideLoader();
        resolve(success);

      }, error => {

        this.loaderService.hideLoader();
        const name = error.error.name;

        if (name === 'ConnectionsNotFound') {

          const token = error.error.data.token;
          resolve({code: 1, token, user: data, message: error.error.message});

        } else {

          const msg = this.authService.errorsHandler(error);
          this.toastService.warningToast(error.error.message);
          resolve(null);

        }

      });
    });
  };

}
