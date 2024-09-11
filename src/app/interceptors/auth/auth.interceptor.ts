import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import {inject} from "@angular/core";
import {AuthService} from "../../authentication/service/auth.service";
import {catchError, exhaustMap, throwError} from "rxjs";
import {NgToastService} from "ng-angular-popup";
import {constants} from "../../utils/contants";
import {Store} from "@ngrx/store";
import {selectLoginToken} from "../../authentication/store/auth.selectors";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authUrl: string = environment.authUrl;
  const apnKey: string = environment.apnKey;
  const rapidAPi: string = environment.rapidApiUrl;
  const rapiApiKey: string = environment.rapidApiKey;
  const rapidApiHost: string = environment.rapidApiHost;
  const authService = inject(AuthService);
  const toast = inject(NgToastService);
  const store = inject(Store);
  const token = store.selectSignal(selectLoginToken);
  const bearerUrl: string = `${authUrl}user/validate` || `${authUrl}user/profile` || `${authUrl}user/refresh-token`;

  if(req.url.startsWith(authUrl)) {
    const authReq = req.clone({
      setHeaders: {
        'X-APN': apnKey
      }
    });
    return next(authReq);
  }

  if (req.url.startsWith(bearerUrl)) {
    const authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token()}`
      }
    });
    return next(authReq);
  }

  if(req.url.startsWith(rapidAPi)) {
    return authService.validate().pipe(
      exhaustMap(() => {
        const rapidReq = req.clone({
          setHeaders: {
            'x-rapidapi-key': rapiApiKey,
            'x-rapidapi-host': rapidApiHost
          }
        });
        return next(rapidReq);
      }),
      catchError((err) => {
        toast.danger(
          constants.validateError,
          constants.error,
          constants.toastDuration
        );
        return throwError(() => err);
      })
    )
  }
  return next(req);
};
