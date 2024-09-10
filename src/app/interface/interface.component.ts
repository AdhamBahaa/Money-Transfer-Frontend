import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MobileAppComponent } from '../shared/mobile-app/mobile-app.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [
    NavbarComponent,
    MobileAppComponent,
    FooterComponent,
    HelpComponent,
    NotFoundComponent,
    HomeComponent,
    ProfileComponent,
    MyAccountComponent,
  ],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent {}
