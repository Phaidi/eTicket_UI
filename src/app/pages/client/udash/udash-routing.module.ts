import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UdashPage } from './udash.page';

const routes: Routes = [
  {
    path: '',
    component: UdashPage,
    children: [

    {
      path: 'uticket',
      loadChildren: () => import('../uticket/uticket.module').then( m => m.UticketPageModule)
    },
    {
      path: 'uaccount',
      loadChildren: () => import('../uaccount/uaccount.module').then( m => m.UaccountPageModule)
    },
    {
      path: 'routes',
      loadChildren: () => import('../routes/routes.module').then( m => m.RoutesPageModule)
    },
    {
      path: '',
      redirectTo: 'uticket',
      pathMatch: 'full'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UdashPageRoutingModule {}
