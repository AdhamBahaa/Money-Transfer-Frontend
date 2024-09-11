import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';
import { FavouriteService } from '../../../services/favourite/favourite.service';
import { IFavourite } from '../../../models/favourite.model';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MobileAppComponent, FooterComponent, NavbarComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  senderName: string = 'Username';
  senderAccount: number = 234547890;
  @Input() recipientName!: string;
  @Input() recipientAccount!: number;
  amount: number = 0;
  constructor(
    private readonly _Router: Router,
    private moneyTransferService: MoneyTransferService,
    private favouriteService: FavouriteService
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
    let recepInfo: IFavourite = {
      id: 0,
      name: this.recipientName,
      accountId: this.recipientAccount,
    };
    this.moneyTransferService.addToFavorites(
      this.recipientName,
      this.recipientAccount
    );
    this.favouriteService.addFavourite(recepInfo).subscribe({
      next: (response) => {
        console.log('favorite added', response);
      },
      error: (error) => {
        console.error('failed to add favorite', error);
      },
    });
  }
}
