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
    const loggedStatus = this.authService.getLoggedStatus();
    const url = this.router.url;

    if (!loggedStatus) {
      localStorage.setItem('logged', 'false');
    } else {
      if (loggedStatus === 'true' && url !== '/home-page') {
        this.router.navigate(['home-page']);
      } else if (loggedStatus === 'false' && url !== '/auth/login') {
        this.router.navigate(['auth/login']);
      }
    }

    return true;
  }

}
