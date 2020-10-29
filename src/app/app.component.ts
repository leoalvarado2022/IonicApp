import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NetworkService} from './shared/services/network/network.service';
import {StoreService} from './shared/services/store/store.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {ToastService} from './shared/services/toast/toast.service';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {DeliveryService} from './modules/delivery/services/delivery.service';
import {debounceTime} from 'rxjs/operators';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService: NetworkService,
    private storeService: StoreService,
    private fcm: FCM,
    private toastService: ToastService,
    private backgroundMode: BackgroundMode,
    private _deliveryService: DeliveryService
  ) {
    this.initializeApp();
  }

  /**
   * @description background mode
   */
  backgroundModeActivate() {
    if (this._deliveryService.getAutomatic()) {
      this.backgroundMode.enable();
    }

    // background mode
    this.backgroundMode.on('enable').subscribe(data => {
      console.log('on.backgroundMode.enable', data);
      this._deliveryService.intervalRefresh();
    });

    this.backgroundMode.on('disable').subscribe(data => {
      console.log('on.backgroundMode.disable', data);
      this._deliveryService.stopRefreshData();
      this._deliveryService.stopBackgroundMode();
    });

    this.backgroundMode.on('deactivate').subscribe(data => {
      console.log('on.backgroundMode.deactivate', data);
      this._deliveryService.stopRefreshData();
      this._deliveryService.stopBackgroundMode();
    });

    this.backgroundMode.on('failure').subscribe(data => {
      console.log('on.backgroundMode.failure', data);
      this._deliveryService.stopRefreshData();
      this._deliveryService.stopBackgroundMode();
    });
    // end background mode
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.backgroundModeActivate();

      if (this.platform.is('ios')) {
        this.splashScreen.hide();
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.overlaysWebView(false);
        this.splashScreen.hide();
      }

      // CHECK PUSH PERMISSION
      this.fcm.hasPermission().then(() => {
        // get token
        this.fcm.getToken().then(token => {
          // Validar que el token no esta vacio o nulo
          if (token) {
            this.storeService.setPushToken(token);
          }
        }).catch(error => {
          console.log('fcm.getToken ERROR: ', error);
        });

        // get refresh token
        this.fcm.onTokenRefresh().subscribe(token => {
          // Validar que el token no esta vacio o nulo
          if (token) {
            this.storeService.setPushToken(token);
          }
        }, error => {
          console.log('fcm.onTokenRefresh() ERROR: ', error);
        });

        // Listen to notifications if app is open
        this.fcm.onNotification().subscribe((data: any) => {
          // console.log(data, 'notification');
          let note = data;
          if (this.platform.is('ios')) {
            note = data.aps.alert;
          }
          this.toastService.normalToast(note.body);
        }, error => {
          console.log('fcm.onNotification ERROR: ', error);
        });
      }).catch(error => {
        console.log('No tiene permiso para recibir notificaciones PUSH: ', error);
        this.toastService.errorToast('No tiene permiso para recibir notificaciones PUSH', 1000, 'bottom');
      });

      this.platform.pause.subscribe(() => {
        this.storeService.backupState();
      });

      this.platform.resume.subscribe(() => {
        // PENDIENTE DEFINIR SI HACE FALTA ESTE EVENTO
      });

      this.networkService.initializeNetworkEvents();
    });
  }

}
