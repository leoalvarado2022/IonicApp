import {NgModule} from '@angular/core';
import {ActivePageRoutingModule} from './active-routing.module';
import {ActivePage} from './active.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ActivePageRoutingModule
  ],
  declarations: [ActivePage]
})
export class ActiveModule {

}
