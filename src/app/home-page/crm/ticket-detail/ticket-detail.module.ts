import {NgModule} from '@angular/core';
import {TicketDetailPage} from './ticket-detail.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {TicketDetailCardComponent} from './ticket-detail-card/ticket-detail-card.component';

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
  declarations: [
    TicketDetailPage,
    TicketDetailCardComponent
  ]
})
export class TicketDetailPageModule {

}
