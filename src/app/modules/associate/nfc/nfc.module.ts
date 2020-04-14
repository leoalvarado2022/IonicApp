import { NgModule } from '@angular/core';

import { NfcPageRoutingModule } from './nfc-routing.module';

import { NfcPage } from './nfc.page';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NfcPageRoutingModule
  ],
  declarations: [NfcPage]
})
export class NfcPageModule {}
