import { NgModule } from '@angular/core';
import { TalliesListPageRoutingModule } from './tallies-list-routing.module';
import { TalliesListPage } from './tallies-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TalliesListPageRoutingModule
  ],
  declarations: [TalliesListPage]
})
export class TalliesListPageModule {}
