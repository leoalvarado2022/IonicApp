import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaPage} from './lista.page';
import {SharedModule} from '../../../../shared/shared.module';
import {CostCenterCardComponent} from './cost-center-card/cost-center-card.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListaPage,
    CostCenterCardComponent
  ]
})
export class ListaPageModule {

}
