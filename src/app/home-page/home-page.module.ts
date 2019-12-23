import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePagePage} from './home-page.page';
import {SharedModule} from '../shared/shared.module';
import {MenuComponent} from './components/menu/menu.component';
import {ContractDetailService} from '../shared/services/contract-detail/contract-detail.service';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/menu-list/menu-list.module').then(module => module.MenuListPageModule)
      },
      {
        path: 'companies',
        loadChildren: () => import('./pages/companies/companies.module').then(module => module.CompaniesPageModule)
      },
      {
        path: 'connections',
        loadChildren: () => import('./pages/connections/connections.module').then(module => module.ConnectionsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(module => module.ProfilePageModule)
      },
      {
        path: 'produccion_centrocosto',
        loadChildren: () => import('./pages/center-cost/center-cost.module').then(module => module.CenterCostPageModule)
      },
      {
        path: 'contract-detail',
        loadChildren: () => import('./pages/contract-detail/contract-detail.module').then(module => module.ContractDetailPageModule),
      },
      {
        path: 'harvest-estimate',
        loadChildren: () => import('./pages/harvest-estimate/harvest-estimate.module').then(module => module.HarvestEstimatePageModule),
      },
      {
        path: 'quality-estimate',
        loadChildren: () => import('./pages/quality-estimate/quality-estimate.module').then(module => module.QualityEstimatePageModule),
      },
      {
        path: 'notes',
        loadChildren: () => import('./pages/notes/notes.module').then(module => module.NotesPageModule)
      },
      {
        path: 'tarja_cuadrillas',
        loadChildren: () => import('./pages/rem-quadrille/rem-quadrille.module').then(module => module.RemQuadrillePageModule)
      },
      {
        path: 'rem-workers',
        loadChildren: () => import('./pages/rem-workers/rem-workers.module').then(module => module.RemWorkersPageModule)
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
