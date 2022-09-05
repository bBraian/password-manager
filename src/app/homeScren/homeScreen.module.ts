import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { homeScreen } from './homeScreen.page';

import { homeScreenRoutingModule } from './homeScreen-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    homeScreenRoutingModule
  ],
  declarations: [homeScreen]
})
export class homeScreenModule {}
