import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationEndPage } from './application-end/application-end.page';
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
    path: 'application-end/:id',
    component: ApplicationEndPage
  },
  {
    path: 'confirmation-step/:id',
    loadChildren: () => import('./steps/confirmation-step/confirmation-step.module').then(m => m.ConfirmationStepPageModule)
  },
  {
    path: 'information-step/:tempId',
    loadChildren: () => import('./steps/information-step/information-step.module').then(m => m.InformationStepPageModule)
  },
  {
    path: 'weather-step/:tempId',
    loadChildren: () => import('./steps/weather-step/weather-step.module').then(m => m.WeatherStepPageModule)
  },
  {
    path: 'operation-step/:tempId',
    loadChildren: () => import('./steps/operation-step/operation-step.module').then(m => m.OperationStepPageModule)
  },
  {
    path: 'summary-step/:tempId',
    loadChildren: () => import('./steps/summary-step/summary-step.module').then(m => m.SummaryStepPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRegistryPageRoutingModule {

}
