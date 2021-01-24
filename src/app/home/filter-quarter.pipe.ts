import { Pipe, PipeTransform } from '@angular/core';
import { HourRange } from '../home.service';

@Pipe({
  name: 'filterQuarter'
})
export class FilterQuarterPipe implements PipeTransform {

  transform(hourRange: HourRange[]): unknown {
    const filtered: HourRange[] = [];

    for (let i = 0; i < hourRange.length; i++) {
      if (hourRange[i].isQuarter === false) {
        filtered.push(hourRange[i]);
      }
    }

    return filtered;
  }

}
