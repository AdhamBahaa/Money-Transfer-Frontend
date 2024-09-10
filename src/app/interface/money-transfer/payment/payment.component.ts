import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
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
    this._Router.navigate(['home']);
  }
  addToFavourites() {}
}
