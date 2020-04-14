import {Injectable} from '@angular/core';
import {ObservableStore} from '@codewithdan/observable-store';
import {ContractInterface, RememberData, StoreInterface, Sync} from './store-interface';
import {StoreActions} from './actions';
import {Caliber, CfgAccess, Company, Connection, CostCenter, CostCenterList, EntityList, Generic, HarvestEstimate, Note, ProductContract, ProductContractDetail, Quadrille, QualityDetail, QualityEstimate, TabMenu, Unit} from '@primetec/primetec-angular';

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
        destinations: [],
        preContracts: [],
        countries: [],
        contractTypes: [],
        civilStatus: [],
        afps: [],
        isapres: []
      },
      contract: {
        activeCostCenter: null,
        costCenter: null,
        productionContracts: [],
        productionContractsDetails: [],
        harvestEstimate: [],
        qualityEstimate: [],
        qualityEstimateDetail: [],
        notes: [],
        holidays: []
      },
      ticket: {
        activeTicket: null,
        states: [],
        users: [],
        priorities: [],
        details: []
      },
      pushToken: null,
      toRecord: {
        preContracts: []
      }
    };
  };

  /**
   * @description set user remember
   * @param user
   */
  public setUserLocaStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * @description get user remember
   */
  public getUserLocaStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }

  /**
   * @description get user remember
   */
  public removeUserLocaStorage() {
    localStorage.removeItem('user');
  }

  /**
   * backupState
   */
  public backupState = (): void => {
    const currentState = this.getState();
    localStorage.setItem('fx11StateBackup', JSON.stringify(currentState));
  };

  /**
   * setRemember
   * @param remember
   */
  public setRemember = (remember: boolean): void => {
    const auth = {...this.getState().auth, remember};
    this.setState({auth}, StoreActions.SetRemember);
  };


  /**
   * AUTH STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * getRemember
   */
  public getRemember = (): boolean => {
    return this.getState().auth.remember;
  };

  /**
   * setRememberData
   * @param rememberData
   */
  public setRememberData = (rememberData: RememberData): void => {
    const auth = {...this.getState().auth, rememberData};
    this.setState({auth}, StoreActions.SetRememberData);
  };

  /**
   * getRememberData
   */
  public getRememberData = (): RememberData => {
    return this.getState().auth.rememberData;
  };

  /**
   * setUser
   */
  public setUser = (userData: any) => {
    const auth = {...this.getState().auth, userData};
    this.setState({auth}, StoreActions.SetUser);
  };

  /**
   * getUser
   */
  public getUser = () => {
    return this.getState().auth.userData;
  };

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
  };

  /**
   * setActiveConnection
   * @param activeConnection
   */
  public setActiveConnection = (activeConnection: Connection = null) => {
    const auth = {...this.getState().auth, userActiveConnection: activeConnection};
    this.setState({auth}, StoreActions.SetUserActiveConnection);
  };

  /**
   * getActiveConnection
   */
  public getActiveConnection = (): Connection => {
    return this.getState().auth.userActiveConnection;
  };

  /**
   * setToken
   * @param token
   */
  public setToken = (userToken: string = null): void => {
    const auth = {...this.getState().auth, userToken};
    this.setState({auth}, StoreActions.SetUserToken);
  };

  /**
   * getToken
   */
  public getToken = (): string => {
    return this.getState().auth.userToken;
  };

  /**
   * setLoginStatus
   * @param status
   */
  public setLoginStatus = (status: boolean): void => {
    const auth = {...this.getState().auth, isLogged: status};
    this.setState({auth}, StoreActions.SetLoginStatus);
  };

  /**
   * getLoginStatus
   */
  public getLoginStatus = (): boolean => {
    return this.getState().auth.isLogged;
  };

  /**
   * removeRememberData
   */
  public removeRememberData = (): void => {
    const auth = {...this.getState().auth, rememberData: null};
    this.setState({auth}, StoreActions.SetRememberData);
  };

  /**
   * getUserConnections
   */
  public getUserConnections = (): Array<Connection> => {
    return this.getState().auth.userConnections;
  };

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
  };

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
  };

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
   * getCompanies
   */
  public getCompanies = (): Array<Company> => {
    return this.getState().sync.companies;
  };

  /**
   * setActiveCompany
   * @param company
   */
  public setActiveCompany = (company: Company): void => {
    const auth = {...this.getState().auth, userActiveCompany: company};
    this.setState({auth}, StoreActions.SetUserActiveCompany);
  };

  /**
   * getActiveCompany
   */
  public getActiveCompany = (): Company => {
    return this.getState().auth.userActiveCompany;
  };

  /**
   * setCostCenters
   */
  public setCostCenters = (costCenters: Array<CostCenterList>) => {
    const sync = {...this.getState().sync, costCenters};
    this.setState({sync}, StoreActions.SetCostCenters);
  };

  /**
   * getCostCenters
   */
  public getCostCenters = (): Array<CostCenterList> => {
    return this.getState().sync.costCenters;
  };

  /**
   * setMenus
   */
  public setMenus = (menus: Array<TabMenu>) => {
    const sync = {...this.getState().sync, menus};
    this.setState({sync}, StoreActions.SetMenus);
  };

  /**
   * getMenus
   */
  public getMenus = (): Array<TabMenu> => {
    return this.getState().sync.menus;
  };

  /**
   * setUnits
   * @param units
   */
  public setUnits = (units: Array<Unit>) => {
    const sync = {...this.getState().sync, units};
    this.setState({sync}, StoreActions.SetUnits);
  };

  /**
   * getUnits
   */
  public getUnits = (): Array<Unit> => {
    return this.getState().sync.units;
  };

  /**
   * setQualities
   * @param menus
   */
  public setQualities = (qualities: Array<Generic>) => {
    const sync = {...this.getState().sync, qualities};
    this.setState({sync}, StoreActions.SetQualities);
  };

  /**
   * getQualities
   */
  public getQualities = (): Array<Generic> => {
    return this.getState().sync.qualities;
  };

  /**
   * setCalibers
   * @param calibers
   */
  public setCalibers = (calibers: Array<Caliber>) => {
    const sync = {...this.getState().sync, calibers};
    this.setState({sync}, StoreActions.SetCalibers);
  };

  /**
   * getCalibers
   */
  public getCalibers = (): Array<Caliber> => {
    return this.getState().sync.calibers;
  };

  /**
   * getAccess
   */
  public getAccess = (): Array<CfgAccess> => {
    return this.getState().sync.cfgAccess;
  };

  /**
   * getQuadrilles
   */
  public getQuadrilles = (): Array<Quadrille> => {
    return this.getState().sync.quadrilles;
  };

  /**
   * getWorkers
   */
  public getWorkers = (): Array<any> => {
    return this.getState().sync.workers;
  };

  /**
   * getProcessPlants
   */
  public getProcessPlants = (): Array<EntityList> => {
    return this.getState().sync.processPlants;
  };

  /**
   * getDestinations
   */
  public getDestinations = (): Array<Generic> => {
    return this.getState().sync.destinations;
  };

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
      destinations,
      preContracts,
      countries,
      contractTypes,
      civilStatus,
      afps,
      isapres
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
    this.setPreContracts(preContracts);
    this.setCountries(countries);
    this.setContractTypes(contractTypes);
    this.setCivilStatus(civilStatus);
    this.setAfps(afps);
    this.setIsapres(isapres);
  };

  /**
   * setActiveCostCenter
   * @param costCenter
   */
  public setActiveCostCenter = (costCenter: CostCenterList): void => {
    const contract = {...this.getState().contract, activeCostCenter: costCenter};
    this.setState({contract}, StoreActions.SetActiveCostCenter);
  };

  /**
   * getActiveCostCenter
   */
  public getActiveCostCenter = (): CostCenterList => {
    return this.getState().contract.activeCostCenter;
  };

  /**
   * setCostCenter
   * @param costCenter
   */
  public setCostCenter = (costCenter: CostCenter): void => {
    const contract = {...this.getState().contract, costCenter};
    this.setState({contract}, StoreActions.SetCostCenter);
  };

  /**
   * getCostCenter
   */
  public getCostCenter = (): CostCenter => {
    return this.getState().contract.costCenter;
  };

  /**
   * setProductionContracts
   * @param productionContracts
   */
  public setProductionContracts = (productionContracts: Array<ProductContract>): void => {
    const contract = {...this.getState().contract, productionContracts};
    this.setState({contract}, StoreActions.SetProductionContracts);
  };

  /**
   * getProductionContracts
   */
  public getProductionContracts = (): Array<ProductContract> => {
    return this.getState().contract.productionContracts;
  };

  /**
   * END OF SYNC STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * CONTRACT STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * setProductionContractsDetails
   * @param productionContractsDetails
   */
  public setProductionContractsDetails = (productionContractsDetails: Array<ProductContractDetail>): void => {
    const contract = {...this.getState().contract, productionContractsDetails};
    this.setState({contract}, StoreActions.SetProductionContractsDetails);
  };

  /**
   * getProductionContractsDetails
   */
  public getProductionContractsDetails = (): Array<ProductContractDetail> => {
    return this.getState().contract.productionContractsDetails;
  };

  /**
   * setHarvestEstimate
   * @param harvestEstimate
   */
  public setHarvestEstimate = (harvestEstimate: Array<HarvestEstimate>): void => {
    const contract = {...this.getState().contract, harvestEstimate};
    this.setState({contract}, StoreActions.SetHarvestEstimate);
  };

  /**
   * getHarvestEstimate
   */
  public getHarvestEstimate = (): Array<HarvestEstimate> => {
    return this.getState().contract.harvestEstimate;
  };

  /**
   * setQualityEstimate
   * @param qualityEstimate
   */
  public setQualityEstimate = (qualityEstimate: Array<QualityEstimate>): void => {
    const contract = {...this.getState().contract, qualityEstimate};
    this.setState({contract}, StoreActions.SetQualityEstimate);
  };

  /**
   * getQualityEstimate
   */
  public getQualityEstimate = (): Array<QualityEstimate> => {
    return this.getState().contract.qualityEstimate;
  };

  /**
   * setQualityEstimateDetail
   * @param qualityEstimateDetail
   */
  public setQualityEstimateDetail = (qualityEstimateDetail: Array<QualityDetail>): void => {
    const contract = {...this.getState().contract, qualityEstimateDetail};
    this.setState({contract}, StoreActions.SetQualityEstimateDetail);
  };

  /**
   * getQualityEstimateDetail
   */
  public getQualityEstimateDetail = (): Array<QualityDetail> => {
    return this.getState().contract.qualityEstimateDetail;
  };

  /**
   * setNotes
   * @param notes
   */
  public setNotes = (notes: Array<Note>): void => {
    const contract = {...this.getState().contract, notes};
    this.setState({contract}, StoreActions.SetNotes);
  };

  /**
   * getNotes
   */
  public getNotes = (): Array<Note> => {
    return this.getState().contract.notes;
  };

  /**
   * setHolidays
   * @param holidays
   */
  public setHolidays = (holidays: Array<any>): void => {
    const contract = {...this.getState().contract, holidays};
    this.setState({contract}, StoreActions.SetHolidays);
  };

  /**
   * getHolidays
   */
  public getHolidays = (): Array<any> => {
    return this.getState().contract.holidays;
  };

  /**
   * setContractData
   * @param data
   */
  public setContractData = (data: ContractInterface) => {
    const {
      costCenter,
      productionContracts,
      productionContractsDetails,
      harvestEstimate,
      qualityEstimate,
      qualityEstimateDetail,
      notes,
      holidays
    } = data;

    this.setCostCenter(costCenter);
    this.setProductionContracts(productionContracts);
    this.setProductionContractsDetails(productionContractsDetails);
    this.setHarvestEstimate(this.defineArrows(harvestEstimate, 'quantity'));
    this.setQualityEstimate(this.defineArrows(qualityEstimate, 'exportPercentage'));
    this.setQualityEstimateDetail(qualityEstimateDetail);
    this.setNotes(notes);
    this.setHolidays(holidays);
  };

  /**
   * setPushToken
   * @param token
   */
  public setPushToken = (token: string): void => {
    this.setState({pushToken: token}, StoreActions.SetPushToken);
  };

  /**
   * getPushToken
   */
  public getPushToken = (): string => {
    return this.getState().pushToken;
  };

  /**
   * setAccess
   * @param cfgAccess
   */
  private setAccess = (cfgAccess: Array<CfgAccess>) => {
    const sync = {...this.getState().sync, cfgAccess};
    this.setState({sync}, StoreActions.SetAccess);
  };

  /**
   * setQuadrilles
   * @param quadrilles
   */
  private setQuadrilles = (quadrilles: Array<Quadrille>) => {
    const sync = {...this.getState().sync, quadrilles};
    this.setState({sync}, StoreActions.SetQuadrilles);
  };

  /**
   * setWorkers
   * @param workers
   */
  private setWorkers = (workers: Array<any>) => {
    const sync = {...this.getState().sync, workers};
    this.setState({sync}, StoreActions.SetWorkers);
  };

  /**
   * setProcessPlants
   * @param processPlants
   */
  private setProcessPlants = (processPlants: Array<EntityList>) => {
    const sync = {...this.getState().sync, processPlants};
    this.setState({sync}, StoreActions.SetProcessPlants);
  };

  /**
   * setDestinations
   * @param destinations
   */
  private setDestinations = (destinations: Array<Generic>) => {
    const sync = {...this.getState().sync, destinations};
    this.setState({sync}, StoreActions.SetDestinations);
  };

  /**
   * defineArrows
   * @param data
   * @param field
   */
  private defineArrows = (data: Array<any> = [], field: string) => {
    if (data.length > 0) {
      const mappedData = data.map((item, index, arr) => {
        if (arr.length === 1) {
          return Object.assign({}, item, {
            arrow: '',
            color: 'default'
          });
        } else if (arr.length > 1) {
          const limit = arr.length - 1;

          if (index < limit) {
            return Object.assign({}, item, {
              arrow: arr[index][field] > arr[index + 1][field] ? 'arrow-round-up' : 'arrow-round-down',
              color: arr[index][field] > arr[index + 1][field] ? 'primary' : 'danger'
            });
          } else {
            return Object.assign({}, item, {
              arrow: '',
              color: 'default'
            });
          }
        }
      });

      return mappedData;
    }

    return data;
  };

  /**
   * END OF CONTRACT STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * TICKET STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * setActiveTicket
   * @param activeTicket
   */
  public setActiveTicket = (activeTicket: any): void => {
    const ticket = {...this.getState().ticket, activeTicket};
    this.setState({ticket}, StoreActions.SetActiveTicket);
  };

  /**
   * getActiveTicket
   */
  public getActiveTicket = (): any => {
    return this.getState().ticket.activeTicket;
  };

  /**
   * getTicketStates
   * @param ticketStates
   */
  public setTicketStates = (ticketStates: Array<any>): void => {
    const ticket = {...this.getState().ticket, states: ticketStates};
    this.setState({ticket}, StoreActions.SetTicketStates);
  };

  /**
   * getTicketStates
   */
  public getTicketStates = (): Array<any> => {
    return this.getState().ticket.states;
  };

  /**
   * setTicketUsers
   * @param ticketUsers
   */
  public setTicketUsers = (ticketUsers: Array<any>): void => {
    const ticket = {...this.getState().ticket, users: ticketUsers};
    this.setState({ticket}, StoreActions.SetTicketUsers);
  };

  /**
   * getTicketUsers
   */
  public getTicketUsers = (): Array<any> => {
    return this.getState().ticket.users;
  };

  /**
   * setTicketPriorities
   * @param ticketPriorities
   */
  public setTicketPriorities = (ticketPriorities: Array<any>): void => {
    const ticket = {...this.getState().ticket, priorities: ticketPriorities};
    this.setState({ticket}, StoreActions.SetTicketPriorities);
  };

  /**
   * getTicketPriorities
   */
  public getTicketPriorities = (): Array<any> => {
    return this.getState().ticket.priorities;
  };

  /**
   * setTicketDetails
   * @param ticketDetails
   */
  public setTicketDetails = (ticketDetails: Array<any>): void => {
    const ticket = {...this.getState().ticket, details: ticketDetails};
    this.setState({ticket}, StoreActions.SetTicketDetails);
  };

  /**
   * getTicketDetails
   */
  public getTicketDetails = (): Array<any> => {
    return this.getState().ticket.details;
  };

  /**
   * END OF TICKET STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * PRE-CONTRACT STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * setPreContracts
   * @param preContracts
   */
  public setPreContracts = (preContracts: Array<any> = []): void => {
    const sync = {...this.getState().sync, preContracts};
    this.setState({sync}, StoreActions.SetPreContracts);
  };

  /**
   * getPreContracts
   */
  public getPreContracts = (): Array<any> => {
    return this.getState().sync.preContracts;
  };

  /**
   * setCountries
   * @param countries
   */
  public setCountries = (countries: Array<any> = []): void => {
    const sync = {...this.getState().sync, countries};
    this.setState({sync}, StoreActions.SetCountries);
  };

  /**
   * getCountries
   */
  public getCountries = (): Array<any> => {
    return this.getState().sync.countries;
  };

  /**
   * setContractTypes
   * @param contractTypes
   */
  public setContractTypes = (contractTypes: Array<any> = []): void => {
    const sync = {...this.getState().sync, contractTypes};
    this.setState({sync}, StoreActions.SetContractTypes);
  };

  /**
   * getContractTypes
   */
  public getContractTypes(): Array<any> {
    return this.getState().sync.contractTypes;
  }

  /**
   * setCivilStatus
   * @param civilStatus
   */
  public setCivilStatus(civilStatus: Array<any> = []): void {
    const sync = {...this.getState().sync, civilStatus};
    this.setState({sync}, StoreActions.SetCivilStatus);
  }

  /**
   * getCivilStatus
   */
  public getCivilStatus = (): Array<any> => {
    return this.getState().sync.civilStatus;
  };

  /**
   * setAfps
   * @param afps
   */
  public setAfps = (afps: Array<any> = []): void => {
    const sync = {...this.getState().sync, afps};
    this.setState({sync}, StoreActions.SetAfps);
  };

  /**
   * getAfps
   */
  public getAfps = (): Array<any> => {
    return this.getState().sync.afps;
  };

  /**
   * setIsapres
   * @param isapres
   */
  public setIsapres = (isapres: Array<any> = []): void => {
    const sync = {...this.getState().sync, isapres};
    this.setState({sync}, StoreActions.SetIsapres);
  };

  /**
   * getIsapres
   */
  public getIsapres = (): Array<any> => {
    return this.getState().sync.isapres;
  };

  /**
   * END OF PRE-CONTRACT STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * OFF-LINE STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */

  /**
   * getPreContractsToRecord
   */
  public getPreContractsToRecord = (): Array<any> => {
    return this.getState().toRecord.preContracts;
  };

  /**
   * addPreContract
   * @param preContract
   */
  public addPreContract = (preContract: any): void => {
    const preContracts = this.getPreContractsToRecord();
    const checkDuplicate = preContracts.find(item => item.identifier === preContract.identifier);

    if (checkDuplicate === undefined) {
      preContracts.push(preContract);
      const toRecord = {...this.getState().toRecord, preContracts};
      this.setState({toRecord}, StoreActions.AddPreContract);
    }
  };

  /**
   * END OF OFF-LINE STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */
}
