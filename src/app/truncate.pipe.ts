import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string | null | undefined, limit = 25, ellipsis = '...'): string | null | undefined {
    if (value === null || value === undefined) {
      return value;
    }

    return value.length > limit ? value.slice(0, limit) + ellipsis : value;
  }

}
