import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeBackComponent } from './auth/welcome-back/welcome-back.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyAccountComponent } from './interface/my-account/my-account.component';
import { InactivityService } from './services/inActive/in-active.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterfaceComponent,
    LoginComponent,
    WelcomeBackComponent,
    RegisterComponent,
    MyAccountComponent,
  ],
  providers: [InactivityService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Speedo-Transfer';
  constructor(private _inActive: InactivityService) {}
}
