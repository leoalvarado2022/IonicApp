import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged/logged.guard';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((module) => module.HomePageModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((module) => module.HomePageModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((module) => module.AuthPageModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then((module) => module.HomePagePageModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
