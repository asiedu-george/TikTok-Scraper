import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {NgToastService} from "ng-angular-popup";
import {AuthenticationActions} from "../authentication/store/auth.actions";
import {tap} from "rxjs";
import {constants} from "../utils/contants";

export const registerToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.registerSuccess),
      tap((message) =>
        toast.success(
          message.message.message,
          constants.success,
          constants.toastDuration
        )
      )
    )
  }, { functional: true, dispatch: false }
)

export const loginToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.loginSuccess),
      tap((response) =>
        toast.success(
          response.userData.message,
          constants.success,
          constants.toastDuration
        )
      )
    )
  }, { functional: true, dispatch: false }
)

export const authFailureToastEffects = createEffect(
  (actions$ = inject(Actions), toast = inject(NgToastService)) => {
    return actions$.pipe(
      ofType(AuthenticationActions.authenticationFailure),
      tap(() =>
        toast.danger(
          constants.errorMessage,
          constants.error,
          constants.toastDuration
        )
      )
    )
  }, { functional: true, dispatch: false }
)
