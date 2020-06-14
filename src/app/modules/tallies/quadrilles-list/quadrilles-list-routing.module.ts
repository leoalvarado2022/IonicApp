import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadrillesListPage } from './quadrilles-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuadrillesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadrillesListPageRoutingModule {
  
}
