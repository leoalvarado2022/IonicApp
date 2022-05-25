import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthPage} from './auth.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then(module => module.WelcomePageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(module => module.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(module => module.RegisterPageModule)
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
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AuthPage
  ]
})
export class AuthPageModule {

}
