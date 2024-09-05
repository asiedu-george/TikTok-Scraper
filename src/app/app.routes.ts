import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module')
      .then(am => am.AuthenticationModule)
  }
];
