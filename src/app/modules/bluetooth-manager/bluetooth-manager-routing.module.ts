import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothManagerPage } from './bluetooth-manager.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothManagerPageRoutingModule {}
