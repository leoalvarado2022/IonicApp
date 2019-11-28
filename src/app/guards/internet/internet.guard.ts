import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {NetworkService} from '../../shared/services/network/network.service';

@Injectable({
  providedIn: 'root'
})
export class InternetGuard implements CanActivate {

  constructor(private networkService: NetworkService) {

  }

  canActivate(): boolean {
    return this.networkService.getNetworkStatus();
  }

}
