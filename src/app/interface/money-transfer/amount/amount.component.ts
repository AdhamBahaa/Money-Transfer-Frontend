import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss',
})
export class AmountComponent {
  form = {
    amount: null,
    recipientName: '',
    recipientAccount: null,
  };
  onSubmit(form: NgForm) {}
}
