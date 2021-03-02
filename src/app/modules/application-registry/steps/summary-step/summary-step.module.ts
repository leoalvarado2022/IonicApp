import { NgModule } from '@angular/core';
import { SummaryStepPageRoutingModule } from './summary-step-routing.module';
import { SummaryStepPage } from './summary-step.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SummaryStepPageRoutingModule
  ],
  declarations: [SummaryStepPage]
})
export class SummaryStepPageModule {

}
