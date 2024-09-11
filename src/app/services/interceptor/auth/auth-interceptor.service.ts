import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { IResponseTokens } from '../../../models/auth.model';
// Assume you have a service to refresh the token

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem('accessToken');

    let clonedRequest = request;

    if (accessToken) {
      clonedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });
    }

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          // Token has expired, use the refresh token to get a new access token
          const refreshToken = sessionStorage.getItem('refreshToken');

          if (refreshToken) {
            return this._authService
              .refresh({ accessToken: '', refreshToken })
              .pipe(
                switchMap((newTokens: IResponseTokens) => {
                  sessionStorage.setItem('accessToken', newTokens.accessToken);
                  sessionStorage.setItem(
                    'refreshToken',
                    newTokens.refreshToken
                  );

                  const newRequest = clonedRequest.clone({
                    headers: clonedRequest.headers.set(
                      'Authorization',
                      `Bearer ${newTokens.accessToken}`
                    ),
                  });

                  return next.handle(newRequest);
                })
              );
          } else {
            // Handle case where refreshToken is null or redirect to login
            return throwError(() => new Error('No refresh token available'));
          }
        }

        return throwError(() => error);
      })
    );
  }
}
