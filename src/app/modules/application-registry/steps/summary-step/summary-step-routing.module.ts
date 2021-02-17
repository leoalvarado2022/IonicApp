import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryStepPage } from './summary-step.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryStepPageRoutingModule {}
