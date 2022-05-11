import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokesProviderService } from './services/jokes-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  currentJoke: [string, string] | undefined = undefined;
  likedJokes: [string, string][] = [];
  dislikedJokes: [string, string][] = [];
  activateBtn: boolean = false;

  constructor(private jokesProvider: JokesProviderService) { }

  ngOnInit(): void {
    this.subscription = this.jokesProvider.getJokes()
      .subscribe((res: [string, string] | undefined) => {
        this.currentJoke = res;
        this.activateBtn = true;
      });
    setInterval(() => {
      this.jokesProvider.newJoke();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  like(joke: [string, string] | undefined): void {
    if (joke) {
      this.activateBtn = false;
      this.likedJokes.push(joke);
    }
  }

  dislike(joke: [string, string] | undefined): void {
    if (joke) {
      this.activateBtn = false;
      this.dislikedJokes.push(joke);
    }
  }

  likeToDislike(index: number): void {
    this.dislikedJokes.push(...this.likedJokes.splice(index - 1, 1));
  }

  dislikeToLike(index: number): void {
    this.likedJokes.push(...this.dislikedJokes.splice(index - 1, 1));
  }

}
