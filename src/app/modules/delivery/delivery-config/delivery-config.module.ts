import {NgModule} from '@angular/core';
import {DeliveryConfigPage} from './delivery-config.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DeliveryConfigPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DeliveryConfigPage
  ]
})
export class DeliveryConfigModule {

}
