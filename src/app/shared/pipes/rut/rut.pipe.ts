import {Pipe, PipeTransform} from '@angular/core';
import {formatRut} from '@primetec/primetec-angular';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {

  transform(rut: string): string {
    return formatRut(rut);
  }

}
