import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFavourite } from '../../models/favourite.model';
import { favouriteAPI } from '../constantsAPI';

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
  favoretesAccounts: number[] = [123456789456, 123456789456];

  addToFavorites(name: string, account: number): Observable<IFavourite> {
    this.favoritesNames.push(name);
    this.favoretesAccounts.push(account);
    return (
      this.http.post<IFavourite>(`${favouriteAPI}/AddFavourite`, name) &&
      this.http.post<IFavourite>(`${favouriteAPI}/AddFavourite`, account)
    );
  }

  getFavorites() {
    return {
      names: this.favoritesNames,
      accounts: this.favoretesAccounts,
    };
  }
}
