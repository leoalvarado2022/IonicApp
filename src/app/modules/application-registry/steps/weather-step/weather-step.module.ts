import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherStepPageRoutingModule } from './weather-step-routing.module';
import { WeatherStepPage } from './weather-step.page';

@NgModule({
  imports: [
    SharedModule,
    WeatherStepPageRoutingModule
  ],
  declarations: [WeatherStepPage]
})
export class WeatherStepPageModule {
  
}
