import {AuthenticationState} from "./auth.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const authSelectors = createFeatureSelector<AuthenticationState>('Authentication');

export const selectLoading = createSelector(
  authSelectors,
  (state) => state.loading
)

export const selectLoginToken = createSelector(
  authSelectors,
  (state) => state.userData?.login_token
)

export const selectRefreshToken = createSelector(
  authSelectors,
  (state) => state.userData?.refresh_token
)
