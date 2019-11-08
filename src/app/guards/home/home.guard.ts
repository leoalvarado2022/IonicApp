import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }

  /**
   * canActivate
   */
  public canActivate = (): boolean => {

    const loadInit = localStorage.getItem('initLoad');

    if (loadInit !== null) {
      this.router.navigate(['auth/login']);
      return false;
    }


    return true;
  };

}
