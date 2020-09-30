import {NgModule} from '@angular/core';
import {DeliveryDetailPage} from './delivery-detail.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {NavParams} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: DeliveryDetailPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DeliveryDetailPage
  ]
})
export class DeliveryDetailModule {

}
