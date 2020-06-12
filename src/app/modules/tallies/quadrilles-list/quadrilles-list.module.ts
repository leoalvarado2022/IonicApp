import { NgModule } from '@angular/core';
import { QuadrillesListPageRoutingModule } from './quadrilles-list-routing.module';

import { QuadrillesListPage } from './quadrilles-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    QuadrillesListPageRoutingModule
  ],
  declarations: [QuadrillesListPage]
})
export class QuadrillesListPageModule {

}
