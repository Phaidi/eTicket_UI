import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UdashPageRoutingModule } from './udash-routing.module';

import { UdashPage } from './udash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UdashPageRoutingModule
  ],
  declarations: [UdashPage]
})
export class UdashPageModule {}
