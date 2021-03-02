import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePagePage} from './home-page.page';
import {SharedModule} from '../shared/shared.module';
import {MenuComponent} from '../components/menu/menu.component';
import {ContractDetailService} from '../modules/planning/services/contract-detail/contract-detail.service';
import {AuthGuard} from '../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/menu-list/menu-list.module').then((module) => module.MenuListPageModule),
      },
      {
        path: 'companies',
        loadChildren: () => import('../modules/companies/companies.module').then((module) => module.CompaniesPageModule),
      },
      {
        path: 'connections',
        loadChildren: () => import('../modules/connections/connections.module').then((module) => module.ConnectionsPageModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('../modules/planning/profile/profile.module').then((module) => module.ProfilePageModule),
      },
      {
        path: 'produccion_centrocosto',
        loadChildren: () => import('../modules/planning/center-cost/center-cost.module').then((module) => module.CenterCostPageModule),
      },
      {
        path: 'contract-detail',
        loadChildren: () => import('../modules/planning/contract-detail/contract-detail.module').then((module) => module.ContractDetailPageModule),
      },
      {
        path: 'harvest-estimate',
        loadChildren: () => import('../modules/planning/harvest-estimate/harvest-estimate.module').then((module) => module.HarvestEstimatePageModule),
      },
      {
        path: 'quality-estimate',
        loadChildren: () => import('../modules/planning/quality-estimate/quality-estimate.module').then((module) => module.QualityEstimatePageModule),
      },
      {
        path: 'notes',
        loadChildren: () => import('../modules/planning/notes/notes.module').then((module) => module.NotesPageModule),
      },
      {
        path: 'tarja_cuadrillas',
        loadChildren: () => import('../modules/rem/rem-quadrille/rem-quadrille.module').then((module) => module.RemQuadrillePageModule),
      },
      {
        path: 'rem-workers',
        loadChildren: () => import('../modules/rem/rem-workers/rem-workers.module').then((module) => module.RemWorkersPageModule),
      },
      {
        path: 'crm_tickets',
        loadChildren: () => import('../modules/crm/tickets/tickets.module').then((module) => module.TicketsPageModule),
      },
      {
        path: 'ticket-details-list',
        loadChildren: () => import('../modules/crm/ticket-details-list/ticket-details-list.module').then((module) => module.TicketDetailsListPageModule),
      },
      {
        path: 'ticket-form',
        loadChildren: () => import('../modules/crm/ticket-form/ticket-form.module').then((module) => module.TicketFormPageModule),
      },
      {
        path: 'tarja_contrato',
        loadChildren: () => import('../modules/pre-contracts/contracts-list/contracts-list.module').then((module) => module.ContractsListPageModule),
      },
      {
        path: 'contract-form',
        loadChildren: () => import('../modules/pre-contracts/contract-form/contract-form.module').then((module) => module.ContractFormPageModule),
      },
      {
        path: 'tarja_asociarnfc',
        loadChildren: () => import('../modules/associate/nfc/nfc.module').then((m) => m.NfcPageModule),
      },
      {
        path: 'tarja_tratos',
        loadChildren: () => import('../modules/tratos/tratos-list/tratos-list.module').then((m) => m.TratosListPageModule),
      },
      {
        path: 'tarja_tarjas',
        loadChildren: () => import('../modules/tallies/quadrilles-list/quadrilles-list.module').then((m) => m.QuadrillesListPageModule),
      },
      {
        path: 'tally-workers-list/:id',
        loadChildren: () => import('../modules/tallies/workers-list/workers-list.module').then((m) => m.WorkersListPageModule),
      },
      {
        path: 'tallies-list/:id/:date',
        loadChildren: () => import('../modules/tallies/tallies-list/tallies-list.module').then((m) => m.TalliesListPageModule),
      },
      {
        path: 'uso_maquinaria',
        loadChildren: () => import('../modules/machinery/machinery.module').then((m) => m.MachineryModule),
      },
      {
        path: 'consumos',
        loadChildren: () => import('../modules/consumptions/consumptions.module').then((m) => m.ConsumptionsPageModule),
      },
      {
        path: 'asociar_bluetooth',
        loadChildren: () => import('../modules/bluetooth-manager/bluetooth-manager.module').then(m => m.BluetoothManagerPageModule)
      },
      {
        path: 'delivery',
        loadChildren: () => import('../modules/delivery/delivery-list/delivery-list.module').then((module) => module.DeliveryListModule),
      },
      {
        path: 'menu-order',
        loadChildren: () => import('../modules/delivery/delivery-list/menu-order/menu-order.module').then((module) => module.MenuOrderModule),
      },
      {
        path: 'menu-detail',
        loadChildren: () => import('../modules/delivery/delivery-list/menu-detail/menu-detail.module').then((module) => module.MenuDetailModule),
      },
      {
        path: 'order-detail',
        loadChildren: () => import('../modules/delivery/delivery-list/order-detail/order-detail.module').then((module) => module.OrderDetailModule),
      },
      {
        path: 'delivery-detail/:id',
        loadChildren: () => import('../modules/delivery/delivery-list/delivery-detail/delivery-detail.module').then((module) => module.DeliveryDetailModule),
      },
      {
        path: 'config_delivery',
        loadChildren: () => import('../modules/delivery/delivery-config/delivery-config.module').then((module) => module.DeliveryConfigModule),
      },
      {
        path: 'registro_aplicacion',
        loadChildren: () => import('../modules/application-registry/application-registry.module').then(m => m.ApplicationRegistryPageModule)
      },
      {path: '**', redirectTo: ''},
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [HomePagePage, MenuComponent],
  providers: [ContractDetailService],
})
export class HomePagePageModule {

}
