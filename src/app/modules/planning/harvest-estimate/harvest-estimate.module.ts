import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HarvestEstimatePage} from './harvest-estimate.page';
import {SharedModule} from '../../../shared/shared.module';
import {HarvestEstimateFormComponent} from './harvest-estimate-form/harvest-estimate-form.component';
import {NgxMaskModule} from 'ngx-mask';
import {Ionic4DatepickerModule} from '@logisticinfotech/ionic4-datepicker';

const routes: Routes = [
  {
    path: '',
    component: HarvestEstimatePage
  }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxMaskModule,
        Ionic4DatepickerModule,
    ],
    declarations: [
        HarvestEstimatePage,
        HarvestEstimateFormComponent
    ]
})
export class HarvestEstimatePageModule {

}
