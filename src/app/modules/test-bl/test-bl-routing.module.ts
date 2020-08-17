import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestBlPage } from './test-bl.page';

const routes: Routes = [
  {
    path: '',
    component: TestBlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestBlPageRoutingModule {}
