import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderPageRoutingModule } from './calender-routing.module';

import { CalenderPage } from './calender.page';
import { NgCalendarModule } from 'ionic2-calendar';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe)
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalenderPage],
  providers: 
  [
    {provide:LOCALE_ID, useValue:'de-DE'}
  ]
})
export class CalenderPageModule {}
