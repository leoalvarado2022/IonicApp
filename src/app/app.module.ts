import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './components/menu/menu.component';
// custom0
import {AppVersion} from '@ionic-native/app-version/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {LoaderComponent} from './components/loader/loader.component';
import {LoaderService} from './services/loader/loader.service';
import {AuthService} from './services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastService} from './services/toast/toast.service';
import {Device} from '@ionic-native/device/ngx';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoaderComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    LoaderService,
    AuthService,
    ToastService,
    Device,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
