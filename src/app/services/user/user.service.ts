import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import * as MenuAction from '../../store/menu/menu.action';
import {getMenuProfile, State} from '../../reducers/reducers';
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUrl = 'user/create';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private store: Store<any>
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

  /**
   * @descripcion obtener datos del perfil cuando se loguea
   */
  getMenuProfiles(): Observable<any> {
    return this.store.select(getMenuProfile);
  }

}
