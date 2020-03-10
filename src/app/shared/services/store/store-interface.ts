import {Caliber, CfgAccess, Company, Connection, CostCenterList, EntityList, Generic, Quadrille, TabMenu, Unit} from '@primetec/primetec-angular';

export interface StoreInterface {
  auth: Auth;
  sync: Sync;
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
