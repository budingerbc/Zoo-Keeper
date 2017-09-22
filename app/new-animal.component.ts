import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'new-animal',
  template: `


  <form class="form-style-9">
    <h3>Add Animal</h3>
    <ul>
      <li>
        <input #species type="text" name="species" class="field-style field-split align-left" placeholder="Species" required />
        <input #name type="text" name="name" class="field-style field-split align-right" placeholder="Name" required />
      </li>

      <li>
        <input #age type="number" name="age" class="field-style field-split align-left" placeholder="Age" required min="0" />
        <input #caretakers type="number" name="caretakers" class="field-style field-split align-right" placeholder="Caretakers required" required min="1" />
      </li>

      <li>
        <select #location class="field-style field-split align-left left-option" required>
          <option value='' disabled selected>Select Location</option>
          <option [value]='1'>Safari Habitat</option>
          <option [value]='2'>Aquarium</option>
          <option [value]='3'>Aviary</option>
        </select>

        <select #diet class="field-style field-split align-right right-option" required>
          <option value='' disabled selected>Select Diet</option>
          <option [value]='1'>Herbivore</option>
          <option [value]='2'>Carnivore</option>
          <option [value]='3'>Omnivore</option>
        </select>
      </li>

      <li>
        <div id="gender-option">
        <select #sex required>
          <option value='' disabled selected>Select Gender</option>
          <option [value]='1'>Male</option>
          <option [value]='2'>Female</option>
        </select>
        </div>
      </li>

      <li>
        <textarea #like name="like" class="field-style" placeholder="What does this animal like?" required></textarea>
      </li>
      <li>
        <textarea #dislike name="dislike" class="field-style" placeholder="What does this animal not like?" required></textarea>
      </li>
    </ul>
    <button class="btn submit-blue" (click) = "addAnimal(species.value, name.value, age.value, caretakers.value, location.value, diet.value, sex.value, like.value, dislike.value)">Submit</button>
  </form>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(species: string, name: string, age: number, caretakers: number, location: string, diet: string, sex: string, like: string, dislike: string) {
    let numAge: number =+ age;
    let numCaretakers: number =+ caretakers;

    let newAnimal: Animal = new Animal(species, name, numAge, diet, location, numCaretakers, sex, like, dislike);
  }
}
