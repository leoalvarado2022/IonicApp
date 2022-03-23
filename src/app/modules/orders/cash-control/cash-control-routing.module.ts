import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashControlPage } from './cash-control.page';

const routes: Routes = [
  {
    path: '',
    component: CashControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashControlPageRoutingModule {}
