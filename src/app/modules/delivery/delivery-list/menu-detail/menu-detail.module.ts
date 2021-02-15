import {NgModule} from '@angular/core';
import {MenuDetailPage} from './menu-detail.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MenuDetailPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuDetailPage
  ]
})
export class MenuDetailModule {

}
