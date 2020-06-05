import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numericOrder'
})
export class NumericOrderPipe implements PipeTransform {

  /**
   * transform
   * @param array
   * @param fieldName
   * @param reverse
   * @returns array
   */
  public transform = (array: Array<any> = [], fieldName: string = 'id', reverse: boolean = false): Array<any> => {
  
    if (array.length > 0) {
      array.sort( (a, b) => {
        if (a.hasOwnProperty(fieldName) && typeof a[fieldName] === 'number') {
          console.log('entra aqui');

          if (parseInt(a[fieldName], 10) > parseInt(b[fieldName], 10)) {
            return 1;
          }

          if (parseInt(a[fieldName], 10) < parseInt(b[fieldName], 10)) {
            return -1;
          }
        }

        return 0;
      });

      return reverse ? array.reverse() : array;
    }

    return array;
  }

}
