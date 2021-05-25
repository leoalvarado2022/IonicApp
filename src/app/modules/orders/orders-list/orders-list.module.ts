import {NgModule} from '@angular/core';
import {OrdersListPage} from './orders-list.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Prints} from '../../../helpers/prints';
import {Sockets} from '../../../helpers/sockets';

const routes: Routes = [
  {
    path: '',
    component: OrdersListPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrdersListPage
  ],
  providers: [Prints, Sockets]
})
export class OrdersListModule {

}
