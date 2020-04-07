import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuListPage} from './menu-list.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MenuListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuListPage
  ]
})
export class MenuListPageModule {

}
