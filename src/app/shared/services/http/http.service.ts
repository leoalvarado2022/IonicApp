import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpHeaders} from '@angular/common/http';
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
  }


}
