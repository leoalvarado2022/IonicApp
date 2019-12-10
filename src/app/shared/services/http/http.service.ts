import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastService} from '../toast/toast.service';

@Injectable()
export class HttpService {

  private readonly apiUrl: string = `${environment.api_url}/api/`;

  constructor(
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
    return id == null ? this.apiUrl + url : this.apiUrl + `${url}/${id}`;
  }

  /**
   * getHeaders
   * @return HttpHeaders
   */
  public getHeaders = (): HttpHeaders => {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: token !== null ? 'Bearer ' + token : '',
      'Content-Type': 'application/json'
    });
  }


  /**
   * buildBody
   * @param data
   */
  public buildBody = (data: any = null) => {
    const connection = JSON.parse(localStorage.getItem('connection'));

    if (data) {
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
  }

  /**
   * errorHandler
   * @param error
   */
  public errorHandler = (error: any): string => {
    if (error instanceof HttpErrorResponse) {
      /*
      console.log('name', error.name);
      console.log('message', error.message);
      console.log('error', error.error);
      console.log('status', error.status);
      console.log('statusText', error.statusText);
      */

      const {name, message} = error.error;

      switch (error.status) {
        case 0:
          this.toastService.errorToast('No hay conexion con el servidor.');
          break;
        case 400:
        case 404:
          this.toastService.errorToast(message);
          break;
        case 401:
          this.toastService.errorToast('Su sesion ha caducado');
          this.router.navigate(['/home-page']);
          break;
        case 403:
          this.toastService.errorToast('No tiene conexiones disponibles');
          this.router.navigate(['/home-page']);
          break;
        case 500:
          this.toastService.errorToast('API Error');
          break
        default:
          this.toastService.errorToast(message);
          break;
      }
    } else {
      console.log('No Http error', error);
      return 'No Http error';
    }
  }
}
