import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div class="bg-warning w-100 h-100 p-5 d-flex flex-column align-items-center gap-4 text-center">
      <h1 class="fs-4 fw-bold">user-detail.component</h1>
      <p class="fw-bold fs-4">Detail of user {{ userDetail }}</p>
      <button type="button" class="btn btn-primary" (click)="closeDetails.emit()">Close</button>
    </div>
  `,
  styles: [``]
})
export class UserDetailComponent implements OnInit {
  @Input() userDetail!: number;
  @Output() closeDetails: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
