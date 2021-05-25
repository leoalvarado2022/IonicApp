import {NgModule} from '@angular/core';
import {OrderPaymentPage} from './order-payment.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: OrderPaymentPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrderPaymentPage
  ]
})
export class OrderPaymentModule {

}
