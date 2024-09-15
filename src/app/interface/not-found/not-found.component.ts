import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(private readonly _Router: Router) {}

  registerNow() {
    this._Router.navigate(['register']);
  }
}
