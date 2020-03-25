import {Caliber, CfgAccess, Company, Connection, CostCenter, CostCenterList, EntityList, Generic, HarvestEstimate, Note, ProductContract, ProductContractDetail, Quadrille, QualityDetail, QualityEstimate, TabMenu, Unit} from '@primetec/primetec-angular';

export interface StoreInterface {
  auth: Auth;
  sync: Sync;
  contract: ContractInterface;
  ticket: TicketForm;
  pushToken: string;
}

export interface Auth {
  remember: boolean;
  isLogged: boolean;
  userToken: string;
  userData: any;
  rememberData: RememberData;
  userConnections: Array<Connection>;
  userActiveConnection: Connection;
  userActiveCompany: Company;
}

export interface RememberData {
  username: string;
  password: string;
}

export interface Sync {
  companies: Array<Company>;
  costCenters: Array<CostCenterList>;
  menus: Array<TabMenu>;
  units: Array<Unit>;
  qualities: Array<Generic>;
  calibers: Array<Caliber>;
  cfgAccess: Array<CfgAccess>;
  quadrilles: Array<Quadrille>;
  workers: Array<any>;
  processPlants: Array<EntityList>;
  destinations: Array<Generic>;
}

export interface ContractInterface {
  activeCostCenter: CostCenterList;
  costCenter: CostCenter;
  productionContracts: Array<ProductContract>;
  productionContractsDetails: Array<ProductContractDetail>;
  harvestEstimate: Array<HarvestEstimate>;
  qualityEstimate: Array<QualityEstimate>;
  qualityEstimateDetail: Array<QualityDetail>;
  notes: Array<Note>;
  holidays: Array<any>;
}

export interface TicketForm {
  activeTicket: any;
  states: Array<any>;
  users: Array<any>;
  priorities: Array<any>;
}
