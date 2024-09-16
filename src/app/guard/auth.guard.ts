import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthenticationState} from '../authentication/store/auth.state';
import {NgToastService} from 'ng-angular-popup';
import {constants} from '../utils/contants';
import {AuthenticationActions} from '../authentication/store/auth.actions';
import {selectLoginToken} from '../authentication/store/auth.selectors';

const getDependencies = () => {
  return {
    store: inject(Store<AuthenticationState>),
    toast: inject(NgToastService)
  };
};

const handleAuthorizedAccess = (store: Store<AuthenticationState>, toast: NgToastService) => {
  toast.warning(
    constants.unauthorizedAccess,
    constants.accessDenied,
    constants.toastDuration
  );
  store.dispatch(AuthenticationActions.logout());
};

const checkAuth = () => {
  const { store, toast } = getDependencies();
  const token = store.selectSignal(selectLoginToken);

  if (token()) {
    return true;
  } else {
    handleAuthorizedAccess(store, toast);
    return false;
  }
}

export const authGuard: CanActivateFn = () => {
  return checkAuth();
};
