import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterCostPage} from './center-cost.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CenterCostPage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: () => import('./lista/lista.module').then(m => m.ListaPageModule),
          }
        ]
      },
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaPageModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/produccion_centrocosto/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/produccion_centrocosto/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CenterCostPage]
})
export class CenterCostPageModule {

}
