import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UticketPage } from './uticket.page';

const routes: Routes = [
  {
    path: '',
    component: UticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UticketPageRoutingModule {}
