import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickingRoutingModule } from './picking-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {PickingListComponent} from './picking-list/picking-list.component';


@NgModule({
  declarations: [
    PickingListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PickingRoutingModule
  ]
})
export class PickingModule { }
