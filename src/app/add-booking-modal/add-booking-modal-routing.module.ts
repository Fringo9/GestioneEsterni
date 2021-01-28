import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookingModalPage } from './add-booking-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddBookingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBookingModalPageRoutingModule {}
