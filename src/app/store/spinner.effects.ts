import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthenticationActions} from "../authentication/store/auth.actions";
import {tap} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

export const showSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.register, AuthenticationActions.login),
      tap(() => spinner.show())
    )
  },
  { functional: true, dispatch: false }
)

export const hideSpinnerEffects = createEffect(
  (actions$ = inject(Actions), spinner = inject(NgxSpinnerService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.registerSuccess, AuthenticationActions.loginSuccess, AuthenticationActions.authenticationFailure),
      tap(() => spinner.hide())
    )
  },
  { functional: true, dispatch: false }
)
