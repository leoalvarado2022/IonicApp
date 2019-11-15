import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.api_url;
  private apiUrl: string = null;
  private loginUrl = 'auth/login';
  private createConnectionUrl = 'user/create-connection';
  private testConnectionUrl = 'auth/test-connection';
  private checkUrl = 'auth/check-token';

  constructor(
      private httpClient: HttpClient,
      private storage: Storage,
      private router: Router
  ) {

  }

  /**
   * buildUrl
   * @param url
   * @param id
   */
  public buildUrl = (url: string, id: string = null): string => {
    this.apiUrl = `${this.baseUrl}/api/`;
    return id == null ? this.apiUrl + url : this.apiUrl + `${url}/${id}`;
  }

  /**
   * login
   * @param data
   * username
   * password
   */
  public login = (data: any) => {
    const url = this.buildUrl(this.loginUrl);
    return this.httpClient.post(url, this.buildBody(data));
  }

  /**
   * createConnectionPin
   * @param pin
   */
  public createPinConnection = (pin: any) => {
    const url = this.buildUrl(this.createConnectionUrl);
    return this.httpClient.post(url, this.buildBody(pin), {
      headers: this.getHeaders()
    });
  }

  /**
   * getHeaders
   * @return HttpHeaders
   */
  public getHeaders = (): HttpHeaders => {
    const token = this.getToken();

    return new HttpHeaders({
      Authorization: token !== null ? 'Bearer ' + token : ''
    });
  }

  /**
   * errorsHandler
   * @param error
   */
  public errorsHandler = (error: any): string => {
    console.log('name', error.name);
    console.log('message', error.message);
    console.log('error', error.error);
    console.log('status', error.status);
    console.log('statusText', error.statusText);

    if (error.name === 'HttpErrorResponse') {
      let msg: string = null;
      switch (error.status) {
        case 0:
          msg = 'No hay conexion con el servidor.';
          break;
        case 400:
        case 403:
          msg = error.error.message;
          break;
        case 500:
          msg = error.error.message || 'Ocurrio un error en el servidor.';
          break;
        default:
          msg = error.message;
          break;
      }

      return msg;
    } else {
      return 'Non Http error';
    }
  }

  /**
   * buildBody
   * @param data
   */
  public buildBody = (data: any = null) => {
    const connection = this.getConnection();

    if (data) {
      return Object.assign({}, data, {
        app: environment.app_name,
        connectionId: connection.token
      });
    } else {
      return {
        app: environment.app_name,
        connectionId: connection.token
      };
    }
  }

  /**
   * setConnection
   * @param connection
   */
  public setConnection = (connection: any) => {
    localStorage.setItem('connection', JSON.stringify(connection));
  }

  /**
   * getConnection
   */
  public getConnection = () => {
    const connection = localStorage.getItem('connection');
    return connection ? JSON.parse(connection) : null;
  }

  /**
   * deleteConnection
   */
  public removeConnection = () => {
    localStorage.removeItem('connection');
  }

  /**
   * getToken
   */
  public getToken = (): string => {
    return localStorage.getItem('token');
  }

  /**
   * setToken
   * @param token
   */
  public setToken = (token: string) => {
    localStorage.setItem('token', token);
  }

  /**
   * setToken
   * @param token
   */
  public removeToken = () => {
    localStorage.removeItem('token');
  }

  /**
   * getToken
   */
  public getRemember = (): string => {
    return localStorage.getItem('remember');
  }

  /**
   * setToken
   * @param token
   */
  public setRemember = (remember: string) => {
    localStorage.setItem('remember', `${remember}`);
  }

  /**
   * closeSesion
   */
  public closeSesion = async () => {
    this.setRemember('0');
    await this.storage.remove('userRemember');
    this.removeToken();
    this.removeConnection();

    this.router.navigate(['auth/login']);
  }

}
