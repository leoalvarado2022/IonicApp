import {NgModule} from '@angular/core';

import {TallyListPage} from './tally-list.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {TallyFormComponent} from '../tally-form/tally-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { TallyFormMultipleComponent } from '../tally-form-multiple/tally-form-multiple.component';

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
    TallyFormComponent,
    TallyFormMultipleComponent
  ],
  entryComponents: [
    TallyFormComponent,
    TallyFormMultipleComponent
  ]
})
export class TallyListPageModule {

}
