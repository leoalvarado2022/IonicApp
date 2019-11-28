import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterCostPage} from './center-cost.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CenterCostPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./lista/lista.module').then(module => module.ListaPageModule),
      },
      {
        path: 'lista',
        loadChildren: () => import('./lista/lista.module').then(module => module.ListaPageModule),
      },
      {
        path: 'mapa',
        loadChildren: () => import('./mapa/mapa.module').then(module => module.MapaPageModule),
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
    CenterCostPage
  ]
})
export class CenterCostPageModule {

}
