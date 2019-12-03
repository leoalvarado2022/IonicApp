import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// custom0
import {AppVersion} from '@ionic-native/app-version/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {LoaderComponent} from './components/loader/loader.component';
import {LoaderService} from './shared/services/loader/loader.service';
import {AuthService} from './shared/services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {Device} from '@ionic-native/device/ngx';
import {SharedModule} from './shared/shared.module';
import {Camera} from '@ionic-native/camera/ngx';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
// import {StoreRouterConnectingModule, RouterReducerState} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {metaReducers, reducers} from './reducers/reducers';
import {environment} from '../environments/environment';

import localeCL from '@angular/common/locales/es-CL';
import localeCLExtra from '@angular/common/locales/extra/es-CL';
import {registerLocaleData} from '@angular/common';
import {NetworkService} from "./shared/services/network/network.service";

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
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
