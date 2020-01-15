import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {StoreService} from '../../shared/services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private storeService: StoreService
  ) {

  }

  /**
   * canActivate
   */
  canActivate = (): boolean => {
    if (!this.storeService.getLoginStatus()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }

}
