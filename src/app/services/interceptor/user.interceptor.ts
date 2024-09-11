import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core'; // Adjust the path to your AuthService
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export const userInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = sessionStorage.getItem('accessToken');

  const clonedRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
  });

  return next(clonedRequest);
  // return next(clonedRequest).pipe(
  //   catchError((error) => {
  //     if (error.status === 403) {
  //       // Unauthorized error
  //       const refreshToken = sessionStorage.getItem('refreshToken');
  //       // Call refresh token logic
  //       return authService.refresh().pipe(
  //         switchMap((newTokens) => {
  //           // Save new tokens in session storage
  //           sessionStorage.setItem('accessToken', newTokens.accessToken);
  //           sessionStorage.setItem('refreshToken', newTokens.refreshToken);

  //           // Clone the original request with the new access token
  //           const updatedRequest = req.clone({
  //             headers: req.headers.set(
  //               'Authorization',
  //               `Bearer ${newTokens.accessToken}`
  //             ),
  //           });

  //           // Retry the request with the new token
  //           return next(updatedRequest);
  //         }),
  //         catchError((refreshError) => {
  //           // If the refresh fails, logout or handle the error
  //           authService.logout();
  //           return throwError(() => new Error('No refresh token available'));
  //         })
  //       );
  //     }

  //     // If it's another error, simply pass it through
  //     return throwError(() => error);
  //   })
  // );
};
