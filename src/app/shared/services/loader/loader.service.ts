import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private message: string;

  constructor() {

  }

  /**
   * getLoaderStatus
   */
  public getLoaderStatus(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  /**
   * startLoader
   * @param message
   */
  public startLoader = (message: string = 'Cargando...') => {
    this.message = message;
    this.isLoading.next(true);
  }

  /**
   * stopLoader
   * @param message
   */
  public stopLoader = (message: string = 'Cargando...') => {
    this.message = '';
    this.isLoading.next(false);
  }

  /**
   * getMessage
   */
  public getMessage = (): string => {
    return this.message;
  }

}
