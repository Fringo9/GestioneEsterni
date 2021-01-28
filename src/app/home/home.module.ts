import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CalendarModule } from 'ion2-calendar';
import { HomePageRoutingModule } from './home-routing.module';
import { PhysioFilterPipe } from '../physio-filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CalendarModule
  ],
  declarations: [HomePage, PhysioFilterPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'it-IT' }]
})
export class HomePageModule { }
