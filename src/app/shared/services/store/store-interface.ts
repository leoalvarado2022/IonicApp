import {Caliber, CfgAccess, Company, Connection, CostCenter, CostCenterList, EntityList, Generic, HarvestEstimate, Note, ProductContract, ProductContractDetail, Quadrille, QualityDetail, QualityEstimate, TabMenu, Unit} from '@primetec/primetec-angular';
import { Tally } from 'src/app/modules/tallies/tally.interface';

export interface StoreInterface {
  auth: Auth;
  sync: Sync;
  contract: ContractInterface;
  ticket: TicketForm;
  pushToken: string;
  toRecord: ToRecord;
  totalTicket: number;
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
  preContracts: Array<any>;
  countries: Array<any>;
  contractTypes: Array<any>;
  civilStatus: Array<any>;
  afps: Array<any>;
  isapres: Array<any>;
  labors: Array<any>;
  laborsCostCenter: Array<any>;
  deals: Array<any>;
  costCentersCustom: Array<any>;
  tallies: Array<Tally>;
  devices: Array<any>;
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
  details: Array<any>;
}

export interface ToRecord {
  devicesToRecord: Array<any>;
  devicesWithErrors: Array<any>;
  talliesToRecord: Array<Tally>;
  talliesWithErrors: Array<any>;
  tallyTempId: number;
  deviceTempId: number;
}
