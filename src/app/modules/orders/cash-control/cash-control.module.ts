import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../../../shared/shared.module';
import { CashControlPageRoutingModule } from './cash-control-routing.module';
import { CashControlPage } from './cash-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CashControlPageRoutingModule
  ],
  declarations: [CashControlPage]
})
export class CashControlPageModule {}
