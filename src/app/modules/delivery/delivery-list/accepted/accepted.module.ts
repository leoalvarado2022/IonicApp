import {NgModule} from '@angular/core';
import {AcceptedPage} from './accepted.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AcceptedPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AcceptedPage
  ]
})
export class AcceptedModule {

}
