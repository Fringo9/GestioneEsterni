import { Pipe, PipeTransform } from '@angular/core';
import { Appointment, Physio } from './home.service';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

@Pipe({
  name: 'physioFilter'
})
export class PhysioFilterPipe implements PipeTransform {

  transform(appointments: Appointment[], selectedPhysio: Physio, filterString: string): unknown {
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
      return filteredBySearch;
    } else {
      return filtered;
    }
  }

  getWeekday(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'EEEE', { locale: it }));
  }

  getDayNumber(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'd', { locale: it }));
  }

}
