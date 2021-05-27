import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppVersion} from '@ionic-native/app-version/ngx';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {Device} from '@ionic-native/device/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {RouteReuseStrategy} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import localeCL from '@angular/common/locales/es-CL';
import localeCLExtra from '@angular/common/locales/extra/es-CL';
import {registerLocaleData} from '@angular/common';
import {CoreServicesModule} from './services/core-services.module';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {AgmCoreModule} from '@agm/core';
import {environment} from 'src/environments/environment';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import {ErrorHandler} from '@angular/core';
import * as Sentry from 'sentry-cordova';

Sentry.init({dsn: 'https://642edfc60058450ca38ed2fbefb96889@o566132.ingest.sentry.io/5784862'});

export class SentryIonicErrorHandler extends ErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      Sentry.captureException(error.originalError || error);
    } catch (e) {
      console.error(e);
    }
  }
}

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({
      swipeBackEnabled: false,
    }),
    NgxMaskModule.forRoot(ngxMaskOptions),
    CoreServicesModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
    })
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: ErrorHandler, useClass: SentryIonicErrorHandler},
    StatusBar,
    SplashScreen,
    AppVersion,
    Device,
    Camera,
    Geolocation,
    NFC,
    Ndef,
    NativeAudio,
    BackgroundMode,
    BluetoothSerial
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
