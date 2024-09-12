import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';
import { UserService } from '../../../services/user/user.service';
import { Subscription } from 'rxjs';
import { IUserInfo } from '../../../models/user.model';
import {
  ITransaction,
  ITransactionResponse,
} from '../../../models/account.model';
@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NavbarComponent, MobileAppComponent, FooterComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent implements OnInit {
  userInfo: IUserInfo | undefined;
  private subscription: Subscription | undefined;
  senderName: string = 'Username';
  senderAccount: number = 245987890;
  recipientName: string = ' ';
  recipientAccount: number = 0;
  amount: number = 0;

  // transactionDetails: ITransactionResponse = {
  //   accountSender: 12345678,
  //   accountReciever: 0,
  //   amount: 0,
  //   senderName: '',
  //   receiverName: '',
  //   status: '',
  //   transactionTime: new Date(),
  // };
  constructor(
    private readonly _Router: Router,
    private moneyTransferService: MoneyTransferService,
    private readonly _userService: UserService
  ) {}
  ngDoCheck() {
    const formData = this.moneyTransferService.getFormData();
    this.recipientName = formData.recipientName || 'Asmaa Dosuky';
    this.recipientAccount = formData.recipientAccount || ' xxxx7890';
    this.amount = formData.amount || 1000;
  }

  ngOnInit() {
    this.subscription = this._userService.userInfo().subscribe({
      next: (res: IUserInfo) => {
        console.log('INFO: ', res);
        this.userInfo = res;
        this.senderName = res.name;
      },
      error: (error) => {
        console.error('Complete error:', error);
      },
    });
    // this.transactionDetails = history.state.data;
    // console.log(this.transactionDetails);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  routeToPayment() {
    this._Router.navigate(['money-transfer/payment']);
  }
  routeToAmount() {
    this._Router.navigate(['money-transfer/amount']);
  }
}
