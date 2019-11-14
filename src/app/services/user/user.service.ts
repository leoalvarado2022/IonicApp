import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import * as MenuAction from '../../store/menu/menu.action';
import {getMenuProfile, State} from '../../reducers/reducers';
import { Store } from "@ngrx/store";
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUrl = 'user/create';
  private updateUrl = 'user/update';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private store: Store<any>,
    private storageService: StorageService
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
   * createUser
   * @param data
   */
  public updateUser = (data: any) => {
    const url = this.authService.buildUrl(this.updateUrl);
    return this.httpClient.post(url, data);
  };

  /**
   * @descripcion obtener datos del perfil cuando se loguea
   */
  getMenuProfiles(): Observable<any> {
    return this.store.select(getMenuProfile);
  }

  /////////////// USUARIO

  /**
   * @description guradar usuario
   * @param data
   */
  setUserData = (data: any) => {
    this.storageService.setRow('userData', data);
  }

  /**
   * @description obtener usuario
   */
  getUserData = async () => {
    return await this.storageService.getRow('userData')
  }

  /**
   * @description remover usuario
   */
  removeUserData = async () => {
    await this.storageService.removeRow('userData')
  }

  /**
   * @description recordar usuario login {usuario, password}
   * @param data
   */
  setUserRemember = (data: any) => {
    this.storageService.setRow('userRemember', data);
  }

  /**
   * @description obtener usuario login
   */
  getUserRemember = async () => {
    return await this.storageService.getRow('userRemember')
  }

  /**
   * @description remover usuario login
   */
  removeUserRemember = async () => {
    await this.storageService.removeRow('userRemember')
  }

  ///////////////// END USUARIO

}
