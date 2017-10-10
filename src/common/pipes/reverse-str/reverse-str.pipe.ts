import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../../utils';
@Pipe({
  name: 'reverseStr'
})
export class MReverseStrPipe implements PipeTransform {
  transform(input: string): string {
    if (!isString(input)) {
      return input;
    }
    return Array.from(input).reverse().join('');
  }
}
