import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersListPage } from './workers-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersListPageRoutingModule {}
