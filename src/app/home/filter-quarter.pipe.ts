import { Pipe, PipeTransform } from '@angular/core';
import { HourRange } from '../home.service';

@Pipe({
  name: 'filterQuarter'
})
export class FilterQuarterPipe implements PipeTransform {

  transform(hourRange: HourRange[], args: any): unknown {
    const filtered: HourRange[] = [];
    const finalFiltered: HourRange[] = [];
    const quarterFilter = args.quarterFilter;
    const hourFilter = args.hourFilter;

    for (let i = 0; i < hourRange.length; i++) {
      if (quarterFilter === true) {
        if (hourRange[i].isQuarter === true) {
          filtered.push(hourRange[i]);
        }
      } else if (quarterFilter === false) {
        if (hourRange[i].isQuarter === false) {
          filtered.push(hourRange[i]);
        }
      }
    }

    for (let j = 0; j < filtered.length; j++) {
      if (hourFilter === 'mattina') {
        if (filtered[j].isMorning === true) {
          finalFiltered.push(filtered[j]);
        }
      } else if (hourFilter === 'pomeriggio') {
        if (filtered[j].isMorning === false) {
          finalFiltered.push(filtered[j]);
        }
      } else {
        finalFiltered.push(filtered[j]);
      }
    }

    return finalFiltered;
  }

}
