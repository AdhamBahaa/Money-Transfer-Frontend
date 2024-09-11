import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {

    path: 'home',
    loadComponent: () =>
      import('./interface/interface.component').then(
        (m) => m.InterfaceComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'welcome-back',
    loadComponent: () =>
      import('./auth/welcome-back/welcome-back.component').then(
        (m) => m.WelcomeBackComponent
      ),
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
    path: 'help',
    loadComponent: () =>
      import('./interface/help/help.component').then((m) => m.HelpComponent),
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
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
];
