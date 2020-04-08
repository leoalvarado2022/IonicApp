import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnectionsPage} from './connections.page';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConnectionsPage]
})
export class ConnectionsPageModule {

}
