import { Pipe, PipeTransform } from '@angular/core';
import { Appointment, Physio } from './home.service';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

@Pipe({
  name: 'physioFilter'
})
export class PhysioFilterPipe implements PipeTransform {

  // Appuntamento fake da aggiungere all'array fake nel caso non ci sia alcun appuntamento del fisio selezionato
  fakeAppointment = [
    {
      day: null,
      endTime: null,
      patientName: null,
      physioName: null,
      roomId: null,
      startTime: null,
      stringDate: null
    }
  ]

  // Array fake da ritornare nel caso non ci sia alcun appuntamento del fisio selezionato
  fakeArray = [this.fakeAppointment];

  transform(appointments: any[], selectedPhysio: Physio, filterString: string, pageToFilter: string): any[] {
    if (pageToFilter === 'home') {

      const filtered: Appointment[] = [];
      for (let i = 0; i < appointments.length; i++) {
        if (appointments[i].physioName === selectedPhysio.name) {
          filtered.push(appointments[i])
        }
      }
      if (filterString) {
        const filteredBySearch = [];
        for (let k = 0; k < filtered.length; k++) {
          if (filtered[k].patientName.toLowerCase().includes(filterString.toLowerCase())) {
            filteredBySearch.push(filtered[k]);
          } else if (this.getWeekday(filtered[k].day, filtered[k].startTime).toLowerCase().includes(filterString.toLowerCase())) {
            filteredBySearch.push(filtered[k]);
          } else if (this.getDayNumber(filtered[k].day, filtered[k].startTime).toLowerCase() === filterString.toLowerCase()) {
            filteredBySearch.push(filtered[k]);
          }
        }

        // Se la ricerca non filtra nulla, ritorno l'appuntamento fake
        if (filteredBySearch.length > 0) {
          return filteredBySearch;
        } else {
          return this.fakeAppointment;
        }

      } else {

        // Se il fisio non ha appuntamenti, ritorno l'appuntamento fake
        if (filtered.length > 0) {
          return filtered;
        } else {
          return this.fakeAppointment;
        }
      }
    } else if (pageToFilter === 'physioDay') {

      const filteredAppointmentsPerPhysio = [];
      for (let j = 0; j < appointments.length; j++) {
        const physioAppointments = appointments[j].filter(x => x.physioName === selectedPhysio.name);
        if (physioAppointments.length > 0) {
          filteredAppointmentsPerPhysio.push(physioAppointments);
        }
      }

      if (filterString) {
        const filteredBySearch = [];
        for (let k = 0; k < filteredAppointmentsPerPhysio.length; k++) {
          for (let j = 0; j < filteredAppointmentsPerPhysio[k].length; j++) {
            if (filteredAppointmentsPerPhysio[k][j].patientName.toLowerCase().includes(filterString.toLowerCase())) {
              const physioAppFilteredBySearch = [filteredAppointmentsPerPhysio[k][j]]
              filteredBySearch.push(physioAppFilteredBySearch);
            }
          }
        }

        // Se la ricerca non filtra nulla, ritorno l'appuntamento fake
        if (filteredBySearch.length > 0) {
          return filteredBySearch;
        } else {
          return this.fakeArray;
        }
      } else {

        // Se il fisio selezionato non ha appuntamenti, ritorno quello fake
        if (filteredAppointmentsPerPhysio.length > 0) {
          return filteredAppointmentsPerPhysio;
        } else {
          return this.fakeArray;
        }
      }

    }
  }

  getWeekday(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'EEEE', { locale: it }));
  }

  getDayNumber(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'd', { locale: it }));
  }

}
