import {NgModule} from '@angular/core';
import {MenuOrderPage} from './menu-order.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MenuOrderPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuOrderPage
  ]
})
export class MenuOrderModule {

}
