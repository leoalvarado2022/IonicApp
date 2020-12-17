import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { BluetoothDevice } from './bluetooth-device.interface';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BehaviorSubject, timer } from 'rxjs';
import { flatMap, take } from 'rxjs/operators';

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
      this.bluetoothSerial.isEnabled().then(() => {

        this.isBluetoothEnabled.next(true);

        this.checkConnection();
        this.listPairedDevices();
      }, () => {
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
    this.bluetoothSerial.isConnected().then(() => {
      this.isDeviceConnected.next(true);
    }, () => {
      this.isDeviceConnected.next(false);
    });
  }

  /**
   * listPairedDevices
   */
  private listPairedDevices = () => {
    this.bluetoothSerial.list().then(data => {
      this.pairedDevices.next(data);
    }, () => {
      this.pairedDevices.next([]);
    });
  }

  /**
   * connectDevice
   * @param device
   */
  public connectDevice = (device: BluetoothDevice) => {
    this.toastService.warningToast('Conectandose a dispositivo', 2000, 'bottom');

    this.bluetoothSerial.connect(device.address).subscribe(() => {
      this.toastService.successToast('Dispositivo Conectado', 2000, 'bottom');
    }, () => {
      this.toastService.errorToast('Ocurrio un error al conectar el dispositivo', 2000, 'bottom');
    });
  }

  /**
   * disconnectDevice
   */
  public disconnectDevice = () => {
    this.bluetoothSerial.disconnect().then(() => {
      this.listPairedDevices();
      this.toastService.warningToast('Dispositivo Desconectado', 2000, 'bottom');
    }, () => {
      this.listPairedDevices();
      this.toastService.errorToast('Ocurrio un error desconectando dispositivo', 2000, 'bottom');
    });
  }

  /**
   * scanDevices
   */
  public scanDevices = () => {
    this.isSearchingDevices.next(true);
    this.availableDevices.next([]);

    this.bluetoothSerial.discoverUnpaired().then((data: Array<BluetoothDevice>) => {
      this.availableDevices.next(data);
      this.isSearchingDevices.next(false);
    }, () => {
      this.availableDevices.next([]);
      this.isSearchingDevices.next(false);
    });
  }

  /**
   * processWeight
   * @param value
   */
  public processWeight = (value: string): number => {
    if (value) {
      const noSpaces = value.replace(/\s/g, '');
      const weightString = noSpaces.split(',')[2];
      const cleanWeight = weightString.replace('kg', '');

      return parseFloat(cleanWeight);
    }

    return 0;
  }

  /**
   * showFormattedWeight
   * @param value
   */
  public showFormattedWeight = (value: string): string => {
    return value.split(',')[2];
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

  /**
   * getLiveWeight
   */
  public getLiveWeight = () => {
    return timer(0, 500).pipe(
      flatMap( () => this.bluetoothSerial.subscribe('\n').pipe(take(1)))
    );
  }

}
