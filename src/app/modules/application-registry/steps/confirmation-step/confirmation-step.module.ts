import { NgModule } from '@angular/core';
import { ConfirmationStepPageRoutingModule } from './confirmation-step-routing.module';
import { ConfirmationStepPage } from './confirmation-step.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ConfirmationStepPageRoutingModule
  ],
  declarations: [ConfirmationStepPage]
})
export class ConfirmationStepPageModule {

}
