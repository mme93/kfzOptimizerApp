import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuftraegePageRoutingModule } from './auftraege-routing.module';

import { AuftraegePage } from './auftraege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuftraegePageRoutingModule
  ],
  declarations: [AuftraegePage]
})
export class AuftraegePageModule {}
