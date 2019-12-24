import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Store} from '@ngrx/store';
import * as MenuAction from '../../../store/menu/menu.action';
import {UserService} from '../../../shared/services/user/user.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public innerWidth: number;
  public innerHeight: number;

  constructor(
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private store: Store<any>,
    private syncService: SyncService,
    private userService: UserService,
    private httpService: HttpService
  ) {

  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      remember: ['false']
    });

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.checkRemember();
  }

  /**
   * onSubmit
   */
  public onSubmit = async () => {
    try {
      const data = Object.assign({}, this.loginForm.value);
      data.username = data.username.toLowerCase();
      const login = await this.login(data);

      // recordar usuario
      if (data.remember === true) {
        this.authService.setRemember();
        this.userService.setUserRemember(data);
      }

      // no recordar usuario
      if (data.remember === false) {
        this.authService.removeRemember();
        await this.userService.removeUserRemember();
      }

      if (login !== null) {
        await this.userService.setUserData(login);
        this.store.dispatch(new MenuAction.AddProfile(login));
      }

      if (login && login.code === 1) {
        this.addPin(login);
      } else {
        if (login !== null) {
          if (login.connections) {
            const defaultConnection = login.connections.find(item => item.default);

            if (defaultConnection) {
              this.authService.setConnection(defaultConnection);
            } else {
              this.authService.setConnection(login.connections[0]);
            }
          }

          this.authService.setLoggedIn();
          this.authService.setToken(login.token);
          this.syncService.syncData(login.user.username).subscribe(async (success: any) => {
            await this.syncService.storeSync(success.data);
            this.makeLogin();
          }, error => {
            this.httpService.errorHandler(error);
          });
        }
      }
    } catch (e) {
      console.log({e});
    }

  }

  /**
   * addPin
   * @param login add PIN
   */
  public addPin = (login: any) => {
    this.toastService.warningToast(login.message);
    this.loginForm.reset();
    this.authService.setToken(login.token);
    this.router.navigate(['auth/pin']);
  }

  /**
   * @description hacer login si no tiene pin
   */
  public makeLogin = () => {
    this.loginForm.reset();
    this.router.navigate(['/home-page']);
  }

  /**
   * filterKeys
   * @param event
   */
  public filterKeys = (event: any) => {
    const filter = '0123456789.-kK';

    if (event.key) {
      return filter.includes(event.key);
    }

    return false;
  }

  /**
   * checkRemember
   */
  private checkRemember = async () => {
    const remember = this.authService.getRememberStatus();

    if (remember === 'true') {
      const userData = await this.userService.getUserRemember();

      if (userData) {
        this.loginForm.patchValue({
          username: userData.username,
          password: userData.password,
          remember: ['true']
        });

        this.loginForm.updateValueAndValidity();
      }
    }
  }

  /**
   * loginEndpoint
   * @param data LoginEndpoint
   */
  private login = (data: any): Promise<any> => {
    this.loaderService.startLoader('Iniciando sesion...');

    return new Promise((resolve) => {
      this.authService.login(data).subscribe((success: any) => {

        this.loaderService.stopLoader();
        resolve(success);

      }, error => {
        this.loaderService.stopLoader();
        const name = error.error.name;

        if (name === 'ConnectionsNotFound') {
          const token = error.error.data.token;
          resolve({code: 1, token, user: data, message: error.error.message});
        } else {
          this.httpService.errorHandler(error);
          resolve(null);
        }
      });
    });
  }
}
