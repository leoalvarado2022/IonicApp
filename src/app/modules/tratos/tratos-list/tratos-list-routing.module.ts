import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TratosListPage} from './tratos-list.page';
import {AddCenterCostPage} from '../add-center-cost/add-center-cost.page';

const routes: Routes = [
  {
    path: '',
    component: TratosListPage
  },
  {
    path: 'add-center-cost',
    component: AddCenterCostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratosListPageRoutingModule {
}
