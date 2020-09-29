import {NgModule} from '@angular/core';
import {PendingPage} from './pending.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PendingPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PendingPage
  ]
})
export class PendingModule {

}
