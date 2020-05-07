import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePagePage} from './home-page.page';
import {SharedModule} from '../shared/shared.module';
import {MenuComponent} from '../components/menu/menu.component';
import {ContractDetailService} from '../modules/planning/services/contract-detail/contract-detail.service';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/menu-list/menu-list.module').then(module => module.MenuListPageModule)
      },
      {
        path: 'companies',
        loadChildren: () => import('../modules/planning/companies/companies.module').then(module => module.CompaniesPageModule)
      },
      {
        path: 'connections',
        loadChildren: () => import('../modules/planning/connections/connections.module').then(module => module.ConnectionsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../modules/planning/profile/profile.module').then(module => module.ProfilePageModule)
      },
      {
        path: 'produccion_centrocosto',
        loadChildren: () => import('../modules/planning/center-cost/center-cost.module').then(module => module.CenterCostPageModule)
      },
      {
        path: 'contract-detail',
        loadChildren: () => import('../modules/planning/contract-detail/contract-detail.module').then(module => module.ContractDetailPageModule),
      },
      {
        path: 'harvest-estimate',
        loadChildren: () => import('../modules/planning/harvest-estimate/harvest-estimate.module').then(module => module.HarvestEstimatePageModule),
      },
      {
        path: 'quality-estimate',
        loadChildren: () => import('../modules/planning/quality-estimate/quality-estimate.module').then(module => module.QualityEstimatePageModule),
      },
      {
        path: 'notes',
        loadChildren: () => import('../modules/planning/notes/notes.module').then(module => module.NotesPageModule)
      },
      {
        path: 'tarja_cuadrillas',
        loadChildren: () => import('../modules/rem/rem-quadrille/rem-quadrille.module').then(module => module.RemQuadrillePageModule)
      },
      {
        path: 'rem-workers',
        loadChildren: () => import('../modules/rem/rem-workers/rem-workers.module').then(module => module.RemWorkersPageModule)
      },
      {
        path: 'crm_tickets',
        loadChildren: () => import('../modules/crm/tickets/tickets.module').then(module => module.TicketsPageModule)
      },
      {
        path: 'ticket-details-list',
        loadChildren: () => import('../modules/crm/ticket-details-list/ticket-details-list.module').then(module => module.TicketDetailsListPageModule)
      },
      {
        path: 'ticket-form',
        loadChildren: () => import('../modules/crm/ticket-form/ticket-form.module').then(module => module.TicketFormPageModule)
      },
      {
        path: 'tarja_contrato',
        loadChildren: () => import('../modules/pre-contracts/contracts-list/contracts-list.module').then(module => module.ContractsListPageModule)
      },
      {
        path: 'contract-form',
        loadChildren: () => import('../modules/pre-contracts/contract-form/contract-form.module').then(module => module.ContractFormPageModule)
      },
      {
        path: 'tarja_asociarnfc',
        loadChildren: () => import('../modules/associate/nfc/nfc.module').then(m => m.NfcPageModule)
      },
      {
        path: 'tarja_tarjas',
        loadChildren: () => import('../modules/tallies/tally-list/tally-list.module').then(module => module.TallyListPageModule)
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
