import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFavourite } from '../../models/favourite.model';
import { Observable } from 'rxjs';
import { favouriteAPI } from '../constantsAPI';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor(private http: HttpClient) {}

  addFavourite(data: IFavourite): Observable<IFavourite> {
    return this.http.post<IFavourite>(`${favouriteAPI}/AddFavourite`, data);
  }

  getFavourite(userId: number): Observable<IFavourite[]> {
    return this.http.get<IFavourite[]>(`${favouriteAPI}/GetFavourite/${userId}`);
  }

  deleteFavourite(accountId: number): Observable<string> {
    return this.http.delete<string>(`${favouriteAPI}/${accountId}`);
  }
}
