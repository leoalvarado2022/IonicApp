import { NgModule } from '@angular/core';

import { NfcPageRoutingModule } from './nfc-routing.module';

import { NfcPage } from './nfc.page';
import { SharedModule } from '../../../shared/shared.module';
import { AssociateWorkPage } from './associate-work/associate-work.page';

@NgModule({
    imports: [
        SharedModule,
        NfcPageRoutingModule
    ],
    declarations: [NfcPage, AssociateWorkPage]
})
export class NfcPageModule {

}
