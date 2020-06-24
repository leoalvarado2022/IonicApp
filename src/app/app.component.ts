import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NetworkService} from './shared/services/network/network.service';
import {StoreService} from './shared/services/store/store.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {ToastService} from './shared/services/toast/toast.service';

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
    private toastService: ToastService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.statusBar.styleLightContent();
        this.splashScreen.hide();
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
