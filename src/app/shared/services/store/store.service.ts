import {Injectable} from '@angular/core';
import {ObservableStore} from '@codewithdan/observable-store';
import {RememberData, StoreInterface} from './store-interface';
import {StoreActions} from './actions';
import {Company, Connection} from '@primetec/primetec-angular';

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
      userToken: null,
      userActiveCompany: null
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
   * setActiveConnection
   * @param activeConnection
   */
  public setActiveConnection = (activeConnection: Connection) => {
    this.setState({userActiveConnection: activeConnection}, StoreActions.SetUserActiveConnection);
  }

  /**
   * setDefaultConnection
   * @param connections
   */
  public setDefaultConnection = (connections: Array<Connection> = []) => {
    if (connections.length > 0) {
      const defaultConnection = connections.find(item => item.default);

      if (defaultConnection) {
        this.setActiveConnection(defaultConnection);
      } else {
        this.setActiveConnection(connections[0]);
      }
    }
  }

  /**
   * setLoginStatus
   * @param status
   */
  public setLoginStatus = (status: boolean) => {
    this.setState({isLogged: status}, StoreActions.SetLoginStatus);
  }

  /**
   * setActiveCompany
   * @param company
   */
  public setActiveCompany = (company: Company) => {
    this.setState({userActiveCompany: company}, StoreActions.SetUserActiveCompany);
  }

}
