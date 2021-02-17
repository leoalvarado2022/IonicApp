import { NgModule } from '@angular/core';
import { ApplicationRegistryPageRoutingModule } from './application-registry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationRegistryService } from './services/application-registry/application-registry.service';
import { ApplicationsListPage } from './applications-list/applications-list.page';
import { OrdersListPage } from './orders-list/orders-list.page';
import { ApplicationEndPage } from './application-end/application-end.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    SharedModule,
    ApplicationRegistryPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [
    OrdersListPage,
    ApplicationsListPage,    
    ApplicationEndPage
  ],
  providers: [
    ApplicationRegistryService
  ]
})
export class ApplicationRegistryPageModule {

}
