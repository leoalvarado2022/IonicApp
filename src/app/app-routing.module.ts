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
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(module => module.HomePagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'testing-icons',
    loadChildren: () => import('./testing-icons/testing-icons.module').then( m => m.TestingIconsPageModule)
  },
  {
    path: 'tratos-list',
    loadChildren: () => import('./modules/tratos/tratos-list/tratos-list.module').then(m => m.TratosListPageModule)
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
