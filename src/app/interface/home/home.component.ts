import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { NgIf } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { UserService } from '../../services/user/user.service';
import { IUserInfo } from '../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MobileAppComponent,
    NgIf,
    FormsModule,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private readonly _Router: Router,
    private readonly _userService: UserService
  ) {}
  buttonContent!: string;
  loggedIn: boolean = sessionStorage.getItem('token') != null;
  userInfo: IUserInfo | undefined;

  ngAfterContentInit() {
    if (!this.loggedIn) {
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
    this._Router.navigate(['money-transfer/amount']);
  }
  onClick() {
    if (this.loggedIn) {
      this._Router.navigate(['money-transfer/amount']);
    } else {
      this._Router.navigate(['register']);
    }
  }
}
