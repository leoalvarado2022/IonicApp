import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratosListPageRoutingModule } from './tratos-list-routing.module';

import { TratosListPage } from './tratos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratosListPageRoutingModule
  ],
  declarations: [TratosListPage]
})
export class TratosListPageModule {}
