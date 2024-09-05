import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {AuthResponse, Login, LoginResponse, Register} from "../../model/auth";

export const AuthenticationActions = createActionGroup({
  source: 'Authentication',
  events: {
    'Register': props<{ user: Register }>(),
    'Login': props<{ user: Login }>(),
    'Register Success': props<{ message: AuthResponse }>(),
    'Login Success': props<{ userData: LoginResponse }>(),
    'Authentication Failure': props<{ error: string }>(),
    'Logout': emptyProps()
  }
})
