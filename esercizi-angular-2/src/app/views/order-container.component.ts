import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-container',
  template: `
   <div class="p-5 bg-danger d-flex flex-column align-items-center w-100 h-100 gap-5 main-container text-center">
     <div class="d-flex justify-content-center align-items-center title">
       <h1 class="fs-4 fw-bold">order-container.component</h1>
      </div>
     <app-order-list class="content w-100"></app-order-list>
   </div>
  `,
  styles: [`
  .main-container {
    min-height: calc(100vh - 70px);
  }
  .title {
    height: 15%;
  }
  .content {
    height: 85%;
  }
  `]
})
export class OrderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
