import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private createUrl = 'user/create';
  private userUrl = 'user';
  private assignUrl = 'user/assign';
  private updateUrl = 'user/update';
  private updatePasswordUrl = 'user/password';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private storageService: StorageService
  ) {
  }

  /**
   * createUser
   * @param data
   */
  public createUser = (data: any) => {
    const url = this.httpService.buildUrl(this.createUrl);
    return this.httpClient.post(url, data);
  }

  /**
   * updateUser
   * @param data
   */
  public getUser = () => {
    const url = this.httpService.buildUrl(this.userUrl);
    return this.httpClient.post(url, this.httpService.buildBody(), { headers: this.httpService.getHeaders() });
  }

  /**
   * updateUser
   * @param data
   */
  public updateUser = (data: any) => {
    const url = this.httpService.buildUrl(this.updateUrl);
    return this.httpClient.put(url, this.httpService.buildBody(data), { headers: this.httpService.getHeaders() });
  }


  /**
   * assign user
   * @param data
   */
  public assignUser = (data: any) => {
    const url = this.httpService.buildUrl(this.assignUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), { headers: this.httpService.getHeaders() });
  }

  /**
   * updatePassword
   * @param data
   */
  public updatePassword = (data: any) => {
    const url = this.httpService.buildUrl(this.updatePasswordUrl);
    return this.httpClient.put(url, this.httpService.buildBody(data), { headers: this.httpService.getHeaders() });
  }

  /////////////// USUARIO

  /**
   * @description guradar usuario
   * @param data
   */
  setUserData = async (data: any) => {
    await this.storageService.setRow('userData', data);
  }

  /**
   * @description obtener usuario
   */
  getUserData = async () => {
    return await this.storageService.getRow('userData');
  }

  /**
   * @description remover usuario
   */
  removeUserData = async () => {
    await this.storageService.removeRow('userData');
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
    return await this.storageService.getRow('userRemember');
  }

  /**
   * @description remover usuario login
   */
  removeUserRemember = async () => {
    await this.storageService.removeRow('userRemember');
  }

  ///////////////// END USUARIO

}
