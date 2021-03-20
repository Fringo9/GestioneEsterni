import { Component, Input, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Appointment, HomeService, HourRange, Physio, Room } from '../home.service';
import * as moment from 'moment';
import { ModalController, ToastController } from '@ionic/angular';
import { format } from 'date-fns';
import { zonedTimeToUtc, getTimezoneOffset } from 'date-fns-tz';

@Component({
  selector: 'app-add-booking-modal',
  templateUrl: './add-booking-modal.page.html',
  styleUrls: ['./add-booking-modal.page.scss'],
})
export class AddBookingModalPage implements OnInit {

  @Input() appointments: Appointment[];
  @Input() physio: Physio[];
  @Input() selectedPhysio: Physio;
  @Input() rooms: Room[];
  date: string[] = [];
  hourRange: HourRange[];
  selectedRoom: Room;
  showQuarter: boolean = false;
  hourFilter: string;
  buttonClicked: boolean = false;
  clickedIndex: number;
  clickedIndexHour: number;
  buttonClickedHour: boolean = false;
  type: 'string';
  patientName: string;
  selectedHour: HourRange;

  // Opzioni calendario
  optionsRange: CalendarComponentOptions = {
    monthFormat: 'MMM YYYY',
    monthPickerFormat: ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'],
    weekdays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    weekStart: 1,
    pickMode: 'multi'
  };

  constructor(
    private homeService: HomeService,
    private modalController: ModalController,
    public toastController: ToastController
  ) { moment.locale('it-IT') }

  // Opzioni dell popover
  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  onModalDismiss() {
    this.modalController.dismiss(this.selectedPhysio);
  }

  ngOnInit() {
    this.hourRange = this.homeService.getHourRange();
    if (this.date.length > 0) {
      this.getHoursFree(this.date);
    }
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

      //Elimino gli eventuali duplicati ed ordino l'array finale
      const uniqueIndexes = indexToRemove.filter((elem, index, self) => index === self.indexOf(elem));
      uniqueIndexes.sort((a, b) => a - b);

      // Elimino i range orari dalla lista
      for (var i = uniqueIndexes.length - 1; i >= 0; i--) {
        this.hourRange.splice(uniqueIndexes[i], 1);
        this.hourRange = [...this.hourRange];
      }
    }
  }

  // Aggiunta di un appuntamento
  addBooking() {
    if (this.selectedPhysio && this.patientName && this.selectedHour) {
      const startDates = [];
      const endDates = [];

      for (let i = 0; i < this.date.length; i++) {
        startDates.push(this.makeGmtDate(new Date(this.date[i]), this.selectedHour.startTime));
        endDates.push(this.makeGmtDate(new Date(this.date[i]), this.selectedHour.endTime));
      }

      const bookingBody = {
        roomId: this.selectedRoom.roomId,
        patientName: this.patientName,
        physioName: this.selectedPhysio.name,
        startDatesArray: startDates,
        endDatesArray: endDates
      }

      this.homeService.addBooking(bookingBody).then(() => {
        this.presentToast('Appuntamento aggiunto')
        this.onModalDismiss();
      })
        .catch(() => {
          this.presentToast('Errore aggiunta appuntamento')
        })
    } else if (!this.selectedPhysio && this.patientName) {
      this.presentToast('Fisioterapista non selezionato')
    } else if (!this.patientName && this.selectedPhysio) {
      this.presentToast('Nome Paziente mancante')
    } else if (!this.patientName && !this.selectedPhysio) {
      this.presentToast('Nome Fisioterapista e nome Paziente mancanti')
    } else if (!this.selectedHour) {
      this.presentToast('Orario non selezionato')
    }
  }

  // Rendo la data in formato GMT per il db
  makeGmtDate(date: Date, time: string) {
    // Converto la data in formato UTC
    const utcDate = new Date(zonedTimeToUtc((format(date, 'u-LL-dd') + ' ' + time), 'Europe/Berlin'));

    // Calcolo offset rispetto a UTC per capire se siamo in ora solare o legale
    const timeOffset = getTimezoneOffset('Europe/Berlin', new Date(utcDate));

    // Aggiungo alla data l'offset in base se siamo in ora legale o solare
    if (timeOffset === 3600000) {
      utcDate.setTime(utcDate.getTime() + 3600000);
    } else {
      utcDate.setTime(utcDate.getTime() + 7200000);
    }

    return utcDate
  }

  // Scatta alla selezione di una data
  daySelected(event) {
    this.date = [];

    // Popolo array date con date selezionate convertendole
    for (let i = 0; i < event.length; i++) {
      const dateFormatted = this.homeService.makeDateRightFormat(event[i]);
      this.date.push(dateFormatted);
    }

    // Resetto la lista degli orari disponibili
    this.hourRange = [...this.homeService.getHourRange()];
    this.getHoursFree(this.date);
  }

  // Selezione di un'ora. Gestisce la selezione grafica del bottone e la variabile
  selectHour(hour: HourRange, i: number) {
    if (i === this.clickedIndexHour) {
      this.buttonClickedHour = !this.buttonClickedHour;
      this.clickedIndexHour = undefined;
    } else if (this.clickedIndexHour === undefined) {
      this.buttonClickedHour = !this.buttonClickedHour;
      this.clickedIndexHour = i;
    } else {
      this.clickedIndexHour = i;
    }

    if (this.selectedHour === hour) {
      this.selectedHour = undefined;
    } else {
      this.selectedHour = hour;
      console.log(this.selectedHour);
    }
  }

  // Toggle di visualizzazione dei quarti d'ora
  changeToggle(event) {
    this.showQuarter = event.detail.checked;
  }

  // Segmento di scelta mattina/pomeriggio
  segmentHourChanged(event) {
    this.hourFilter = event.detail.value;
    if (this.selectedHour) {
      // Se c'è un'ora selezionata la deseleziono
      this.selectedHour = undefined;
      this.buttonClickedHour = !this.buttonClickedHour;
      this.clickedIndexHour = undefined;
    }
  }

  // Gestione della scelta del lettino
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
      this.hourRange = [...this.homeService.getHourRange()];
      if (this.date) {
        this.getHoursFree(this.date);
      }
    }
  }

}
