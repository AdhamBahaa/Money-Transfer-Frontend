import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MobileAppComponent } from "../shared/mobile-app/mobile-app.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HelpComponent } from "./help/help.component";

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [NavbarComponent, MobileAppComponent, FooterComponent, HelpComponent],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent {}
