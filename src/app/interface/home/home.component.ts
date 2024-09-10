import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MobileAppComponent, NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly _Router: Router) {}
  buttonContent!: string;
  loggedIn: boolean = true;
  ngAfterContentInit() {
    if (this.loggedIn) {
      this.buttonContent = 'Create An Account';
    } else {
      this.buttonContent = 'Transfer Now';
    }
  }
  form = {
    amount: null,
  };
  onSubmit(form: NgForm) {}
  routeToMoneyTransfer() {
    this._Router.navigate(['money-transfer']);
  }
}
