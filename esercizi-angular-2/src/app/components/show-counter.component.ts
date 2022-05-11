import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  template: `
    <div class="container p-5 bg-primary text-white fw-bold fs-3 text-center">
      <h2>Counter Value : {{ getCounter() }}</h2>
      <p class="text-white fw-bold mt-2 text-center" *ngIf="getErrorNotification()">Error: Counter cannot be below zero!!</p>
    </div>
  `,
  styles: [
  ]
})
export class ShowCounterComponent implements OnInit {

  constructor(private counter: CounterService) { }

  ngOnInit(): void {
  }

  getCounter(): number {
    return this.counter.getCounter();
  }

  getErrorNotification(): boolean {
    return this.counter.getShowError();
  }

}
