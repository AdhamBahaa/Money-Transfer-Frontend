import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  senderName: string = 'Jonathon Smith';
  senderAccount: string = 'Account xxxx7890';
  recipientName: string = 'Asmaa Dosuky ';
  recipientAccount: string = 'Account xxxx7890';
  amount: number = 1000;
  backToHome() {}
  addToFavourites() {}
}
