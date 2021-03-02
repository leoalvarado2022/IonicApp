import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherStepPage } from './weather-step.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherStepPageRoutingModule {}
