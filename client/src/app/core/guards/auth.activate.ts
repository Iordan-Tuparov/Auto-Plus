import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthActivate implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if the authentication cookie exists
    const isAuthenticated = this.cookieService.check('user-session');

    console.log(isAuthenticated);
    

    if (!isAuthenticated) {
      return true;
    } else {
      // If not authenticated, redirect to the not-found page
      this.router.navigate(['/not-found']);
      return false;
    }
  }
}
