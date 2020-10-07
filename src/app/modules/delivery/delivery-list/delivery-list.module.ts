import {NgModule} from '@angular/core';
import {DeliveryListPage} from './delivery-list.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

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
  ]
})
export class DeliveryListModule {

}
