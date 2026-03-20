import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomcurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return `₹${value}`;
  }
}
