import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaPage} from './lista.page';
import {SharedModule} from '../../../../shared/shared.module';
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
    ListaPage
  ]
})
export class ListaPageModule {

}
