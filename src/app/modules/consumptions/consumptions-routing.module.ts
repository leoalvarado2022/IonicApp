import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumptionsPage } from './consumptions.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumptionsPageRoutingModule {}
