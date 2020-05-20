import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabeticalOrder'
})
export class AlphabeticalOrderPipe implements PipeTransform {

  /**
   * transform
   * @param array
   * @param fieldName
   * @returns array
   */
  public transform = (array: Array<any> = [], fieldName: string = 'name'): Array<any> => {
    if (array.length > 0) {
      array.sort( (a, b) => {
        if (a.hasOwnProperty(fieldName)) {
          if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
            return 1;
          }

          if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
            return -1;
          }
        }

        return 0;
      });

      return array;
    }

    return array;
  }

}
