import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { HttpService } from '../../../../shared/services/http/http.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { Subscription } from 'rxjs';
import {ActionSheetController, AlertController, Platform} from '@ionic/angular';
import { AppService } from 'src/app/services/app/app.service';
import { DeviceService } from 'src/app/services/device/device.service';
import {StorageService} from '../../../../shared/services/storage/storage.service';
import {StorageSyncService} from '../../../../services/storage/storage-sync/storage-sync.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public showCordovaFeatures = false;

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
    public appService: AppService,
    public deviceService: DeviceService,
    private platform: Platform,
    public actionSheetController: ActionSheetController,
    private storage: StorageService,
    private storageSyncService: StorageSyncService,
    private alertController: AlertController,
  ) {
    this.platform.ready().then(() => {
      this.showCordovaFeatures = this.platform.is('cordova');
    });
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

    const params = { user, login: this.getLoginParams() };
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
    latitude: 0,
    longitude: 0,
    version: this.appService.getAppVersion()
  })

  public connectionsActionSheet = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione Conexion',
      buttons: [
        {
          text: 'Conexion QA',
          icon: 'cloud',
          handler: () => {
            localStorage.setItem('connectionEnvironment', 'qa');
            this.toastService.successToast('Conexión cambiada a QA');
          }
        },
        {
          text: 'Conexion Producción',
          icon: 'cloud',
          handler: () => {
            localStorage.setItem('connectionEnvironment', 'prod');
            this.toastService.successToast('Conexión cambiada a PROD');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {

          }
        }]
    });

    await actionSheet.present();
  }

  public showQa = (): string => {
    return localStorage.getItem('connectionEnvironment') === 'qa' ? 'QA' : '';
  }

  /**
   * confirmClean
   */
  public confirmClean = async () => {
    const alert = await this.alertController.create({
      message: 'Desea borrar la base de datos del telefono ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.storageSyncService.clearStorage().then(() => {
              this.storeService.clearStore();
              this.cleanCache();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * cleanCache
   */
  public cleanCache = async () => {
    const remember = localStorage.getItem('remember');
    const user = this.storeService.getUserLocaStorage();

    if (remember === 'true') {
      const userRemember = await this.storage.getRow('userRemember');
      localStorage.clear();
      await this.storage.clearAllRow();
      await this.storage.setRow('userRemember', userRemember);
      localStorage.setItem('remember', 'true');
    } else {
      localStorage.clear();
      await this.storage.clearAllRow();
    }

    this.storeService.setUserLocaStorage(user);
    this.toastService.successToast('Datos eliminados');
  }
}
