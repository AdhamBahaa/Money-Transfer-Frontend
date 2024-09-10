import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  constructor(private readonly _Router: Router) {}

  senderName: string = 'Jonathon Smith';
  senderAccount: string = 'Account xxxx7890';
  recipientName: string = 'Asmaa Dosuky ';
  recipientAccount: string = 'Account xxxx7890';
  amount: number = 1000;
  routeToPayment() {
    this._Router.navigate(['money-transfer/payment']);
  }
  routeToAmount() {
    this._Router.navigate(['money-transfer/amount']);
  }
}
