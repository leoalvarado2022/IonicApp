import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TratosListPage } from './tratos-list.page';

const routes: Routes = [
  {
    path: '',
    component: TratosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratosListPageRoutingModule {}
