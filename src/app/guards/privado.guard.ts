import { CanActivateFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {
  let access = localStorage.getItem('login');

  if (access == 'true') {
    return true;
  } else {
    return false;
  }
};

export const accesoGuard: CanActivateFn = (route, state) => {
  let access = localStorage.getItem('login');

  if (access != 'true') {
    return true;
  } else {
    return false;
  }
};
