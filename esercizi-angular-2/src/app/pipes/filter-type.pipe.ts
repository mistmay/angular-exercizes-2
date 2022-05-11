import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Beer[], type: "small" | "medium"): Beer[] {
    return value.filter((beer: Beer) => beer.type === type);
  }

}
