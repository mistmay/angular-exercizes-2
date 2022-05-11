import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="p-5 bg-success d-flex flex-column justify-content-between align-items-center w-100 h-100 text-center gap-5">
      <div class="d-flex justify-content-center align-items-center title">
        <h1 class="fs-4 fw-bold">user-list.component</h1>
      </div>
      <app-user-single *ngFor="let item of [1, 2, 3]" [number]="item" class="w-100 h-25" (selection)="selection.emit($event)"></app-user-single>
    </div>
  `,
  styles: [`
  .title {
    height: 15%;
  }
  `]
})
export class UserListComponent implements OnInit {
  @Output() selection: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
