// import { Component } from '@angular/core';
// import { NavbarComponent } from '../shared/navbar/navbar.component';
// // import { ProfileSettingsComponent } from './profile/profile-settings/profile-settings.component';
// import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [NavbarComponent , ProfileSettingsComponent],
//   templateUrl: './profile.component.html',
//   styleUrl: './profile.component.scss'
// })
// export class ProfileComponent {

// }
import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MobileAppComponent } from '../shared/mobile-app/mobile-app.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, ProfileSettingsComponent ,MobileAppComponent , FooterComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
}
