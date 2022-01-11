import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module';
import { SalesNotesRoutingModule } from './sales-notes-routing.module';
import {ListComponent} from './list/list.component';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesNotesRoutingModule,
  ]
})
export class SalesNotesModule { }
