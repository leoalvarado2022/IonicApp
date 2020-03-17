import {NgModule} from '@angular/core';

import {TicketDetailsListPage} from './ticket-details-list.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {TicketDetailCardComponent} from './ticket-detail-card/ticket-detail-card.component';

const routes: Routes = [
  {
    path: ':id',
    component: TicketDetailsListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TicketDetailsListPage,
    TicketDetailCardComponent
  ]
})
export class TicketDetailsListPageModule {

}
