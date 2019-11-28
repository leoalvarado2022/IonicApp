import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractDetailPage} from './contract-detail.page';
import {SharedModule} from '../../../shared/shared.module';
import {ContractDetailService} from './services/contract-detail/contract-detail.service';

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
  declarations: [ContractDetailPage],
  providers: [
    ContractDetailService
  ]
})
export class ContractDetailPageModule {

}
