import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'new-animal',
  template: `

  <div *ngIf="newAnimalForm">
    <form class="form-style-9" id="new-animal-form">
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
            <option value="" disabled selected>Select Location</option>
            <option value="Safari Habitat">Safari Habitat</option>
            <option value="Aquarium">Aquarium</option>
            <option value="Aviary">Aviary</option>
          </select>

          <select #diet class="field-style field-split align-right right-option" required>
            <option value="" disabled selected>Select Diet</option>
            <option value="Herbivore">Herbivore</option>
            <option value="Carnivore">Carnivore</option>
            <option value="Omnivore">Omnivore</option>
          </select>
        </li>

        <li>
          <div id="gender-option">
          <select #sex required>
            <option value='' disabled selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
      <button class="btn btn-info" (click) = "cancelNewAnimal()">Cancel</button>
    </form>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() newAnimalForm : boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() cancelNewAnimalSender = new EventEmitter();

  addAnimal(species: string, name: string, age: number, caretakers: number, location: string, diet: string, sex: string, like: string, dislike: string) {
    let numAge: number =+ age;
    let numCaretakers: number =+ caretakers;

    if(species.length === 0 || name.length === 0 || age < 0  || caretakers < 1 || location.length === 0 || diet.length === 0 || sex.length === 0 || like.length === 0 || dislike.length === 0) {
      alert("Form data missing.");
    } else {

      let newAnimal: Animal = new Animal(species, name, numAge, diet, location, numCaretakers, sex, like, dislike);
      this.newAnimalSender.emit(newAnimal);
    }
  }

  cancelNewAnimal() {
    this.cancelNewAnimalSender.emit();
  }
}
