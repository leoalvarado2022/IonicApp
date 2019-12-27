import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'customDatetime'
})
export class CustomDatetimePipe extends DatePipe implements PipeTransform {

  transform(date: string) {
    if (moment(date).isValid()) {
      const parsed = moment(this.cleanDate(date));
      return super.transform(parsed, 'dd/MM/yyyy HH:mm:ss');
    }

    console.log('bad time', date);
    return `${date}*`;
  }

  /**
   * cleanDate
   * @param date
   */
  private cleanDate(date: string) {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    if (date.includes('Z')) {
      return date.split('.')[0];
    }

    return date;
  }

}
