import {NgModule} from '@angular/core';
import {RejectedPage} from './rejected.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RejectedPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RejectedPage
  ]
})
export class RejectedModule {

}
