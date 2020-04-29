import {NgModule} from '@angular/core';

import {TallyListPage} from './tally-list.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {TallyFormComponent} from '../tally-form/tally-form.component';

const routes: Routes = [
  {
    path: '',
    component: TallyListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TallyListPage,
    TallyFormComponent
  ]
})
export class TallyListPageModule {

}
