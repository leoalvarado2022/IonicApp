import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePagePage} from './home-page.page';
import {SharedModule} from '../shared/shared.module';
import {MenuComponent} from './common/menu/menu.component';
import {ContractDetailService} from './planning/services/contract-detail/contract-detail.service';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./common/menu-list/menu-list.module').then(module => module.MenuListPageModule)
      },
      {
        path: 'companies',
        loadChildren: () => import('./planning/companies/companies.module').then(module => module.CompaniesPageModule)
      },
      {
        path: 'connections',
        loadChildren: () => import('./planning/connections/connections.module').then(module => module.ConnectionsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./planning/profile/profile.module').then(module => module.ProfilePageModule)
      },
      {
        path: 'produccion_centrocosto',
        loadChildren: () => import('./planning/center-cost/center-cost.module').then(module => module.CenterCostPageModule)
      },
      {
        path: 'contract-detail',
        loadChildren: () => import('./planning/contract-detail/contract-detail.module').then(module => module.ContractDetailPageModule),
      },
      {
        path: 'harvest-estimate',
        loadChildren: () => import('./planning/harvest-estimate/harvest-estimate.module').then(module => module.HarvestEstimatePageModule),
      },
      {
        path: 'quality-estimate',
        loadChildren: () => import('./planning/quality-estimate/quality-estimate.module').then(module => module.QualityEstimatePageModule),
      },
      {
        path: 'notes',
        loadChildren: () => import('./planning/notes/notes.module').then(module => module.NotesPageModule)
      },
      {
        path: 'tarja_cuadrillas',
        loadChildren: () => import('./rem/rem-quadrille/rem-quadrille.module').then(module => module.RemQuadrillePageModule)
      },
      {
        path: 'rem-workers',
        loadChildren: () => import('./rem/rem-workers/rem-workers.module').then(module => module.RemWorkersPageModule)
      },
      {
        path: 'crm_tickets',
        loadChildren: () => import('./crm/tickets/tickets.module').then(module => module.TicketsPageModule)
      },
      {
        path: 'ticket-details-list',
        loadChildren: () => import('./crm/ticket-details-list/ticket-details-list.module').then(module => module.TicketDetailsListPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePagePage,
    MenuComponent
  ],
  providers: [
    ContractDetailService
  ]
})
export class HomePagePageModule {

}
