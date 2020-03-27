import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {StorageService} from './shared/services/storage/storage.service';
import {NetworkService} from './shared/services/network/network.service';
import {StoreService} from './shared/services/store/store.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {ToastService} from './shared/services/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [StorageService]
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
        this.statusBar.styleDefault();
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
        });

        // get refresh token
        this.fcm.onTokenRefresh().subscribe(token => {
          // Validar que el token no esta vacio o nulo
          if (token) {
            this.storeService.setPushToken(token);
          }
        });

        // Listen to notifications if app is open
        this.fcm.onNotification().subscribe((data: any) => {
          // console.log(data, 'notification');
          let note = data;
          if (this.platform.is('ios')) {
            note = data.aps.alert;
          }
          this.toastService.normalToast(note.body);
        });
      });

      this.platform.pause.subscribe((e) => {
        this.storeService.backupState();
      });

      this.platform.resume.subscribe((e) => {
        // PENDIENTE DEFINIR SI HACE FALTA ESTE EVENTO
      });

      this.networkService.initializeNetworkEvents();
    });
  }

}
