import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';

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

    if (!loggedStatus) {
      localStorage.setItem('logged', 'false');
    }

    if (loggedStatus === 'true') {
      this.router.navigate(['home-page']);
    }

    return true;
  }

}
