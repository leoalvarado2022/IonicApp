import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { ContractInterface, RememberData, StoreInterface, Sync } from './store-interface';
import { StoreActions } from './actions';
import {
  Caliber,
  CfgAccess,
  Company,
  Connection,
  CostCenter,
  CostCenterList,
  EntityList,
  Generic,
  Note,
  ProductContract,
  ProductContractDetail,
  Quadrille,
  QualityDetail,
  QualityEstimate,
  Unit
} from '@primetec/primetec-angular';
import { environment } from 'src/environments/environment';
import { debounceTime } from 'rxjs/operators';
import { HarvestEstimate } from 'src/app/modules/planning/harvest-estimate/harvest-estimate.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends ObservableStore<StoreInterface> {

  constructor() {
    super({
      logStateChanges: false,
      trackStateHistory: false
    });

    this.setState(this.buildInitialState, 'INIT_STATE');

    if (!environment.production) {
      this.stateChanged.pipe(
        debounceTime(500)
      ).subscribe(() => {
        this.backupState();
      });
    }
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
        isapres: [],
        labors: [],
        laborsCostCenter: [],
        deals: [],
        costCentersCustom: [],
        tallies: [],
        devices: [],
        bonds: [],
        machinery: [],
        costCenterTypes: [],
        warehouses: [],
        consumptions: [],
        products: [],
        currencies: [],
        transportActions: [],
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
      totalTicket: null,
      toRecord: {
        deviceTempId: 0,
        devicesToRecord: [],
        devicesWithErrors: [],
        dealsTemp: []
      }
    };
  }

  /**
   * clearStore
   */
  public clearStore = (): void => {
    this.setState(this.buildInitialState, 'INIT_STATE');
  }

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
    localStorage.setItem('fx11StateBackup', JSON.stringify(this.getState()));
  }

  /**
   * setRemember
   * @param remember
   */
  public setRemember = (remember: boolean): void => {
    const auth = { ...this.getState().auth, remember };
    this.setState({ auth }, StoreActions.SetRemember);
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
    const auth = { ...this.getState().auth, rememberData };
    this.setState({ auth }, StoreActions.SetRememberData);
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
    const auth = { ...this.getState().auth, userData };
    this.setState({ auth }, StoreActions.SetUser);
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
    const auth = { ...this.getState().auth, userConnections };
    this.setState({ auth }, StoreActions.SetUserConnections);

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
    const auth = { ...this.getState().auth, userActiveConnection: activeConnection };
    this.setState({ auth }, StoreActions.SetUserActiveConnection);
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
    const auth = { ...this.getState().auth, userToken };
    this.setState({ auth }, StoreActions.SetUserToken);
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
    const auth = { ...this.getState().auth, isLogged: status };
    this.setState({ auth }, StoreActions.SetLoginStatus);
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
    const auth = { ...this.getState().auth, rememberData: null };
    this.setState({ auth }, StoreActions.SetRememberData);
  }

  /**
   * getUserConnections
   */
  public getUserConnections = (): Array<Connection> => {
    return this.getState().auth.userConnections;
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
   * setCompanies
   * @param companies
   */
  public setCompanies = (companies: Array<Company>) => {
    const sync = { ...this.getState().sync, companies };
    this.setState({ sync }, StoreActions.SetCompanies);

    if (companies.length > 0) {
      const activeConnection: any = this.getActiveConnection();

      // TODO: Fix interface
      const defaultCompany = companies.find(item => item.id === activeConnection.default_company);

      if (defaultCompany) {
        this.setActiveCompany(defaultCompany);
      } else {
        this.setActiveCompany(companies[0]);
      }
    }
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
   * getCompanies
   */
  public getCompanies = (): Array<Company> => {
    return this.getState().sync.companies;
  }

  /**
   * setActiveCompany
   * @param company
   */
  public setActiveCompany = (company: any): void => {
    const auth = { ...this.getState().auth, userActiveCompany: company };
    this.setState({ auth }, StoreActions.SetUserActiveCompany);
  }

  /**
   * getActiveCompany
   */
  public getActiveCompany = (): any => {
    return this.getState().auth.userActiveCompany;
  }

  /**
   * setCostCenters
   */
  public setCostCenters = (costCenters: Array<CostCenterList>) => {
    const sync = { ...this.getState().sync, costCenters };
    this.setState({ sync }, StoreActions.SetCostCenters);
  }

  /**
   * getCostCenters
   */
  public getCostCenters = (): Array<CostCenterList> => {
    return this.getState().sync.costCenters;
  }

  /**
   * setUnits
   * @param units
   */
  public setUnits = (units: Array<Unit>) => {
    const sync = { ...this.getState().sync, units };
    this.setState({ sync }, StoreActions.SetUnits);
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
    const sync = { ...this.getState().sync, qualities };
    this.setState({ sync }, StoreActions.SetQualities);
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
    const sync = { ...this.getState().sync, calibers };
    this.setState({ sync }, StoreActions.SetCalibers);
  }

  /**
   * getCalibers
   */
  public getCalibers = (): Array<Caliber> => {
    return this.getState().sync.calibers;
  }

  /**
   * getAccess
   */
  public getAccess = (): Array<CfgAccess> => {
    return this.getState().sync.cfgAccess;
  }

  /**
   * getQuadrilles
   */
  public getQuadrilles = (): Array<Quadrille> => {
    return this.getState().sync.quadrilles;
  }

  /**
   * getWorkers
   */
  public getWorkers = (): Array<any> => {
    return this.getState().sync.workers;
  }

  /**
   * getProcessPlants
   */
  public getProcessPlants = (): Array<EntityList> => {
    return this.getState().sync.processPlants;
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
      units,
      qualities,
      calibers,
      cfgAccess,
      quadrilles,
      workers,
      processPlants,
      destinations,
      laborsCostCenter,
      deals,
      devices,
      currencies,
      transportActions,
    } = data;

    this.setCompanies(companies);
    this.setCostCenters(costCenters);
    this.setUnits(units);
    this.setQualities(qualities);
    this.setCalibers(calibers);
    this.setAccess(cfgAccess);
    this.setQuadrilles(quadrilles);
    this.setWorkers(workers);
    this.setProcessPlants(processPlants);
    this.setDestinations(destinations);
    this.setLaborsCostCenter(laborsCostCenter);
    this.setDeals(deals);
    this.setDevices(devices);
    this.setCurrencies(currencies);
    this.setTransportActions(transportActions);
  }

  /**
   * setActiveCostCenter
   * @param costCenter
   */
  public setActiveCostCenter = (costCenter: CostCenterList): void => {
    const contract = { ...this.getState().contract, activeCostCenter: costCenter };
    this.setState({ contract }, StoreActions.SetActiveCostCenter);
  }

  /**
   * getActiveCostCenter
   */
  public getActiveCostCenter = (): CostCenterList => {
    return this.getState().contract.activeCostCenter;
  }

  /**
   * setCostCenter
   * @param costCenter
   */
  public setCostCenter = (costCenter: CostCenter): void => {
    const contract = { ...this.getState().contract, costCenter };
    this.setState({ contract }, StoreActions.SetCostCenter);
  }

  /**
   * getCostCenter
   */
  public getCostCenter = (): CostCenter => {
    return this.getState().contract.costCenter;
  }

  /**
   * setProductionContracts
   * @param productionContracts
   */
  public setProductionContracts = (productionContracts: Array<ProductContract>): void => {
    const contract = { ...this.getState().contract, productionContracts };
    this.setState({ contract }, StoreActions.SetProductionContracts);
  }

  /**
   * getProductionContracts
   */
  public getProductionContracts = (): Array<ProductContract> => {
    return this.getState().contract.productionContracts;
  }

  /**
   * setCurrencies
   * @param currencies
   */
  public setCurrencies = (currencies: Array<any>): void => {
    const sync = { ...this.getState().sync, currencies };
    this.setState({ sync }, StoreActions.SetCurrencies);
  }

  /**
   * getCurrencies
   */
  public getCurrencies = (): Array<any> => {
    return this.getState().sync.currencies;
  }

  /**
   * setTransportActions
   * @param transportActions
   */
  public setTransportActions = (transportActions: Array<any>): void => {
    const sync = { ...this.getState().sync, transportActions };
    this.setState({ sync }, StoreActions.SetTransportActions);
  }

  /**
   * getTransportActions
   */
  public getTransportActions = (): Array<any> => {
    return this.getState().sync.transportActions;
  }

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
    const contract = { ...this.getState().contract, productionContractsDetails };
    this.setState({ contract }, StoreActions.SetProductionContractsDetails);
  }

  /**
   * getProductionContractsDetails
   */
  public getProductionContractsDetails = (): Array<ProductContractDetail> => {
    return this.getState().contract.productionContractsDetails;
  }

  /**
   * setHarvestEstimate
   * @param harvestEstimate
   */
  public setHarvestEstimate = (harvestEstimate: Array<HarvestEstimate>): void => {
    const contract = { ...this.getState().contract, harvestEstimate };
    this.setState({ contract }, StoreActions.SetHarvestEstimate);
  }

  /**
   * getHarvestEstimate
   */
  public getHarvestEstimate = (): Array<HarvestEstimate> => {
    return this.getState().contract.harvestEstimate;
  }

  /**
   * setQualityEstimate
   * @param qualityEstimate
   */
  public setQualityEstimate = (qualityEstimate: Array<QualityEstimate>): void => {
    const contract = { ...this.getState().contract, qualityEstimate };
    this.setState({ contract }, StoreActions.SetQualityEstimate);
  }

  /**
   * getQualityEstimate
   */
  public getQualityEstimate = (): Array<QualityEstimate> => {
    return this.getState().contract.qualityEstimate;
  }

  /**
   * setQualityEstimateDetail
   * @param qualityEstimateDetail
   */
  public setQualityEstimateDetail = (qualityEstimateDetail: Array<QualityDetail>): void => {
    const contract = { ...this.getState().contract, qualityEstimateDetail };
    this.setState({ contract }, StoreActions.SetQualityEstimateDetail);
  }

  /**
   * getQualityEstimateDetail
   */
  public getQualityEstimateDetail = (): Array<QualityDetail> => {
    return this.getState().contract.qualityEstimateDetail;
  }

  /**
   * setNotes
   * @param notes
   */
  public setNotes = (notes: Array<Note>): void => {
    const contract = { ...this.getState().contract, notes };
    this.setState({ contract }, StoreActions.SetNotes);
  }

  /**
   * getNotes
   */
  public getNotes = (): Array<Note> => {
    return this.getState().contract.notes;
  }

  /**
   * setHolidays
   * @param holidays
   */
  public setHolidays = (holidays: Array<any>): void => {
    const contract = { ...this.getState().contract, holidays };
    this.setState({ contract }, StoreActions.SetHolidays);
  }

  /**
   * getHolidays
   */
  public getHolidays = (): Array<any> => {
    return this.getState().contract.holidays;
  }

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
  }

  /**
   * setPushToken
   * @param token
   */
  public setPushToken = (token: string): void => {
    this.setState({ pushToken: token }, StoreActions.SetPushToken);
  }

  /**
   * getPushToken
   */
  public getPushToken = (): string => {
    return this.getState().pushToken;
  }

  /**
   * setPushToken
   * @param token
   */
  public setTotalTicket = (total: number): void => {
    this.setState({ totalTicket: total }, StoreActions.AddTotalTickets);
  }

  /**
   * getPushToken
   */
  public getTotalTicket = (): number => {
    return this.getState().totalTicket;
  }

  /**
   * setAccess
   * @param cfgAccess
   */
  private setAccess = (cfgAccess: Array<CfgAccess>) => {
    const sync = { ...this.getState().sync, cfgAccess };
    this.setState({ sync }, StoreActions.SetAccess);
  }

  /**
   * setQuadrilles
   * @param quadrilles
   */
  private setQuadrilles = (quadrilles: Array<Quadrille>) => {
    const sync = { ...this.getState().sync, quadrilles };
    this.setState({ sync }, StoreActions.SetQuadrilles);
  }

  /**
   * setWorkers
   * @param workers
   */
  private setWorkers = (workers: Array<any>) => {
    const sync = { ...this.getState().sync, workers };
    this.setState({ sync }, StoreActions.SetWorkers);
  }

  /**
   * setProcessPlants
   * @param processPlants
   */
  private setProcessPlants = (processPlants: Array<EntityList>) => {
    const sync = { ...this.getState().sync, processPlants };
    this.setState({ sync }, StoreActions.SetProcessPlants);
  }

  /**
   * setDestinations
   * @param destinations
   */
  private setDestinations = (destinations: Array<Generic>) => {
    const sync = { ...this.getState().sync, destinations };
    this.setState({ sync }, StoreActions.SetDestinations);
  }

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
              arrow: arr[index][field] > arr[index + 1][field] ? 'arrow-up' : 'arrow-down',
              color: arr[index][field] > arr[index + 1][field] ? 'primary' : 'danger'
            });
          } else {
            return Object.assign({}, item, {
              arrow: 'remove',
              color: 'default'
            });
          }
        }
      });

      return mappedData;
    }

    return data;
  }

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
    const ticket = { ...this.getState().ticket, activeTicket };
    this.setState({ ticket }, StoreActions.SetActiveTicket);
  }

  /**
   * getActiveTicket
   */
  public getActiveTicket = (): any => {
    return this.getState().ticket.activeTicket;
  }

  /**
   * getTicketStates
   * @param ticketStates
   */
  public setTicketStates = (ticketStates: Array<any>): void => {
    const ticket = { ...this.getState().ticket, states: ticketStates };
    this.setState({ ticket }, StoreActions.SetTicketStates);
  }

  /**
   * getTicketStates
   */
  public getTicketStates = (): Array<any> => {
    return this.getState().ticket.states;
  }

  /**
   * setTicketUsers
   * @param ticketUsers
   */
  public setTicketUsers = (ticketUsers: Array<any>): void => {
    const ticket = { ...this.getState().ticket, users: ticketUsers };
    this.setState({ ticket }, StoreActions.SetTicketUsers);
  }

  /**
   * getTicketUsers
   */
  public getTicketUsers = (): Array<any> => {
    return this.getState().ticket.users;
  }

  /**
   * setTicketPriorities
   * @param ticketPriorities
   */
  public setTicketPriorities = (ticketPriorities: Array<any>): void => {
    const ticket = { ...this.getState().ticket, priorities: ticketPriorities };
    this.setState({ ticket }, StoreActions.SetTicketPriorities);
  }

  /**
   * getTicketPriorities
   */
  public getTicketPriorities = (): Array<any> => {
    return this.getState().ticket.priorities;
  }

  /**
   * setTicketDetails
   * @param ticketDetails
   */
  public setTicketDetails = (ticketDetails: Array<any>): void => {
    const ticket = { ...this.getState().ticket, details: ticketDetails };
    this.setState({ ticket }, StoreActions.SetTicketDetails);
  }

  /**
   * getTicketDetails
   */
  public getTicketDetails = (): Array<any> => {
    return this.getState().ticket.details;
  }


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
   * @param laborsCostCenter
   */
  public setLaborsCostCenter = (laborsCostCenter: Array<any> = []): void => {
    const sync = { ...this.getState().sync, laborsCostCenter };
    this.setState({ sync }, StoreActions.SetLaborsCostCenter);
  }

  /**
   * getlaborsCostCenter
   */
  public getLaborsCostCenter = (): Array<any> => {
    return this.getState().sync.laborsCostCenter;
  }

  /**
   * @param deals
   */
  public setDeals = (deals: Array<any> = []): void => {
    const sync = { ...this.getState().sync, deals };
    this.setState({ sync }, StoreActions.SetDeals);
  }

  /**
   * getlaborsCostCenter
   */
  public getDeals = (): Array<any> => {
    return this.getState().sync.deals;
  }

  /**
   * setDevices
   * @param ticketDetails
   */
  public setDevices = (devices: Array<any>): void => {
    const sync = { ...this.getState().sync, devices };
    this.setState({ sync }, StoreActions.SetDevices);
  }

  /**
   * getDevices
   */
  public getDevices = (): Array<any> => {
    return this.getState().sync.devices;
  }

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
   * getDevicesToRecord
   */
  public getDevicesToRecord = (): Array<any> => {
    return this.getState().toRecord.devicesToRecord;
  }

  /**
   * addDevicesToRecord
   * @param preDevice
   */
  public addDevicesToRecord = (preDevice: any): void => {
    const devicesToRecord = this.getDevicesToRecord();
    // en el caso que voy a eliminar (deassociar)
    if (preDevice.delete) {
      const toRemoved = devicesToRecord.filter(item => item.tempId !== preDevice.tempId);
      const toRecord = { ...this.getState().toRecord, devicesToRecord: [...toRemoved] };
      this.setState({ toRecord }, StoreActions.RemovePreDevices);
    } else {
      // solo va agregar
      devicesToRecord.push(preDevice);
      const toRecord = { ...this.getState().toRecord, devicesToRecord };
      this.setState({ toRecord }, StoreActions.AddPreDevices);

      this.increaseDeviceTempId();
    }
  }

  /**
   * removeDevicesToRecord
   * @param indexes
   */
  public removeDevicesToRecord = (indexes: Array<number>): number => {
    const devices = this.getDevicesToRecord();
    const toRemoved = devices.filter(item => !indexes.includes(item.tempId));

    const toRecord = { ...this.getState().toRecord, devicesToRecord: [...toRemoved] };
    this.setState({ toRecord }, StoreActions.RemovePreDevices);

    return toRemoved.length;
  }

  /**
   * getDeviceTempId
   */
  public getDeviceTempId(): number {
    return this.getState().toRecord.deviceTempId;
  }

  /**
   * increaseDeviceTempId
   */
  public increaseDeviceTempId = (): void => {
    const current = this.getDeviceTempId();

    const toRecord = { ...this.getState().toRecord, deviceTempId: (current + 1) };
    this.setState({ toRecord }, StoreActions.IncreaseDeviceTempId);
  }

  /**
   * getDevicesWithErrors
   */
  public getDevicesWithErrors = (): Array<any> => {
    return this.getState().toRecord.devicesWithErrors;
  }

  /**
   * addDevicesWithErrors
   * @param tallies
   */
  public addDevicesWithErrors = (devices: Array<any>): void => {
    const devicesWithErrors = this.getDevicesWithErrors();

    const toRecord = { ...this.getState().toRecord, devicesWithErrors: [...devicesWithErrors, ...devices] };
    this.setState({ toRecord }, StoreActions.AddDevicessWithErrors);

    this.increaseDeviceTempId();
  }

  /**
   * removeDevicesWithErrors
   * @param indexes
   */
  public removeDevicesWithErrors = (indexes: Array<number>): number => {
    const devicesWithErrors = this.getDevicesWithErrors();
    const toRemoved = devicesWithErrors.filter(item => !indexes.includes(item.tempId));

    const toRecord = { ...this.getState().toRecord, devicesWithErrors: [...toRemoved] };
    this.setState({ toRecord }, StoreActions.RemoveDevicesWithErrors);

    return toRemoved.length;
  }


  /**
   * setPreContracts
   * @param preContracts
   */
  public setDealsTemp = (dealsToRecordRow: any): void => {
    const row = this.getDealsTemp();
    const filter = row.filter(value => value.id !== dealsToRecordRow.id);
    filter.push(dealsToRecordRow);
    const toRecord = { ...this.getState().toRecord, dealsTemp: filter };
    this.setState({ toRecord }, StoreActions.SetDealsTemp);
  }

  /**
   * getPreContracts
   */
  public getDealsTemp = (): Array<any> => {
    return this.getState().toRecord.dealsTemp;
  }

  /**
   * removeDealsToRecord
   */
  public removeDealsTemp = (id): void => {
    const row = this.getDealsTemp();
    const filter = row.filter(value => value.id !== id);

    const toRecord = { ...this.getState().toRecord, dealsTemp: filter };
    this.setState({ toRecord }, StoreActions.RemoveDealsTemp);
  }

  /**
   * @param costCentersCustom
   */
  public setCostCentersCustom = (costCentersCustom: Array<any> = []): void => {
    const sync = { ...this.getState().sync, costCentersCustom };
    this.setState({ sync }, StoreActions.SetCostCentersCustom);
  }

  /**
   * costCentersCustom
   */
  public getCostCentersCustom = (): Array<any> => {
    return this.getState().sync.costCentersCustom;
  }

  /**
   * END OF OFF-LINE STATE METHODS
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   * ================================================================================================================
   */
}
