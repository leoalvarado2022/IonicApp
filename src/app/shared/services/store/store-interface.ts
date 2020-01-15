import {Company, Connection} from '@primetec/primetec-angular';

export interface StoreInterface {
  auth: Auth;
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
