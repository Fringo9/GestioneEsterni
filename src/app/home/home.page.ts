import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Appointment, HomeService, HourRange, Physio, Room } from '../home.service';
import { AddBookingPage } from '../modals/add-booking/add-booking/add-booking.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date: any;
  type: 'string';
  rooms: Room[];
  selectedRoom: Room;
  physio: Physio[];
  selectedPhysio: Physio;
  hourRange: HourRange[];
  showQuarter: boolean = false;
  appointments: Appointment[];

  optionsRange: CalendarComponentOptions = {
    monthFormat: 'MMM YYYY',
    monthPickerFormat: ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'],
    weekdays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    weekStart: 1
  };

  constructor(private homeService: HomeService, private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.selectedRoom)
    this.getPhysio();
    this.getAppointments();
    this.rooms = this.homeService.getRooms();
  }

  getAppointments() {
    this.homeService.getAppointments().then(res => {
      this.appointments = res;
      console.log('appuntamenti')
      console.log(this.appointments);
      console.log(this.selectedPhysio);
    })
  }

  getPhysio() {
    this.homeService.getPhysio().then(res => {
      this.physio = res;
      this.selectedPhysio = this.physio[0];
      console.log(this.selectedPhysio);
    })
  }

  getHoursFree(selectedDate: string) {
    if (selectedDate && this.selectedRoom) {
      const indexToRemove = [];
      for (let i = 0; i < this.appointments.length; i++) {
        if (this.appointments[i].day === selectedDate && this.appointments[i].roomId === this.selectedRoom.roomId) {
          this.hourRange.forEach(x => {
            if (new Date(this.appointments[i].day + ' ' + x.startTime) < new Date(this.appointments[i].day + ' ' + this.appointments[i].endTime) && new Date(this.appointments[i].day + ' ' + x.endTime) > new Date(this.appointments[i].day + ' ' + this.appointments[i].startTime)) {
              indexToRemove.push(this.hourRange.findIndex(y => y.name === x.name))
            }
          })
        }
      }

      for (var i = indexToRemove.length - 1; i >= 0; i--) {
        this.hourRange.splice(indexToRemove[i], 1);
      }
    }
  }

  async presentAddBookingModal(hour: HourRange) {
    if (this.selectedRoom && this.date) {

      const modal = await this.modalController.create({
        component: AddBookingPage,
        cssClass: 'modal-style',
        componentProps: {
          'selectedRoom': this.selectedRoom,
          'selectedHour': hour,
          'selectedDate': this.date._d,
          'physioName': this.selectedPhysio.name
        },
        backdropDismiss: true
      });

      modal.onDidDismiss()
        .then(() => {
          console.log('Modale dismessa')
          this.getAppointments();
        });

      return await modal.present();

    } else {
      console.log('Non hai scelto tutto')
    }
  }

  onChange() {
    this.hourRange = [...this.homeService.getHourRange()];
    this.getHoursFree(this.date._d.toLocaleDateString('en-US'));
  }

  changeSelectedPhysio() {
    console.log(this.selectedPhysio);
  }

  changeToggle(event) {
    this.showQuarter = event.detail.checked;
  }

  segmentChanged($event) {
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].roomId === Number($event.detail.value)) {
        this.selectedRoom = this.rooms[i]
      }
    }
    this.hourRange = [...this.homeService.getHourRange()];
    if (this.date) {
      this.getHoursFree(this.date._d.toLocaleDateString('en-US'));
    }
  }

  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

}
