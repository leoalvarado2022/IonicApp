import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  datePipe = new DatePipe("es");
  transform(date: string) {
    if (moment(date).isValid()) {
      const parsed : Date = moment(this.cleanDate(date)).toDate();
      return this.datePipe.transform(parsed, 'dd/MM/yyyy');
    }

    console.log('bad date', date);
    return `${date}*`;
  }

  /**
   * cleanDate
   * @param date
   */
  private cleanDate(date: string) : moment.MomentInput {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    if (date.includes('Z')) {
      return date.split('.')[0];
    }

    return date;
  }


}
