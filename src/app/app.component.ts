import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {StorageService} from './shared/services/storage/storage.service';
import {NetworkService} from './shared/services/network/network.service';
import {StoreService} from './shared/services/store/store.service';

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
    private storeService: StoreService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.statusBar.styleDefault();
      } else {
        this.statusBar.overlaysWebView(false);
      }

      this.splashScreen.hide();
      this.networkService.initializeNetworkEvents();

      this.platform.pause.subscribe((e) => {
        this.storeService.backupState();
      });

      this.platform.resume.subscribe((e) => {
        // PENDIENTE DEFINIR SI HACE FALTA ESTE EVENTO
      });
    });
  }

}
