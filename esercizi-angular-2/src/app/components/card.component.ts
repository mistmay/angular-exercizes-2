import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-card',
  template: `
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">{{beer.name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{beer.type}}</h6>
      <p class="card-text">{{beer.price}}</p>
    </div>
  </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {
  @Input() beer!: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
