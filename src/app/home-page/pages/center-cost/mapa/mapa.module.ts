import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapaPage} from './mapa.page';
import {SharedModule} from '../../../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnEYJBFPfz6B7qcJTl9awmfdXG0Wwbgps'
    })
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {
}
