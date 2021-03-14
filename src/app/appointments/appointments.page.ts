import { Component, OnInit } from '@angular/core';
import { dayRoomOrdered, HomeService } from '../home.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  dayRoomOrdered: dayRoomOrdered[] = [];

  constructor(public homeService: HomeService, public home: HomePage) { }

  ngOnInit() {
    this.dayRoomOrdered = this.homeService.getDayRoomOrdered();
  }

}
