import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CostantsService } from './costants.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  bookingHours: HourRange[] = [
    {
      name: '8.00 - 9.00',
      startTime: '08:00:00',
      endTime: '09:00:00',
      isQuarter: false
    },
    {
      name: '8.00 - 8.45',
      startTime: '08:00:00',
      endTime: '08:45:00',
      isQuarter: true
    },
    {
      name: '8.15 - 9.00',
      startTime: '08:15:00',
      endTime: '09:00:00',
      isQuarter: true
    },
    {
      name: '8.30 - 9.15',
      startTime: '08:30:00',
      endTime: '09:15:00',
      isQuarter: true
    },
    {
      name: '8.30 - 9.30',
      startTime: '08:30:00',
      endTime: '09:30:00',
      isQuarter: false
    },
    {
      name: '8.45 - 9.30',
      startTime: '08:45:00',
      endTime: '09:30:00',
      isQuarter: true
    },
    {
      name: '9.00 - 10.00',
      startTime: '09:00:00',
      endTime: '10:00:00',
      isQuarter: false
    },
    {
      name: '9.00 - 9.45',
      startTime: '09:00:00',
      endTime: '09:45:00',
      isQuarter: true
    },
    {
      name: '9.15 - 10.00',
      startTime: '09:15:00',
      endTime: '10:00:00',
      isQuarter: true
    },
    {
      name: '9.30 - 10.15',
      startTime: '09:30:00',
      endTime: '10:15:00',
      isQuarter: true
    },
    {
      name: '9.30 - 10.30',
      startTime: '09:30:00',
      endTime: '10:30:00',
      isQuarter: false
    },
    {
      name: '9.45 - 10.30',
      startTime: '09:45:00',
      endTime: '10:30:00',
      isQuarter: true
    },
    {
      name: '10.00 - 11.00',
      startTime: '10:00:00',
      endTime: '11:00:00',
      isQuarter: false
    },
    {
      name: '10.00 - 10.45',
      startTime: '10:00:00',
      endTime: '10:45:00',
      isQuarter: true
    },
    {
      name: '10.15 - 11.00',
      startTime: '10:15:00',
      endTime: '11:00:00',
      isQuarter: true
    },
    {
      name: '10.30 - 11.15',
      startTime: '10:30:00',
      endTime: '11:15:00',
      isQuarter: true
    },
    {
      name: '10.30 - 11.30',
      startTime: '10:30:00',
      endTime: '11:30:00',
      isQuarter: false
    },
    {
      name: '10.45 - 11.30',
      startTime: '10:45:00',
      endTime: '11:30:00',
      isQuarter: true
    },
    {
      name: '11.00 - 12.00',
      startTime: '11:00:00',
      endTime: '12:00:00',
      isQuarter: false
    },
    {
      name: '11.00 - 11.45',
      startTime: '11:00:00',
      endTime: '11:45:00',
      isQuarter: true
    },
    {
      name: '11.15 - 12.00',
      startTime: '11:15:00',
      endTime: '12:00:00',
      isQuarter: true
    },
    {
      name: '11.30 - 12.15',
      startTime: '11:30:00',
      endTime: '12:15:00',
      isQuarter: true
    },
    {
      name: '11.30 - 12.30',
      startTime: '11:30:00',
      endTime: '12:30:00',
      isQuarter: false
    },
    {
      name: '11.45 - 12.30',
      startTime: '11:45:00',
      endTime: '12:30:00',
      isQuarter: true
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
      roomName: 'Palestra'
    },
  ]

  constructor(private http: HttpClient, private costantsService: CostantsService) { }

  getHourRange() {
    return this.bookingHours;
  }

  getRooms() {
    return this.rooms;
  }

  async getPhysio(): Promise<Physio[]> {
    console.log('Carico Fisio')
    return new Promise((resolve, reject) =>
      this.http.get(this.costantsService.getApiRoute('getPhysio'))
        .toPromise()
        .then(
          res => {
            const physioArray: Physio[] = res as Physio[];
            for (let i = 0; i < physioArray.length; i++) {
              if (physioArray[i].image) {
                physioArray[i].image = 'data:image/jpeg;base64,' + physioArray[i].image
              } else {
                physioArray[i].image = './assets/avatar.svg'
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

  // Registra nuova cena a DB, e aggiunge il mio gruppo in automatico
  async addBooking(bookingBody): Promise<object> {
    console.log(bookingBody);
    return this.http.post(this.costantsService.getApiRoute('addBooking'), bookingBody)
      .toPromise()
  }

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

  async removeAppointment(appointmentId: number): Promise<object> {
    console.log(appointmentId)
    return this.http.post(this.costantsService.getApiRoute('removeAppointment'), { appointmentId })
      .toPromise()
  }

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

}

// Rappresenta un range orario
export interface HourRange {
  name: string;
  startTime: string,
  endTime: string,
  isQuarter: boolean;
}

export interface Appointment {
  appointmentId: number;
  patientName: string;
  physioName: string;
  roomId: number;
  day: string;
  startTime: string;
  endTime: string;
}

export interface Room {
  roomId: number;
  roomName: string;
}

export interface Physio {
  id: number;
  name: string;
  image: string;
}
