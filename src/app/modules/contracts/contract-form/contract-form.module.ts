import {NgModule} from '@angular/core';
import {ContractFormPage} from './contract-form.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DocumentScanner} from '@ionic-native/document-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: ContractFormPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractFormPage],
  providers: [
    DocumentScanner
  ]
})
export class ContractFormPageModule {

}
