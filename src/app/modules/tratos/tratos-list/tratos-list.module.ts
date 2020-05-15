import {NgModule} from '@angular/core';

import {TratosListPageRoutingModule} from './tratos-list-routing.module';

import {TratosListPage} from './tratos-list.page';
import {SharedModule} from '../../../shared/shared.module';
import {AddTratoPage} from '../add-trato/add-trato.page';
import {AddCenterCostPage} from '../add-center-cost/add-center-cost.page';

@NgModule({
  imports: [
    SharedModule,
    TratosListPageRoutingModule,
  ],
  declarations: [TratosListPage, AddTratoPage, AddCenterCostPage]
})
export class TratosListPageModule {
}
