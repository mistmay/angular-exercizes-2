import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  template: `
   <div class="p-5 bg-info d-flex flex-column align-items-center w-100 h-100 gap-5 main-container text-center">
     <div class="d-flex justify-content-center align-items-center title">
       <h1 class="fs-4 fw-bold">user-container.component</h1>
      </div>
     <div class="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 content gap-5">
       <app-user-list class="h-100" (selection)="openDetails($event)"></app-user-list>
       <app-user-detail class="h-100" *ngIf="showDetails; else noSelection" [userDetail]="userDetails" (closeDetails)="showDetails = false"></app-user-detail>
     </div>
   </div>
   <ng-template #noSelection>
     <div class="default h-100 d-flex justify-content-center align-items-center text-center">
         <p class="fs-4 fw-bold">Click on User to see Details</p>
      </div>
   </ng-template>
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
  app-user-list {
    width: 100%;
  }
  app-user-detail, .default {
    width: 100%;
  }
  @media (min-width: 768px) { 
    app-user-list {
    width: 48%;
  }
  app-user-detail, .default {
    width: 46%;
  }
   }
  `]
})
export class UserContainerComponent implements OnInit {
  showDetails: boolean = false;
  userDetails!: number;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails(details: number): void {
    this.userDetails = details;
    this.showDetails = true;
  }

}
