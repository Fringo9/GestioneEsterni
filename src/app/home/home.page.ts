import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Appointment, HomeService, HourRange, Physio, Room } from '../home.service';
import { AddBookingPage } from '../modals/add-booking/add-booking/add-booking.page';
import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttonClicked: boolean = false;
  clickedIndex: number;
  date: string[] = [];
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
    weekStart: 1,
    pickMode: 'multi'
  };

  constructor(private homeService: HomeService, private modalController: ModalController) {
    moment.locale('it-IT')
  }

  // Modale di prenotazione
  async presentAddBookingModal(hour: HourRange) {
    if (this.selectedRoom && this.date) {
      const modal = await this.modalController.create({
        component: AddBookingPage,
        cssClass: 'modal-style',
        componentProps: {
          'selectedRoom': this.selectedRoom,
          'selectedHour': hour,
          'date': this.date,
          'physioName': this.selectedPhysio.name
        }
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

  ngOnInit() {
    this.getPhysio();
    this.getAppointments();
    this.rooms = this.homeService.getRooms(); // Popolo lista delle stanze
  }

  // Ottengo gli appuntamenti
  getAppointments() {
    this.homeService.getAppointments().then(res => {
      this.appointments = res;
      console.log(this.appointments);
      if (this.date.length > 0) {
        this.getHoursFree(this.date);
      }
    })
  }

  // Ottengo lista dei Fisio
  getPhysio() {
    this.homeService.getPhysio().then(res => {
      this.physio = res;
      this.physio.sort((a, b) => a.id - b.id);
      this.selectedPhysio = this.physio[0];
    })
  }

  // Scatta alla selezione di una data
  daySelected(event) {
    this.date = [];

    // Popolo array date con date selezionate convertendole
    for (let i = 0; i < event.length; i++) {
      this.date.push(new Date(event[i]).toLocaleDateString('en-US'));
    }

    // Resetto la lista degli orari disponibili
    this.hourRange = [...this.homeService.getHourRange()];
    this.getHoursFree(this.date);
  }

  // Controllo se date selezionate corrispondono ad eventuali appuntamenti
  getHoursFree(selectedDate: string[]) {
    if (selectedDate && this.selectedRoom) {
      const indexToRemove = [];
      for (let i = 0; i < this.appointments.length; i++) {
        for (let j = 0; j < selectedDate.length; j++) {
          if (this.appointments[i].day === selectedDate[j] && this.appointments[i].roomId === this.selectedRoom.roomId) {
            // Ottengo gli indici dei range orari da eliminare
            this.hourRange.forEach(x => {
              if (new Date(this.appointments[i].day + ' ' + x.startTime) < new Date(this.appointments[i].day + ' ' + this.appointments[i].endTime) && new Date(this.appointments[i].day + ' ' + x.endTime) > new Date(this.appointments[i].day + ' ' + this.appointments[i].startTime)) {
                indexToRemove.push(this.hourRange.findIndex(y => y.name === x.name))
              }
            })
          }
        }
      }

      // Elimino i range orari dalla lista
      for (var i = indexToRemove.length - 1; i >= 0; i--) {
        this.hourRange.splice(indexToRemove[i], 1);
        this.hourRange = [...this.hourRange];
      }
    }
  }

  changeToggle(event) {
    this.showQuarter = event.detail.checked;
  }

  /* segmentChanged($event) {
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].roomId === Number($event.detail.value)) {
        this.selectedRoom = this.rooms[i]
      }
    }
    this.hourRange = [...this.homeService.getHourRange()];
    if (this.date) {
      this.getHoursFree(this.date);
    }
  } */

  onClick(room: Room, i: number) {
    if (i === this.clickedIndex) {
      this.buttonClicked = !this.buttonClicked;
      this.clickedIndex = undefined;
    } else if (this.clickedIndex === undefined) {
      this.buttonClicked = !this.buttonClicked;
      this.clickedIndex = i;
    } else {
      this.clickedIndex = i;
    }

    if (this.selectedRoom === room) {
      this.selectedRoom = undefined;
    } else {
      this.selectedRoom = room;
      console.log(this.selectedRoom);
      this.hourRange = [...this.homeService.getHourRange()];
      if (this.date) {
        this.getHoursFree(this.date);
      }
    }
  }

  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

}
