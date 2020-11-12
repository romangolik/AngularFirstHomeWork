import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthorizationCheckGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const token = localStorage.getItem('token');
    if(!token) {
      this.router.navigateByUrl('/login');
      return false
    }

    return true;
  }
}
