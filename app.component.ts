 // app.component.ts
import { Component } from '@angular/core';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // An array of exercises to display
  exercises: Exercise[] = [];

  // A method to add a new exercise to the array
  addExercise(name: string, reps: number, weight: number) {
    // Create a new exercise object
    const exercise = new Exercise(name, reps, weight);
    // Push it to the array
    this.exercises.push(exercise);
  }
}
