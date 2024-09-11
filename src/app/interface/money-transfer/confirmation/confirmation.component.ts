import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';
@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NavbarComponent, MobileAppComponent, FooterComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  senderName: string = 'Username';
  senderAccount: number = 245987890;
  recipientName: string = ' ';
  recipientAccount: number = 0;
  amount: number = 0;
  constructor(
    private readonly _Router: Router,
    private moneyTransferService: MoneyTransferService
  ) {}
  ngDoCheck() {
    const formData = this.moneyTransferService.getFormData();
    this.recipientName = formData.recipientName || 'Asmaa Dosuky';
    this.recipientAccount = formData.recipientAccount || ' xxxx7890';
    this.amount = formData.amount || 1000;
  }
  routeToPayment() {
    this._Router.navigate(['money-transfer/payment']);
  }
  routeToAmount() {
    this._Router.navigate(['money-transfer/amount']);
  }
}
