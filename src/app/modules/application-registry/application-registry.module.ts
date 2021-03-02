import { NgModule } from '@angular/core';
import { ApplicationRegistryPageRoutingModule } from './application-registry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationsListPage } from './applications-list/applications-list.page';
import { OrdersListPage } from './orders-list/orders-list.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    SharedModule,
    ApplicationRegistryPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [
    OrdersListPage,
    ApplicationsListPage
  ],
})
export class ApplicationRegistryPageModule {

}
