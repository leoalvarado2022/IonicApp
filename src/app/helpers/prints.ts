import EscPosEncoder from 'esc-pos-encoder-ionic';
import {Sockets} from './sockets';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../shared/services/http/http.service';
import {StoreService} from '../shared/services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class Prints {

  public pdf417Result;
  public dataPDF417;

  public readonly getPD417Url = 'get-pdf417';
  public readonly getHeaderDocumentUrl = 'get-header-document';

  constructor(public sockets: Sockets,
              private httpClient: HttpClient,
              private httpService: HttpService,
              private storeService: StoreService) {
  }

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
      .line(`Registro: ${data?.date_createdAt}`)
      .line(`Est. de despacho: ${data?.date_delivery}`)
      .line(`Comprador: ${data?.name_customer}`)
      .line(`Telefono: ${data?.phone_customer}`)
      .line(`Direccion: ${data?.address_customer}`)
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
          .line(`Nro. ${data?.id}`)
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
          .line('----------------------------------------')
          .line(`Registro: ${data?.date_createdAt}`)
          .line(`Est. de despacho: ${data?.date_delivery}`)
          .line(`Comprador: ${data?.name_customer}`)
          .line(`Telefono: ${data?.phone_customer}`)
          .line(`Direccion: ${data?.address_customer}`)
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
   * @description generar el pdf417 y enviar a imprimir
   * @param data
   * @param ip
   * @param port
   */
  printPdf417(data: any, ip, port) {
    const xmlString = '<TED version="1.0"><DD><RE>76484902-7</RE><TD>34</TD><F>166</F><FE>2018-09-24</FE><RR>11111111-1</RR><RSR>Nombre Receptor</RSR><MNT>100</MNT><IT1>Primer detalle</IT1><CAF version="1.0"><DA><RE>76484902-7</RE><RS>SHAREABLE INNOVATIONS SPA</RS><TD>34</TD><RNG><D>164</D><H>213</H></RNG><FA>2018-05-02</FA><RSAPK><M>xEgzQHlbuDyVQ/o2en9fyXZ5CbOhCfeWngsGoiURilsMrTDJYxzVEyYycnaOYn9xe7PueENj8GkxYxM2TxOERQ==</M><E>Aw==</E></RSAPK><IDK>300</IDK></DA><FRMA algoritmo="SHA1withRSA">em1SxWkeCDql+jX35oruOy1MfBWT60fEBaJ2Cc0yNI0aysy437B6kXOfXDN51TZZJ1cZPSsWdprnLYmEbeZ6Bw==</FRMA></CAF><TSTED>2018-09-24T00:51:02</TSTED></DD><FRMT algoritmo="SHA1withRSA">uDNJNlohWaJ2qKGp7Eo4/V3zu+Y3KnGNvBwKX+FNojlDApDAyiPne2P44M78EOLSrv6El/78ZKPBGFgXDS09eQ==</FRMT></TED>';

    const user = this.storeService.getActiveCompany();

    const dataHttp = {
      user: user.user,
      xml: xmlString
    };

    this.getHttpPDF417(dataHttp).subscribe((success: any) => {
      const imgBase64PDF417 = success.response.xml;
      this.commandLegal(data, imgBase64PDF417, ip, port).then((commandResolve: any) => {
        this.sockets.write(commandResolve, ip, port);
      });
    });
  }


  /**
   * @description consultar el encabezado para el documento y generar el pdf417
   * @param data
   * @param ip
   * @param port
   */
  printDocumentPdf417(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    const dataProcess = this.addNameProducts(data);
    this.getHttpHeaderDocument({order: dataProcess.id}).subscribe((success: any) => {
      if (success && success.resp && success.resp.length) {
        dataProcess.header = success.resp[0];
        this.printPdf417(dataProcess, ip, port);
      }
    });
  }

  /**
   * @description print command full
   * @param data
   * @param ip
   * @param port
   */
  printCommand(data: any, ip: string = '192.168.1.50', port: string = '9100') {
    const dataProcess = this.addNameProducts(data);
    const result: any = this.commandFull(dataProcess, ip, port);
    this.sockets.write(result, ip, port);
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
    let txt = '';
    txt += `TOTAL                           ${this.calculateSpace(data.value_total.toString().length, 8, data.value_total.toString(), 0, true)}${data.value_tip ? '\n' : ''}`;
    if (data.value_tip) {
      txt += `PROPINA                         ${this.calculateSpace(data.value_tip.toString().length, 8, data.value_tip.toString(), 0, true)}`;
    }

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
