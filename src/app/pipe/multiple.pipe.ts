import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  //value 是原始值， args是HTML中:后跟着的参数。 比如 date:'yyyy-MM-dd'
  transform(value: number, args?: number): any {
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
