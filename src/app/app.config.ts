import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient} from "@angular/common/http";
import {authenticationFeature} from "./authentication/store/auth.reducers";
import * as AuthEffects from "./authentication/store/auth.effects"
import * as Toast from "./store/toast.effects"
import * as Spinner from "./store/spinner.effects"
import * as Route from "./store/route.effects"
import {provideSpinnerConfig} from "ngx-spinner";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideSpinnerConfig({type: 'ball-spin-clockwise-fade'}),
    provideStore(),
    provideState(authenticationFeature),
    provideEffects([AuthEffects, Toast, Spinner, Route]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
