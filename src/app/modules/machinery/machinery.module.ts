import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachineryListPage } from './machinery-list/machinery-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MachineryFormComponent } from './machinery-form/machinery-form.component';

const routes: Routes = [
  {
    path: '',
    component: MachineryListPage
  },
];

@NgModule({
    declarations: [
        MachineryListPage,
        MachineryFormComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class MachineryModule {

}
