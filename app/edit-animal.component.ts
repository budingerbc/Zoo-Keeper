import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'edit-animal',
  template: `

  <div *ngIf="selectedAnimal" id="edit-animal-form">
    <div class="form-style-9">
      <h3>Edit Animal</h3>
      <ul>
        <li>
          <input #species type="text" name="species" class="field-style field-split align-left" placeholder="Species" required [(ngModel)]="selectedAnimal.species" />
          <input #name type="text" name="name" class="field-style field-split align-right" placeholder="Name" required [(ngModel)]="selectedAnimal.name" />
        </li>

        <li>
          <input #age type="number" name="age" class="field-style field-split align-left" placeholder="Age" required min="0"  [(ngModel)]="selectedAnimal.age" />
          <input #caretakers type="number" name="caretakers" class="field-style field-split align-right" placeholder="Caretakers required" required min="1" [(ngModel)]="selectedAnimal.caretakers" />
        </li>

        <li>
          <select [ngModel]="selectedAnimal.location" (change)="changeLocation($event.target.value)" class="field-style field-split align-left left-option">
            <option value="Safari Habitat">Safari Habitat</option>
            <option value="Aquarium">Aquarium</option>
            <option value="Aviary">Aviary</option>
          </select>

          <select [ngModel]="selectedAnimal.diet" (change)="changeDiet($event.target.value)" class="field-style field-split align-right right-option" required>
            <option value="Herbivore">Herbivore</option>
            <option value="Carnivore">Carnivore</option>
            <option value="Omnivore">Omnivore</option>
          </select>
        </li>

        <li>
          <div id="gender-option">
          <select [ngModel]="selectedAnimal.sex" (change)="changeSex($event.target.value)">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>
        </li>

        <li>
          <textarea #like name="like" class="field-style" placeholder="What does this animal like?" required [(ngModel)]="selectedAnimal.like"></textarea>
        </li>
        <li>
          <textarea #dislike name="dislike" class="field-style" placeholder="What does this animal not like?" required [(ngModel)]="selectedAnimal.dislike"></textarea>
        </li>

      </ul>
      <button class="btn submit-blue" (click)="doneEditing()">Done</button>
    </div>
  </div>
`
})

export class EditAnimalComponent {
  @Input() selectedAnimal : Animal;
  @Output() doneEditingSender = new EventEmitter();

  changeLocation(location: string) {
    this.selectedAnimal.location = location;
  }

  changeDiet(diet: string) {
    this.selectedAnimal.diet = diet;
  }

  changeSex(sex: string) {
    this.selectedAnimal.sex = sex;
  }

  doneEditing() {
    this.doneEditingSender.emit();
  }
}
