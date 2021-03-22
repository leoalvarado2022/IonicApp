import {NgModule} from '@angular/core';

import {BluetoothManagerPageRoutingModule} from './bluetooth-manager-routing.module';
import {BluetoothManagerPage} from './bluetooth-manager.page';
import {SharedModule} from 'src/app/shared/shared.module';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import {BluetoothService} from '../../services/bluetooth/bluetooth.service';

@NgModule({
  imports: [
    SharedModule,
    BluetoothManagerPageRoutingModule
  ],
  providers: [
    BluetoothSerial,
    BluetoothService
  ],
  declarations: [BluetoothManagerPage]
})
export class BluetoothManagerPageModule {

}
