import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MobileAppComponent, FooterComponent, NavbarComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  constructor(private readonly _Router: Router) {}

  senderName: string = 'Jonathon Smith';
  senderAccount: string = 'Account xxxx7890';
  recipientName: string = 'Asmaa Dosuky ';
  recipientAccount: string = 'Account xxxx7890';
  amount: number = 1000;
  routeToHome() {
    this._Router.navigate(['']);
  }
  addToFavourites() {}
}
