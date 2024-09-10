import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss',
})
export class AmountComponent {
  constructor(private readonly _Router: Router) {}
  form = {
    amount: null,
    recipientName: '',
    recipientAccount: null,
  };
  onSubmit(form: NgForm) {}
  routeToConfirmation() {
    this._Router.navigate(['money-transfer/confirmation']);
  }
}
