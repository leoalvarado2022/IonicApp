import {NgModule} from '@angular/core';

import {ContractsListPage} from './contracts-list.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ContractListItemComponent} from '../contract-list-item/contract-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: ContractsListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContractsListPage,
    ContractListItemComponent
  ]
})
export class ContractsListPageModule {

}
