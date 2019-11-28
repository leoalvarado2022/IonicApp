import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePagePage} from './home-page.page';
import {SharedModule} from '../shared/shared.module';
import {MenuComponent} from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/menu-list/menu-list.module').then(module => module.MenuListPageModule)
      },
      {
        path: 'companies',
        loadChildren: () => import('./pages/companies/companies.module').then(module => module.CompaniesPageModule)
      },
      {
        path: 'connections',
        loadChildren: () => import('./pages/connections/connections.module').then(module => module.ConnectionsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(module => module.ProfilePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePagePage,
    MenuComponent
  ],
})
export class HomePagePageModule {

}
