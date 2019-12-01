import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QualityEstimatePage} from './quality-estimate.page';
import {SharedModule} from '../../../shared/shared.module';
import {QualityEstimateFormComponent} from './quality-estimate-form/quality-estimate-form.component';

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
  declarations: [
    QualityEstimatePage,
    QualityEstimateFormComponent
  ],
  entryComponents: [
    QualityEstimateFormComponent
  ]
})
export class QualityEstimatePageModule {

}
