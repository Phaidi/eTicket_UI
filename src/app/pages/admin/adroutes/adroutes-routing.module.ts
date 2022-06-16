import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdroutesPage } from './adroutes.page';

const routes: Routes = [
  {
    path: '',
    component: AdroutesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdroutesPageRoutingModule {}
