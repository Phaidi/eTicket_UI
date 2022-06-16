import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddroutePageRoutingModule } from './addroute-routing.module';

import { AddroutePage } from './addroute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddroutePageRoutingModule
  ],
  declarations: [AddroutePage]
})
export class AddroutePageModule {}
