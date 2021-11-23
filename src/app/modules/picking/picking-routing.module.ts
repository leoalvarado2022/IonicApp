import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PickingListComponent} from './picking-list/picking-list.component';

const routes: Routes = [
  {
    path: '',
    component: PickingListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickingRoutingModule { }
