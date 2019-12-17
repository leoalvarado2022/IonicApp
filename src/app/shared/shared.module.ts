import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {NotificationsComponent} from './components/notifications/notifications.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user/user.service';
import {DetectPlatformService} from './services/detect-platform/detect-platform.service';
import {StorageService} from './services/storage/storage.service';
import {SyncService} from './services/sync/sync.service';
import {CustomDatePipe} from './pipes/custom-date/custom-date.pipe';
import {HarvestEstimateItemComponent} from '../home-page/pages/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component';
import {QualityEstimateItemComponent} from '../home-page/pages/quality-estimate/quality-estimate-item/quality-estimate-item.component';
import {NoteItemComponent} from '../home-page/pages/notes/note-item/note-item.component';
import {ToastService} from './services/toast/toast.service';
import {HttpService} from './services/http/http.service';
import {AlertService} from './services/alert/alert.service';
import {ImageViewerComponent} from './components/image-viewer/image-viewer.component';
import {CustomDatetimePipe} from './pipes/custom-datetime/custom-datetime.pipe';
import {GeolocationService} from './services/geolocation/geolocation.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NgxEchartsModule} from 'ngx-echarts';
import {File} from '@ionic-native/file/ngx';
import {PreviewAnyFile} from '@ionic-native/preview-any-file/ngx';

@NgModule({
  declarations: [
    NotificationsComponent,
    CustomDatePipe,
    HarvestEstimateItemComponent,
    QualityEstimateItemComponent,
    NoteItemComponent,
    ImageViewerComponent,
    CustomDatetimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule
  ],
  providers: [
    UserService,
    DetectPlatformService,
    StorageService,
    SyncService,
    ToastService,
    HttpService,
    AlertService,
    GeolocationService,
    Geolocation,
    File,
    PreviewAnyFile
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
    NoteItemComponent,
    ImageViewerComponent,
    CustomDatetimePipe
  ],
  entryComponents: [
    ImageViewerComponent
  ]
})
export class SharedModule {

}
