import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { AmountComponent } from './amount/amount.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    RouterOutlet,
    MobileAppComponent,
    AmountComponent,
    ConfirmationComponent,
    PaymentComponent,
  ],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
