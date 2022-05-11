import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  template: `
    <div class="p-2 bg-success d-flex justify-content-center align-items-center h-100 gap-2 flex-wrap text-center">
      <h1 class="text-white fw-bold">order-detail.component {{ number }}</h1>
      <button type="button" class="btn btn-danger text-center" (click)="close.emit()">X</button>
    </div>
  `,
  styles: [
  ]
})
export class OrderDetailComponent implements OnInit {
  @Input() number!: number;
  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
