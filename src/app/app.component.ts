import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {StorageService} from './shared/services/storage/storage.service';
import {NetworkService} from './shared/services/network/network.service';

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
    private networkService: NetworkService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log('listen to online');
      window.addEventListener('online', () => {
        console.log('back online');
        this.networkService.setOnline();
      });

      console.log('listen to offline');
      window.addEventListener('offline', () => {
        console.log('went offline');
        this.networkService.setOffline();
      });
    });
  }

}
