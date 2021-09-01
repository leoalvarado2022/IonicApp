import {NgModule} from '@angular/core';
import {MenuDetailPage} from './menu-detail.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {Ionic4DatepickerModule} from '@logisticinfotech/ionic4-datepicker';

const routes: Routes = [
  {
    path: '',
    component: MenuDetailPage,
  }
];


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuDetailPage
  ]
})
export class MenuDetailModule {

}
