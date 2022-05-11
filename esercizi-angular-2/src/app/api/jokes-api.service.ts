import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesApiService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http.get<any>('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
  }

}
