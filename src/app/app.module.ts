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
import {AuthService} from './shared/services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {Device} from '@ionic-native/device/ngx';
import {SharedModule} from './shared/shared.module';
import {Camera} from '@ionic-native/camera/ngx';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {metaReducers, reducers} from './reducers/reducers';
import {environment} from '../environments/environment';
import localeCL from '@angular/common/locales/es-CL';
import localeCLExtra from '@angular/common/locales/extra/es-CL';
import {registerLocaleData} from '@angular/common';
import {NetworkService} from './shared/services/network/network.service';
import {RouteReuseStrategy} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {GeolocationService} from './shared/services/geolocation/geolocation.service';
import {SyncService} from './shared/services/sync/sync.service';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {LoaderService} from "./shared/services/loader/loader.service";

registerLocaleData(localeCL, 'es-CL', localeCLExtra);

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'ngFX11Ngrx',
    logOnly: environment.production,
    maxAge: 25
  })
];

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
    SharedModule,
    HttpClientModule,
    ...NGRX_IMPORTS
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    StatusBar,
    SplashScreen,
    AppVersion,
    Device,
    Camera,
    LoaderService,
    AuthService,
    NetworkService,
    Geolocation,
    GeolocationService,
    SyncService,
    FileOpener
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
