import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Company} from '@primetec/primetec-angular';
import {ToastService} from "../toast/toast.service";

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
  private recoveryPasswordUrl = 'auth/password';

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private router: Router,
    private toastService: ToastService
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
  };

  /**
   * login
   * @param data
   * username
   * password
   */
  public login = (data: any) => {
    const url = this.buildUrl(this.loginUrl);
    return this.httpClient.post(url, this.buildBody(data));
  };


  /**
   * login
   * @param data
   * username
   * password
   */
  public recoveryPassword = (data: any) => {
    const url = this.buildUrl(this.recoveryPasswordUrl);
    return this.httpClient.post(url, this.buildBody(data));
  };

  /**
   * createConnectionPin
   * @param pin
   */
  public createPinConnection = (pin: any) => {
    const url = this.buildUrl(this.createConnectionUrl);
    return this.httpClient.post(url, this.buildBody(pin), {
      headers: this.getHeaders()
    });
  };

  /**
   * check token
   * @param pin
   */
  public checkToken = () => {
    const url = this.buildUrl(this.checkUrl);
    return this.httpClient.post(url, this.buildBody(null), {
      headers: this.getHeaders()
    });
  };

  /**
   * getHeaders
   * @return HttpHeaders
   */
  public getHeaders = (): HttpHeaders => {
    const token = this.getToken();

    return new HttpHeaders({
      Authorization: token !== null ? 'Bearer ' + token : ''
    });
  };

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
          msg = error.error.message;
          break;
        case 401:
        case 403:
          msg = error.error.message;
          this.toastService.errorToast('Token vencido.');
          this.router.navigate(['/home-page']);
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
  };

  /**
   * buildBody
   * @param data
   */
  public buildBody = (data: any = null) => {
    const connection = this.getConnection();

    if (data && data !== null) {
      return Object.assign({}, data, {
        app: environment.app_name,
        connectionId: connection ? connection.token : null
      });
    } else {
      return {
        app: environment.app_name,
        connectionId: connection ? connection.token : null
      };
    }
  };

  /**
   * setConnection
   * @param connection
   */
  public setConnection = (connection: any) => {
    localStorage.setItem('connection', JSON.stringify(connection));
  };

  /**
   * getConnection
   */
  public getConnection = () => {
    const connection = localStorage.getItem('connection');
    return connection ? JSON.parse(connection) : null;
  };

  /**
   * deleteConnection
   */
  public removeConnection = () => {
    localStorage.removeItem('connection');
  };

  /**
   * setCompany
   * @param company
   */
  public setCompany = (company: Company) => {
    localStorage.setItem('company', JSON.stringify(company));
  };

  /**
   * getCompany
   */
  public getCompany = () => {
    const company = localStorage.getItem('company');
    return company ? JSON.parse(company) : null;
  };

  /**
   * removeCompany
   */
  public removeCompany = () => {
    localStorage.removeItem('company');
  };

  /**
   * getToken
   */
  public getToken = (): string => {
    return localStorage.getItem('token');
  };

  /**
   * setToken
   * @param token
   */
  public setToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  /**
   * setToken
   * @param token
   */
  public removeToken = () => {
    localStorage.removeItem('token');
  };

  /**
   * setLoggedIn
   */
  public setLoggedIn = () => {
    localStorage.setItem('logged', 'true');
  };

  /**
   * setLoggedOut
   */
  public setLoggedOut = () => {
    localStorage.setItem('logged', 'false');
  };

  /**
   * getLoggedStatus
   */
  public getLoggedStatus = () => {
    return localStorage.getItem('logged');
  };

  /**
   * setRemember
   */
  public setRemember = () => {
    localStorage.setItem('remember', 'true');
  };

  /**
   * removeRemember
   */
  public removeRemember = () => {
    localStorage.setItem('remember', 'false');
  };

  /**
   * getRememberStatus
   */
  public getRememberStatus = () => {
    return localStorage.getItem('remember');
  };

  /**
   * closeSesion
   */
  public closeSesion = async () => {
    if (this.getRememberStatus() !== 'true') {
      localStorage.clear();
      await this.storage.clear();
    }

    this.setLoggedOut();
    this.removeToken();
    this.removeConnection();
    this.router.navigate(['auth/login']);
  };

}
