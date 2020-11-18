import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { HttpService } from '../../../../shared/services/http/http.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { AppService } from 'src/app/services/app/app.service';
import { DeviceService } from 'src/app/services/device/device.service';

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
    private httpService: HttpService,
    private storeService: StoreService,
    private appService: AppService,
    private deviceService: DeviceService,
    private platform: Platform
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      remember: false
    });

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    const user = this.storeService.getUserLocaStorage();

    if (user !== null) {
      this.loginForm.patchValue({
        username: user.username,
        password: user.password,
        remember: true
      });

      this.loginForm.updateValueAndValidity();
    }
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
    this.store$.unsubscribe();
  }

  ionViewDidEnter() {
    this.router$ = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.checkRemember();
      }
    });

    this.store$ = this.storeService.stateChanged.subscribe(() => {
      this.checkRemember();
    });
  }

  /**
   * onSubmit
   */
  public onSubmit = () => {    
    const user = Object.assign({}, this.loginForm.value);
    user.username = user.username.toLowerCase();
    user.app = this.appService.getAppName();

    if (user.remember) {
      this.storeService.setRemember(true);
      this.storeService.setRememberData(user);
      this.storeService.setUserLocaStorage(user);
    } else {
      this.storeService.setRemember(false);
      this.storeService.removeUserLocaStorage();
      this.storeService.removeRememberData();
    }

    const params = Object.assign({}, user, this.getLoginParams());
    this.login(params).then(login => {
      if (login && login.code === 1) {
        this.addPin(login);
      } else {
        if (login !== null) {
          this.storeService.setUser(login.user);
          this.storeService.setUserConnections(login.connections);
          this.storeService.setToken(login.token);
          this.storeService.setLoginStatus(true);

          // MAKE LOGIN
          this.loginForm.reset();
          this.router.navigate(['/home-page']);
        }
      }
    });    
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
          remember: true
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
          resolve({ code: 1, token, user: data, message: error.error.message });
        } else {
          this.httpService.errorHandler(error);
          resolve(null);
        }
      });
    });
  }

  /**
   * getLoginParams
   */
  private getLoginParams = (): object => ({
    nc: this.deviceService.getUUIDLast8(),
    device: 'movil',
    plattform: this.platform.is('ios') ? 'ios' : 'android',
    ip: '',
    latitude: '',
    longitude: '',
    version: this.appService.getAppVersion()
  })
}
