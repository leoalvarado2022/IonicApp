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
      auth: {
        isLogged: false,
        remember: false,
        rememberData: null,
        userActiveCompany: null,
        userActiveConnection: null,
        userConnections: null,
        userToken: '',
        userData: null
      }
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
    const auth = {...this.getState().auth, remember};
    this.setState({auth}, StoreActions.SetRemember);
  }

  /**
   * getRemember
   */
  public getRemember = (): boolean => {
    return this.getState().auth.remember;
  }

  /**
   * setRememberData
   * @param rememberData
   */
  public setRememberData = (rememberData: RememberData): void => {
    const auth = {...this.getState().auth, rememberData};
    this.setState({auth}, StoreActions.SetRememberData);
  }

  /**
   * getRememberData
   */
  public getRememberData = (): RememberData => {
    return this.getState().auth.rememberData;
  }

  /**
   * removeRememberData
   */
  public removeRememberData = (): void => {
    const auth = {...this.getState().auth, rememberData: null};
    this.setState({auth}, StoreActions.SetRememberData);
  }

  /**
   * setToken
   * @param token
   */
  public setToken = (userToken: string): void => {
    const auth = {...this.getState().auth, userToken};
    this.setState({auth}, StoreActions.SetUserToken);
  }

  /**
   * getToken
   */
  public getToken = (): string => {
    return this.getState().auth.userToken;
  }

  /**
   * setUserConnections
   * @param userConnections
   */
  public setUserConnections = (userConnections: Array<Connection>): void => {
    const auth = {...this.getState().auth, userConnections};
    this.setState({auth}, StoreActions.SetUserConnections);
  }

  /**
   * getUserConnections
   */
  public getUserConnections = (): Array<Connection> => {
    return this.getState().auth.userConnections;
  }

  /**
   * setActiveConnection
   * @param activeConnection
   */
  public setActiveConnection = (activeConnection: Connection) => {
    const auth = {...this.getState().auth, userActiveConnection: activeConnection};
    this.setState({auth}, StoreActions.SetUserActiveConnection);
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
  public setLoginStatus = (status: boolean): void => {
    const auth = {...this.getState().auth, isLogged: status};
    this.setState({auth}, StoreActions.SetLoginStatus);
  }

  /**
   * getLoginStatus
   */
  public getLoginStatus = (): boolean => {
    return this.getState().auth.isLogged;
  }

  /**
   * setActiveCompany
   * @param company
   */
  public setActiveCompany = (company: Company) => {
    const auth = {...this.getState().auth, userActiveCompany: company};
    this.setState({auth}, StoreActions.SetUserActiveCompany);
  }

  /**
   * setUser
   */
  public setUser = (user: any) => {
    const auth = {...this.getState().auth, userData: user};
    this.setState({auth}, StoreActions.SetUser);
  }

  /**
   * getUser
   */
  public getUser = () => {
    return this.getState().auth.userData;
  }

}
