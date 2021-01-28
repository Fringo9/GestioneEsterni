import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBookingModalPageRoutingModule } from './add-booking-modal-routing.module';

import { AddBookingModalPage } from './add-booking-modal.page';
import { CalendarModule } from 'ion2-calendar';
import { FilterQuarterPipe } from '../home/filter-quarter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBookingModalPageRoutingModule,
    CalendarModule
  ],
  declarations: [AddBookingModalPage, FilterQuarterPipe]
})
export class AddBookingModalPageModule { }
