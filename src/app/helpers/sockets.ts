import {Injectable} from '@angular/core';
import {ToastService} from '../shared/services/toast/toast.service';

declare var Socket: any;

@Injectable({
  providedIn: 'root'
})
export class Sockets {

  constructor(public toastServie: ToastService) {
  }

  /**
   * @description write socket
   * @param data
   * @param ip
   * @param port
   */
  write(data: BinaryType, ip: string = '192.168.1.50', port: string = '9100') {
      const socket = new Socket();
      // send byte code into the printer
      socket.open(ip, port, () => {
          socket.write(data, () => {
            socket.shutdownWrite();
          });
          // socket.close();
        }, (err) => {
        this.toastServie.errorToast('Error al Imprimir, revisar la configuración');
        }
      );
  }
}
