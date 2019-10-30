import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public status: Subject<boolean> = new Subject();
  private loader: boolean = false;
  private message: string;

  constructor() { }

  /**
   * showLoader
   * @param message
   */
  public showLoader = (message: string = 'Cargando...') => {
    this.loader = true;
    this.message = message;
    this.status.next(true);
  };

  /**
   * hideLoader
   */
  public hideLoader = () => {
    this.loader = false;
    this.status.next(false);
  };

  /**
   * getLoaderStatus
   */
  public getLoaderStatus = (): boolean => {
    return this.loader;
  };

  /**
   * getLoaderMessage
   */
  public getLoaderMessage = (): string => {
    return this.message;
  };
}
