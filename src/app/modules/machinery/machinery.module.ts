import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachineryListPage } from './machinery-list/machinery-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CostCenterListPage } from './cost-center-list/cost-center-list.page';
import { MachineryFormComponent } from './machinery-form/machinery-form.component';

const routes: Routes = [
  {
    path: '',
    component: MachineryListPage
  },
];

@NgModule({
  declarations: [
    CostCenterListPage,
    MachineryListPage,
    MachineryFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    MachineryFormComponent
  ]
})
export class MachineryModule {

}
