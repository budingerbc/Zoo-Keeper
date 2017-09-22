import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'animal-list',
  template: `

    <div id="nav-buttons">
      <label>Filter by Age:</label>
      <select (change)="filterByAnimalAge($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Young (less than 2)</option>
        <option value="matureAnimals">Mature (2 or older)</option>
      </select>
    </div>

    <div class="panel panel-default" *ngFor="let animal of childAnimalList | ageFilter:filterAnimalAge">
    <!-- Default panel contents -->
      <div class="panel-heading"><h2>{{animal.name}} the {{animal.species}} <span class="btn-float-right"><button (click)="editAnimal(animal)" class="btn btn-warning">Edit</button></span></h2></div>

      <!-- List group -->
      <ul class="list-group">
        <li class="list-group-item">Age: {{animal.age}}</li>
        <li class="list-group-item">Location: {{animal.location}}</li>
        <li class="list-group-item">Diet: {{animal.diet}}</li>
        <li class="list-group-item">Caretakers: {{animal.caretakers}}</li>
        <li class="list-group-item">Gender: {{animal.sex}}</li>
        <li class="list-group-item">Like: {{animal.like}}</li>
        <li class="list-group-item">Dislike: {{animal.dislike}}</li>

      </ul>
    </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editAnimalSender = new EventEmitter;

  filterAnimalAge: string = "allAnimals";

  editAnimal(animal: Animal) {
    this.editAnimalSender.emit(animal);
  }

  filterByAnimalAge(option: string) {
    this.filterAnimalAge = option;
  }
}
