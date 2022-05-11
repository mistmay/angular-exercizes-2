import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  template: `
    <div class="p-5 d-flex flex-column justify-content-between align-items-center w-100 h-100 text-center gap-5 main-container">
      <div class="d-flex justify-content-center align-items-center title">
        <h1 class="fs-4 fw-bold text-white">order-list.component</h1>
      </div>
      <app-order-single class="w-100 h-25" *ngFor="let item of [1, 2, 3]" [number]="item"></app-order-single>
    </div>
  `,
  styles: [`
  .main-container {
    background-color: purple;
  }
  .title {
    height: 15%;
  }
  `]
})
export class OrderListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
