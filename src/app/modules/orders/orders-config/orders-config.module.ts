import {NgModule} from '@angular/core';
import {OrdersConfigPage} from './orders-config.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrdersConfigPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrdersConfigPage
  ]
})
export class OrdersConfigModule {

}
