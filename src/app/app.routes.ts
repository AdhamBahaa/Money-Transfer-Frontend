import { Routes } from '@angular/router';
import { MoneyTransferComponent } from './interface/money-transfer/money-transfer.component';
import { AmountComponent } from './interface/money-transfer/amount/amount.component';
import { ConfirmationComponent } from './interface/money-transfer/confirmation/confirmation.component';
import { PaymentComponent } from './interface/money-transfer/payment/payment.component';
import { HomeComponent } from './interface/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'money-transfer',
    component: AmountComponent,
  },
  {
    path: 'money-transfer/amount',
    component: AmountComponent,
  },
  {
    path: 'money-transfer/confirmation',
    component: ConfirmationComponent,
  },
  {
    path: 'money-transfer/payment',
    component: PaymentComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
