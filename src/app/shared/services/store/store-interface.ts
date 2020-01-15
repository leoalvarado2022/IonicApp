import {Company, Connection} from '@primetec/primetec-angular';

export interface StoreInterface {
  remember: boolean;
  isLogged: boolean;
  rememberData: RememberData;
  userToken: string;
  userConnections: Array<Connection>;
  userActiveConnection: Connection;
  userActiveCompany: Company;
}

export interface RememberData {
  username: string;
  password: string;
}
