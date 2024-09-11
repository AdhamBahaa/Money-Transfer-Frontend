import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoneyTransferService {
  constructor(private http: HttpClient) {}
  private formData: any = {};

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
  favoritesNames: string[] = ['Asmaa Dosuky', 'Asmaa Dosuky'];
  favoretesAccounts: string[] = ['123456789456', '123456789456'];

  addToFavorites(name: string, account: string) {
    this.favoritesNames.push(name);
    this.favoretesAccounts.push(account);
  }

  getFavorites() {
    return {
      names: this.favoritesNames,
      accounts: this.favoretesAccounts,
    };
  }
}
