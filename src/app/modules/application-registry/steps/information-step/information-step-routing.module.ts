import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationStepPage } from './information-step.page';

const routes: Routes = [
  {
    path: '',
    component: InformationStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationStepPageRoutingModule {}
