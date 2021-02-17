import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationStepPage } from './operation-step.page';

const routes: Routes = [
  {
    path: '',
    component: OperationStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationStepPageRoutingModule {}
