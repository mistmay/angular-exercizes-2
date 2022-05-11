import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke',
  template: `
   <div class="pt-3 pb-1 w-100 d-flex flex-column gap-3 joke-container">
     <div class="d-flex align-items-center gap-2 w-100 flex-wrap">
       <div class="bg-white rounded-circle d-flex justify-content-center align-items-center number">{{index}}</div>
       <div *ngIf="joke">
         <p class="fw-bold">{{joke[0]}}</p>
         <p class="mt-1 fw-bold">{{joke[1]}}</p>
       </div>
     </div>
     <div class="w-100 align-self-center d-flex justify-content-center align-items-center">
       <button type="button" class="btn" [ngClass]="isLiked ? 'btn-danger' : 'btn-primary'" (click)="changeCategory.emit(index)">{{btnText}}</button>
     </div>
   </div>
  `,
  styles: [`
  .joke-container {
    border-bottom: 1px solid black;
  }
  .number {
    width: 50px;
    height: 50px;
  }
  `]
})
export class JokeComponent implements OnInit {
  @Input() isLiked!: boolean;
  @Input() joke!: [string, string] | undefined;
  @Input() index!: number;
  @Output() changeCategory: EventEmitter<number> = new EventEmitter<number>();
  btnText!: 'Like' | 'Dislike';

  constructor() { }

  ngOnInit(): void {
    if (this.isLiked) {
      this.btnText = 'Dislike';
    } else {
      this.btnText = 'Like';
    }
  }

}
