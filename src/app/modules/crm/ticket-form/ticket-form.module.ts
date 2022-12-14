import {NgModule} from '@angular/core';
import {TicketFormPage} from './ticket-form.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { CameraService } from 'src/app/shared/services/camera/camera.service';
import {Ionic4DatepickerModule} from '@logisticinfotech/ionic4-datepicker';

const routes: Routes = [
  {
    path: '',
    component: TicketFormPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TicketFormPage],
  providers: [CameraService]
})
export class TicketFormPageModule {

}
