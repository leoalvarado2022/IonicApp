import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RemWorkersPage} from './rem-workers.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: ':id',
    component: RemWorkersPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemWorkersPage]
})
export class RemWorkersPageModule {

}
