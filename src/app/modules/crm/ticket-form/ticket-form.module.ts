import {NgModule} from '@angular/core';
import {TicketFormPage} from './ticket-form.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {Chooser} from '@ionic-native/chooser/ngx';

const routes: Routes = [
  {
    path: '',
    component: TicketFormPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TicketFormPage],
  providers: [Chooser]
})
export class TicketFormPageModule {

}
