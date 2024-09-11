import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAuthCreated,
  ICreateNewAuth,
  ILogin,
  IResponseTokens,
} from '../../models/auth.model';
import { Observable, tap } from 'rxjs';
import { authAPI } from '../constantsAPI';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(data: ICreateNewAuth): Observable<IAuthCreated> {
    return this.http.post<IAuthCreated>(`${authAPI}/create`, data);
  }
  // /api/v1/auth/login`
  login(data: ILogin): Observable<IResponseTokens> {
    return this.http.post<IResponseTokens>(`${authAPI}/login`, data).pipe(
      tap((response) => {
        const { accessToken, refreshToken } = response;
        if (accessToken && refreshToken) {
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', refreshToken);
        }
      })
    );
  }

  refresh(data: IResponseTokens): Observable<IResponseTokens> {
    return this.http.post<IResponseTokens>(
      `${authAPI}/refresh`,
      data.refreshToken
    );
  }

  logout(data: IResponseTokens): Observable<string> {
    return this.http.post<string>(`${authAPI}/logout`, data);
  }
}
