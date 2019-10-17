import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductionContractsPage } from './production-contracts.page';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ProductionContractsPage,
    children:[
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
        redirectTo: '/production-contracts/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/production-contracts/lista',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductionContractsPage]
})
export class ProductionContractsPageModule {}
