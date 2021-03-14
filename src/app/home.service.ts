import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CostantsService } from './costants.service';
import { StorageService } from './storage.service';
import { format } from 'date-fns'
import { it } from 'date-fns/locale'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  bookingHours: HourRange[] = [
    {
      name: '8.00 - 9.00',
      startTime: '08:00:00',
      endTime: '09:00:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '8.00 - 8.45',
      startTime: '08:00:00',
      endTime: '08:45:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '8.15 - 9.00',
      startTime: '08:15:00',
      endTime: '09:00:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '8.30 - 9.15',
      startTime: '08:30:00',
      endTime: '09:15:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '8.30 - 9.30',
      startTime: '08:30:00',
      endTime: '09:30:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '8.45 - 9.30',
      startTime: '08:45:00',
      endTime: '09:30:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '9.00 - 10.00',
      startTime: '09:00:00',
      endTime: '10:00:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '9.00 - 9.45',
      startTime: '09:00:00',
      endTime: '09:45:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '9.15 - 10.00',
      startTime: '09:15:00',
      endTime: '10:00:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '9.30 - 10.15',
      startTime: '09:30:00',
      endTime: '10:15:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '9.30 - 10.30',
      startTime: '09:30:00',
      endTime: '10:30:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '9.45 - 10.30',
      startTime: '09:45:00',
      endTime: '10:30:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '10.00 - 11.00',
      startTime: '10:00:00',
      endTime: '11:00:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '10.00 - 10.45',
      startTime: '10:00:00',
      endTime: '10:45:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '10.15 - 11.00',
      startTime: '10:15:00',
      endTime: '11:00:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '10.30 - 11.15',
      startTime: '10:30:00',
      endTime: '11:15:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '10.30 - 11.30',
      startTime: '10:30:00',
      endTime: '11:30:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '10.45 - 11.30',
      startTime: '10:45:00',
      endTime: '11:30:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '11.00 - 12.00',
      startTime: '11:00:00',
      endTime: '12:00:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '11.00 - 11.45',
      startTime: '11:00:00',
      endTime: '11:45:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '11.15 - 12.00',
      startTime: '11:15:00',
      endTime: '12:00:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '11.30 - 12.15',
      startTime: '11:30:00',
      endTime: '12:15:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '11.30 - 12.30',
      startTime: '11:30:00',
      endTime: '12:30:00',
      isQuarter: false,
      isMorning: true
    },
    {
      name: '11.45 - 12.30',
      startTime: '11:45:00',
      endTime: '12:30:00',
      isQuarter: true,
      isMorning: true
    },
    {
      name: '13.30 - 14.30',
      startTime: '13:30:00',
      endTime: '14:30:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '13.30 - 14.15',
      startTime: '13:30:00',
      endTime: '14:15:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '13.45 - 14.30',
      startTime: '13:45:00',
      endTime: '14:30:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '14.00 - 14.45',
      startTime: '14:00:00',
      endTime: '14:45:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '14.00 - 15.00',
      startTime: '14:00:00',
      endTime: '15:00:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '14.15 - 15.00',
      startTime: '14:15:00',
      endTime: '15:00:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '14.30 - 15.30',
      startTime: '14:30:00',
      endTime: '15:30:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '14.30 - 15.15',
      startTime: '14:30:00',
      endTime: '15:15:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '14.45 - 15.30',
      startTime: '14:45:00',
      endTime: '15:30:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '15.00 - 15.45',
      startTime: '15:00:00',
      endTime: '15:45:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '15.00 - 16.00',
      startTime: '15:00:00',
      endTime: '16:00:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '15.15 - 16.00',
      startTime: '15:15:00',
      endTime: '16:00:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '15.30 - 16.30',
      startTime: '15:30:00',
      endTime: '16:30:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '15.30 - 16.15',
      startTime: '15:30:00',
      endTime: '16:15:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '15.45 - 16.30',
      startTime: '15:45:00',
      endTime: '16:30:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '16.00 - 16.45',
      startTime: '16:00:00',
      endTime: '16:45:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '16.00 - 17.00',
      startTime: '16:00:00',
      endTime: '17:00:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '16.15 - 17.00',
      startTime: '16:15:00',
      endTime: '17:00:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '16.30 - 17.30',
      startTime: '16:30:00',
      endTime: '17:30:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '16.30 - 17.15',
      startTime: '16:30:00',
      endTime: '17:15:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '16.45 - 17.30',
      startTime: '16:45:00',
      endTime: '17:30:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '17.00 - 17.45',
      startTime: '17:00:00',
      endTime: '17:45:00',
      isQuarter: true,
      isMorning: false
    },
    {
      name: '17.00 - 18.00',
      startTime: '17:00:00',
      endTime: '18:00:00',
      isQuarter: false,
      isMorning: false
    },
    {
      name: '17.15 - 18.00',
      startTime: '17:15:00',
      endTime: '18:00:00',
      isQuarter: true,
      isMorning: false
    }
  ]

  rooms: Room[] = [
    {
      roomId: 1,
      roomName: 'Posturale'
    },
    {
      roomId: 2,
      roomName: 'Lettino Chiuso'
    },
    {
      roomId: 3,
      roomName: 'Lettino Aperto'
    },
    {
      roomId: 4,
      roomName: 'Lettino Aperto 2'
    },
    {
      roomId: 5,
      roomName: 'Palestra'
    }
  ]

  _dayRoomOrdered: dayRoomOrdered[];

  constructor(
    private http: HttpClient,
    private costantsService: CostantsService,
    private storage: StorageService) { }

  getHourRange() {
    return this.bookingHours;
  }

  getRooms() {
    return this.rooms;
  }

  // Ottengo lista Fisio
  async getPhysio(): Promise<Physio[]> {
    console.log('Carico Fisio')
    return new Promise((resolve, reject) =>
      this.http.get(this.costantsService.getApiRoute('getPhysio'))
        .toPromise()
        .then(
          res => {
            const physioArray: Physio[] = res as Physio[];
            // Converto immagini profilo
            for (let i = 0; i < physioArray.length; i++) {
              if (physioArray[i].image) {
                physioArray[i].image = 'data:image/jpeg;base64,' + physioArray[i].image
              } else {
                physioArray[i].image = './assets/avatar.png'
              }
            }
            console.log(physioArray);
            resolve(res as Physio[]);
          },
          () => {
            reject();
          }
        )
    );
  }

  // Registra nuovo appuntamento a DB
  async addBooking(bookingBody): Promise<object> {
    console.log(bookingBody);
    return this.http.post(this.costantsService.getApiRoute('addBooking'), bookingBody)
      .toPromise()
  }

  // Ottengo lista appuntamenti
  async getAppointments(): Promise<Appointment[]> {
    console.log('Carico appuntamenti')
    return new Promise((resolve, reject) =>
      this.http.get(this.costantsService.getApiRoute('getAppointments'))
        .toPromise()
        .then(
          res => {
            resolve(res as Appointment[]);
          },
          () => {
            reject();
          }
        )
    );
  }

  // Cancello appuntamento
  async removeAppointment(appointmentId: number): Promise<object> {
    return this.http.post(this.costantsService.getApiRoute('removeAppointment'), { appointmentId })
      .toPromise()
  }

  // Registra nuovo fisio a DB
  async addPhysio(name: string): Promise<object> {
    console.log('Aggiungo nuovo Fisio: ' + name);
    return this.http.post(this.costantsService.getApiRoute('addPhysio'), { name })
      .toPromise()
  }

  // Divide gli appuntamenti per data
  getPhysioDate(appointments: Appointment[]) {
    const filteredAppointments = [];
    let sameDateFound: boolean = false;

    for (let i = 0; i < appointments.length; i++) {
      sameDateFound = false;
      appointments[i].stringDate = this.getDayRightFormat(appointments[i].day, appointments[i].startTime);

      if (filteredAppointments.length === 0) {
        sameDateFound = true;
        const appToAdd = [{
          patientName: appointments[i].patientName,
          physioName: appointments[i].physioName,
          roomId: appointments[i].roomId,
          day: appointments[i].day,
          startTime: appointments[i].startTime,
          endTime: appointments[i].endTime,
          stringDate: appointments[i].stringDate
        }]

        filteredAppointments.push(appToAdd);
      } else {
        for (let k = 0; k < filteredAppointments.length; k++) {
          if (filteredAppointments[k].find(x => x.stringDate === appointments[i].stringDate)) {
            sameDateFound = true;
            const appSameDate = {
              patientName: appointments[i].patientName,
              physioName: appointments[i].physioName,
              roomId: appointments[i].roomId,
              day: appointments[i].day,
              startTime: appointments[i].startTime,
              endTime: appointments[i].endTime,
              stringDate: appointments[i].stringDate
            }
            filteredAppointments[k].push(appSameDate);
          }
        }
      }

      if (sameDateFound === false) {
        const appToAdd = [{
          patientName: appointments[i].patientName,
          physioName: appointments[i].physioName,
          roomId: appointments[i].roomId,
          day: appointments[i].day,
          startTime: appointments[i].startTime,
          endTime: appointments[i].endTime,
          stringDate: appointments[i].stringDate
        }]

        filteredAppointments.push(appToAdd);
      }
    }

    return filteredAppointments;
  }

  // Cacha l'array degli appuntamenti ordinati per data e lettino
  async setDayRoomOrdered(dayRoomOrdered) {
    await this.storage.setItem('dayRoomOrdered', JSON.stringify(dayRoomOrdered));
    this.readDayRoomOrdered();
  }

  // Legge l'array degli appuntamenti ordinati per data e lettino
  private async readDayRoomOrdered() {
    this.storage.getItem('dayRoomOrdered').then((val) => {
      this._dayRoomOrdered = JSON.parse(val);
    });
  }

  // Restituisce dayRoomOrdered
  getDayRoomOrdered() {
    return this._dayRoomOrdered;
  }

  // Rendo la data nel formato mese/giorno/anno
  makeDateRightFormat(date: string) {
    const stringSplitted = date.split('-');
    const month = stringSplitted[0];
    let day = stringSplitted[1];
    if (day.charAt(0) === '0') {
      day = day.charAt(1);
    }
    const year = stringSplitted[2];
    return month + '/' + day + '/' + year;
  }

  // Converto la data in nome del giorno oppure giorno/mese
  getDayRightFormat(day: string, hour: string, type?: string) {
    if (type === 'weekDay') {
      return (format(new Date(day + ' ' + hour), 'EEEE', { locale: it }));
    } else {
      return (format(new Date(day + ' ' + hour), 'd MMMM', { locale: it }));
    }
  }

  // Converto l'ora in ora/minuti
  getHourRightFormat(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'k:mm'));
  }

}

// Rappresenta un range orario
export interface HourRange {
  name: string;
  startTime: string,
  endTime: string,
  isQuarter: boolean;
  isMorning: boolean;
}

// Rappresenta un appuntamento
export interface Appointment {
  appointmentId: number;
  patientName: string;
  physioName: string;
  roomId?: number;
  day?: string;
  startTime: string;
  endTime: string;
  stringDate?: string;
}

// Rappresenta una stanza
export interface Room {
  roomId: number;
  roomName: string;
}

// Rappresenta oggetto ordinato per data e stanze
export interface dayRoomOrdered {
  date: string;
  rooms: roomAppointments[];
}

// Rappresenta una stanza con i suoi appuntamenti
export interface roomAppointments {
  roomId: number;
  roomName: string;
  appointments: Appointment[]
}

// Rappresenta un Fisio
export interface Physio {
  id: number;
  name: string;
  image: string;
}
