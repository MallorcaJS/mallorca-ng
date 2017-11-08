import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../../../utils/index';
@Pipe({
  name: 'trim'
})
export class MTrimPipe implements PipeTransform {
  transform(input: any): any {
    if (!isString(input)) {
      return input;
    }
    return input.trim();
  }
}
