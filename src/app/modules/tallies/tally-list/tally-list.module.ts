import {NgModule} from '@angular/core';

import {TallyListPage} from './tally-list.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {TallyFormComponent} from '../tally-form/tally-form.component';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
  {
    path: '',
    component: TallyListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxMaskModule
  ],
  declarations: [
    TallyListPage,
    TallyFormComponent
  ],
  entryComponents: [
    TallyFormComponent
  ]
})
export class TallyListPageModule {

}
