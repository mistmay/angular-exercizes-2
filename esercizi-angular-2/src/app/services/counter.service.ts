import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;
  private showError: boolean = false;

  constructor() { }

  getCounter(): number {
    return this.counter;
  }

  getShowError(): boolean {
    return this.showError;
  }

  incrementCounter(number: number = 1): void {
    if (this.counter + number < 0) {
      console.log('Error: Counter cannot be below zero');
      this.showError = true;
    } else {
      this.counter += number;
      console.log(this.counter);
      this.showError = false;
    }
  }

  decreaseCounter(number: number = 1): void {
    if (this.counter - number < 0) {
      console.log('Error: Counter cannot be below zero');
      this.showError = true;
    } else {
      this.counter -= number;
      console.log(this.counter);
      this.showError = false;
    }
  }
}
