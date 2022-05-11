import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-single',
  template: `
    <div class="p-2 bg-warning d-flex justify-content-center align-items-center h-100">
      <button type="button" class="btn btn-primary text-center" (click)="selection.emit(number)">user-single.component {{number}}</button>
    </div>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  @Input() number!: number;
  @Output() selection: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
