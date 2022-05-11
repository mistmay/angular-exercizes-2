import { Injectable } from '@angular/core';
import { JokesApiService } from '../api/jokes-api.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesProviderService {
  jokeSubject: BehaviorSubject<[string, string] | undefined> = new BehaviorSubject<[string, string] | undefined>(undefined);

  constructor(private api: JokesApiService) { }

  getJokes(): Observable<[string, string] | undefined> {
    return this.jokeSubject.asObservable();
  }

  newJoke(): void {
    const subscription: Subscription = this.api.getJoke()
      .subscribe((res: any) => {
        this.jokeSubject.next([res.setup, res.delivery]);
        subscription.unsubscribe();
      });
  }

}
