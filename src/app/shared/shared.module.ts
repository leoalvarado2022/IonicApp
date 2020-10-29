import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user/user.service';
import {DetectPlatformService} from './services/detect-platform/detect-platform.service';
import {StorageService} from './services/storage/storage.service';
import {CustomDatePipe} from './pipes/custom-date/custom-date.pipe';
import {HarvestEstimateItemComponent} from '../modules/planning/harvest-estimate/harvest-estimate-item/harvest-estimate-item.component';
import {QualityEstimateItemComponent} from '../modules/planning/quality-estimate/quality-estimate-item/quality-estimate-item.component';
import {NoteItemComponent} from '../modules/planning/notes/note-item/note-item.component';
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
import { NumericOrderPipe } from './pipes/numeric-order/numeric-order.pipe';
import { AuthService } from './services/auth/auth.service';
import { TallyService } from '../modules/tallies/services/tally/tally.service';
import { InfiniteScrollPaginatorService } from './services/inifite-scroll-paginator/infinite-scroll-paginator.service';
import { ToolbarButtonsComponent } from '../components/toolbar-buttons/toolbar-buttons.component';
import { TallyFormMultipleComponent } from '../modules/tallies/forms/tally-form-multiple/tally-form-multiple.component';
import { TallyFormComponent } from '../modules/tallies/forms/tally-form/tally-form.component';
import {DeliveryService} from '../modules/delivery/services/delivery.service';
import {DeliveryCardComponent} from '../modules/delivery/delivery-list/delivery-card/delivery-card.component';
import {PosService} from '../modules/delivery/services/pos.service';

@NgModule({
  declarations: [
    CustomDatePipe,
    HarvestEstimateItemComponent,
    QualityEstimateItemComponent,
    NoteItemComponent,
    ImageViewerComponent,
    CustomDatetimePipe,
    RutPipe,
    TicketCardComponent,
    NumericOrderPipe,
    ToolbarButtonsComponent,
    DeliveryCardComponent,
    TallyFormComponent,
    TallyFormMultipleComponent
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
    File,
    PreviewAnyFile,
    CameraService,
    SyncService,
    FileOpener,
    TicketsService,
    ContractsService,
    NfcService,
    NumericOrderPipe,
    AuthService,
    TallyService,
    DeliveryService,
    PosService,
    InfiniteScrollPaginatorService
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomDatePipe,
    HarvestEstimateItemComponent,
    QualityEstimateItemComponent,
    NoteItemComponent,
    ImageViewerComponent,
    CustomDatetimePipe,
    RutPipe,
    TicketCardComponent,
    DeliveryCardComponent,
    NumericOrderPipe,
    ToolbarButtonsComponent,
    TallyFormComponent,
    TallyFormMultipleComponent
  ],
  entryComponents: [
    ImageViewerComponent,
    TallyFormComponent,
    TallyFormMultipleComponent
  ]
})
export class SharedModule {

}
