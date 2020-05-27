import { NgModule } from '@angular/core';
import { LoaderService } from '../shared/services/loader/loader.service';
import { NetworkService } from '../shared/services/network/network.service';
import { GeolocationService } from '../shared/services/geolocation/geolocation.service';
import { StoreService } from '../shared/services/store/store.service';
import { ManualSyncService } from '../shared/services/manual-sync/manual-sync.service';
import { ToastService } from '../shared/services/toast/toast.service';
import { HttpService } from '../shared/services/http/http.service';
import { AlertService } from '../shared/services/alert/alert.service';
import { SyncStorageService } from './storage/sync-storage/sync-storage.service';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      name: '_fx360',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  providers: [
    LoaderService,
    NetworkService,
    GeolocationService,
    StoreService,
    ManualSyncService,
    ToastService,
    HttpService,
    AlertService,

    // Storage Services Block
    SyncStorageService
  ],
})
export class CoreServicesModule {

}
