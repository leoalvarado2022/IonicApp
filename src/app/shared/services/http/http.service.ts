import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { StoreService } from '../store/store.service';

@Injectable()
export class HttpService {

  private readonly apiDeliveryUrl: string = `${environment.api_url_delivery}/api/`;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private toastService: ToastService
  ) {

  }

  /**
   * getApiUrl
   * @returns
   */
  private getApiUrl = (): string => {
    const connectionEnviroment = localStorage.getItem('connectionEnvironment');
    if (connectionEnviroment) {
      if (connectionEnviroment === "prod") {
        return `${environment.api_url}/api/`;
      }

      if (connectionEnviroment === "qa") {
        return `${environment.api_url_qa}/api/`;
      }
    }

    return `${environment.api_url}/api/`;
  }

  /**
   * buildUrl
   * @param url
   * @param id
   */
  public buildUrl = (url: string, id: string = null): string => {
    return id == null ? this.getApiUrl() + url : this.getApiUrl() + `${url}/${id}`;
  }

  /**
   * buildUrl para api delivery
   * @param url
   * @param id
   */
  public buildUrlApiDelivery = (url: string, id: string = null): string => {
    return id == null ? this.apiDeliveryUrl + url : this.apiDeliveryUrl + `${url}/${id}`;
  }

  /**
   * getHeaders para api dinamicas
   * @return HttpHeaders
   */
  public getHeadersApiDynamic = (token: string): HttpHeaders => {
    return new HttpHeaders({
      "Authorization": token !== null ? "Bearer " + token : "",
      "Content-Type": "application/json"
    });
  }

  /**
   * getHeaders
   * @return HttpHeaders
   */
  public getHeaders = (): HttpHeaders => {
    const token = this.storeService.getToken();

    return new HttpHeaders({
      "Authorization": token !== null ? "Bearer " + token : "",
      "Content-Type": "application/json"
    });
  }

  /**
   * buildBody
   * @param data
   */
  public buildBody = (data: any = null) => {
    const connection = this.storeService.getActiveConnection();

    if (data) {
      return Object.assign({}, data, {
        app: environment.app_name,
        connectionId: data.connectionId ? data.connectionId : connection ? connection.token : null
      });
    } else {
      return {
        app: environment.app_name,
        connectionId: connection ? connection.token : null
      };
    }
  }

  /**
   * errorHandlerPos
   * @param error
   */
  public errorHandlerPos = (error: any): string => {
    if (error instanceof HttpErrorResponse) {

      const { name, message } = error.error;

      switch (error.status) {
        case 0:
          this.toastService.errorToast('No hay conexion con el servidor de FX10 POS.');
          break;
        case 400:
        case 404:
          this.toastService.errorToast(message);
          break;
        case 401:
          this.toastService.errorToast('Su sesion ha caducado en FX10 POS.');
          break;
        case 403:
          this.toastService.errorToast('No tiene conexiones disponibles en FX10 POS.');
          this.router.navigate(['/home-page']);
          break;
        case 500:
          this.toastService.errorToast('API Error FX10 POS.');
          break;
        default:
          this.toastService.errorToast(message);
          break;
      }
    } else {
      console.log('No Http error', error);
      return 'No Http error';
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

      const { name, message } = error.error;

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
          break;
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
