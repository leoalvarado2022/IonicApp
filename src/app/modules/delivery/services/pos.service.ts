import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../../../services/storage/storage-keys';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpService} from '../../../shared/services/http/http.service';
import {StoreService} from '../../../shared/services/store/store.service';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {catchError, retry, switchMap} from 'rxjs/operators';
import {DeliveryService} from './delivery.service';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {ToastService} from '../../../shared/services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class PosService {

  public authenticationUrl = '/api/login';
  public menuCustomUrl = '/api/get-menu-custom';
  public insertCommandUrl = '/api/insert-command';
  public syncUrl = '/api/pos/sync';
  public cashRegisterUrl = '/api/caja-activa';
  public updatePosStatusUrl = 'update-pos-status';
  public openTableUrl = '/api/table/open';
  public saveCommandUrl = '/api/bill/command';
  public closeUrl = '/api/bill/close';
  public connection = false;
  public order: any;
  public product: any;
  public command: any;
  public checkMenuData: any;
  public userCompany: any;

  constructor(private storage: Storage,
              private httpClient: HttpClient,
              private httpService: HttpService,
              private storeService: StoreService,
              private storageSyncService: StorageSyncService,
              private _toastService: ToastService,
              private backgroundMode: BackgroundMode) {
  }

  /**
   * getHeaders
   * @return HttpHeaders
   */
  public getHeaders = (): HttpHeaders => {
    const token = this.getToken();

    return new HttpHeaders({
      Authorization: token !== null ? 'Bearer ' + token : '',
      'Content-Type': 'application/json'
    });
  };

  /**
   * buildUrl
   * @param url
   * @param id
   */
  public buildUrl = (url: string, id: string = null): string => {
    const data = this.storageSyncService.getActiveConfigDelivery();

    if (data) {
      const apiUrl = data.url;
      return id == null ? apiUrl + url : apiUrl + `${url}/${id}`;
    }

    return;
  };

  /**
   * hacer login
   * @param data
   */
  public login = (data: any) => {
    this.deleteConnection();
    const url = this.buildUrl(this.authenticationUrl);
    return this.httpClient.post(url, data);
  };

  /**
   * traerse el sync de pos
   * @param data
   */
  public sync = (data: any) => {
    const url = this.buildUrl(this.syncUrl);
    return this.httpClient.post(url, data, {
      headers: this.getHeaders()
    });
  };

  /**
   * @description comprobar caja activa
   */
  public cashRegisterActive = () => {
    const url = this.buildUrl(this.cashRegisterUrl);
    return this.httpClient.get(url, {
      headers: this.getHeaders()
    });
  };

  /**
   *@description abrir una mesa
   * @param data
   */
  public httpOpenTable = (data: any) => {
    const url = this.buildUrl(this.openTableUrl);
    return this.httpClient.post(url, data, {
      headers: this.getHeaders()
    });
  };

  /**
   * @description actualizar orden con estatus del pos
   * @param data
   */
  public httpUpdatePosStatus = (data: any) => {
    const url = this.httpService.buildUrl(this.updatePosStatusUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * obtener los menus por codigo de producto
   * @param data
   */
  public getMenuCustom = (data: any) => {
    const url = this.buildUrl(this.menuCustomUrl);
    return this.httpClient.post(url, {items: data}, {
      headers: this.getHeaders()
    });
  };

  /**
   * obtener los menus por codigo de producto
   * @param data
   */
  public httpInsertCommand = (data: any) => {
    const url = this.buildUrl(this.insertCommandUrl);
    return this.httpClient.post(url, {data}, {
      headers: this.getHeaders()
    });
  };

  public httpSaveCommand = (data: any) => {
    const url = this.buildUrl(this.saveCommandUrl);
    return this.httpClient.post(url, data, {
      headers: this.getHeaders()
    });
  };

  /**
   * cerrar cuenta
   * @param data
   */
  public httpCloseAccount = (data: any) => {
    const url = this.buildUrl(this.closeUrl);
    return this.httpClient.post(url, data, {
      headers: this.getHeaders()
    });
  };


  /**
   * @description hacer login y logran una syncronizacion mapeo de datos entre otros
   */
  public loginToSync = () => {
    const user = this.storageSyncService.getActiveConfigDelivery();

    const modoPos = localStorage.getItem('modoPOS');

    if (user && modoPos && modoPos === '1') {

      const body = {
        username: user.user,
        password: user.password
      };
      this.connection = true;
      // hacer login para probar la conexion y sync
      this.login(body).pipe(
        switchMap((data: any) => {
          // guardar conexion
          if (data.connections && data.connections.length) {
            this.setConnection(data.connections[0].token);
          } else {
            this.setConnection(data.connections);
          }
          this.setToken(data.token);
          // hacer una sync
          return this.sync({user: data.username});
        }),
        catchError((err: any) => {
          err.error = err;
          this.httpService.errorHandlerPos(err);
          this.connection = false;
          return err;
        })
      ).subscribe((data: any) => {
        // buscar usuario de conexion
        const currentWaiter = data.users.find((value: any) => value.username === body.username);
        // comprobar que existe
        if (currentWaiter) {
          // mantenerlo
          this.setUser(currentWaiter);
          this.mapSyncDataToStorage(data);
          this._toastService.successToast('Conexión establecida con FX10 POS');
        } else {
          // borrar
          this.deleteUser();
          this.deleteToken();
          this.deleteConnection();
          this._toastService.warningToast('el usuario establecido no existe FX10 POS');
        }
        this.connection = false;
      }, error => {
        this.httpService.errorHandlerPos(error);
        this.connection = false;
      });

    } else {
      this._toastService.warningToast('no esta activada la sincronización debe activar una empresa FX10 POS');
    }

    setTimeout(() => {
      this.connection = false;
    }, 10000);
  };

  /**
   * @description abrir mesa nueva version
   * @param order
   */
  public openTableNew = async (order: any, user: any = null) => {

    if (user) {
      this.userCompany = user;
    }
    // si esta activado el modo pos
    const modoPos = localStorage.getItem('modoPOS');
    if (modoPos && modoPos === '1') {
      // guardar la orden en memoria
      this.order = order;

      // console.log(order);
      this.httpInsertCommand(order).subscribe((success: any) => {
        let noerror = true;
        if (success && success.length) {
          for (let data of success) {
            if (data.respuesta !== 'ok') {
              noerror = false;
              this._toastService.errorToast(`${data.respuesta} del POS FX10, Orden #${order.id}`, 10000);
            }
          }
          // si no hay error se marca la cuenta
          if (noerror) {
            if (user && this.userCompany) {
              order.update_pos_status = 1;
              this.httpUpdatePosStatus({pos: 1, id: order.id, user: this.userCompany}).subscribe(() => {
              });
            }
          }
        }

      }, error => {
        this.httpService.errorHandlerPos(error);
      });
    } else {
      //
    }
  };

  /**
   * @description abrir una mesa
   * @param order
   */
  public openTable = async (order: any) => {
    // si esta activado el modo pos
    const modoPos = localStorage.getItem('modoPOS');
    if (modoPos && modoPos === '1') {
      // guardar la orden en memoria
      this.order = order;

      // obtener los productos de la orden
      const checkMenu = this.mapOptionsMenus(this.order);

      this.getMenuCustom(checkMenu).subscribe(data => {
        // se asigna la primera vez para setear la data
        this.checkMenuData = data;

        // banderas para tratar la data
        const dataCompareCheckMenu = [];
        let error = false;

        // compruebo que las productos de las ordenes existan
        if (this.order && this.order.products && this.order.products.length) {
          // recorro los productos
          for (const product of this.order.products) {
            // busco los productos
            // const productRow = this.checkMenuData.find(value => value.code === product.code_product && value.type === product.type);
            const productRow = this.checkMenuData.find(value => value.code === product.code_product && value.type === 'ITEM');
            // si existe el producto
            if (productRow) {
              // agregamos el precio de la orden
              productRow.price = product.total;
              productRow.text = product.text;
              // lo agrego
              dataCompareCheckMenu.push(productRow);
              // de lo contrario no esta syncronizado
            } else {
              error = true;
            }
          }
        } else {
          error = true;
        }

        // si no existe el producto dentro del menu-order
        if (error) {
          this._toastService.errorToast('El producto no esta syncronizado o no estas conectado a la red...');
        } else {
          // se reasigna con la data seteada y filtrada
          this.checkMenuData = dataCompareCheckMenu;
          // si existe el producto abre la mesa
          this.openTableToCommand().then();
        }

      }, error => {
        this.httpService.errorHandlerPos(error);
        this.connection = false;
      });
    }
  };

  /**
   * @description abrir una mesa y servir
   * @param order
   */
  public openTableToCommand = async () => {
    // obtener mesas
    const tables = await this.getTables();
    // obtener la mesa correcta
    const integrationTable = tables.find(value => value.code === this.order.origin);
    // obtener el usuario de pos
    const userPos = await this.getUser();

    // console.log(integrationTable, tables, this.order);

    // combrar la caja si existe abre una mesa
    this.cashRegisterActive().pipe(
      switchMap((data: any) => {
        if (data.length) {
          const cash = data[0];
          const openTableData = {
            table: +integrationTable.id,
            user: +userPos.id,
            cash: +cash.id,
            dinners: 1,
            generactadlvy: 1,
            ctadlvexterna: 1
          };

          // abrir la mesa
          return this.httpOpenTable(openTableData);
        }
        return;
      }),
      catchError((err: any) => {
        err.error = err;
        this.httpService.errorHandlerPos(err);
        return err;
      })
    ).subscribe((data: any) => {
      // escoger el chkfx de la mesa, siempre es la ultima
      if (data.result && data.result.length) {
        const lengthRow = data.result.length;
        this.codeChckfxToSaveCommand(+data.result[lengthRow - 1].id);
      }
    }, error => {
      this.httpService.errorHandlerPos(error);
      this.connection = false;
    });

  };

  /**
   * @description obtener los productos y guardar commanda
   * @param chckfx
   */
  public codeChckfxToSaveCommand = (chckfx: number) => {
    this.structureSaveCommand(chckfx).then();
  };

  /**
   * @description obtener los productos de la orden para sus id
   * @param order
   */
  public mapOptionsMenus = (order: any) => {
    const items = [];
    if (order.products && order.products.length) {
      for (const product of order.products) {
        items.push(product.code_product);
      }
    }
    return items;
  };

  /**
   * @description generar datos de objecto comanda
   * @param checkMenuData
   */
  public generateCommandArray = () => {
    // order por id porque los item siempre tendras un id menor que los modificadores
    const dataOrder = this.checkMenuData.sort((a, b) => a.id - b.id);
    const command: any = [];

    if (dataOrder.length) {
      for (const data of dataOrder) {
        if (data.type === 'ITEM') {
          // buscar los modificadores o textos
          const children = this.checkMenuData.filter(value => value.id_reference === data.id && value.type !== 'ITEM');

          const dataObject: any = {
            option: {
              id: data.id,
              description: data.description,
              price: data.price
            },
            quantity: 1,
            total: data.price,
            children: []
          };

          // si tiene modificadores  - crear la comanda cabecera
          if (children && children.length) {
            for (const child of children) {
              const dataChild = {
                quantity: 1,
                dinner: 0,
                total: child.price,
                option: {
                  id: child.id,
                  description: child.description,
                  price: child.price,
                  codeModifier: 1
                }
              };

              dataObject.children.push(dataChild);
            }
          }

          // si el item tiene texto
          if (data.text && data.text.length > 4) {
            const dataChild = {
              quantity: 0,
              text: data.text,
              total: 0,
            };
            dataObject.children.push(dataChild);
          }

          // si lo modificadores tienen textos
          const childrenText = this.checkMenuData.filter(value => value.id_reference === data.id && value.type !== 'ITEM' && value.text && value.text.length > 4);

          // si filtrar los registros que tiene data
          if (childrenText && childrenText.length) {
            // recorrer para crear el tipo text modificador
            for (const childText of childrenText) {
              const dataChild = {
                quantity: 0,
                text: childText.text,
                total: 0,
              };
              dataObject.children.push(dataChild);
            }
          }

          command.push(dataObject);
        }
      }
    }

    return command;
  };


  /**
   * @description crear la estructura de comanda y guardar
   * @param checkMenuData
   * @param chckfx
   */
  public structureSaveCommand = async (chckfx) => {
    // obtener mesas
    const tables: any = await this.getTables();
    // obtener la mesa correcta
    const integrationTable: any = tables.find(value => value.code === this.order.origin);

    // obtener el usuario de pos
    const userPos: any = await this.getUser();

    // obtener datos de la caja
    const cash: any = await this.getCashRegister();

    let command: any;

    // crear estructura de la comanda
    command = this.generateCommandArray();

    const data: any = {
      id: chckfx,
      command,
      table: {id: +integrationTable.id},
      waiter: {id: +userPos.id},
      dinners: 1,
      cash: {company: {id: cash.company.id}},
      details: [
        {
          deleted: false,
          updated: false
        }
      ]
    };

    this.httpSaveCommand(data).subscribe((data: any) => {
      if (data.response && data.response === 'OK') {
        this.closeAccount(chckfx);
      } else {
        this._toastService.errorToast(data.response);
      }
    }, error => {
      this.httpService.errorHandlerPos(error);
      this.connection = false;
    });
  };

  /**
   * @description cerrar cuenta sin pago
   * @param chckfx
   */
  public closeAccount = async (chckfx) => {
    // obtener el usuario de pos
    const userPos = await this.getUser();

    // datos para cerrar la cuenta
    const data: any = {
      id: chckfx,
      waiter: {
        id: +userPos.id
      },
      documentPaySu: {
        id: 1
      },
      document: {
        type: ''
      }
    };

    this.httpCloseAccount(data).subscribe((data: any) => {
      // si es ok la cuenta esta cerrada
    }, error => {
      this.httpService.errorHandlerPos(error);
      this.connection = false;
    });
  };

  /////////////////////////////////////////////////////////
  ////////////////////////////////
  // BASE DATOS

  /**
   * @description guardado de datos
   * @param data
   */
  public mapSyncDataToStorage = (data: any) => {
    this.setAgreements(data.agreements).then();
    this.setCashRegister(data.cashRegister).then();
    this.setCauses(data.causes).then();
    this.setConfiguration(data.configuration).then();
    this.setDiscounts(data.discounts).then();
    this.setPaymentTypes(data.paymentTypes).then();
    this.setPrinters(data.printers).then();
    this.setSectors(data.sectors).then();
    this.setTables(data.tables).then();
    this.setTurns(data.turns).then();
    this.setUsers(data.users).then();
  };

  /**
   * setAgreements
   */
  public setAgreements = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Agreements, data);
  };

  /**
   * getAgreements
   */
  public getAgreements = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Agreements).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setCashRegister
   */
  public setCashRegister = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.CashRegister, data);
  };

  /**
   * getCashRegister
   */
  public getCashRegister = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.CashRegister).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setCauses
   */
  public setCauses = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Causes, data);
  };

  /**
   * getCashRegister
   */
  public getCauses = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Causes).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setConfiguration
   */
  public setConfiguration = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Configuration, data);
  };

  /**
   * getConfiguration
   */
  public getConfiguration = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Configuration).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setDiscounts
   */
  public setDiscounts = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Discounts, data);
  };

  /**
   * getDiscounts
   */
  public getDiscounts = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Discounts).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setPaymentTypes
   */
  public setPaymentTypes = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.PaymentTypes, data);
  };

  /**
   * getPaymentTypes
   */
  public getPaymentTypes = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.PaymentTypes).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setPrinters
   */
  public setPrinters = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Printers, data);
  };

  /**
   * getPrinters
   */
  public getPrinters = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Printers).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setSectors
   */
  public setSectors = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Sectors, data);
  };

  /**
   * getSectors
   */
  public getSectors = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Sectors).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setTables
   */
  public setTables = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Tables, data);
  };

  /**
   * getTables
   */
  public getTables = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Tables).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setTurns
   */
  public setTurns = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Turns, data);
  };

  /**
   * getTurns
   */
  public getTurns = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Turns).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  /**
   * setUsers
   */
  public setUsers = (data: Array<any>): Promise<Array<any>> => {
    return this.storage.set(StorageKeys.Users, data);
  };

  /**
   * getUsers
   */
  public getUsers = (): Promise<Array<any>> => {
    return this.storage.get(StorageKeys.Users).then((data: Array<any>) => {
      return data ? data : [];
    });
  };

  deleteConnection(): void {
    localStorage.removeItem('connectionPos');
  }

  getConnection(): string {
    return JSON.parse(localStorage.getItem('connectionPos'));
  }

  setConnection(connection: string) {
    localStorage.setItem('connectionPos', JSON.stringify(connection));
  }

  deleteUser(): void {
    localStorage.removeItem('currentUserPos');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUserPos'));
  }

  setUser(user: any) {
    localStorage.setItem('currentUserPos', JSON.stringify(user));
  }

  getToken(): any {
    return JSON.parse(localStorage.getItem('currentTokenPos'));
  }

  setToken(token: any) {
    localStorage.setItem('currentTokenPos', JSON.stringify(token));
  }

  deleteToken() {
    localStorage.removeItem('deleteToken');
  }

}
