import { NgModule } from '@angular/core';
import { TestBlPageRoutingModule } from './test-bl-routing.module';

import { TestBlPage } from './test-bl.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  imports: [
    SharedModule,
    TestBlPageRoutingModule,    
  ],
  declarations: [TestBlPage],
  providers: [
    BluetoothSerial    
  ]
})
export class TestBlPageModule {}
