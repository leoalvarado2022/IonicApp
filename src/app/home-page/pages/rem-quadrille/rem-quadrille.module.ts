import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RemQuadrillePage} from './rem-quadrille.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RemQuadrillePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemQuadrillePage]
})
export class RemQuadrillePageModule {
}
