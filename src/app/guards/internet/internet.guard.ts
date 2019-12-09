import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {NetworkService} from '../../shared/services/network/network.service';

@Injectable({
  providedIn: 'root'
})
export class InternetGuard implements CanActivate {

  private status: boolean;

  constructor(private networkService: NetworkService) {
    this.networkService.getNetworkStatus().subscribe(status => {
      this.status = status;
    });
  }

  canActivate(): boolean {
    return this.status;
  }

}
