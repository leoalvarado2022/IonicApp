import { NgModule } from '@angular/core';

import { IonicStorageModule } from '@ionic/storage';
import { LoaderService } from '../shared/services/loader/loader.service';
import { NetworkService } from '../shared/services/network/network.service';
import { GeolocationService } from '../shared/services/geolocation/geolocation.service';
import { StoreService } from '../shared/services/store/store.service';
import { ToastService } from '../shared/services/toast/toast.service';
import { HttpService } from '../shared/services/http/http.service';
import { AlertService } from '../shared/services/alert/alert.service';
import { StorageSyncService } from './storage/storage-sync/storage-sync.service';
import { TallySyncService } from './storage/tally-sync/tally-sync.service';
import { TimerService } from './storage/timer/timer.service';
import { StepperService } from './storage/stepper/stepper.service';
import { HttpClientModule } from '@angular/common/http';
import { DeviceSyncService } from './storage/device-sync/device-sync.service';
import { MachineryService } from '../modules/machinery/services/machinery.service';
import { OrderSyncService } from './storage/order-sync/order-sync.service';
import { AppService } from './app/app.service';
import { DeviceService } from './device/device.service';
import { WeatherService } from './weather/weather.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CleanStringService } from './clean-string/clean-string.service';
import { ApplicationRegistryService } from './application-registry/application-registry.service';
import { Insomnia } from '@ionic-native/insomnia/ngx';

@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      name: '_fx360',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    }),
    HttpClientModule
  ],
  providers: [
    LoaderService,
    NetworkService,
    GeolocationService,
    StoreService,
    ToastService,
    HttpService,
    AlertService,
    AppService,
    DeviceService,
    WeatherService,
    InAppBrowser,
    CleanStringService,
    Insomnia,

    // Storage Services Block
    StorageSyncService,
    TallySyncService,
    TimerService,
    StepperService,
    DeviceSyncService,
    MachineryService,
    OrderSyncService,
    ApplicationRegistryService
  ]
})
export class CoreServicesModule {

}
