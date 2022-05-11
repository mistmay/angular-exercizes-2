import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;

  constructor() { }

  getCounter(): number {
    return this.counter;
  }

  incrementCounter(number: number = 1): void {
    this.counter += number;
    console.log(this.counter);
  }

  decreaseCounter(number: number = 1): void {
    if (this.counter - number < 0) {
      console.log('Error: Counter cannot be below zero');
    } else {
      this.counter -= number;
      console.log(this.counter);
    }
  }
}
