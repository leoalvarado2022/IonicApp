import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {UserService} from '../../../../shared/services/user/user.service';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {StoreService} from 'src/app/shared/services/store/store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public innerWidth: number;
  public innerHeight: number;

  private router$: Subscription;
  private store$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private syncService: SyncService,
    private userService: UserService,
    private httpService: HttpService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.router$ = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.checkRemember();
      }
    });

    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.checkRemember();
    });

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      remember: [false]
    });

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
    this.store$.unsubscribe();
  }

  /**
   * onSubmit
   */
  public onSubmit = async () => {
    const data = Object.assign({}, this.loginForm.value);
    data.username = data.username.toLowerCase();
    const login = await this.login(data);

    if (data.remember) {
      this.storeService.setRemember(true);
      this.storeService.setRememberData(data);
    } else {
      this.storeService.setRemember(false);
      this.storeService.removeRememberData();
    }

    if (login && login.code === 1) {
      this.addPin(login);
    } else {
      if (login !== null) {
        this.storeService.setUser(login.user);
        this.storeService.setUserConnections(login.connections);
        this.storeService.setToken(login.token);
        this.storeService.setLoginStatus(true);
        this.makeLogin();
      }
    }
  }

  /**
   * addPin
   * @param login add PIN
   */
  public addPin = (login: any) => {
    this.toastService.warningToast(login.message);
    this.loginForm.reset();
    this.storeService.setToken(login.token);
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
  private checkRemember = () => {
    if (this.storeService.getRemember()) {
      const rememberData = this.storeService.getRememberData();

      if (rememberData) {
        this.loginForm.patchValue({
          username: rememberData.username,
          password: rememberData.password,
          remember: [true]
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
