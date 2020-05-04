import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TestingIconsPage} from './testing-icons.page';

const routes: Routes = [
  {
    path: '',
    component: TestingIconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingIconsPageRoutingModule {}
