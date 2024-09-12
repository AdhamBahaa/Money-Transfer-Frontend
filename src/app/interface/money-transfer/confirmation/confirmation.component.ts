import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { MobileAppComponent } from '../../../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { MoneyTransferService } from '../../../services/money-transfer/money-transfer.service';
import { UserService } from '../../../services/user/user.service';
import { IUserInfo } from '../../../models/user.model';
import { Subscription } from 'rxjs';
import { IAccountUser } from '../../../models/account.model';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NavbarComponent, MobileAppComponent, FooterComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  senderName: string | undefined;
  senderAccount: IAccountUser[] | undefined;
  recipientName: string = ' ';
  recipientAccount: number = 0;
  amount: number = 0;
  userInfo: IUserInfo | undefined;
  private subscription: Subscription | undefined;
  constructor(
    private readonly _Router: Router,
    private moneyTransferService: MoneyTransferService,
    private readonly _userService: UserService
  ) {}
  ngOnInit() {
    this.subscription = this._userService.userInfo().subscribe({
      next: (res: IUserInfo) => {
        console.log('INFO: ', res);
        this.userInfo = res;
      },
      error: (error) => {
        console.error('Complete error:', error);
      },
    });
    this.senderName = this.userInfo?.name || 'Username';
    this.senderAccount = this.userInfo?.accounts;
  }

  ngDoCheck() {
    const formData = this.moneyTransferService.getFormData();
    this.recipientName = formData.recipientName || 'Recipient Name';
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
