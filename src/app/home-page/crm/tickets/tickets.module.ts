import {NgModule} from '@angular/core';
import {TicketsPage} from './tickets.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TicketsPage,
    children: [
      {
        path: 'me',
        loadChildren: () => import('./me/me.module').then(module => module.MePageModule),
      },
      {
        path: 'all',
        loadChildren: () => import('./all/all.module').then(module => module.AllPageModule),
      },
      {
        path: '**',
        redirectTo: 'me'
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TicketsPage
  ]
})
export class TicketsPageModule {

}
