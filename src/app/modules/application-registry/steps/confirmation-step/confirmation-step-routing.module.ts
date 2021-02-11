import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationStepPage } from './confirmation-step.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationStepPageRoutingModule {}
