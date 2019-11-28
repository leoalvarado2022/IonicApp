import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePage} from './welcome.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('../login/login.module').then(module => module.LoginPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(module => module.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(module => module.RegisterPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {
}
