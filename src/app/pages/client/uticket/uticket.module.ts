import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UticketPageRoutingModule } from './uticket-routing.module';

import { UticketPage } from './uticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UticketPageRoutingModule
  ],
  declarations: [UticketPage]
})
export class UticketPageModule {}
