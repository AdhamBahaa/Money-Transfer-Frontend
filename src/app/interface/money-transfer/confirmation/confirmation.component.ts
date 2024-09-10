import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NavbarComponent, MobileAppComponent, FooterComponent],
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
