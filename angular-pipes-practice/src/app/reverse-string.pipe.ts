import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultValue = value.split("").reverse().join("").slice(0,6)
    return resultValue;
  }

}
