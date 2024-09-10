import { Component } from '@angular/core';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { AmountComponent } from './amount/amount.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [MobileAppComponent, AmountComponent],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
