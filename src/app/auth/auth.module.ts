import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthPage} from './auth.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {

}
