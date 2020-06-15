import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalliesListPage } from './tallies-list.page';

const routes: Routes = [
  {
    path: '',
    component: TalliesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalliesListPageRoutingModule {

}