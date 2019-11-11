import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUrl = 'user/create';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  /**
   * createUser
   * @param data
   */
  public createUser = (data: any) => {
    const url = this.authService.buildUrl(this.createUrl);
    return this.httpClient.post(url, data);
  };
}
