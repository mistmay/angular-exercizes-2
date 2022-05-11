import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CovidApiService } from './api/covid-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  response: [string, string][] = [];

  constructor(private api: CovidApiService) { }

  ngOnInit(): void {
    this.subscription = this.api.getResponse()
      .subscribe((res: any) => {
        Object.keys(res).forEach((element: string) => {
          this.response.push([element, res[element].Path]);
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
