import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http: HttpClient) { }

  getResponse(): Observable<any> {
    return this.http.get<any>('https://api.covid19api.com/');
  }

}
