import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdticketPageRoutingModule } from './adticket-routing.module';

import { AdticketPage } from './adticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdticketPageRoutingModule
  ],
  declarations: [AdticketPage]
})
export class AdticketPageModule {}
