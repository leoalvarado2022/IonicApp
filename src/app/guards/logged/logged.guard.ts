import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  /**
   * canActivate
   */
  canActivate = (): boolean => {
    const remember = this.authService.getLoggedStatus();

    if (!remember) {
      localStorage.setItem('logged', 'false');
    } else {
      if (remember === 'true') {
        this.router.navigate(['home-page']);
      } else {
        this.router.navigate(['auth/login']);
      }
    }

    return true;
  }

}
