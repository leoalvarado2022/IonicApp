import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePagePage} from './home-page.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePagePage]
})
export class HomePagePageModule {

}
