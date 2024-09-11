import { Component, model, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';
@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    NavbarComponent,
    MobileAppComponent,
    FooterComponent,
  ],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss',
})
export class AmountComponent {
  favoritesNames: string[] = [];
  favoretesAccounts: number[] = [];
  amount!: number;
  recipientName!: string;
  recipientAccount!: number;
  form = {
    amount: null,
    recipientName: '',
    recipientAccount: null,
  };
  constructor(
    readonly _Router: Router,
    private moneyTransferService: MoneyTransferService
  ) {}
  ngDoCheck() {
    let favorites = this.moneyTransferService.getFavorites();
    this.favoritesNames = favorites.names;
    this.favoretesAccounts = favorites.accounts;
  }
  onSubmit(form: NgForm) {
    this.moneyTransferService.setFormData(this.form);
    this.routeToConfirmation();
  }
  routeToConfirmation() {
    if (
      this.form.amount != null &&
      this.form.recipientAccount != null &&
      this.form.recipientName != null
    ) {
      this.amount = this.form.amount!;
      this.recipientName = this.form.recipientName!;
      this.recipientAccount = this.form.recipientAccount!;
      this._Router.navigate(['money-transfer/confirmation']);
    }
  }
  insertFavData() {
    this.form.recipientName = this.favoritesNames[0];
    this.form.recipientAccount != this.favoretesAccounts[0];
  }
}
