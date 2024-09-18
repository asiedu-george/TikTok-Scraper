import {createActionGroup, props} from '@ngrx/store';
import {AuthenticationState} from '../authentication/store/auth.state';

export const AppStateActions = createActionGroup({
  source: 'AppState',
  events: {
    'Get Store Data': props<AuthenticationState>()
  }
})
