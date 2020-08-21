import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BluetoothService } from 'src/app/services/bluetooth/bluetooth.service';
import { takeUntil } from 'rxjs/operators';
import { BluetoothDevice } from 'src/app/services/bluetooth/bluetooth-device.interface';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-bluetooth-manager',
  templateUrl: './bluetooth-manager.page.html',
  styleUrls: ['./bluetooth-manager.page.scss'],
})
export class BluetoothManagerPage implements OnInit, OnDestroy {
  
  public isBluetoothEnabled: boolean;
  public isDeviceConnected: boolean;
  public isSearching: boolean;
  public lastWeight: number; 

  private unsubscriber = new Subject();    

  constructor(
    private bluetoothService: BluetoothService,
    private platform: Platform
  ) {
    
  }

  ngOnInit() {
    this.bluetoothService.getBluetoothStatus().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (status: boolean) => {
      this.isBluetoothEnabled = status;
    });

    this.bluetoothService.getConnectionStatus().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (status: boolean) => {
      this.isDeviceConnected = status;
    });

    this.bluetoothService.getSearchingStatus().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (status: boolean) => {
      this.isSearching = status;
    });

    this.bluetoothService.getLastWeight().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (weight: number) => {
      this.lastWeight = weight;
    });
  }

  ngOnDestroy(){
    this.unsubscriber.complete();
  }

  /**
   * getPairedDevices
   */
  public getPairedDevices = () => {
    return this.bluetoothService.getPairedDevices();
  }

  /**
   * getAvailableDevices
   */
  public getAvailableDevices = () => {
    return this.bluetoothService.getAvailableDevices();
  }

  /**
   * scanDevices
   */
  public scanDevices = () => {
    return this.bluetoothService.scanDevices();
  }

  /**
   * connectDevice
   * @param device 
   */
  public connectDevice = (device: BluetoothDevice) => {
    this.bluetoothService.connectDevice(device);
  }

  /**
   * disconnectDevice
   * @param device 
   */
  public disconnectDevice = (device: BluetoothDevice) => {
    this.bluetoothService.disconnectDevice();    
  }

  /**
   * readData
   */
  public readData = () => {
    this.bluetoothService.getDeviceData();
  } 

  /**
   * enableBlueetooth
   */
  public enableBlueetooth = () => {
    this.bluetoothService.enableBlueetooth();
  }

}
