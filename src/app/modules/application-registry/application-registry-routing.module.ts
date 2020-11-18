import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationEndPage } from './application-end/application-end.page';
import { ApplicationStartPage } from './application-start/application-start.page';
import { ApplicationsListPage } from './applications-list/applications-list.page';
import { OrdersListPage } from './orders-list/orders-list.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersListPage
  },
  {
    path: 'applications/:id',
    component: ApplicationsListPage
  },
  {
    path: 'application-start/:id',
    component: ApplicationStartPage
  },
  {
    path: 'application-end/:id',
    component: ApplicationEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRegistryPageRoutingModule {

}
