import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {

  transform(date: string) {
    if (moment(date).isValid()) {
      const parsed = moment(date);
      return super.transform(parsed, 'dd/MM/yyyy');
    }

    console.log('bad date', date);
    return `${date}*`;
  }

}
