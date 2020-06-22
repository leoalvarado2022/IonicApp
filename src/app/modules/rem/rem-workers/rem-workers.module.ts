import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RemWorkersPage} from './rem-workers.page';
import {SharedModule} from '../../../shared/shared.module';
import { QuadrilleService } from '../services/quadrille/quadrille.service';

const routes: Routes = [
  {
    path: ':id',
    component: RemWorkersPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemWorkersPage],
  providers: [
    QuadrilleService
  ]
})
export class RemWorkersPageModule {

}
