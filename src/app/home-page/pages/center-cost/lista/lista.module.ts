import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaPage} from './lista.page';
import {SharedModule} from '../../../../shared/shared.module';
import {CostCenterCardComponent} from './cost-center-card/cost-center-card.component';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
  }
];

@NgModule({
  imports: [
    IonicModule,
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
