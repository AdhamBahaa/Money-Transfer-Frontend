import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAuthCreated,
  ICreateNewAuth,
  ILogin,
  IResponseTokens,
} from '../../models/auth.model';
import { Observable, tap } from 'rxjs';
import { authAPI } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(data: ICreateNewAuth): Observable<IAuthCreated> {
    return this.http.post<IAuthCreated>(`${authAPI}/create`, data);
  }

  login(data: ILogin): Observable<IResponseTokens> {
    return this.http.post(`${authAPI}/login`, data).pipe(
      tap((response: any) => {
        const accessToken: string = response.accessToken;
        const refreshToken: string = response.refreshToken;

        if (accessToken && refreshToken) {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
        }
      })
    );
  }
}
