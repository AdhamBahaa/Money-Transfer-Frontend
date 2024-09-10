import { Routes } from '@angular/router';
import { MoneyTransferComponent } from './interface/money-transfer/money-transfer.component';
import { AmountComponent } from './interface/money-transfer/amount/amount.component';
import { ConfirmationComponent } from './interface/money-transfer/confirmation/confirmation.component';
import { PaymentComponent } from './interface/money-transfer/payment/payment.component';
import { HomeComponent } from './interface/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './interface/help/help.component';
import { NotFoundComponent } from './interface/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./interface/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'money-transfer',
    loadComponent: () =>
      import('./interface/money-transfer/amount/amount.component').then(
        (m) => m.AmountComponent
      ),
  },
  {
    path: 'money-transfer/amount',
    loadComponent: () =>
      import('./interface/money-transfer/amount/amount.component').then(
        (m) => m.AmountComponent
      ),
  },
  {
    path: 'money-transfer/confirmation',
    loadComponent: () =>
      import(
        './interface/money-transfer/confirmation/confirmation.component'
      ).then((m) => m.ConfirmationComponent),
    canActivate: [authGuard],
  },
  {
    path: 'money-transfer/payment',
    loadComponent: () =>
      import('./interface/money-transfer/payment/payment.component').then(
        (m) => m.PaymentComponent
      ),
    canActivate: [authGuard],
  },

  {
    path: 'my-account',
    loadComponent: () =>
      import('./profile/profile.component').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./interface/help/help.component').then((m) => m.HelpComponent),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./interface/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
