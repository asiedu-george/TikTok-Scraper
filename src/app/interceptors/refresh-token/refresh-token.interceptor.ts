import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../../authentication/service/auth.service';
import {Store} from '@ngrx/store';
import {catchError, exhaustMap, throwError} from 'rxjs';
import {AuthenticationActions} from '../../authentication/store/auth.actions';
import { environment } from '../../../environments/environment';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const store = inject(Store);
  const apnKey: string = environment.apnKey;

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          exhaustMap((response) => {
            store.dispatch(AuthenticationActions.loginSuccess({ userData: response}));
            const newLoginToken = response.login_token;
            const newReq = req.clone({
              setHeaders: {
                'X-APN': apnKey,
                'Authorization': `Bearer ${newLoginToken}`
              }
            })
            return next(newReq);
          }),
          catchError((err) => {
            store.dispatch(AuthenticationActions.logout());
            return throwError(() => err);
          })
        )
      }
      return throwError(() => error);
    })
  );
};
