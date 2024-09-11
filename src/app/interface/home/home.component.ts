import { Component } from '@angular/core';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MobileAppComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  buttonContent!: string;
  loggedIn: boolean = true;
  constructor(public router: Router) {}
  ngAfterContentInit() {
    if (this.loggedIn) {
      this.buttonContent = 'Create An Account';
    } else {
      this.buttonContent = 'Transfer Now';
    }
  }

  get routerLinkPath(): Promise<boolean> {
    return this.loggedIn
      ? this.router.navigate(['/register'])
      : this.router.navigate(['/login']);
  }
}
