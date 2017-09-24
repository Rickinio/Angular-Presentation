import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyAmount'
})
export class MultiplyAmountPipe implements PipeTransform {

  transform(value: any, multiplier: number): any {
    return value * multiplier;
  }

}
