import {NgModule} from '@angular/core';
import {ContractFormPage} from './contract-form.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Ionic4DatepickerModule} from '@logisticinfotech/ionic4-datepicker';

const routes: Routes = [
  {
    path: '',
    component: ContractFormPage
  },
  {
    path: ':id',
    component: ContractFormPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractFormPage],
  providers: [
    BarcodeScanner
  ]
})
export class ContractFormPageModule {

}
