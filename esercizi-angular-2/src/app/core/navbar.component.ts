import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="w-100">
      <nav class="w-100 h-100 d-flex justify-content-center align-items-center p-3 gap-5 bg-secondary">
        <button type="button" class="btn btn-primary w-25 fs-5" routerLink="/users" routerLinkActive="active fw-bold">Users</button>
        <button type="button" class="btn btn-primary w-25 fs-5" routerLink="/orders" routerLinkActive="active fw-bold">Orders</button>
      </nav>
    </header>
  `,
  styles: [`
  header {
    height: 70px;
  }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
