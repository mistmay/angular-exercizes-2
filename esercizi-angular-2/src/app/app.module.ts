import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop.component';
import { CardComponent } from './components/card.component';
import { FormsModule } from '@angular/forms';
import { FilterTypePipe } from './pipes/filter-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CardComponent,
    FilterTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
