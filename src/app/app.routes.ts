import { Routes } from '@angular/router';
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module')
      .then(am => am.AuthenticationModule)
  },
  {
    path: 'foryou',
    loadChildren: () => import('./trending/trending.module')
      .then(tm => tm.TrendingModule),
    canActivate: [authGuard]
  }
];
