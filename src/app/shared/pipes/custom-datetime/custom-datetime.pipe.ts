import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'customDatetime'
})
export class CustomDatetimePipe extends DatePipe implements PipeTransform {

  transform(date: string) {
    if (moment(date).isValid()) {
      const parsed = moment(date);
      return super.transform(parsed, 'dd/MM/yyyy HH:mm:ss');
    }

    console.log('bad time', date);
    return `${date}*`;
  }

}
