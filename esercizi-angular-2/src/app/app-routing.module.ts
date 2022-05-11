import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/error.component';
import { OrderContainerComponent } from './views/order-container.component';
import { UserContainerComponent } from './views/user-container.component';

const routes: Routes = [
  { path: 'users', component: UserContainerComponent },
  { path: 'orders', component: OrderContainerComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
