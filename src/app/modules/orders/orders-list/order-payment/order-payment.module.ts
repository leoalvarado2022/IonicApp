import {NgModule} from '@angular/core';
import {OrderPaymentPage} from './order-payment.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {OrderListDiscountPage} from '../order-list-discount/order-list-discount.page';

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
    OrderPaymentPage,
    OrderListDiscountPage
  ]
})
export class OrderPaymentModule {

}
