import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private beerList: Beer[] = [
    {
      id: 1,
      type: 'medium',
      name: 'Beer 1',
      price: 5
    },
    {
      id: 2,
      type: 'medium',
      name: 'Beer 2',
      price: 8
    },
    {
      id: 3,
      type: 'small',
      name: 'Beer 3',
      price: 10
    },
    {
      id: 4,
      type: 'medium',
      name: 'Beer 4',
      price: 4
    },
    {
      id: 5,
      type: 'small',
      name: 'Beer 5',
      price: 3
    },
    {
      id: 6,
      type: 'small',
      name: 'Beer 6',
      price: 7
    },
    {
      id: 7,
      type: 'medium',
      name: 'Beer 7',
      price: 8
    },
    {
      id: 8,
      type: 'small',
      name: 'Beer 8',
      price: 2
    },
    {
      id: 9,
      type: 'medium',
      name: 'Beer 9',
      price: 5
    },
    {
      id: 10,
      type: 'medium',
      name: 'Beer 10',
      price: 6
    }
  ];

  beerListSubject: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>(this.beerList);
  currentBeerSubject: BehaviorSubject<Beer | undefined> = new BehaviorSubject<Beer | undefined>(undefined);

  constructor() { }

  getList(): Observable<Beer[]> {
    return this.beerListSubject.asObservable();
  }

  getCurrentBeerSubject(): Observable<Beer | undefined> {
    return this.currentBeerSubject.asObservable();
  }

  getCurrentBeer(id: number): void {
    this.currentBeerSubject.next(this.beerList.find((beer: Beer) => beer.id === id));
  }

}
