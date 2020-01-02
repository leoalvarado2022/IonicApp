import {Injectable} from '@angular/core';
import {ObservableStore} from '@codewithdan/observable-store';
import {RememberData, StoreInterface} from './store-interface';
import {StoreActions} from './actions';
import {Connection} from '@primetec/primetec-angular';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends ObservableStore<StoreInterface> {

  constructor() {
    super({});

    this.setState(this.buildInitialState, 'INIT_STATE');
  }

  /**
   * buildInitialState
   */
  private buildInitialState = (): StoreInterface => {
    const lastState: StoreInterface = JSON.parse(localStorage.getItem('fx11StateBackup'));

    if (lastState) {
      return lastState;
    }

    return {
      isLogged: false,
      remember: false,
      rememberData: null,
      userActiveConnection: null,
      userConnections: [],
      userToken: null
    };
  }

  /**
   * backupState
   */
  public backupState = (): void => {
    const currentState = this.getState();
    localStorage.setItem('fx11StateBackup', JSON.stringify(currentState));
  }


  /**
   * setRemember
   * @param remember
   */
  public setRemember = (remember: boolean): void => {
    this.setState({remember}, StoreActions.SetRemember);
  }

  /**
   * getRemember
   */
  public getRemember = (): boolean => {
    return this.getState().remember;
  }

  /**
   * setRememberData
   * @param rememberData
   */
  public setRememberData = (rememberData: RememberData): void => {
    this.setState({rememberData}, StoreActions.SetRememberData);
  }

  /**
   * getRememberData
   */
  public getRememberData = (): RememberData => {
    return this.getState().rememberData;
  }

  /**
   * removeRememberData
   */
  public removeRememberData = (): void => {
    this.setState({rememberData: null}, StoreActions.SetRememberData);
  }

  /**
   * setUserConnections
   * @param userConnections
   */
  public setUserConnections = (userConnections: Array<Connection>): void => {
    this.setState({userConnections}, StoreActions.SetUserConnections);
  }

  /**
   * getUserConnections
   */
  public getUserConnections = (): Array<Connection> => {
    return this.getState().userConnections;
  }

  /**
   * setToken
   * @param token
   */
  public setToken = (userToken: string): void => {
    this.setState({userToken}, StoreActions.SetUserToken);
  }

  /**
   * getToken
   */
  public getToken = (): string => {
    return this.getState().userToken;
  }
}
