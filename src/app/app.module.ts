import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppVersion} from '@ionic-native/app-version/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {Device} from '@ionic-native/device/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {NetworkService} from './shared/services/network/network.service';
import {RouteReuseStrategy} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {GeolocationService} from './shared/services/geolocation/geolocation.service';
import {LoaderService} from './shared/services/loader/loader.service';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {StoreService} from './shared/services/store/store.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import localeCL from '@angular/common/locales/es-CL';
import localeCLExtra from '@angular/common/locales/extra/es-CL';
import {registerLocaleData} from '@angular/common';
import { ManualSyncService } from './shared/services/manual-sync/manual-sync.service';

const ngxMaskOptions: Partial<IConfig> | (() => Partial<IConfig>) = {
  thousandSeparator: '.',
  decimalMarker: ','
};

registerLocaleData(localeCL, 'es-CL', localeCLExtra);

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({
      swipeBackEnabled: false
    }),
    IonicStorageModule.forRoot(),
    NgxMaskModule.forRoot(ngxMaskOptions),
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    StatusBar,
    SplashScreen,
    AppVersion,
    Device,
    Camera,
    LoaderService,
    NetworkService,
    Geolocation,
    GeolocationService,
    StoreService,
    FCM,
    NFC,
    Ndef,
    NativeAudio,
    ManualSyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
