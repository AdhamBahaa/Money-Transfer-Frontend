import { Component, model, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';
import { ITransaction } from '../../../models/account.model';
import { Subscription } from 'rxjs';
import { IUserInfo } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { AccountService } from '../../../services/account/account.service';
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
  favoritesAccounts: number[] = [];
  amount!: number;
  recipientName!: string;
  recipientAccount!: number;
  form = {
    amount: null,
    recipientName: '',
    recipientAccount: null,
  };

  userInfo: IUserInfo | undefined;
  private subscription: Subscription | undefined;

  // transactionDetails: ITransaction = {
  //   accountSender: 12345678,
  //   accountReciever: this.form.recipientAccount ?? 0,
  //   amount: this.form.amount ?? 0,
  //   senderName: '',
  //   recieverName: this.form.recipientName,
  // };

  constructor(
    readonly _Router: Router,
    private _userService: UserService,
    private moneyTransferService: MoneyTransferService,
    private _accountSevice: AccountService
  ) {}

  ngOnInit() {
    this.subscription = this._userService.userInfo().subscribe({
      next: (res: IUserInfo) => {
        console.log('INFO: ', res);
        this.userInfo = res;
        // this.transactionDetails.senderName = res.name;
      },
      error: (error) => {
        console.error('Complete error:', error);
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngDoCheck() {
    let favorites = this.moneyTransferService.getFavorites();
    this.favoritesNames = favorites.names;
    this.favoritesAccounts = favorites.accounts;
  }
  onSubmit(form: NgForm) {
    this.moneyTransferService.setFormData(this.form);
    this.routeToConfirmation();
    // this._accountSevice.createTransaction(this.transactionDetails).subscribe({
    //   next: (response) => {
    //     console.log('Transaction Completed', response);
    //     this._Router.navigate(['money-transfer/confirmation'], {
    //       state: { data: this.transactionDetails },
    //     });
    //   },
    //   error: (error) => {
    //     console.log('Transaction Failed', error);
    //     alert('Transaction Failed');
    //   },
    // });
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
      // {
      //   state: { data: this.transactionDetails },
      // }
    }
  }
  insertFavData() {
    this.form.recipientName = this.favoritesNames[0];
    this.form.recipientAccount != this.favoritesAccounts[0];
  }
}
