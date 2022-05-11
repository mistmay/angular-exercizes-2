import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-edit-counter',
  template: `
    <div class="container p-5 bg-danger">
      <input type="number" class="w-100 mb-3 text-center p-3 rounded fs-1 fw-bold" [(ngModel)]="inputValue">
      <div class="w-100 d-flex align-items-center justify-content-center gap-3">
        <button type="button" class="btn btn-primary" (click)="add()">Add {{ inputValue }}</button>
        <button type="button" class="btn btn-primary" (click)="minus()">Minus {{ inputValue }}</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class EditCounterComponent implements OnInit {
  inputValue: number = 1;

  constructor(private counter: CounterService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.counter.incrementCounter(this.inputValue);
  }

  minus(): void {
    this.counter.decreaseCounter(this.inputValue);
  }

}
