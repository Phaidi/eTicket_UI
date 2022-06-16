import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdticketPage } from './adticket.page';

const routes: Routes = [
  {
    path: '',
    component: AdticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdticketPageRoutingModule {}
