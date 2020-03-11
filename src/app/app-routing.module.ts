import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedGuard} from './guards/logged/logged.guard';
import {AuthGuard} from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomePageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomePageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(module => module.HomePagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tickets',
    loadChildren: () => import('./home-page/crm/tickets/tickets.module').then( m => m.TicketsPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./home-page/crm/tickets/tickets.module').then( m => m.TicketsPageModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./home-page/crm/tickets/me/me.module').then( m => m.MePageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('./home-page/crm/tickets/all/all.module').then( m => m.AllPageModule)
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
