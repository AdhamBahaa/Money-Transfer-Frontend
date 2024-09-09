import { Component } from '@angular/core';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MobileAppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  buttonContent!: string;
  loggedIn: boolean = true;
  constructor() {
    if (this.loggedIn) {
      this.buttonContent = 'Create An Account';
    } else {
      this.buttonContent = 'Transfer Now';
    }
  }
}
