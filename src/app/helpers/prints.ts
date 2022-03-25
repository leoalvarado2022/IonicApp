import EscPosEncoder from 'esc-pos-encoder-ionic';
import {Sockets} from './sockets';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../shared/services/http/http.service';
import {StoreService} from '../shared/services/store/store.service';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx'; // ocultar para ios
import {ToastService} from '../shared/services/toast/toast.service';
import {AlertController} from '@ionic/angular';
import {AlertService} from '../shared/services/alert/alert.service';
import {DeliveryService} from '../modules/orders/services/delivery.service';
import {StorageSyncService} from '../services/storage/storage-sync/storage-sync.service';
import {BehaviorSubject} from 'rxjs';
import {LoaderService} from '../shared/services/loader/loader.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class Prints {

  public pdf417Result;
  public dataPDF417;
  public printBluetooth;
  public printIP;
  public valueBP;
  public ticketChangeBP;
  public typeTicketChange;
  public generalQuestion;
  public copy;
  public isConnected = false;
  public attempts = 0;
  public numberCopy = 1;
  public order;
  // activar para ios
  // public bluetoothSerial: any; // ocultar para android

  public readonly getPD417Url = 'get-pdf417';
  public readonly getHeaderDocumentUrl = 'get-header-document';

  private isGenerateDocument: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loaderButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public sockets: Sockets,
              private httpClient: HttpClient,
              private httpService: HttpService,
              private storeService: StoreService,
              private deliveryService: DeliveryService,
              private bluetoothSerial: BluetoothSerial, // ocultar para ios
              private storageSyncService: StorageSyncService,
              private toastService: ToastService,
              private alertService: AlertService,
              private loaderService: LoaderService) {
  }

  /**
   * getGenerateDocument
   */
  public getGenerateDocument = (): BehaviorSubject<boolean> => {
    return this.isGenerateDocument;
  };

  /**
   * getBluetoothStatus
   */
  public setGenerateDocument = (value: boolean) => {
    this.isGenerateDocument.next(value);
  };


  /**
   * getBluetoothStatus
   */
  public getLoaderBotton = (): BehaviorSubject<boolean> => {
    return this.loaderButton;
  };

  public setOrder = (data) => {
    this.order = data;
  };

  /**
   * @description obtener el formato del codigo pdf417
   * @param data
   */
  public getHttpPDF417 = (data: any) => {
    const url = this.httpService.buildUrl(this.getPD417Url);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * @description obtener el header del documento
   * @param data
   */
  public getHttpHeaderDocument = (data: any) => {
    const url = this.httpService.buildUrl(this.getHeaderDocumentUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {
      headers: this.httpService.getHeaders()
    });
  };

  /**
   * @description numero de copias para impresion
   * @param value
   */
  setCopy(value: number) {
    this.copy = value;
  }

  /**
   * @description obtener el numero de copias para impresion
   * @param value
   */
  getCopy() {
    return +this.copy;
  }

  /**
   * @description preguntas para impresion
   * @param value
   */
  setGeneralQuestion(value: string) {
    this.generalQuestion = value;
  }

  /**
   * @description obtener el valor para las preguntas de impresion
   * @param value
   */
  getGeneralQuestion() {
    return this.generalQuestion;
  }

  /**
   * @description agregar si el BT esta encendido o no
   * @param value
   */
  setPrintBluetooth(value: boolean) {
    this.printBluetooth = value;
  }

  /**
   * @description obtner el valor de BT
   * @param value
   */
  getPrintBluetooth() {
    return this.printBluetooth;
  }

  /**
   * @description agregar si el La impresora esta activada esta encendido o no
   * @param value
   */
  setPrintIP(value: boolean) {
    this.printIP = value;
  }

  /**
   * @descriptionobtner el valor de Impresosra
   * @param value
   */
  getPrintIP() {
    return this.printIP;
  }

  /**
   * @description guardar el valor de impresion
   * @param value
   */
  setValueBP(value: string) {
    this.valueBP = value;
  }

  /**
   * @description optener valor de impresion
   * @param value
   */
  getValueBP() {
    return this.valueBP;
  }

  /**
   * @description guardar el valor de impresion
   * @param value
   */
  setTicketChangeBP(value: string) {
    this.ticketChangeBP = value;
  }

  /**
   * @description optener valor de impresion
   * @param value
   */
  getTicketChangeBP() {
    return this.ticketChangeBP;
  }

  /**
   * @description guardar el valor de impresion
   * @param value
   */
  setTypeTicketChange(value: string) {
    this.typeTicketChange = value;
  }

  /**
   * @description optener valor de impresion
   * @param value
   */
  getTypeTicketChange() {
    return this.typeTicketChange;
  }

  /**
   * @description imprimir test de impresion
   * @param data
   * @param ip
   * @param port
   */
  printTest() {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('left')
      .newline()
      .line(`TEST IMPRESION`)
      .line(`LINEA1`)
      .line(`LINEA2`)
      .newline()
      .newline()
      .newline()
      .newline()
      .newline();

    result.cut();

    return result.encode();
  }

  /**
   * @description test de impresion impresora
   * @param result
   * @param ip
   * @param port
   */
  printTestIP() {
    this.sockets.write(this.printTest(), this.getValueBP());
  }

  /**
   * @description test de impresion BT
   * @param result
   * @param address
   */
  printTestBT() {
    this.bluetoothSerial.connect(this.getValueBP()).subscribe(() => {
      this.bluetoothSerial.write(this.printTest())
        .then(() => {

        })
        .catch((err) => {
          // console.error(err, 'Print error write');
          this.toastService.errorToast('Error al imprimir');
        });
    }, error => {
      this.toastService.warningToast('Impresora no conectada por favor encienda la impresora');
    });
  }


  /**
   * @description imprimir comanda full
   * @param data
   * @param ip
   * @param port
   */
  commandFull(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('left')
      .newline()
      .line(`Cuenta: #${data?.id}`)
      .line(`Registro: ${data?.date_createdAt}`)
      .line(`Est. de despacho: ${data?.date_delivery}`)
      .line(`Comprador: ${data?.name_customer}`)
      .line(`Telefono: ${data?.phone_customer}`)
      .line(`Direccion: ${data?.address_customer}`)
      .line(`${data?.type_order}`)
      .line(`Sugerencia: ${data.comment ? data.comment : 'Sin Sugerencias'}`)
      .line('----------------------------------------')
      .line('CANT. DETALLE                   PRECIO  ')
      .line('----------------------------------------')
      .line(`${data.products && data.products.length ? this.productsLine(data.products) : ''}`)
      .line('----------------------------------------')
      .line(`${this.totalOrderAndDiscount(data)}`)
      .line('----------------------------------------')
      .line(`${this.totalAndTip(data)}`)
      .line('----------------------------------------')
      .newline()
      .newline()
      .newline()
      .newline()
      .newline();

    result.cut();

    return result.encode();
  }

  /**
   * @description imprimir resumen diario
   * @param data
   * @param ip
   * @param port
   */
   ResumeFull(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('left')
      .newline();
      for(let res of data) {
        result.line(`${res.parametro} ${res.valor}`)
        if(res.tipo_dato == 'titulo') {
          result.line('----------------------------------------')
        }
      }
      result
      .newline()
      .newline()
      .newline()
      .newline()
      .newline();

    result.cut();

    return result.encode();
  }


  /**
   * @description imprimir comanda con pdf417
   * @param data
   * @param ip
   * @param port
   */
  commandLegal(data: any, img: string, ip: string = '192.168.1.50', port: string = '9100') {
    return new Promise((resolve, reject) => {
      const encoder = new EscPosEncoder();
      const result = encoder.initialize();

      let pdf417 = new Image();
      // newImage.src = 'https://i.picsum.photos/id/889/200/300.jpg?hmac=7pLzsJkl44GS15ct5pL5EiK1I7p-uvVr9xWSB5Xhipw';
      pdf417.src = img;
      pdf417.crossOrigin = 'Anonymous';

      let logo = new Image();
      logo.src = data?.header?.logo;
      logo.crossOrigin = 'Anonymous';
      pdf417.onload = () => {
        result
          .newline()
          .line('----------------------------------------')
          .align('center')
          .line(`R.U.T. : ${this.formatRut(data?.header?.rut)}`)
          .line(`Nro. ${data?.documentsAvailable.number_document}`)
          .line('----------------------------------------')
          .align('center')
          .line(`S. I. I Santiago Oriente`)
          .image(logo, 328, 104, 'atkinson')
          .line('----------------------------------------')
          .align('left')
          .line(`Evaluanos: ${data?.header?.url_evaluate}`)
          .line(`${data?.header?.name}`)
          .line(`${data?.header?.province}, ${data?.header?.address}`)
          .line(`Correo: ${data?.header?.email}`)
          .line(`Telefono: ${data?.header?.phone}`)
          .line(`Cuenta: #${data?.id}`)
          .line('----------------------------------------')
          .line(`Registro: ${data?.date_createdAt}`)
          .line(`Est. de despacho: ${data?.date_delivery}`)
          .line(`Comprador: ${data?.name_customer}`)
          .line(`Telefono: ${data?.phone_customer}`)
          .line(`Direccion: ${data?.address_customer}`)
          .line(`${data?.type_order}`)
          .line('----------------------------------------')
          .line('CANT. DETALLE                   PRECIO  ')
          .line('----------------------------------------')
          .line(`${data.products && data.products.length ? this.productsLine(data.products) : ''}`)
          .line('----------------------------------------')
          .line(`${this.totalOrderAndDiscount(data)}`)
          .line('----------------------------------------')
          .line(`${this.totalAndTip(data)}`)
          .line('----------------------------------------')
          .line(`${this.ivaLine(data)}`)
          .line('----------------------------------------')
          .newline()
          .image(pdf417, 496, 376, 'bayer')
          .newline()
          .align('center')
          .line('Timbre Electronico S. I. I')
          .line('Res. Nro. 80 del 22/08/2014')
          .line('Verifique Documento en www.sii.cl')
          .newline()
          .newline()
          .newline()
          .newline()
          .newline();
      };
      this.sleep(1000).then(() => {
        result.cut();

        resolve(result.encode());
      });
    });
  }

  /**
   * @description imprimir ticket de cambio full
   * @param data
   * @param ip
   * @param port
   */
  ticketChangeFull(data: any) {
    // console.log(data);
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('center')
      .newline()
      .bold(true)
      .line(this.noSpecialChars(`Ticket de Cambio de Mercadería`))
      .bold(false)
      .newline()
      .align('left')
      .line(`Rut: ${data.entity?.rut}`)
      .line(`Nombre de empresa: ${this.noSpecialChars(data.order.entity)}`)
      .line(`Fecha: ${data.order.date_createdAt}`)
      .newline()
      .line(`SUCURSAL: ${this.noSpecialChars(data.entity.name)}`);

    if (data.product) {
      result.line(`PRODUCTO: ${data.product.name_product}`);
    } else {
      result.line(`NRO. INTERNO: ${data.order?.id}`);
    }

    result
      .line(`BOL. ELECTRONICA: ${data.order?.documents[0]?.number_document}`)
      .line(`VENDEDOR: ${data.user?.name}`)
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .newline();

    result.cut();

    return result.encode();
  }

  /**
   * @description opcion para generar un documento
   */
  async questionGenerate(text: string = 'Desea Imprimir') {
    const alert = await this.alertService.confirmAlert(text);

    return alert;
  }

  /**
   * @description opciones de impresion y preguntar si desea o no preguntar
   */
  async printQuestion(text: string = 'Desea Imprimir') {
    if (this.getGeneralQuestion() === 'si') {
      return true;
    } else if (this.getGeneralQuestion() === 'no') {
      return false;
    } else if (this.getGeneralQuestion() === 'preguntar') {
      const alert = await this.alertService.confirmAlert(text);
      console.log(alert);
      return alert;
    }

    return true;
  }

  binArrayToJson = (binArray) => {
    if (binArray?.length > 0) {
      let str = '';
      for (let i = 0; i < binArray.length; i++) {
        str += String.fromCharCode(parseInt(binArray[i], 10));
      }
      console.log('str ::: ', str);
    }
  }

  /**
   * @description formas de imprimir un documento
   * @param result
   * @param port
   */
  async printOptions(result: any, port: string = '9100', text: string = 'Desea Imprimir', ticket = false) {
    return new Promise((resolve, reject) => {
      this.printQuestion(text).then((success: boolean) => {
        if (success) {
          if (this.getPrintBluetooth()) {
            this.connectBT();
            setTimeout(() => {
              if (this.isConnected) {
                this.printBT(result, this.getValueBP());
              }
              resolve(true);
            }, 3000);
            setTimeout(() => {
              if (this.isConnected) {
                this.printTicketChange(port, true);
              }
              resolve(true);
            }, 5000);
          } else if (this.getPrintIP()) {
            for (let i = 0; i < this.getCopy(); ++i) {
              this.loaderService.startLoader(`Imprimiendo...`);
              // setTimeout(() => {
              //   this.loaderService.stopLoader();
              // }, 2500);
              if (i === 0) {
                setTimeout(() => {
                  this.binArrayToJson(result);
                  this.sockets.write(result, this.getValueBP(), port);
                  if (this.getTicketChangeBP() === 'si' && ticket) {
                    this.printTicketChange(port).then(() => console.log('imprimio ticket de cambio'));
                    resolve(true);
                  } else {
                    resolve(true);
                  }
                }, 2000);
              } else {
                setTimeout(() => {
                  console.log('else print options....');
                  this.sockets.write(result, this.getValueBP(), port);
                  resolve(true);
                }, 4000 * i);
              }
            }
          }
        }
      });
    });
  }


  /**
   * @description imprimir ticket de cambio
   */
  printTicketChange(port = '9100', bluetooth = false) {
    return new Promise((resolve, reject) => {
      const order = this.order;
      const entity = this.storeService.getActiveCompany();
      const user = this.storeService.getUser();

      const type = this.getTypeTicketChange();
      const len = order.products.length + 1;
      let count = 1;

      if (type === 'por orden') {
        const data = {
          order,
          entity,
          user
        };

        // construir para imprimir
        const result = this.ticketChangeFull(data);

        setTimeout(() => {
          if (!bluetooth) {
            this.binArrayToJson(result);
            this.sockets.write(result, this.getValueBP(), port);
          } else {
            this.printBT(result, this.getValueBP());
          }
          resolve(true);
        }, 3000);
      } else if (type === 'por producto') {
        for (const product of order.products) {
          const data = {
            order,
            entity,
            user,
            product,
          };

          // construir para imprimir
          const result = this.ticketChangeFull(data);

          setTimeout(() => {
            if (!bluetooth) {
              this.binArrayToJson(result);
              this.sockets.write(result, this.getValueBP(), port);
            } else {
              this.printBT(result, this.getValueBP());
            }

            if (count === len) {
              resolve(true);
            }
          }, count * (3000 / count));

          count += 1;
        }
      }

    });
  }

  /**
   * @description generar el pdf417 y enviar a imprimir
   * @param data
   * @param ip
   * @param port
   */
  async printPdf417(data: any, ip, port) {
    // const xmlString = '<TED version="1.0"><DD><RE>76484902-7</RE><TD>34</TD><F>166</F><FE>2018-09-24</FE><RR>11111111-1</RR><RSR>Nombre Receptor</RSR><MNT>100</MNT><IT1>Primer detalle</IT1><CAF version="1.0"><DA><RE>76484902-7</RE><RS>SHAREABLE INNOVATIONS SPA</RS><TD>34</TD><RNG><D>164</D><H>213</H></RNG><FA>2018-05-02</FA><RSAPK><M>xEgzQHlbuDyVQ/o2en9fyXZ5CbOhCfeWngsGoiURilsMrTDJYxzVEyYycnaOYn9xe7PueENj8GkxYxM2TxOERQ==</M><E>Aw==</E></RSAPK><IDK>300</IDK></DA><FRMA algoritmo="SHA1withRSA">em1SxWkeCDql+jX35oruOy1MfBWT60fEBaJ2Cc0yNI0aysy437B6kXOfXDN51TZZJ1cZPSsWdprnLYmEbeZ6Bw==</FRMA></CAF><TSTED>2018-09-24T00:51:02</TSTED></DD><FRMT algoritmo="SHA1withRSA">uDNJNlohWaJ2qKGp7Eo4/V3zu+Y3KnGNvBwKX+FNojlDApDAyiPne2P44M78EOLSrv6El/78ZKPBGFgXDS09eQ==</FRMT></TED>';

    const xmlString = data.documentsAvailable.ted;
    const user = this.storeService.getActiveCompany();

    const dataHttp = {
      user: user.user,
      xml: xmlString
    };

    const success: any = await this.getHttpPDF417(dataHttp).toPromise();
    const imgBase64PDF417 = success.response.xml;
    const commandResolve = await this.commandLegal(data, imgBase64PDF417, ip, port);
    try {
      await this.printOptions(commandResolve, '9100', 'Desea Imprimir', true);
      // await this.printOptions(commandResolve, '8632', 'Desea Imprimir', true);
      this.loaderButton.next(false);
      this.loaderService.stopLoader();
    } catch (err) {
      this.loaderButton.next(false);
      this.loaderService.stopLoader();
    }
  }


  /**
   * @description consultar el encabezado para el documento y generar el pdf417
   * @param data
   * @param ip
   * @param port
   */
  async printDocumentPdf417(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    this.loaderButton.next(true);

    try {
      const document: string = 'BOEV';

      // variable para generar la boleta
      let generate = false;
      // buscar si tiene documentos
      if (this.order.documents && this.order.documents.length) {
        // comprobar si ya existe el documento
        const documentAvailable = this.order.documents.find(value => value.type_document === document);
        if (!documentAvailable) {
          generate = await this.questionGenerate('Desea generar el Documento #' + data.id);
          if (generate) {
            this.loaderService.startLoader(`Procesando...`);
            await this.generateDocumentDB(data);
          }
        }
      } else {
        generate = await this.questionGenerate('Desea generar el Documento #' + data.id);
        if (generate) {
          this.loaderService.startLoader(`Procesando...`);
          await this.generateDocumentDB(data);
        }
      }
      // si se genera la boleta
      if (generate) {
        this.loaderService.startLoader(`Imprimiendo...`);
        await this.printDocumentProcess(document, ip, port);
      }
      this.loaderButton.next(false);
    } catch (err) {
      console.log('errr::: ', err);
      this.loaderButton.next(false);
      this.loaderService.stopLoader();
    }
  }

  /**
   * @description imprimir documento
   */
  async printDocumentProcess(document, ip: string = '192.168.1.50', port: string = '9100') {
    this.loaderButton.next(true);
    // buscar si tiene documentos
    if (this.order.documents && this.order.documents.length) {
      // comprobar si ya existe el documento
      const documentAvailable = this.order.documents.find(value => value.type_document === document);
      // procesar la data
      const dataProcess = this.addNameProducts(this.order);
      // si existe envia la data
      if (documentAvailable) {
        dataProcess.documentsAvailable = documentAvailable;
        const success: any = await this.getHttpHeaderDocument({order: dataProcess.id}).toPromise();
        if (success && success.resp && success.resp.length) {
          dataProcess.header = success.resp[0];
          await this.printPdf417(dataProcess, ip, port);
        }
      }
    }
  }

  /**
   * @description guardar documento en la base de datos
   * @param data
   */
  async generateDocumentDB(data) {
    try {
      const document: string = 'BOEV';

      // obtener el usuario logueado
      const user: any = this.storeService.getUser();

      const getSN: any = {
        user: +user.id,
        entity: +data.id_entities,
        document
      };

      // obtener el numero sugerido
      const suggestNumber: any = await this.deliveryService.getSuggestNumber(getSN);

      // obtener la integraciones
      const integration = await this.storageSyncService.getIntegrationDelivery();
      // obtener los folios
      const folios = await this.storageSyncService.getFoliosConfig();

      // buscar productos que sean de tipo item nada mas
      const itemsProducts = data.products.filter(value => value.type === 'ITEM');

      // si existe un numero sugerido y si hay integraciones para dte
      if (folios && folios.length && suggestNumber && suggestNumber.resp &&
        itemsProducts && itemsProducts.length &&
        suggestNumber.resp.number && integration && integration.length) {
        getSN.folio = suggestNumber.resp.number;


        // valida el numero sugerido
        const validate: any = await this.deliveryService.getValidateFolio(getSN);

        // buscar la integracion depende el dte
        const integ = integration.find(value => value.id_entity === getSN.entity && value.type_integration === 'DTE');
        const foliosIntegration = folios.find(value => value.entity_id === getSN.entity && value.type_dte === 39);

        // si existe un numero valido
        if (foliosIntegration && foliosIntegration.xmlCaf && foliosIntegration.xmlCaf !== ''
          && integ && validate && validate.resp &&
          validate.resp.available && validate.resp.alert > 0) {

          // si quedan pocos folios
          if (validate.resp.available !== 'ok') {
            this.toastService.warningToast(validate.resp.available.toLocaleUpperCase());
          }
          // obtener el tocken
          const token = integ.api_key;
          // get data dte
          const dte = {
            transmitter_rut: data.rut_format,
            first_item: itemsProducts[0].name_product,
            total: data.value_total,
            entity_id: data.id_entities,
            type_dte: 39,
            folio: validate.resp.validate,
            xmlCaf: foliosIntegration.xmlCaf
          };

          // obtener el ted que se enviara con el documento
          const tedApiDTE: any = await this.deliveryService.getHttpTEDDTE(dte, token);

          // si existe el documento ted y ademas de eso existe el xml
          if (tedApiDTE && tedApiDTE.integration && tedApiDTE.integration.ted && tedApiDTE.integration.ted.xml) {
            // guardar una boleta
            const folio: number = validate.resp.validate;
            const user: number = getSN.user;
            const entity: number = getSN.entity;
            const order_id: number = data.id;
            const total: number = data.value_total;

            // object para grabar el documento
            const dataSaveDocument = {
              folio,
              document,
              user,
              entity,
              order_id,
              total,
              order: data,
              xml: tedApiDTE.integration.ted.xml
            };
            // guardar el documento
            const saveDocument: any = await this.deliveryService.saveDocument(dataSaveDocument);

            const userCompany = this.storeService.getActiveCompany();
            const dataOrder = {
              user: userCompany.user,
              id: data.id,
            };
            const orderWithDocument: any = await this.deliveryService.getNotificationHttpId(dataOrder).toPromise();
            this.setOrder(orderWithDocument.resp);

            // si el documento esta ok
            if (saveDocument.response && saveDocument.response.length && saveDocument.response[0].respuesta === 'ok') {
              this.isGenerateDocument.next(true);
            } else {
              this.toastService.warningToast(saveDocument.response);
            }
            // si el documento tiene alertas
            if (saveDocument.response && saveDocument.response.length && saveDocument.response.alert) {
              this.toastService.warningToast(saveDocument.response.alert);
            }
          }
        } else {
          // si no hay folios
          this.loaderService.stopLoader();
          this.loaderButton.next(false);
          this.toastService.errorToast(validate.resp.available.toLocaleUpperCase());
        }
      }
    } catch (err) {
      this.loaderService.stopLoader();
      this.loaderButton.next(false);
    }
  }

  /**
   * @description print command full
   * @param data
   * @param ip
   * @param port
   */
  async printCommand(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    const dataProcess = this.addNameProducts(data);
    const result: any = this.commandFull(dataProcess, ip, port);
    await this.printOptions(result, '9100', 'Desea Imprimir la Comanda');
    // await this.printOptions(result, '8632', 'Desea Imprimir la Comanda');
  }

  async printResume(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    const result: any = this.ResumeFull(data, ip, port);
    await this.printOptions(result, '9100', 'Desea Imprimir el Resumen Diario');
  }

  /**
   * @description impresion en impresora BT
   * @param result
   * @param address
   */
  printBT(result: any, address: string) {
    this.loaderService.startLoader(`Imprimiendo...`);
    // console.log(address);
    // send byte code into the printer
    this.bluetoothSerial.connect(address).subscribe(() => {
      this.bluetoothSerial.write(result)
        .then(() => {
          // console.log('Print success');
          this.attempts = 0;
          if (this.getCopy() !== this.numberCopy) {
            this.numberCopy++;
            setTimeout(() => {
              // console.log(error, 'reimpresion')
              this.printBT(result, address);
            }, 2000 * this.numberCopy);
          }
        })
        .catch((err) => {
          // console.error(err, 'Print error write');
          this.attempts = 0;
          this.toastService.errorToast('Error al imprimir');
        });
    }, error => {
      // console.log(error, 'Print error connect');
      if (this.attempts === 0) {
        this.attempts++;
        setTimeout(() => {
          // console.log(error, 'reimpresion')
          this.printBT(result, address);
        }, 3000);
      } else {
        this.attempts = 0;
        this.numberCopy = 1;
        this.toastService.warningToast('Impresora no conectada por favor encienda la impresora');
      }
    });

    setTimeout(() => {
      this.loaderService.stopLoader();
    }, 1500);
  }

  /**
   * @description comprobar conexion con BT
   */
  connectBT() {
    this.bluetoothSerial.isEnabled().then((data) => {
      // console.log(data, 'then.isEnabled');
      this.isConnected = true;
    }).catch(data => {
      // console.log(data, 'catch.isEnabled');
      this.isConnected = false;
      this.toastService.errorToast('Bluetooth no esta activado');
    });
  }

  /**
   * @description obtener configuracion de impresion
   * @param data
   */
  printConfigActive(data: Array<any>, type: string = 'comanda') {
    this.numberCopy = 1;
    if (data && data.length) {
      for (let print of data) {
        if (type === 'comanda') {
          const valueIp = data.find(filter => filter.param === 'direccion' && filter.app === 'impresion_comandas').value;
          if (print.app === 'impresion_comandas' && print.param === 'metodo' && print.value === 'ip') {
            if (valueIp) {
              this.setPrintBluetooth(false);
              this.setPrintIP(true);
              this.setValueBP(valueIp);
            }
          } else if (print.app === 'impresion_comandas' && print.param === 'metodo' && print.value === 'bluetooth') {
            if (valueIp) {
              this.setPrintBluetooth(true);
              this.setPrintIP(false);
              this.setValueBP(valueIp);
            }
          } else if (print.app === 'impresion_comandas' && print.param === 'general') {
            if (valueIp) {
              this.setGeneralQuestion(print.value);
            }
          } else if (print.app === 'impresion_comandas' && print.param === 'copias') {
            if (valueIp) {
              this.setCopy(print.value);
            }
          }
        } else {
          const valueIp = data.find(filter => filter.param === 'direccion' && filter.app === 'impresion_documentos').value;
          if (print.app === 'impresion_documentos' && print.param === 'metodo' && print.value === 'ip') {
            if (valueIp) {
              this.setPrintBluetooth(false);
              this.setPrintIP(true);
              this.setValueBP(valueIp);
            }
          } else if (print.app === 'impresion_documentos' && print.param === 'metodo' && print.value === 'bluetooth') {
            if (valueIp) {
              this.setPrintBluetooth(true);
              this.setPrintIP(false);
              this.setValueBP(valueIp);
            }
          } else if (print.app === 'impresion_documentos' && print.param === 'general') {
            if (valueIp) {
              this.setGeneralQuestion(print.value);
            }
          } else if (print.app === 'impresion_documentos' && print.param === 'copias') {
            if (valueIp) {
              this.setCopy(print.value);
            }
          } else if (print.app === 'impresion_documentos' && print.param === 'ticket_cambio') {
            if (valueIp) {
              this.setTicketChangeBP(print.value);
            }
          } else if (print.app === 'impresion_documentos' && print.param === 'tipo_ticket_cambio') {
            if (valueIp) {
              this.setTypeTicketChange(print.value);
            }
          }
        }
      }
    }
  }

  /**
   * @description calculo de orden y descuentos
   * @param data
   */
  totalOrderAndDiscount(data: any) {
    let txt = '';
    txt += `TOTAL ORDEN                     ${this.calculateSpace(data.value_order.toString().length, 8, data.value_order.toString(), 0, true)}${data.value_discount ? '\n' : ''}`;

    if (data.value_discount) {
      txt += `DESCUENTO                       ${this.calculateSpace(data.value_discount.toString().length, 8, data.value_discount.toString(), 0, true)}`;
    }

    return txt;
  }

  /**
   * @description calculo de total y propina si tiene
   * @param data
   */
  totalAndTip(data: any) {

    if (data.origin === 'FX360' && data.payments.length) {
      data.value_tip = data.payments.reduce((total, value) => total + (+value.tip_mp), 0);
    }

    let txt = '';
    txt += `TOTAL                           ${this.calculateSpace(data.value_total.toString().length, 8, data.value_total.toString(), 0, true)}${data.value_tip ? '\n' : ''}`;
    if (data.value_tip) {
      txt += `PROPINA                         ${this.calculateSpace(data.value_tip.toString().length, 8, data.value_tip.toString(), 0, true)}`;
    }

    return txt;
  }

  /**
   * @description calculo de total y propina si tiene
   * @param data
   */
  ivaLine(data: any) {
    const valueIva = data.value_total * 0.19;
    let txt = '';
    txt += `El Iva de esta Boleta es:       ${this.calculateSpace(valueIva.toString().length, 8, valueIva.toString(), 0, true)}`;

    return txt;
  }

  /**
   * This function is responsible for stopping
   * the function execution the time sent in milliseconds
   * @param {number} ms
   * @returns {Promise<*>}
   */
  sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  /**
   * @description calculo repetitivo de productos
   * @param products
   */
  productsLine(products) {
    let txt = '';
    if (products.length) {
      for (let product of products) {
        const name = this.noSpecialChars(product.name);
        txt += `${this.calculateSpace(product.quantity.toString().length, 5, product.quantity.toString(), 0, true)} ${this.calculateSpace(name.length, 25, name)} ${this.calculateSpace(product.total.toString().length, 8, product.total.toString(), 0, true)}\n`;
        if (name.length > 25) {
          // console.log(name, name.length, 'es mayor que 25');
          // si el nombre del producto es mayor a la linea establecida se le da otra linea como maximo
          txt += `${this.calculateSpace(0, 5, '')} ${this.calculateSpace(name.length, 50, name, 25)} ${this.calculateSpace(0, 8, '')}\n`;
          // console.log(txt, 'es mayor que 25 parte 2');
        }
        if (name.length > 50) {
          txt += `${this.calculateSpace(0, 5, '')} ${this.calculateSpace(name.length, 75, name, 50)} ${this.calculateSpace(0, 8, '')}\n`;
        }
        if (name.length > 75) {
          txt += `${this.calculateSpace(0, 5, '')} ${this.calculateSpace(name.length, 100, name, 75)} ${this.calculateSpace(0, 8, '')}\n`;
        }
      }
    }
    return txt;
  }

  /**
   * @description calcula el espacio que debe tener la boleta
   * @param origin
   * @param number
   * @param data
   * @param sliceIndex
   */
  calculateSpace(origin: number, number: number, data: any, sliceIndex: number = 0, format: boolean = false) {
    let dataTxt: any = '';

    // console.log(origin, number, data, sliceIndex, 'calculateSpace');

    if (data.length) {
      dataTxt = data.slice(sliceIndex, number);
    }

    if (format) {
      dataTxt = this.format(+dataTxt);
    }

    // console.log(dataTxt, data.length, 'despues del dataTxt');
    // si el nombre es mayor a la linea establecida empieza con el indice hasta el final de la linea
    if (origin >= number) {
      // si el numero de espacios establecido es mayor a la linea del nombre , se le agrega espacios en blanco para completar la linea
      if ((number - origin) > 0) {
        const space = number - origin;
        dataTxt = dataTxt === '0' ? ' ' : dataTxt;
        for (let i = 0; i < space; i++) {
          dataTxt += ' ';
        }
      }
    }

    // si la la palabra es mejor al numero de espacio de la linea se le agrega espacios para completar la linea
    if (origin < number) {
      const space = number - origin;
      dataTxt = dataTxt === '0' ? ' ' : dataTxt;
      for (let i = 0; i < space; i++) {
        dataTxt += ' ';
      }
    }


    // console.log(dataTxt, 'antes del return');
    return dataTxt;
  }

  /**
   * @description agregar nombre para procesar los datos de productos
   * @param data
   */
  addNameProducts(data: any) {
    data.products = data.products && data.products.length ? data.products.map((product: any) => {
      if (product.type === 'ITEM') {
        product.name = product.name_item;
      }

      if (product.type === 'TEXTO') {
        product.name = `${product.header_item ? product.header_item + '- ' : ''}${product.name_item}`;
      }

      return product;
    }) : [];


    return data;
  }

  /**
   * @description mapear caracteres especiales
   * @param string
   */
  noSpecialChars(string: string) {
    const translate = {
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        æ: 'a',
        ç: 'c',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        ð: 'd',
        ñ: 'n',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        ý: 'y',
        þ: 'b',
        ÿ: 'y',
        ŕ: 'r',
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        Æ: 'A',
        Ç: 'C',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        Ð: 'D',
        Ñ: 'N',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        Ý: 'Y',
        Þ: 'B',
        Ÿ: 'Y',
        Ŕ: 'R',
        '!': '',
        '¡': '',
      },
      translate_re = /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿŕŕÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÝÝÞŸŔŔ!¡]/gim;
    return string.replace(translate_re, function(match) {
      return translate[match];
    });
  }

  /**
   * @description formato para moneda
   * @param value
   */
  format(value: number) {
    let val = (value / 1).toFixed(0).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  /**
   * @description formato para rut
   * @param rut
   */
  formatRut(rut) {
    // XX.XXX.XXX-X
    const newRut = rut.replace(/\./g, '').replace(/\-/g, '').trim().toLowerCase();
    const lastDigit = newRut.substr(-1, 1).toUpperCase();
    const rutDigit = newRut.substr(0, newRut.length - 1);
    let format = '';
    for (let i = rutDigit.length; i > 0; i--) {
      const e = rutDigit.charAt(i - 1);
      format = e.concat(format);
      if (i % 3 === 0) {
        format = '.'.concat(format);
      }
    }
    return format.concat('-').concat(lastDigit);
  }

}
