import { Routes } from '@angular/router';
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
  // routing in page My Account
  {
    path: 'my-account',
    loadComponent: () =>
      import('./interface/my-account/my-account.component').then(
        (m) => m.MyAccountComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./interface/my-account/my-profile/my-profile.component').then(
        (m) => m.MyProfileComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./interface/my-account/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
  {
    path: 'payments-history',
    loadComponent: () =>
      import(
        './interface/my-account/payments-history/payments-history.component'
      ).then((m) => m.PaymentsHistoryComponent),
  },
  {
    path: 'change-password',
    loadComponent: () =>
      import(
        './interface/my-account/change-password/change-password.component'
      ).then((m) => m.ChangePasswordComponent),
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
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
