import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Speedo-Transfer';
}
