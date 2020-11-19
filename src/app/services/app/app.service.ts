import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    
  }

  /**
  * getAppVersion
  */
  public getAppVersion = (): string => {
    return environment.appVersion;
  }

  /**
   * getAppName
   */
  public getAppName = (): string => {
    return environment.app_name;
  }
}
