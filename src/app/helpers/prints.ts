import EscPosEncoder from 'esc-pos-encoder-ionic';
import {Sockets} from './sockets';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Prints {

  constructor(public sockets: Sockets) {
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
      .line(`IP: ${ip}, Port: ${port}`)
      .line(`Registro: ${data?.date_createdAt}`)
      .line(`Estimacion de despacho: ${data?.date_delivery}`)
      .line(`Comprador: ${data?.name_customer}`)
      .line(`Telefono: ${data?.phone_customer}`)
      .line(`Direccion: ${data?.address_customer}`)
      .newline()
      .line('----------------------------------------')
      .line('CANT. DETALLE                   PRECIO  ')
      .line('----------------------------------------')
      .line(`${data.products && data.products.length ? this.productsLine(data.products) : ''}`)
      .newline()
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
   * @description print command full
   * @param data
   * @param ip
   * @param port
   */
  printCommand(data: any, ip: string = '192.168.1.50', port: string = '9100') {

    data.products = data.products && data.products.length ? data.products.map((product: any) => {
      if (product.type === 'ITEM') {
        product.name = product.name_item;
      }

      if (product.type === 'TEXTO') {
        product.name = `${product.header_item ? product.header_item + '- ' : ''}${product.name_item}`;
      }

      return product;
    }) : [];

    const result = this.commandFull(data, ip, port);
    // this.sockets.write(result, '192.168.1.120', port);
    this.sockets.write(result, ip, port);
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

}
