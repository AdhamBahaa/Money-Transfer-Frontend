import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { AmountComponent } from './amount/amount.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { UserService } from '../../services/user/user.service';
import { IUserInfo } from '../../models/user.model';
import { Subscription } from 'rxjs';

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
export class MoneyTransferComponent {
  userInfo: IUserInfo | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private readonly _Router: Router,
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
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
