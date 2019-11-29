import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractDetailPage} from './contract-detail.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: ':id',
    component: ContractDetailPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractDetailPage]

})
export class ContractDetailPageModule {

}
