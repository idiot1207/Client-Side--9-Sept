import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueArray',
})
export class ValueArrayPipe implements PipeTransform {

  // El parametro object representa, los valores de las propiedades o indice
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push(value[key]);
    }
    return keys;
  }
}