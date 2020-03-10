import {Injectable} from '@angular/core';
import {ObservableStore} from '@codewithdan/observable-store';
import {RememberData, StoreInterface, Sync} from './store-interface';
import {StoreActions} from './actions';
import {Caliber, CfgAccess, Company, Connection, CostCenterList, EntityList, Generic, Quadrille, TabMenu, Unit} from '@primetec/primetec-angular';

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
        userConnections: [],
        userToken: '',
        userData: null
      },
      sync: {
        companies: [],
        costCenters: [],
        menus: [],
        units: [],
        qualities: [],
        calibers: [],
        cfgAccess: [],
        quadrilles: [],
        workers: [],
        processPlants: [],
        destinations: []
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
   * AUTH STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

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
   * setUser
   */
  public setUser = (userData: any) => {
    const auth = {...this.getState().auth, userData};
    this.setState({auth}, StoreActions.SetUser);
  }

  /**
   * getUser
   */
  public getUser = () => {
    return this.getState().auth.userData;
  }

  /**
   * setUserConnections
   * @param userConnections
   */
  public setUserConnections = (userConnections: Array<Connection> = []): void => {
    const auth = {...this.getState().auth, userConnections};
    this.setState({auth}, StoreActions.SetUserConnections);

    if (userConnections.length > 0) {
      const defaultConnection = userConnections.find(item => item.default);

      if (defaultConnection) {
        this.setActiveConnection(defaultConnection);
      } else {
        this.setActiveConnection(userConnections[0]);
      }
    }
  }

  /**
   * setActiveConnection
   * @param activeConnection
   */
  public setActiveConnection = (activeConnection: Connection = null) => {
    const auth = {...this.getState().auth, userActiveConnection: activeConnection};
    this.setState({auth}, StoreActions.SetUserActiveConnection);
  }

  /**
   * getActiveConnection
   */
  public getActiveConnection = (): Connection => {
    return this.getState().auth.userActiveConnection;
  }

  /**
   * setToken
   * @param token
   */
  public setToken = (userToken: string = null): void => {
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
   * removeRememberData
   */
  public removeRememberData = (): void => {
    const auth = {...this.getState().auth, rememberData: null};
    this.setState({auth}, StoreActions.SetRememberData);
  }

  /**
   * logout
   */
  public logout = (): void => {
    if (this.getRemember()) {
      this.removeRememberData();
    }

    this.setLoginStatus(false);
    this.setToken();
    this.setActiveConnection();
  }

  /**
   * END OF AUTH STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * SYNC STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * setCompanies
   * @param companies
   */
  public setCompanies = (companies: Array<Company>) => {
    const sync = {...this.getState().sync, companies};
    this.setState({sync}, StoreActions.SetCompanies);

    if (companies.length > 0) {
      this.setActiveCompany(companies[0]);
    }
  }

  /**
   * getCompanies
   */
  public getCompanies = (): Array<Company> => {
    return this.getState().sync.companies;
  }

  /**
   * setActiveCompany
   * @param company
   */
  public setActiveCompany = (company: Company): void => {
    const auth = {...this.getState().auth, userActiveCompany: company};
    this.setState({auth}, StoreActions.SetUserActiveCompany);
  }

  /**
   * getActiveCompany
   */
  public getActiveCompany = (): Company => {
    return this.getState().auth.userActiveCompany;
  }

  /**
   * setCostCenters
   */
  public setCostCenters = (costCenters: Array<CostCenterList>) => {
    const sync = {...this.getState().sync, costCenters};
    this.setState({sync}, StoreActions.SetCostCenters);
  }

  /**
   * getCostCenters
   */
  public getCostCenters = (): Array<CostCenterList> => {
    return this.getState().sync.costCenters;
  }

  /**
   * setMenus
   */
  public setMenus = (menus: Array<TabMenu>) => {
    const sync = {...this.getState().sync, menus};
    this.setState({sync}, StoreActions.SetMenus);
  }

  /**
   * getMenus
   */
  public getMenus = (): Array<TabMenu> => {
    return this.getState().sync.menus;
  }

  /**
   * setUnits
   * @param units
   */
  public setUnits = (units: Array<Unit>) => {
    const sync = {...this.getState().sync, units};
    this.setState({sync}, StoreActions.SetUnits);
  }

  /**
   * getUnits
   */
  public getUnits = (): Array<Unit> => {
    return this.getState().sync.units;
  }

  /**
   * setQualities
   * @param menus
   */
  public setQualities = (qualities: Array<Generic>) => {
    const sync = {...this.getState().sync, qualities};
    this.setState({sync}, StoreActions.SetQualities);
  }

  /**
   * getQualities
   */
  public getQualities = (): Array<Generic> => {
    return this.getState().sync.qualities;
  }

  /**
   * setCalibers
   * @param calibers
   */
  public setCalibers = (calibers: Array<Caliber>) => {
    const sync = {...this.getState().sync, calibers};
    this.setState({sync}, StoreActions.SetCalibers);
  }

  /**
   * getCalibers
   */
  public getCalibers = (): Array<Caliber> => {
    return this.getState().sync.calibers;
  }

  /**
   * setAccess
   * @param cfgAccess
   */
  private setAccess = (cfgAccess: Array<CfgAccess>) => {
    const sync = {...this.getState().sync, cfgAccess};
    this.setState({sync}, StoreActions.SetAccess);
  }

  /**
   * getAccess
   */
  public getAccess = (): Array<CfgAccess> => {
    return this.getState().sync.cfgAccess;
  }

  /**
   * setQuadrilles
   * @param quadrilles
   */
  private setQuadrilles = (quadrilles: Array<Quadrille>) => {
    const sync = {...this.getState().sync, quadrilles};
    this.setState({sync}, StoreActions.SetQuadrilles);
  }

  /**
   * getQuadrilles
   */
  public getQuadrilles = (): Array<Quadrille> => {
    return this.getState().sync.quadrilles;
  }

  /**
   * setWorkers
   * @param workers
   */
  private setWorkers = (workers: Array<any>) => {
    const sync = {...this.getState().sync, workers};
    this.setState({sync}, StoreActions.SetWorkers);
  }

  /**
   * getWorkers
   */
  public getWorkers = (): Array<any> => {
    return this.getState().sync.workers;
  }

  /**
   * setProcessPlants
   * @param processPlants
   */
  private setProcessPlants = (processPlants: Array<EntityList>) => {
    const sync = {...this.getState().sync, processPlants};
    this.setState({sync}, StoreActions.SetProcessPlants);
  }

  /**
   * getProcessPlants
   */
  public getProcessPlants = (): Array<EntityList> => {
    return this.getState().sync.processPlants;
  }

  /**
   * setDestinations
   * @param destinations
   */
  private setDestinations = (destinations: Array<Generic>) => {
    const sync = {...this.getState().sync, destinations};
    this.setState({sync}, StoreActions.SetDestinations);
  }

  /**
   * getDestinations
   */
  public getDestinations = (): Array<Generic> => {
    return this.getState().sync.destinations;
  }

  /**
   * setSyncedData
   * @param data
   */
  public setSyncedData = (data: Sync) => {
    const {
      companies,
      costCenters,
      menus,
      units,
      qualities,
      calibers,
      cfgAccess,
      quadrilles,
      workers,
      processPlants,
      destinations
    } = data;

    this.setCompanies(companies);
    this.setCostCenters(costCenters);
    this.setMenus(menus);
    this.setUnits(units);
    this.setQualities(qualities);
    this.setCalibers(calibers);
    this.setAccess(cfgAccess);
    this.setQuadrilles(quadrilles);
    this.setWorkers(workers);
    this.setProcessPlants(processPlants);
    this.setDestinations(destinations);
  }

  /**
   * END OF SYNC STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  // PENDING TO REVIEW
  // ================================================================================================================
  // ================================================================================================================
  // ================================================================================================================
  // ================================================================================================================
  // ================================================================================================================


  /**
   * getUserConnections
   */
  public getUserConnections = (): Array<Connection> => {
    return this.getState().auth.userConnections;
  }

}
