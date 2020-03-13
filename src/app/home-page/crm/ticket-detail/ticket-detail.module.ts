import {NgModule} from '@angular/core';
import {TicketDetailPage} from './ticket-detail.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: TicketDetailPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TicketDetailPage]
})
export class TicketDetailPageModule {

}
