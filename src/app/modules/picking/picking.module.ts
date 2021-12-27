import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickingRoutingModule } from './picking-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {PickingListComponent} from './picking-list/picking-list.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    PickingListComponent,
    OrderDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PickingRoutingModule
  ]
})
export class PickingModule { }
