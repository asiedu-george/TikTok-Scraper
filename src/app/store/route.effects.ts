import { AuthenticationActions } from "../authentication/store/auth.actions";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {tap} from "rxjs";

export const registerRouterEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.registerSuccess),
      tap(() => route.navigateByUrl(''))
    )
  },
  { functional: true, dispatch: false }
)

export const loginRouterEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.loginSuccess),
      tap(() => route.navigateByUrl('/trending'))
    )
  },
  { functional: true, dispatch: false }
)

export const logoutRouterEffects = createEffect(
  (actions$ = inject(Actions), route = inject(Router)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.logout),
      tap(() => route.navigateByUrl(''))
    )
  },
  { functional: true, dispatch: false }
)
