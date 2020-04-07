import {NgModule} from '@angular/core';
import {AllPageRoutingModule} from './all-routing.module';
import {AllPage} from './all.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AllPageRoutingModule
  ],
  declarations: [AllPage]
})
export class AllPageModule {

}
