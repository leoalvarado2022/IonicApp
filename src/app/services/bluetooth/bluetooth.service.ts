import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { timer } from 'rxjs/internal/observable/timer';
import { BluetoothDevice } from './bluetooth-device.interface';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  private isBluetoothEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isDeviceConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isSearchingDevices: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private lastWeight: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  private pairedDevices: BehaviorSubject<Array<BluetoothDevice>> = new BehaviorSubject<Array<BluetoothDevice>>([]);
  private availableDevices: BehaviorSubject<Array<BluetoothDevice>> = new BehaviorSubject<Array<BluetoothDevice>>([]);

  constructor(
    private bluetoothSerial: BluetoothSerial,
    private toastService: ToastService
  ) {
    timer(0, 1000 * 5).subscribe(() => {
      this.bluetoothSerial.isEnabled().then(success => {
        console.log('isEnabled success', success);
        this.isBluetoothEnabled.next(success === 'OK');

        this.checkConnection();
        this.listPairedDevices();
      }, error => {
        console.log('isEnabled error', error);
        this.isBluetoothEnabled.next(false);
      });
    });
  }

  /**
   * getBluetoothStatus
   */
  public getBluetoothStatus = (): BehaviorSubject<boolean> => {
    return this.isBluetoothEnabled;
  }

  /**
   * getSearchingStatus
   */
  public getSearchingStatus = (): BehaviorSubject<boolean> => {
    return this.isSearchingDevices;
  }

  /**
   * getConnectionStatus
   */
  public getConnectionStatus = (): BehaviorSubject<boolean> => {
    return this.isDeviceConnected;
  }

  /**
   * getPairedDevices
   */
  public getPairedDevices(): BehaviorSubject<Array<BluetoothDevice>> {
    return this.pairedDevices;
  }

  /**
   * getAvailableDevices
   */
  public getAvailableDevices(): BehaviorSubject<Array<BluetoothDevice>> {
    return this.availableDevices;
  }

  /**
   * getLastWeight
   */
  public getLastWeight(): BehaviorSubject<number> {
    return this.lastWeight;
  }

  /**
   * checkConnection
   */
  private checkConnection = () => {
    this.bluetoothSerial.isConnected().then(data => {
      console.log('isConnected success', data);
      this.isDeviceConnected.next(data === 'OK');
    }, error => {
      console.log('isConnected error', error);
      this.isDeviceConnected.next(false);
    });
  }

  /**
   * listPairedDevices
   */
  private listPairedDevices = () => {
    this.bluetoothSerial.list().then(data => {
      console.log('list success', data);
      this.pairedDevices.next(data);
    }, error => {
      console.log('list error', error);
      this.pairedDevices.next([]);
    });
  }

  /**
   * connectDevice
   * @param device 
   */
  public connectDevice = (device: BluetoothDevice) => {
    this.bluetoothSerial.connect(device.address).subscribe(success => {
      console.log('connect success', success);
      this.toastService.successToast('Dispositivo Conectado');
    }, error => {
      console.log('connect error', error);
      this.toastService.errorToast('Ocurrio un error al conectar el dispositivo');
    });
  }

  /**
   * disconnectDevice
   */
  public disconnectDevice = () => {
    this.bluetoothSerial.disconnect().then(success => {
      console.log('disconnect success', success);
      this.listPairedDevices();
      this.toastService.warningToast('Dispositivo Desconectado');
    }, error => {
      console.log('disconnect error', error);
      this.listPairedDevices();
      this.toastService.errorToast('Ocurrio un error desconectando dispositivo');
    });
  }

  /**
   * scanDevices
   */
  public scanDevices = () => {
    this.isSearchingDevices.next(true);
    this.availableDevices.next([]);

    this.bluetoothSerial.discoverUnpaired().then((data: Array<BluetoothDevice>) => {
      console.log('discoverUnpaired success', data);
      this.availableDevices.next(data);
      this.isSearchingDevices.next(false);
    }, error => {
      console.log('discoverUnpaired error', error);
      this.availableDevices.next([]);
      this.isSearchingDevices.next(false);
    });
  }

  /**
   * getDeviceData
   */
  public getDeviceData = () => {
    let last = null;
    let counter = 0;
    let data: Array<any> = [];

    this.bluetoothSerial.subscribe('\n').subscribe(data => {
      if (last === null) {
        last = data;
      }

      if (last === data) {
        counter++;
      } else {
        counter = 0;
        last = null;
      }

      if (counter === 10) {
        this.lastWeight.next(this.processWeight(last));
        last = null;
        counter = 0;
      }
    });
  }

  /**
   * processWeight
   * @param value 
   */
  private processWeight = (value: string): number => {
    const noSpaces = value.replace(/\s/g, '');
    const weightString = noSpaces.split(",")[2];
    const cleanWeight = weightString.replace('kg', '');

    return parseFloat(cleanWeight);
  }

  /**
   * enableBlueetooth
   */
  public enableBlueetooth = () => {
    this.bluetoothSerial.enable().then((data) => {
      console.log('enable success', data);
    }, error => {
      console.log('enable error', error);
    });
  }

}
