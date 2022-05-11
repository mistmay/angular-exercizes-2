import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-counter',
  template: `
    <div class="container p-5 bg-primary text-white fw-bold fs-3 text-center">
      <h2>Counter Value : {{ counterNumber }}</h2>
      <p class="text-white fw-bold mt-2 text-center" *ngIf="showError">Error: Counter cannot be below zero!!</p>
    </div>
  `,
  styles: [
  ]
})
export class ShowCounterComponent implements OnInit, OnDestroy {
  counterNumber!: number;
  showError!: boolean;
  subscriptions: Subscription[] = [];

  constructor(private counter: CounterService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.counter.getCounter()
        .subscribe((res: number) => {
          this.counterNumber = res;
        })
    );
    this.subscriptions.push(
      this.counter.getShowError()
        .subscribe((res: boolean) => {
          this.showError = res;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }


}
