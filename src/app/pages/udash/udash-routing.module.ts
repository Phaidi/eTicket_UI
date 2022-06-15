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
      loadChildren: () => import('../../pages/uticket/uticket.module').then( m => m.UticketPageModule)
    },
    {
      path: 'uaccount',
      loadChildren: () => import('../../pages/uaccount/uaccount.module').then( m => m.UaccountPageModule)
    },
    {
      path: 'welcome',
      loadChildren: () => import('../../pages/welcome/welcome.module').then( m => m.WelcomePageModule)
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
