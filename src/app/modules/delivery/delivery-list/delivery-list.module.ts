import {NgModule} from '@angular/core';
import {DeliveryListPage} from './delivery-list.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MenuOrderPage} from './menu-order/menu-order.page';
import {Prints} from '../../../helpers/prints';
import {Sockets} from '../../../helpers/sockets';

const routes: Routes = [
  {
    path: '',
    component: DeliveryListPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DeliveryListPage
  ],
  providers: [Prints, Sockets]
})
export class DeliveryListModule {

}
