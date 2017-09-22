import { Component, Input } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'animal-list',
  template: `
    <div class="panel panel-default" *ngFor="let animal of childAnimalList">
    <!-- Default panel contents -->
      <div class="panel-heading">{{animal.name}} the {{animal.species}}, <span class="animal-sex">{{animal.sex}}</span></div>

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
}
