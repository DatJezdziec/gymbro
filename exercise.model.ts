// exercise.model.ts
export class Exercise {
  // A class to represent an exercise with name, reps and weight
  constructor(
    public name: string,
    public reps: number,
    public weight: number
  ) {}
}
