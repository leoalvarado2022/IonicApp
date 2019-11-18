import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeGuard} from './guards/home/home.guard';
import {InitSesionGuard} from './guards/initSesion/init-sesion.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[HomeGuard]},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule', canActivate:[InitSesionGuard] },
  { path: 'home-page', loadChildren: './home-page/home-page.module#HomePagePageModule' },
  { path: 'produccion_contratos', loadChildren: './production-contracts/production-contracts.module#ProductionContractsPageModule' },
  { path: 'contract-detail', loadChildren: './contract-detail/contract-detail.module#ContractDetailPageModule' },
  { path: 'harvest-estimate', loadChildren: './harvest-estimate/harvest-estimate.module#HarvestEstimatePageModule' },
  { path: 'quality-estimate', loadChildren: './quality-estimate/quality-estimate.module#QualityEstimatePageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'pin', loadChildren: './auth/pin/pin.module#PinPageModule' },
  { path: 'expired', loadChildren: './auth/expired/expired.module#ExpiredPageModule' },
  { path: 'recovery-password', loadChildren: './auth/recovery/recovery.module#RecoveryPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'connections', loadChildren: './connections/connections.module#ConnectionsPageModule' },
  { path: 'companies', loadChildren: './companies/companies.module#CompaniesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
