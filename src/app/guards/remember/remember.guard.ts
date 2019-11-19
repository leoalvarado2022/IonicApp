import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RememberGuard implements CanActivate {

  constructor(private router: Router) {

  }

  /**
   * canActivate
   */
  canActivate = (): boolean => {
    /*
    GUARDAR DATOS

    const remember = localStorage.getItem('logged');

    if (!remember) {
      localStorage.setItem('logged', 'false');
    } else {
      if (remember === 'true') {
        this.router.navigate(['home-page']);
      } else {
        this.router.navigate(['auth/login']);
      }
    }


    */
    return true;
  }

}
