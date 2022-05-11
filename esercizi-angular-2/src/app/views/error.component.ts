import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  template: `
    <div class="p-5 bg-info d-flex align-items-center justify-content-center w-100 h-100 main-container text-center">
      <p class="fs-3 text-white fw-bold">Page not found<br> Redirecting to HomePage in 5 seconds</p>
    </div>
  `,
  styles: [`
  .main-container {
    min-height: calc(100vh - 70px);
  }
  `]
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['users']);
    }, 5000);
  }

}
