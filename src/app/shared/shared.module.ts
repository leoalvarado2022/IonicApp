import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {NotificationsComponent} from '../components/notifications/notifications.component'
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../services/user/user.service';
import {DetectPlatformService} from '../services/detect-platform/detect-platform.service';
import {StorageService} from '../services/storage/storage.service';

@NgModule({
  declarations: [
    NotificationsComponent
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
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    NotificationsComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule {

}
