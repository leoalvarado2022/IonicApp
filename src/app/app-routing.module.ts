import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedGuard} from './guards/logged/logged.guard';
import {InternetGuard} from './guards/internet/internet.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePagePageModule)
  },
  {
    path: 'produccion_centrocosto',
    loadChildren: () => import('./center-cost/center-cost.module').then(m => m.CenterCostPageModule),
    canActivate: [InternetGuard]
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailPageModule),
  },
  {
    path: 'harvest-estimate',
    loadChildren: () => import('./harvest-estimate/harvest-estimate.module').then(m => m.HarvestEstimatePageModule),
  },
  {
    path: 'quality-estimate',
    loadChildren: () => import('./quality-estimate/quality-estimate.module').then(m => m.QualityEstimatePageModule),
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule),
  },
  {
    path: 'pin',
    loadChildren: () => import('./auth/pin/pin.module').then(m => m.PinPageModule),
  },
  {
    path: 'expired',
    loadChildren: () => import('./auth/expired/expired.module').then(m => m.ExpiredPageModule),
  },
  {
    path: 'recovery-password',
    loadChildren: () => import('./auth/recovery/recovery.module').then(m => m.RecoveryPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
  },
  {
    path: 'connections',
    loadChildren: () => import('./connections/connections.module').then(m => m.ConnectionsPageModule),
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesPageModule),
  },
  {
    path: 'center-cost',
    loadChildren: () => import('./center-cost/center-cost.module').then(m => m.CenterCostPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
