import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
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
    NavbarComponent,
    MobileAppComponent,
    FooterComponent,
  ],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss',
})
export class AmountComponent {
  amount!: number;
  recipientName!: string;
  recipientAccount!: string;
  form = {
    amount: null,
    recipientName: '',
    recipientAccount: '',
  };
  constructor(
    readonly _Router: Router,
    private moneyTransferService: MoneyTransferService
  ) {}
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
}
