import {NgModule} from '@angular/core';
import {MePageRoutingModule} from './me-routing.module';
import {MePage} from './me.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MePageRoutingModule
  ],
  declarations: [MePage]
})
export class MePageModule {

}
