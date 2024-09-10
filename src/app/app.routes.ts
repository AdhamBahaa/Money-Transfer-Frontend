import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
