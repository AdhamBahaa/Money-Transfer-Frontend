
import { Component } from '@angular/core';
import { MobileAppComponent } from '../../shared/mobile-app/mobile-app.component';
import { ProfileSettingsComponent } from '../my-account/profile-settings/profile-settings.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, ProfileSettingsComponent ,MobileAppComponent , FooterComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
}
