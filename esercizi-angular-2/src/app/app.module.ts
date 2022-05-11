import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar.component';
import { UserContainerComponent } from './views/user-container.component';
import { OrderContainerComponent } from './views/order-container.component';
import { UserListComponent } from './components/user-list.component';
import { UserSingleComponent } from './components/user-single.component';
import { UserDetailComponent } from './components/user-detail.component';
import { OrderListComponent } from './components/order-list.component';
import { OrderSingleComponent } from './components/order-single.component';
import { OrderDetailComponent } from './components/order-detail.component';
import { ErrorComponent } from './views/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
