import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: "ageFilter",
  pure: false
})

export class FilterAgePipe implements PipeTransform {
  transform(input: Animal[], desiredAgeFilter) {
    let output: Animal[] = [];

    if(desiredAgeFilter === "youngAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredAgeFilter === "matureAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }
}
