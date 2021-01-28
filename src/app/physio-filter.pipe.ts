import { Pipe, PipeTransform } from '@angular/core';
import { Appointment, Physio } from './home.service';

@Pipe({
  name: 'physioFilter'
})
export class PhysioFilterPipe implements PipeTransform {

  transform(appointments: Appointment[], selectedPhysio: Physio): unknown {
    const filtered = [];
    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].physioName === selectedPhysio.name) {
        filtered.push(appointments[i])
      }
    }
    return filtered;
  }

}
