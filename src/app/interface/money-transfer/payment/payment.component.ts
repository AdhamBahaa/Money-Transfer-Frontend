import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MobileAppComponent, FooterComponent, NavbarComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  senderName: string = 'Username';
  senderAccount: string = ' xxxx7890';
  @Input() recipientName!: string;
  @Input() recipientAccount!: string;
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
  routeToHome() {
    this._Router.navigate(['']);
  }
  addToFavourites() {
    this.moneyTransferService.addToFavorites(
      this.recipientName,
      this.recipientAccount
    );
  }
}
