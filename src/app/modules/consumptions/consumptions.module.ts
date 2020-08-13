import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsumptionsPageRoutingModule } from './consumptions-routing.module';
import { ConsumptionsPage } from './consumptions.page';
import { ConsumptionFormComponent } from './consumption-form/consumption-form.component';
import { ConsumptionService } from './services/consumption.service';

@NgModule({
  imports: [
    SharedModule,
    ConsumptionsPageRoutingModule
  ],
  declarations: [
    ConsumptionsPage,
    ConsumptionFormComponent
  ],
  entryComponents: [
    ConsumptionFormComponent
  ],
  providers: [
    ConsumptionService
  ]
})
export class ConsumptionsPageModule {

}
