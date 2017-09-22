import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  template: `

  <div class="jumbotron">
    <h1>Zoo Animal Tracker</h1>
  </div>

  <div class="container">

    <div class="button-center">
      <button class="btn submit-blue" (click)="addAnimalClicked()">Add Animal</button>
    </div>

    <new-animal [newAnimalForm]="newAnimalForm" (newAnimalSender)="addAnimal($event)" (cancelNewAnimalSender)="closeNewAnimalForm()"></new-animal>

    <edit-animal [selectedAnimal]="selectedAnimal" (doneEditingSender)="closeEditAnimal()"></edit-animal>

    <animal-list [childAnimalList]="masterAnimalList" (editAnimalSender)="editAnimal($event)"></animal-list>
  </div>

  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [

    new Animal("Asian Elephant", "Ginny", 5, "Herbivore", "Safari Habitat", 2, "Female", "Ginny gets a kick out of spraying her keepers with water!", "Ginny gets grumpy when play time is over."),

    new Animal("Beluga Whale", "Stomper", 1, "Carnivore", "Aquarium", 2, "Male", "Stomper enjoys diving for salmon.", "Stomper is afraid of the dark."),

    new Animal("Lion", "Andre", 6, "Carnivore", "Safari Habitat", 3, "Male", "Andre keeps the pack in line!", "Andre doesn't like it when new lions come around."),

    new Animal("Parrot", "Petunia", 1, "Omnivore", "Aviary", 1, "Female", "Petunia loves to practice talking to new people!", "Petunia doesn't like when people squawk at her."),

    new Animal("Giant Pacific Octopus", "Octavia", 0, "Carnivore", "Aquarium", 2, "Female", "Octavia loves hugs!", "If you startle her, she'll spray ink at you."),
  ];

  selectedAnimal: Animal = null;
  filterAnimalAge: string = "allAnimals";
  newAnimalForm: boolean = false;

  addAnimal(animal: Animal) {
    this.masterAnimalList.push(animal);
    this.newAnimalForm = false;
  }

  editAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }

  closeEditAnimal() {
    this.selectedAnimal = null;
  }

  addAnimalClicked() {
    this.newAnimalForm = true;
  }

  closeNewAnimalForm() {
    this.newAnimalForm = false;
  }
}
