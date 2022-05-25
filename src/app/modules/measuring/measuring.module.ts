import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MeasuringPageRoutingModule } from './measuring-routing.module';

import { ListComponent } from './list/list.component';
import { DetailFormComponent } from './forms/detail-form/detail-form.component';
import { CreateMeasuringComponent } from './forms/create-measuring/create-measuring.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MeasuringPageRoutingModule
  ],
  declarations: [
    ListComponent,
    DetailFormComponent,
    CreateMeasuringComponent
    
  ]
})
export class MeasuringModule {}
