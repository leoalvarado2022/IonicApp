import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QualityEstimatePage} from './quality-estimate.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: QualityEstimatePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QualityEstimatePage]
})
export class QualityEstimatePageModule {

}
