import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authSvc = inject(AuthenticationService);
  return authSvc.isAuthenticatedUser();
};
