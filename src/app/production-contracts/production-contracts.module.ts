import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductionContractsPage} from './production-contracts.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProductionContractsPage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: './lista/lista.module#ListaPageModule'
          }
        ]
      },
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: './mapa/mapa.module#MapaPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/produccion_contratos/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/produccion_contratos/lista',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductionContractsPage]
})
export class ProductionContractsPageModule {

}
