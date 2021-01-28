import { Component } from '@angular/core';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { Appointment, HomeService, HourRange, Physio, Room } from '../home.service';
import * as moment from 'moment'
import { AddBookingModalPage } from '../add-booking-modal/add-booking-modal.page';
import { format } from 'date-fns'
import { it } from 'date-fns/locale'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rooms: Room[];
  physio: Physio[];
  selectedPhysio: Physio;
  appointments: Appointment[];

  constructor(
    public homeService: HomeService,
    private modalController: ModalController,
    public toastController: ToastController) {
    moment.locale('it-IT')
  }

  // Modale di prenotazione Nuova
  async presentAddBookingModal() {
    const modal = await this.modalController.create({
      component: AddBookingModalPage,
      cssClass: 'add-booking',
      componentProps: {
        'appointments': this.appointments,
        'physio': this.physio,
        'selectedPhysio': this.selectedPhysio,
        'rooms': this.rooms
      }
    });

    modal.onDidDismiss()
      .then(() => {
        console.log('Modale dismessa')
        this.getAppointments();
      });

    return await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
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
      this.appointments.sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime());
      console.log(this.appointments);
      /* if (this.date.length > 0) {
        this.getHoursFree(this.date);
      } */
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

  removeAppointment(appointmentId: number) {
    this.homeService.removeAppointment(appointmentId).then(() => {
      this.getAppointments();
      this.presentToast('Appuntamento cancellato');
    }).catch(() => {
      this.presentToast("Errore nella cancellazione dell'appuntamento");
    })
  }

  getRoomFromId(roomId: number) {
    for (let i = 0; i < this.rooms.length; i++) {
      if (roomId === this.rooms[i].roomId) {
        return this.rooms[i].roomName;
      }
    }
  }

  getDayRightFormat(day: string, hour: string, type?: string) {
    if (type === 'weekDay') {
      return (format(new Date(day + ' ' + hour), 'EEEE', { locale: it }));
    } else {
      return (format(new Date(day + ' ' + hour), 'd MMMM', { locale: it }));
    }
  }

  getHourRightFormat(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'k:mm'));
  }

  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };







  /*  Vecchi metodi ora nella modale

  /* buttonClicked: boolean = false;
  clickedIndex: number; */
  // date: string[] = [];
  // type: 'string';
  /* selectedRoom: Room; */
  /* hourRange: HourRange[]; */
  // showQuarter: boolean = false;

  /* optionsRange: CalendarComponentOptions = {
   monthFormat: 'MMM YYYY',
   monthPickerFormat: ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'],
   weekdays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
   weekStart: 1,
   pickMode: 'multi'
 }; */

  /* // Modale di prenotazione vecchia
async presentAddBookingModalV(hour: HourRange) {
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
} */

  // Scatta alla selezione di una data
  /* daySelected(event) {
    this.date = [];

    // Popolo array date con date selezionate convertendole
    for (let i = 0; i < event.length; i++) {
      this.date.push(event[i].replace(/-/g, "/"));
    }

    // Resetto la lista degli orari disponibili
    this.hourRange = [...this.homeService.getHourRange()];
    this.getHoursFree(this.date);
  } */

  /* // Controllo se date selezionate corrispondono ad eventuali appuntamenti
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

      //Elimino gli eventuali duplicati ed ordino l'array finale
      const uniqueIndexes = indexToRemove.filter((elem, index, self) => index === self.indexOf(elem));
      uniqueIndexes.sort((a, b) => a - b);

      // Elimino i range orari dalla lista
      for (var i = uniqueIndexes.length - 1; i >= 0; i--) {
        this.hourRange.splice(uniqueIndexes[i], 1);
        this.hourRange = [...this.hourRange];
      }
    }
  } */

  /* changeToggle(event) {
    this.showQuarter = event.detail.checked;
  } */

  /* onClick(room: Room, i: number) {
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
  } */

}
