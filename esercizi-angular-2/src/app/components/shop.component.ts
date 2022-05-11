import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop',
  template: `
    <div class="container p-5 bg-white rounded">
      <form class="w-100 d-flex flex-column justify-content-between align-items-center gap-3 text-center" #f="ngForm" (ngSubmit)="search(f)">
        <h1 class="fs-3 fw-bold">Find your Beer:</h1>
        <div>
          <label for="name">Beer Name:</label>
          <select id="name" name="name" required ngModel>
            <option *ngFor="let beer of beerList" [value]="beer.id">{{beer.name}}</option>
          </select>
        </div>
        <div>
          <label for="type">Beer Type:</label>
          <select id="type" name="type" required ngModel>
            <option value="medium">medium</option>
            <option value="small">small</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="f.invalid">Search</button>
      </form>
    </div>
    <div class="container p-5 bg-white rounded mt-3 text-center">
      <h2 class="fs-4 fw-bold">Results for name:</h2>
      <div class="mt-3 d-flex justify-content-center align-item-center w-100" *ngIf="currentBeer; else noResults">
        <app-card class="name-result" [beer]="currentBeer"></app-card>
      </div>
    </div>
    <div class="container p-5 bg-white rounded mt-3 text-center">
      <h2 class="fs-4 fw-bold">Results for type:</h2>
      <div class="mt-3 d-flex flex-column flex-md-row align-items-center" *ngIf="(beerList | filterType:searchedType) && (beerList | filterType:searchedType).length > 0; else noResults">
        <app-card *ngFor="let beer of beerList | filterType:searchedType" [beer]="beer" class="type-result"></app-card>
      </div>
    </div>
    <ng-template #noResults>
      <p class="fs-4 fw-bold mt-3">No Results</p>
    </ng-template>
  `,
  styles: [`
  .type-result, .name-result {
    width: 100%;
  }
  @media (min-width: 768px) { 
    .type-result {
      width: 25%;
    }
    .name-result {
      width: 50%;
    }
  }
  `]
})
export class ShopComponent implements OnInit, OnDestroy {
  beerList!: Beer[];
  currentBeer!: Beer | undefined;
  subscriptions: Subscription[] = [];
  searchedType!: "small" | "medium";

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.beerService.getList()
        .subscribe((res: Beer[]) => {
          this.beerList = res;
        })
    );
    this.subscriptions.push(
      this.beerService.getCurrentBeerSubject()
        .subscribe((res: Beer | undefined) => {
          this.currentBeer = res;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  search(f: NgForm): void {
    this.beerService.getCurrentBeer(Number(f.value.name));
    this.searchedType = f.value.type;
  }

}
