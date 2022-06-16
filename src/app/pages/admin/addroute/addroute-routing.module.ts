import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddroutePage } from './addroute.page';

const routes: Routes = [
  {
    path: '',
    component: AddroutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddroutePageRoutingModule {}
