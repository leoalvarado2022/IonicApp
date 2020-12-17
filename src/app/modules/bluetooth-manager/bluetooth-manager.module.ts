import { NgModule } from '@angular/core';

import { BluetoothManagerPageRoutingModule } from './bluetooth-manager-routing.module';
import { BluetoothManagerPage } from './bluetooth-manager.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BluetoothManagerPageRoutingModule
  ],
  declarations: [BluetoothManagerPage]
})
export class BluetoothManagerPageModule {

}
