import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {NotificationsComponent} from './components/notifications/notifications.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user/user.service';
import {DetectPlatformService} from './services/detect-platform/detect-platform.service';
import {StorageService} from './services/storage/storage.service';
import {CustomDatePipe} from './pipes/custom-date/custom-date.pipe';
import {HarvestEstimateItemComponent} from '../modules/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component';
import {QualityEstimateItemComponent} from '../modules/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component';
import {NoteItemComponent} from '../modules/planning/notes/note-item/note-item.component';
import {ToastService} from './services/toast/toast.service';
import {HttpService} from './services/http/http.service';
import {AlertService} from './services/alert/alert.service';
import {ImageViewerComponent} from './components/image-viewer/image-viewer.component';
import {CustomDatetimePipe} from './pipes/custom-datetime/custom-datetime.pipe';
import {NgxEchartsModule} from 'ngx-echarts';
import {File} from '@ionic-native/file/ngx';
import {PreviewAnyFile} from '@ionic-native/preview-any-file/ngx';
import {CameraService} from './services/camera/camera.service';
import {RutPipe} from './pipes/rut/rut.pipe';
import {SyncService} from './services/sync/sync.service';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {TicketCardComponent} from '../modules/crm/tickets/ticket-card/ticket-card.component';
import {TicketsService} from '../modules/crm/services/tickets/tickets.service';
import {NfcService} from './services/nfc/nfc.service';
import {ContractsService} from '../modules/pre-contracts/services/contracts/contracts.service';

@NgModule({
  declarations: [
    NotificationsComponent,
    CustomDatePipe,
    HarvestEstimateItemComponent,
    QualityEstimateItemComponent,
    NoteItemComponent,
    ImageViewerComponent,
    CustomDatetimePipe,
    RutPipe,
    TicketCardComponent
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
    ToastService,
    HttpService,
    AlertService,
    File,
    PreviewAnyFile,
    CameraService,
    SyncService,
    FileOpener,
    TicketsService,
    ContractsService,
    NfcService,
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
    CustomDatetimePipe,
    RutPipe,
    TicketCardComponent
  ],
  entryComponents: [
    ImageViewerComponent
  ]
})
export class SharedModule {

}
