import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesPage} from './notes.page';
import {SharedModule} from '../../../shared/shared.module';
import {NotesFormComponent} from './notes-form/notes-form.component';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NotesPage,
    NotesFormComponent
  ],
  entryComponents: [
    NotesFormComponent
  ]
})
export class NotesPageModule {

}
