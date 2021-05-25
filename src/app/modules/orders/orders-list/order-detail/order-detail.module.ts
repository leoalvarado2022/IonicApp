import {NgModule} from '@angular/core';
import {OrderDetailPage} from './order-detail.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {NavParams} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrderDetailPage
  ]
})
export class OrderDetailModule {

}
