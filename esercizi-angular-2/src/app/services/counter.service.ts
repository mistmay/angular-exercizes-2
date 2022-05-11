import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;
  counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.counter);
  errorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getCounter(): Observable<number> {
    return this.counterSubject.asObservable();
  }

  getShowError(): Observable<boolean> {
    return this.errorSubject.asObservable();
  }

  incrementCounter(number: number = 1): void {
    if (this.counter + number < 0) {
      console.log('Error: Counter cannot be below zero');
      this.errorSubject.next(true);
    } else {
      this.counter += number;
      this.counterSubject.next(this.counter);
      console.log(this.counter);
      this.errorSubject.next(false);
    }
  }

  decreaseCounter(number: number = 1): void {
    if (this.counter - number < 0) {
      console.log('Error: Counter cannot be below zero');
      this.errorSubject.next(true);
    } else {
      this.counter -= number;
      this.counterSubject.next(this.counter);
      console.log(this.counter);
      this.errorSubject.next(false);
    }
  }
}
