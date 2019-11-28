import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthPage} from './auth.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/welcome/welcome.module').then(module => module.WelcomePageModule)
  },
  {
    path: 'password-recovery',
    loadChildren: () => import('./pages/recovery/recovery.module').then(module => module.RecoveryPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/pin/pin.module').then(module => module.PinPageModule)
  },
  {
    path: 'expired',
    loadChildren: () => import('./pages/expired/expired.module').then(module => module.ExpiredPageModule)
  },
  {
    path: '',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthPage
  ]
})
export class AuthPageModule {

}
