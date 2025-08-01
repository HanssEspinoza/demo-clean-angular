import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/users/presentation/users-page'),
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./feature/users/presentation/user-detail-page'),
  },
];
