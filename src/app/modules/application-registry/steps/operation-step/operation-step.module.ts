import { NgModule } from '@angular/core';
import { OperationStepPageRoutingModule } from './operation-step-routing.module';
import { OperationStepPage } from './operation-step.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OperationStepPageRoutingModule
  ],
  declarations: [OperationStepPage]
})
export class OperationStepPageModule {

}