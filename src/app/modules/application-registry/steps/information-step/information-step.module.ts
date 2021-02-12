import { NgModule } from '@angular/core';
import { InformationStepPageRoutingModule } from './information-step-routing.module';
import { InformationStepPage } from './information-step.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    InformationStepPageRoutingModule
  ],
  declarations: [InformationStepPage]
})
export class InformationStepPageModule {

}