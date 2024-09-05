import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {AuthenticationActions} from "./auth.actions";
import {switchMap} from "rxjs";
import {mapResponse} from "@ngrx/operators";

export const registerEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.register),
      switchMap(({user}) =>
        authService.register(user).pipe(
          mapResponse({
            next: (message) => AuthenticationActions.registerSuccess({message}),
            error: (error: string) => AuthenticationActions.authenticationFailure({error})
          })
        )
      )
    )
  },
  { functional: true, dispatch: true }
)

export const loginEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.login),
      switchMap(({user}) =>
        authService.login(user).pipe(
          mapResponse({
            next: (response) => AuthenticationActions.loginSuccess({userData: response}),
            error: (error: string) => AuthenticationActions.authenticationFailure({error})
          })
        )
      ),

    )
  },
  { functional: true, dispatch: true }
)
