import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-single',
  template: `
    <div class="w-100 h-100 bg-primary p-3">
      <h1 class="text-white fw-bold mb-2">order-single.component</h1>
      <div class="w-100 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <app-user-single [number]="number" (selection)="showOrder = true"></app-user-single>
        <app-order-detail *ngIf="showOrder; else noSelection" [number]="number" (close)="showOrder = false"></app-order-detail>
      </div>
    </div>
    <ng-template #noSelection>
      <div class="default d-flex justify-content-center align-items-center">
        <p class="fs-4 fw-bold text-white">Click on User to see Details</p>
      </div>
    </ng-template>
  `,
  styles: [`
  app-user-single, app-order-detail, .default {
    width: 100%;
  }
  @media (min-width: 768px) { 
    app-user-single, app-order-detail, .default {
    width: 45%;
  }
  }
  `]
})
export class OrderSingleComponent implements OnInit {
  @Input() number!: number;
  showOrder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
