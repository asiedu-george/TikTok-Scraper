import {AuthenticationState} from "./auth.state";
import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthenticationActions} from "./auth.actions";

export const initialState: AuthenticationState = {
  loading: false,
  error: null,
  userData: null,
  message: null,
}

export const authenticationFeature = createFeature({
  name: "Authentication",
  reducer: createReducer(
    initialState,
    on(AuthenticationActions.register, (state) => ({
      ...state,
      loading: true,
    })),
    on(AuthenticationActions.login, (state) => ({
      ...state,
      loading: true
    })),
    on(AuthenticationActions.loginSuccess, (state, {userData}) => ({
      ...state,
      loading: false,
      userData
    })),
    on(AuthenticationActions.registerSuccess, (state, {message}) => ({
      ...state,
      loading: false,
      message
    })),
    on(AuthenticationActions.authenticationFailure, (state, {error}) => ({
      ...state,
      loading: false,
      error
    })),
    on(AuthenticationActions.logout, (state) => ({
      ...state,
      userData: null,
    }))
  )
})
