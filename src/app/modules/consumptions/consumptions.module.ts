import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsumptionsPageRoutingModule } from './consumptions-routing.module';
import { ConsumptionsPage } from './consumptions.page';

@NgModule({
  imports: [
    SharedModule,
    ConsumptionsPageRoutingModule
  ],
  declarations: [ConsumptionsPage],
})
export class ConsumptionsPageModule {

}
