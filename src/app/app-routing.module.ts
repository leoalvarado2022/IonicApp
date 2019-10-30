import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'home-page', loadChildren: './home-page/home-page.module#HomePagePageModule' },
  { path: 'production-contracts', loadChildren: './production-contracts/production-contracts.module#ProductionContractsPageModule' },
  { path: 'contract-detail', loadChildren: './contract-detail/contract-detail.module#ContractDetailPageModule' },
  { path: 'harvest-estimate', loadChildren: './harvest-estimate/harvest-estimate.module#HarvestEstimatePageModule' },
  { path: 'quality-estimate', loadChildren: './quality-estimate/quality-estimate.module#QualityEstimatePageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'pin', loadChildren: './auth/pin/pin.module#PinPageModule' },
  { path: 'expired', loadChildren: './auth/expired/expired.module#ExpiredPageModule' },
  { path: 'recovery-password', loadChildren: './auth/recovery/recovery.module#RecoveryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
