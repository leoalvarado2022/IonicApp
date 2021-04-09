import {NgModule} from '@angular/core';
import {DeliveryPaymentPage} from './delivery-payment.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPaymentPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DeliveryPaymentPage
  ]
})
export class DeliveryPaymentModule {

}
