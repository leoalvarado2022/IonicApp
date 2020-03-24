import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Company} from '@primetec/primetec-angular';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'auth/login';
  private createConnectionUrl = 'user/create-connection';
  private testConnectionUrl = 'auth/test-connection';
  private checkUrl = 'auth/check-token';
  private recoveryPasswordUrl = 'auth/password';
  private savePushTokenUrl = 'auth/save-push-token';

  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private storage: Storage,
    private router: Router
  ) {

  }

  /**
   * savePushToken
   * @param user
   * @param token
   */
  public savePushToken = (user: number, token: string) => {
    const url = this.httpService.buildUrl(this.savePushTokenUrl);
    return this.httpClient.post(url, this.httpService.buildBody({user, token}));
  }

  /**
   * login
   * @param data
   * username
   * password
   */
  public login = (data: any) => {
    const url = this.httpService.buildUrl(this.loginUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data));
  }

  /**
   * login
   * @param data
   * username
   * password
   */
  public recoveryPassword = (data: any) => {
    const url = this.httpService.buildUrl(this.recoveryPasswordUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data));
  }

  /**
   * createConnectionPin
   * @param pin
   */
  public createPinConnection = (pin: any) => {
    const url = this.httpService.buildUrl(this.createConnectionUrl);
    return this.httpClient.post(url, this.httpService.buildBody(pin), {
      headers: this.httpService.getHeaders()
    });
  }

  /**
   * check token
   * @param pin
   */
  public checkToken = () => {
    const url = this.httpService.buildUrl(this.checkUrl);
    return this.httpClient.post(url, this.httpService.buildBody(null), {
      headers: this.httpService.getHeaders()
    });
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
   * setCompany
   * @param company
   */
  public setCompany = (company: Company) => {
    localStorage.setItem('company', JSON.stringify(company));
  }

  /**
   * getCompany
   */
  public getCompany = () => {
    const company = localStorage.getItem('company');
    return company ? JSON.parse(company) : null;
  }

  /**
   * removeCompany
   */
  public removeCompany = () => {
    localStorage.removeItem('company');
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
   * setLoggedIn
   */
  public setLoggedIn = () => {
    localStorage.setItem('logged', 'true');
  }

  /**
   * setLoggedOut
   */
  public setLoggedOut = () => {
    localStorage.setItem('logged', 'false');
  }

  /**
   * getLoggedStatus
   */
  public getLoggedStatus = () => {
    return localStorage.getItem('logged');
  }

  /**
   * setRemember
   */
  public setRemember = () => {
    localStorage.setItem('remember', 'true');
  }

  /**
   * removeRemember
   */
  public removeRemember = () => {
    localStorage.setItem('remember', 'false');
  }

  /**
   * getRememberStatus
   */
  public getRememberStatus = () => {
    return localStorage.getItem('remember');
  }

  /**
   * closeSesion
   */
  public closeSesion = async () => {
    if (this.getRememberStatus() !== 'true') {
      await localStorage.clear();
      await this.storage.clear();
    }

    this.setLoggedOut();
    this.removeToken();
    this.removeConnection();
    this.router.navigate(['auth/login']);
  }

}
