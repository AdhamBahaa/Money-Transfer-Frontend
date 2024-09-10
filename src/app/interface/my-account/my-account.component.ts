import { Component } from '@angular/core';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [ProfileSettingsComponent, RouterOutlet, RouterLink],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {}
