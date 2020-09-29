import {NgModule} from '@angular/core';
import {DeliveryListPage} from './delivery-list.page';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DeliveryListPage,
    children: [
      {
        path: 'pending',
        loadChildren: () => import('./pending/pending.module').then(module => module.PendingModule),
      },
      {
        path: 'accepted',
        loadChildren: () => import('./accepted/accepted.module').then(module => module.AcceptedModule),
      },
      {
        path: 'rejected',
        loadChildren: () => import('./rejected/rejected.module').then(module => module.RejectedModule),
      },
      {
        path: 'close',
        loadChildren: () => import('./close/close.module').then(module => module.CloseModule),
      },
      {
        path: '**',
        redirectTo: 'pending'
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DeliveryListPage
  ]
})
export class DeliveryListModule {

}
