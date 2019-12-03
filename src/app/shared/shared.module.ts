import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {NotificationsComponent} from '../components/notifications/notifications.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user/user.service';
import {DetectPlatformService} from './services/detect-platform/detect-platform.service';
import {StorageService} from './services/storage/storage.service';
import {SyncService} from './services/sync/sync.service';
import {NetworkService} from './services/network/network.service';
import {CustomDatePipe} from '../pipes/custom-date.pipe';
import {HarvestEstimateItemComponent} from './components/harvest-estimate-item/harvest-estimate-item.component';
import {QualityEstimateItemComponent} from './components/quality-estimate-item/quality-estimate-item.component';
import {NoteItemComponent} from './components/note-item/note-item.component';
import {ToastService} from "./services/toast/toast.service";

@NgModule({
  declarations: [
    NotificationsComponent,
    CustomDatePipe,
    HarvestEstimateItemComponent,
    QualityEstimateItemComponent,
    NoteItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    DetectPlatformService,
    StorageService,
    SyncService,
    ToastService,
    NetworkService
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    NotificationsComponent,
    ReactiveFormsModule,
    CustomDatePipe,
    HarvestEstimateItemComponent,
    QualityEstimateItemComponent,
    NoteItemComponent
  ]
})
export class SharedModule {

}
