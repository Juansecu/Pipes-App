import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
})
export class UpperPipe implements PipeTransform {
  transform(value: string, upperCase: boolean = true): string {
    return upperCase ? value.toUpperCase() : value.toLowerCase();
  }
}
