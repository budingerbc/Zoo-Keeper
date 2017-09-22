import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: "animal-age",
  pure: false
})

export class FilterAgePipe implements PipeTransform {
  transform(input: Animal[], desiredAgeFilter) {

  }
}
