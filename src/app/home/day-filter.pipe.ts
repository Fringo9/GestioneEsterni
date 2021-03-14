import { Pipe, PipeTransform } from '@angular/core';
import { Appointment, HomeService } from '../home.service';
// import { Appointment, AppointmentFiltered, HomeService } from '../home.service';

@Pipe({
  name: 'dayFilter'
})
export class DayFilterPipe implements PipeTransform {

  constructor(private homeService: HomeService) { }

  transform(appointments: Appointment[]): any[] {
    const filteredAppointments = [];
    let sameDateFound: boolean = false;

    for (let i = 0; i < appointments.length; i++) {
      sameDateFound = false;
      appointments[i].stringDate = this.homeService.getDayRightFormat(appointments[i].day, appointments[i].startTime);

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
    if (filteredAppointments.length > 0) {
      return filteredAppointments;
    } else {
      // Aggiungo un oggetto fittizio, così che in HTMl mi crei una colonna
      const appToAdd = [{
        patientName: null,
        physioName: null,
        roomId: null,
        day: null,
        startTime: null,
        endTime: null,
        stringDate: null
      }]

      filteredAppointments.push(appToAdd);
      return filteredAppointments;
    }
  }

}
