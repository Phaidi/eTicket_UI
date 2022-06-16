import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdroutesPageRoutingModule } from './adroutes-routing.module';

import { AdroutesPage } from './adroutes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdroutesPageRoutingModule
  ],
  declarations: [AdroutesPage]
})
export class AdroutesPageModule {}
