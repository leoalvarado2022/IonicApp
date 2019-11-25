import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {

  transform(date: string) {

    const parsed = moment(date);
    // const parsed = Date.parse(date);

    if (parsed) {
      return super.transform(parsed, 'dd/MM/yyyy');
    }

    return `${date}*`;
  }

}
