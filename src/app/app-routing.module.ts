import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedGuard} from './guards/logged/logged.guard';
import {AuthGuard} from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'produccion_centrocosto',
    loadChildren: () => import('./center-cost/center-cost.module').then(m => m.CenterCostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'harvest-estimate',
    loadChildren: () => import('./harvest-estimate/harvest-estimate.module').then(m => m.HarvestEstimatePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'quality-estimate',
    loadChildren: () => import('./quality-estimate/quality-estimate.module').then(m => m.QualityEstimatePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule),
    canActivate: [AuthGuard]
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
    canActivate: [AuthGuard]
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'center-cost',
    loadChildren: () => import('./center-cost/center-cost.module').then(m => m.CenterCostPageModule),
    canActivate: [AuthGuard]
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
