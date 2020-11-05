import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRegistryPageRoutingModule {

}
