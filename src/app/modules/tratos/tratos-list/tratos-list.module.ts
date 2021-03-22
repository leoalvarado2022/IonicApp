import {NgModule} from '@angular/core';

import {TratosListPageRoutingModule} from './tratos-list-routing.module';

import {TratosListPage} from './tratos-list.page';
import {SharedModule} from '../../../shared/shared.module';
import {AddTratoPage} from '../add-trato/add-trato.page';
import {AddCenterCostPage} from '../add-center-cost/add-center-cost.page';
import {HttpClientModule} from '@angular/common/http';
import {DealsService} from '../services/deals/deals.service';
import {TratosScannedPage} from '../tratos-scanned/tratos-scanned.page';
import {WorkerDealsComponent} from '../worker-deals/worker-deals.component';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  imports: [
    SharedModule,
    TratosListPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TratosListPage, AddTratoPage, AddCenterCostPage, TratosScannedPage, WorkerDealsComponent],
  providers: [DealsService, BluetoothSerial, BluetoothSerial]
})
export class TratosListPageModule {
}
