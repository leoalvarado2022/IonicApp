import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HarvestEstimatePage} from './harvest-estimate.page';
import {SharedModule} from '../../../shared/shared.module';
import {HarvestEstimateFormComponent} from './harvest-estimate-form/harvest-estimate-form.component';

const routes: Routes = [
  {
    path: '',
    component: HarvestEstimatePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HarvestEstimatePage,
    HarvestEstimateFormComponent
  ],
  entryComponents: [
    HarvestEstimateFormComponent
  ]
})
export class HarvestEstimatePageModule {

}
