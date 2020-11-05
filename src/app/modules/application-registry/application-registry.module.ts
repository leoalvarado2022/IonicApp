import { NgModule } from '@angular/core';
import { ApplicationRegistryPageRoutingModule } from './application-registry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationRegistryService } from './services/application-registry/application-registry.service';
import { ApplicationsListPage } from './applications-list/applications-list.page';
import { OrdersListPage } from './orders-list/orders-list.page';

@NgModule({
  imports: [
    SharedModule,
    ApplicationRegistryPageRoutingModule
  ],
  declarations: [
    OrdersListPage,
    ApplicationsListPage
  ],
  providers: [
    ApplicationRegistryService
  ]
})
export class ApplicationRegistryPageModule {

}
