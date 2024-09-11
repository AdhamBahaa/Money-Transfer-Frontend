import { Component } from '@angular/core';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { MobileAppComponent } from "../../shared/mobile-app/mobile-app.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [ProfileSettingsComponent, RouterOutlet, RouterLink, NavbarComponent, MobileAppComponent, FooterComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {}
