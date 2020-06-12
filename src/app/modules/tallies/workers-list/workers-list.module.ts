import { NgModule } from '@angular/core';
import { WorkersListPageRoutingModule } from './workers-list-routing.module';

import { WorkersListPage } from './workers-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    WorkersListPageRoutingModule
  ],
  declarations: [WorkersListPage]
})
export class WorkersListPageModule {

}
