import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarservicePageRoutingModule } from './carservice-routing.module';

import { CarservicePage } from './carservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarservicePageRoutingModule
  ],
  declarations: [CarservicePage]
})
export class CarservicePageModule {}
